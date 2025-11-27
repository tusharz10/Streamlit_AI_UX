import streamlit as st
import base64

# --- Page Config ---
st.set_page_config(
    page_title="SiyaRam BOT App",
    page_icon="https://d502jbuhuh9wk.cloudfront.net/orgData/65fa4d11add037075b78a0e6/pages/assets/images/1fM43untitleddesign12.png",
    layout="wide"
)

# --- Load Local Background Image ---
def get_base64(file):
    with open(file, "rb") as f:
        data = f.read()
    return base64.b64encode(data).decode()

bg_image = get_base64("banner.gif")

# --- Custom CSS ---
st.markdown(f"""
<style>
/* Make body scrollable and background scroll with page */
body {{
    margin: 0;
    padding: 0;
    height: 200vh; /* page tall enough to scroll */
}}

/* Background GIF scrolling with page */
[data-testid="stAppViewContainer"] {{
    background: url("data:image/gif;base64,{bg_image}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
}}

/* Hide Streamlit’s default menu and footer */
#MainMenu, footer, header {{
    visibility: hidden;
}}

/* Glass navbar/header */
.navbar {{
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 1200px;
    background: rgba(128, 128, 128, 0.25); /* semi-transparent grey */
    backdrop-filter: blur(15px); /* frosted glass effect */
    border-radius: 20px;
    padding: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    z-index: 9999;
}}

/* Logo styling */
.navbar img {{
    height: 40px;
}}

/* Centered Menu styling with decreased white glow */
.menu {{
    display: flex;
    gap: 40px;
    font-size: 16px;
    font-weight: bold;
    color: white !important;
    text-shadow: 0 0 2px rgba(255,255,255,0.5), 0 0 5px rgba(255,255,255,0.3); /* decreased glow */
    flex-wrap: nowrap;
    justify-content: center;
    white-space: nowrap;
}}

.menu a {{
    text-decoration: none;
    color: white !important;
    text-shadow: 0 0 2px rgba(255,255,255,0.5), 0 0 5px rgba(255,255,255,0.3); /* decreased glow */
    transition: all 0.3s ease-in-out;
    transform: scale(1);
}}

.menu a:hover {{
    color: #b2a0ff;
    text-shadow: 0 0 6px #b2a0ff, 0 0 12px #b2a0ff;
    transform: scale(1.15);
}}

/* Glassmorphic center banner */
.glass-banner {{
    background: rgba(80, 80, 80, 0.25);
    border-radius: 20px;
    padding: 40px;
    width: 500px;
    margin: 350px auto;
    backdrop-filter: blur(25px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.25);
    text-align: center;
    color: white;
    font-family: 'Segoe UI', sans-serif;
}}

/* Glass effect for heading inside the banner */
.glass-heading {{
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 10px 20px;
    border-radius: 15px;
    color: white;
    font-size: 2.2rem;
    font-weight: 700;
}}

/* Buttons */
.stButton>button {{
    background: linear-gradient(90deg, #4a3aff, #7b5eff);
    color: white;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    transition: 0.3s ease;
}}

.stButton>button:hover {{
    transform: scale(1.05);
    background: linear-gradient(90deg, #6a5cff, #9c87ff);
}}
</style>

<!-- Glass Navbar HTML -->
<div class="navbar">
    <img src="https://d502jbuhuh9wk.cloudfront.net/orgData/65fa4d11add037075b78a0e6/pages/assets/images/1fM43untitleddesign12.png" alt="Logo">
    <div class="menu">
        <a href="https://www.learnsupereasy.com/s/store">Courses</a>
        <a href="https://www.learnsupereasy.com/blog">Blog</a>
        <a href="https://www.learnsupereasy.com/contactus">Contact Us</a>
        <a href="https://www.learnsupereasy.com/sessions#nav_bar">Webinars</a>
        <a href="https://www.learnsupereasy.com/products#nav_bar">Digital Products</a>
        <a href="https://www.learnsupereasy.com/membership#nav_bar">Membership</a>
    </div>
</div>
""", unsafe_allow_html=True)

# --- Glass Banner UI ---
st.markdown("""
<div class="glass-banner">
    <h1 class="glass-heading">Welcome, <span style="color:#b2a0ff;">Tushar Kashyap</span></h1>
    <p>Your galaxy-powered UI is ready</p>
    <p>Let’s get started with your transparent Streamlit dashboard.</p>
</div>
""", unsafe_allow_html=True)

# --- Center Button ---
st.markdown("<div style='text-align:center; margin-top:20px;'>", unsafe_allow_html=True)
if st.button("🚀 Get Started"):
    st.success("✅ Welcome, your transparent UI is live!")
st.markdown("</div>", unsafe_allow_html=True)
