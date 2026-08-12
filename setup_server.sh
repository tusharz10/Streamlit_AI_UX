#!/usr/bin/env bash
# ==============================================================================
# One-Click Production Deployment & Auto-Start Script for Streamlit_AI_UX / bita_react
# ==============================================================================

set -e

echo "🚀 [1/6] Updating System & Installing Essentials (Nginx, Git, Curl, Node.js)..."
sudo apt-get update -y
sudo apt-get install -y nginx git curl build-essential

# Install Node.js 20 LTS if node is not found or outdated
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js 20.x..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "✅ Node Version: $(node -v)"
echo "✅ NPM Version: $(npm -v)"

# Set working directory
APP_DIR="$HOME/Streamlit_AI_UX"

if [ ! -d "$APP_DIR" ]; then
    echo "📥 [2/6] Cloning repository into $APP_DIR..."
    git clone https://github.com/tusharz10/Streamlit_AI_UX.git "$APP_DIR"
    cd "$APP_DIR"
else
    echo "🔄 [2/6] Updating repository in $APP_DIR..."
    cd "$APP_DIR"
    git fetch --all
    git reset --hard origin/main
    git pull origin main
fi

# Build Frontend Bundle
echo "🛠️ [3/6] Installing dependencies and building production bundle..."
if [ -d "$APP_DIR/bita_react" ]; then
    cd "$APP_DIR/bita_react"
elif [ -d "$APP_DIR/client" ]; then
    cd "$APP_DIR/client"
fi

npm install
npm run build

# Deploy Built Assets to /var/www/bita_react
echo "📂 [4/6] Deploying static bundle to /var/www/bita_react..."
sudo mkdir -p /var/www/bita_react
sudo rm -rf /var/www/bita_react_temp
sudo cp -r dist /var/www/bita_react_temp
sudo rm -rf /var/www/bita_react/*
sudo cp -r /var/www/bita_react_temp/* /var/www/bita_react/
sudo rm -rf /var/www/bita_react_temp
sudo chown -R www-data:www-data /var/www/bita_react
sudo chmod -R 755 /var/www/bita_react

# Configure Nginx for React SPA (Direct URLs and Caching)
echo "⚙️ [5/6] Configuring Nginx web server..."
sudo bash -c 'cat > /etc/nginx/sites-available/bita_react << "EOF"
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    root /var/www/bita_react;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    # Caching for assets
    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg|webp)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public, max-age=15552000, immutable";
    }

    # SPA routing fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF'

sudo ln -sf /etc/nginx/sites-available/bita_react /etc/nginx/sites-enabled/bita_react
sudo rm -f /etc/nginx/sites-enabled/default

# Enable Nginx on Boot & Restart Service
echo "⚡ [6/6] Enabling Auto-Start on System Boot & Starting Nginx..."
sudo systemctl enable nginx
sudo nginx -t
sudo systemctl restart nginx

# Verify Health
sleep 2
HTTP_STATUS=$(curl -o /dev/null -s -w "%{http_code}" http://localhost || echo "000")
SERVER_IP=$(curl -s https://api.ipify.org || echo "your-server-ip")

if [ "$HTTP_STATUS" -eq 200 ] || [ "$HTTP_STATUS" -eq 301 ] || [ "$HTTP_STATUS" -eq 302 ]; then
    echo "================================================================"
    echo "🎉 CONGRATULATIONS! YOUR WEBSITE IS NOW LIVE & HEALTHY!"
    echo "🌐 URL: http://$SERVER_IP"
    echo "⚡ Auto-Start on Reboot: ENABLED (systemctl enabled)"
    echo "================================================================"
else
    echo "⚠️ Warning: HTTP status was $HTTP_STATUS. Please check Nginx logs: sudo tail -n 20 /var/log/nginx/error.log"
fi
