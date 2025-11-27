import streamlit as st
import requests
import json
import time
from PIL import Image
import os
from typing import List
import base64

# --- Configuration ---
SLIDES_FOLDER_NAME = "HomeSlides" 
IMAGE_PATH = r"BITA_LOGO.png" # Assuming BITA_LOGO.png is in the same directory as this script

# Define common logo sizes and placeholder URLs for key tools
LOGO_STYLE = "height: 35px; width: 35px; vertical-align: middle; margin-right: 8px; border-radius: 4px;"
ADF_LOGO_URL = "https://symbols.getvecta.com/stencil_27/36_data-factory.e36cbf28ed.png"
Azure_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png" 
Fabric_LOGO_URL = "https://davidalzamendi.com/wp-content/uploads/2023/05/Fabric_final_x256.png" 
PBI_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png" 
SQL_LOGO_URL = "https://symbols.getvecta.com/stencil_27/79_sql-database-generic.494ff6320e.png"


# --- Utility Functions ---

def load_first_image(folder_path: str) -> tuple[Image.Image, str] | tuple[None, None]:
    # """Loads the first image found in the specified local folder and returns the image object and its filename."""
    
    if not os.path.isdir(folder_path):
        # Fail silently here if folder doesn't exist to prioritize main app loading
        return None, None

    try:
        all_files = os.listdir(folder_path)
        
        image_filenames = sorted([
            f for f in all_files 
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))
        ])

        if not image_filenames:
            return None, None

        first_filename = image_filenames[0]
        file_path = os.path.join(folder_path, first_filename)
        image = Image.open(file_path)
        
        return image, first_filename
    
    except Exception:
        return None, None


# Utility function for exponential backoff fetch
def exponential_backoff_request(url, payload, max_retries=5):
    headers = {'Content-Type': 'application/json'}
    for attempt in range(max_retries):
        try:
            response = requests.post(url, headers=headers, data=json.dumps(payload))
            if response.status_code == 429 and attempt < max_retries - 1:
                delay = (2 ** attempt) + (time.time() % 1)
                time.sleep(delay)
                continue
            response.raise_for_status()
            return response
        except requests.exceptions.RequestException as e:
            if attempt < max_retries - 1:
                delay = (2 ** attempt) + (time.time() % 1)
                time.sleep(delay)
                continue
            raise e
    raise requests.exceptions.RequestException("API request failed after multiple retries.")

# --- Page Configuration ---
st.set_page_config(
    page_title="BITA CLOUD INFO TECH - Software Development & Product Development Services",
    page_icon="https://avatars.githubusercontent.com/u/155072885?v=4",
    layout="wide",
    # Sidebar control added here
    initial_sidebar_state="collapsed" 
)


# --- Custom CSS Injection ---
st.markdown("""
    <style>
        /* --- General Theme and Layout --- */
        :root {
            --primary-color: #00e0ff;
            --secondary-color: #a020f0;
            --dark-bg: #000000;
            --card-bg: #1f2937;
        }
        
        .stApp {
            background-color: var(--dark-bg);
            color: #e5e7eb;
            font-family: 'Inter', sans-serif;
            padding-top: 80px !important; /* Space for fixed navbar */
        }
        
        /* Hide Streamlit header (but keep footer visible by default) */
        header { 
            visibility: hidden; 
            height: 0px !important;
            padding: 0 !important;
        } 
        
        /* Navbar, Hero, Services, Insights use this layout (centered) */
        .block-container {
            padding-top: 0 !important;
            padding-left: 1rem;
            padding-right: 1rem;
            margin-top: -1rem !important;
        }

        /* --- Image Stretching Isolation --- */
        /* Targets the container where the stretched image is placed */
        .stretched-image-container {
            /* Override the default .block-container padding ONLY for this specific div */
            width: 100vw !important; /* Force width to full viewport */
            margin-left: calc(50% - 50vw) !important; /* Center the full-width block */
        }
        
        /* Targets the image element within the unique container */
        .stretched-image-container .stImage img {
            width: 100% !important;      /* Fill the 100vw container */
            max-height: 80vh !important; /* Limit height to prevent overlap/overflow */
            object-fit: contain;         /* Maintain aspect ratio */
            margin: 0 !important;
        }

        /* --- Navbar Styling --- */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #000000 !important;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 1px 10px rgba(0, 224, 255, 0.1);
            z-index: 9999;
            height: 60px;
        }
        .navbar a {
            color: #ffffff !important;
            text-decoration: none;
            padding: 8px 12px;
            transition: all 0.3s ease;
            font-weight: 600;
            border-radius: 6px;
        }
        .navbar a:hover {
            color: var(--primary-color);
            background-color: rgba(0, 224, 255, 0.1);
        }
        .logo-text {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--primary-color);
            text-shadow: 0 0 5px rgba(0, 224, 255, 0.5);
        }

        /* --- Hero and General Content Styling --- */
        .hero-title-main {
            font-size: clamp(2.5rem, 5vw, 4.5rem);
            line-height: 1.1;
            font-weight: 800;
            color: white;
            padding-top: 2rem;
            margin-bottom: 1.5rem;
        }
        .keyword-primary {
            color: var(--primary-color);
            text-shadow: 0 0 10px rgba(0, 224, 255, 0.8), 0 0 20px rgba(0, 224, 255, 0.4);
        }
        .keyword-secondary {
            color: var(--secondary-color);
            text-shadow: 0 0 10px rgba(160, 32, 240, 0.8), 0 0 20px rgba(160, 32, 240, 0.4);
        }
        .service-card {
            background-color: var(--card-bg);
            padding: 1.5rem;
            border-radius: 0.75rem;
            border: 1px solid #374151;
            transition: all 0.3s ease;
            height: 100%;
        }
        .service-card:hover {
            box-shadow: 0 0 15px rgba(0, 224, 255, 0.2);
            border-color: var(--primary-color);
        }
        .card-title {
            color: var(--primary-color);
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
        }
        .insight-header {
             border-left: 4px solid var(--secondary-color);
             padding-left: 1rem;
             color: white;
             font-size: 1.875rem;
             font-weight: 700;
        }
        .insight-output {
            background-color: var(--card-bg);
            padding: 1.5rem;
            border-radius: 0.75rem;
            border: 1px solid #374151;
            margin-top: 2.5rem;
        }
        .stTextArea > label {
            color: var(--primary-color);
            font-weight: 600;
        }
        div.stButton > button {
            background-color: #008CBA;
            color: white;
            font-weight: bold;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            border: none;
            box-shadow: 0 4px 15px rgba(0, 224, 255, 0.3);
            transition: all 0.3s ease;
        }
        div.stButton > button:hover {
            background-color: #00aaff;
            box-shadow: 0 4px 20px rgba(0, 224, 255, 0.5);
        }
    </style>
    """, unsafe_allow_html=True)


# --- Fixed Navbar HTML Injection ---
try:
    # --- 2. Read and encode the image file ---
    with open(IMAGE_PATH, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode()

    # --- 3. Construct the Base64 Data URL ---
    DATA_URL = f"data:image/png;base64,{encoded_string}"

    # --- 4. Embed the Data URL into the HTML ---
    st.markdown(
        f"""
        <div class="navbar">
            <a href="./" class="logo-text">
                <img src="{DATA_URL}" alt="BITA Logo" style="height: 30px; margin-right: 5px; vertical-align: middle;"> 
            </a>
            <nav style="display: flex; gap: 30px;">
                <a href="#services">Platform</a>
                <a href="#Servicess">Services</a>
                <a href="#Aboutus">About us</a>
                <a href="#contact-us-section" style="border: 2px solid var(--primary-color); border-radius: 9999px; padding: 6px 16px;">CONTACT US</a>
            </nav>
        </div>
        """, unsafe_allow_html=True
    )

except FileNotFoundError:
    st.error(f"Error: Image file not found at the specified path: {IMAGE_PATH}")
    st.markdown(f'<a href="./" class="logo-text">&lt;BITA&gt;</a>', unsafe_allow_html=True)

except Exception as e:
    st.error(f"An unexpected error occurred while loading the image: {e}")
    st.markdown(f'<a href="./" class="logo-text">&lt;BITA&gt;</a>', unsafe_allow_html=True)

# --- Session State Initialization ---
if 'insight_data' not in st.session_state:
    st.session_state.insight_data = None
if 'error_message' not in st.session_state:
    st.session_state.error_message = None

st.write('')
st.write('')
st.write('')

# --- 1. Hero Section ---
st.markdown("""
    <div style="max-width: 1280px; margin: 0 auto;">
        <h1 class="hero-title-main">
            Building the Future with 
            <span class="keyword-primary">Data</span>:
            <br>
            Accelerate Data 
            <span class="keyword-secondary">Visualization</span> 
            and Strategic Insights
        </h1>
    </div>
""", unsafe_allow_html=True)

# --- 2. Services Section ---
st.markdown('<div id="services"></div>', unsafe_allow_html=True)
st.markdown("""
    <div>
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-bottom: 2rem; border-left: 4px solid #00e0ff; padding-left: 1rem;">
            Core Data & Analytics Platform
        </h2>
    </div>
""", unsafe_allow_html=True)

col1, col2, col3, col4, col5 = st.columns(5)

# Service Cards (simplified to save space)
with col5: st.markdown(f"""<div class="service-card"><p class="card-title"><img src="{ADF_LOGO_URL}" style="{LOGO_STYLE}">Azure Data Factory</p><p style="color: #9ca3af;">Orchestrating data pipelines for hybrid, scalable, and automated ETL/ELT.</p></div>""", unsafe_allow_html=True)
with col4: st.markdown(f"""<div class="service-card"><p class="card-title"><img src="{PBI_LOGO_URL}" style="{LOGO_STYLE}">Power BI</p><p style="color: #9ca3af;">Load, transform, visualize: SaaS and Fabric deliver secure cloud data insights.</p></div>""", unsafe_allow_html=True)
with col3: st.markdown(f"""<div class="service-card"><p class="card-title"><img src="{SQL_LOGO_URL}" style="{LOGO_STYLE}">SQL Server</p><p style="color: #9ca3af;">Reliable, high-performance database foundation for secure, complex applications.</p></div>""", unsafe_allow_html=True)
with col1: st.markdown(f"""<div class="service-card"><p class="card-title"><img src="{Azure_LOGO_URL}" style="{LOGO_STYLE}">Microsoft Azure</p><p style="color: #9ca3af;">Scalable, secure cloud solutions: migration, development, and managed infrastructure services.</p></div>""", unsafe_allow_html=True)
with col2: st.markdown(f"""<div class="service-card"><p class="card-title"><img src="{Fabric_LOGO_URL}" style="{LOGO_STYLE}">Microsoft Fabric</p><p style="color: #9ca3af;">Cloud, SaaS, and Fabric: Modern solutions for secure data development and scaling.</p></div>""", unsafe_allow_html=True)

# --- 3. AI Insight Generator (Gemini Feature - Disabled/Commented out in original) ---
# Keeping the output logic just in case, but skipping the input/button to match the original
if st.session_state.error_message:
    st.error(st.session_state.error_message)

if st.session_state.insight_data:
    insight_data = st.session_state.insight_data
    
    st.markdown('<div class="insight-output">', unsafe_allow_html=True)
    st.markdown('<h3 style="color: #00e0ff; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">Generated CDO Analysis:</h3>', unsafe_allow_html=True)
    st.markdown(f'<p style="color: #e5e7eb; line-height: 1.6;">{insight_data["text"]}</p>', unsafe_allow_html=True)

    st.markdown('<h4 style="color: #9ca3af; font-size: 1.125rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem;">Sources:</h4>', unsafe_allow_html=True)
    
    if insight_data["sources"]:
        source_html = "<ul>"
        for source in insight_data["sources"]:
            source_html += f'<li><a href="{source["uri"]}" target="_blank" style="color: #38bdf8; text-decoration: none;">{source["title"]}</a></li>'
        source_html += "</ul>"
        st.markdown(source_html, unsafe_allow_html=True)
    else:
        st.markdown('<p style="color: #9ca3af;">No specific web sources cited for this high-level analysis.</p>', unsafe_allow_html=True)
        
    st.markdown('</div>', unsafe_allow_html=True)

########################    
########################    
# Services Page
########################    
########################    

st.markdown('<div id="Servicess"></div>', unsafe_allow_html=True)

image_Servicespaths = [
    "ServicesSlides/1.png", "ServicesSlides/2.png", "ServicesSlides/3.png", "ServicesSlides/4.png", 
    "ServicesSlides/5.png", "ServicesSlides/6.png", "ServicesSlides/7.png", "ServicesSlides/8.png", 
    "ServicesSlides/9.png", 
]

# --- 2. The Looping Structure ---
for image_path in image_Servicespaths:
    if image_path: 
        filename = image_path.split('/')[-1]

        # 4. Start the unique container with the stretching class
        st.markdown('<div class="stretched-image-container">', unsafe_allow_html=True)
        
        # 5. Display the image inside the container
        st.image(
            image_path
        )
        
        # 6. Close the container
        st.markdown('</div>', unsafe_allow_html=True)
        
        # 7. Optional: Display info outside the stretched container
        st.markdown(
            f"""
            <div style='background: rgba(0, 0, 0, 0.5); color: #9ca3af; padding: 5px 10px; 
                         border-radius: 5px; font-size: 0.8em; text-align: center; margin-top: 10px;'>
            </div>
            """,
            unsafe_allow_html=True
        )
        
        # Add a little space between images for separation in the slideshow list
        st.markdown('<br>', unsafe_allow_html=True)

# --- 8. Fallback for an Empty List ---
if not image_Servicespaths:
    st.markdown('<div style="height: 50px;"></div>', unsafe_allow_html=True)
    st.info("No primary snapshot image paths defined in the list.")



########################    
########################    
########################    
    
#################################################
# --- 4. IMAGE VIEWER SECTION (STRETCHED) ---
#################################################

# 1. Define the list of image paths for the slideshow
image_paths = [
    "HomeSlides/1.png", "HomeSlides/2.png", "HomeSlides/3.png", "HomeSlides/4.png", 
    "HomeSlides/5.png", "HomeSlides/6.png", "HomeSlides/7.png", "HomeSlides/8.png", 
    "HomeSlides/9.png", "HomeSlides/10.png","HomeSlides/11.png",
]

st.markdown('<div id="Aboutus"></div>', unsafe_allow_html=True)

# --- 2. The Looping Structure ---
for image_path in image_paths:
    if image_path: 
        filename = image_path.split('/')[-1]

        # 4. Start the unique container with the stretching class
        st.markdown('<div class="stretched-image-container">', unsafe_allow_html=True)
        
        # 5. Display the image inside the container
        st.image(
            image_path
        )
        
        # 6. Close the container
        st.markdown('</div>', unsafe_allow_html=True)
        
        # 7. Optional: Display info outside the stretched container
        st.markdown(
            f"""
            <div style='background: rgba(0, 0, 0, 0.5); color: #9ca3af; padding: 5px 10px; 
                         border-radius: 5px; font-size: 0.8em; text-align: center; margin-top: 10px;'>
            </div>
            """,
            unsafe_allow_html=True
        )
        
        # Add a little space between images for separation in the slideshow list
        st.markdown('<br>', unsafe_allow_html=True)

# --- 8. Fallback for an Empty List ---
if not image_paths:
    st.markdown('<div style="height: 50px;"></div>', unsafe_allow_html=True)
    st.info("No primary snapshot image paths defined in the list.")


# --- 5. NEW: Contact Us Section (Anchor Target) ---
st.markdown('<br><br>', unsafe_allow_html=True) 
st.markdown('<div id="contact-us-section"></div>', unsafe_allow_html=True) # Anchor ID for Navbar link

PRIMARY_COLOR = "#00e0ff"


# Apply minimal CSS for colors/styles if needed (or keep it simple)
st.markdown(f"""
    <style>
        .stApp {{
            background-color: #000000;
            color: #e5e7eb;
            font-family: 'Inter', sans-serif;
        }}
        .contact-header {{
            color: white; 
            font-size: 1.875rem; 
            font-weight: 700; 
            margin-bottom: 2rem; 
            border-left: 4px solid {PRIMARY_COLOR}; 
            padding-left: 1rem;
        }}
    </style>
""", unsafe_allow_html=True)


# --- Contact Us Content ---
# st.markdown('<br><br><br>', unsafe_allow_html=True) # Space to clear the fixed navbar

st.markdown("""
    <div style="padding: 0 1rem;">
        <h2 class="contact-header">
            🤝 Get in Touch
        </h2>
        <p style="color: #9ca3af; margin-bottom: 2rem; max-width: 600px;">
            Ready to start a project or need expert advice on your data architecture? Fill out the form below, and our team will connect with you shortly.
        </p>
    </div>
""", unsafe_allow_html=True)

# Create a form container
with st.form("contact_form", clear_on_submit=True):
    # Using columns for better layout of input fields
    col_name, col_email = st.columns(2)
    
    with col_name:
        name = st.text_input("Your Name", placeholder="John Doe")
    
    with col_email:
        email = st.text_input("Your Email", placeholder="john.doe@company.com")

    company = st.text_input("Company Name (Optional)", placeholder="BITA CLOUD INFO TECH")
    
    message = st.text_area("Your Message / Project Brief", 
                           placeholder="Tell us about your project, data challenges, or strategic goals...", 
                           height=150)
    
    submitted = st.form_submit_button("Send Message")

    if submitted:
        if not name or not email or not message:
            st.error("Please fill in your Name, Email, and Message.")
        else:
            # Simulate success/backend submission
            st.success(f"Thank you, **{name.strip()}**! Your message has been received. We'll be in touch soon.")
            
# Display contact info below the form
# st.markdown(
#     """
#     <div style="padding: 1rem; margin-top: 2rem; border-top: 1px solid #1f2937; color: #9ca3af;">
#         <h4 style="color: white; margin-bottom: 10px;">Alternatively, connect with us directly:</h4>
#         <p>📧 **Email:** <a href="mailto:contact@bitaclouddatatech.com" style="color: #38bdf8; text-decoration: none;">contact@bitaclouddatatech.com</a></p>
#         <p>🏢 **Address:** [Your Company Address Line 1, City, State, ZIP]</p>
#     </div>
#     """, unsafe_allow_html=True
# )

# st.markdown('<br><br>', unsafe_allow_html=True)
# st.markdown("""
#     <footer style="background-color: #000; border-top: 1px solid #1f2937; padding: 2rem; text-align: center; color: #6b7280; font-size: 0.875rem;">
#         &copy; 2025 BITA CLOUD INFO TECH PVT LTD. All rights reserved.
#     </footer>
# """, unsafe_allow_html=True)


# Create separation
st.markdown('<br><br>', unsafe_allow_html=True) 

# 1. Use st.markdown for the centered contact information 
# (This is simpler than injecting a whole HTML footer block)
st.markdown(
    """
    <div style="text-align: center; color: #e5e7eb; padding: 1rem 0; background-color: #000; border-top: 1px solid #1f2937;">
        <strong style="color: #00e0ff;">Contact Details:</strong><br>
        Email: <a href="mailto:contact@bitacloudinfotech.com" style="color: #6b7280; text-decoration: none;">contact@bitacloudinfotech.com</a><br>
        Phone: <a href="tel:+918982296014" style="color: #6b7280; text-decoration: none;">+91 89822 96014</a><br>
        Address: 2-9 Houding board neva road bundi rajasthan
    </div>
    """,
    unsafe_allow_html=True
)

# 2. Add the Copyright line using simple markdown or st.write
st.markdown(
    "<p style='text-align: center; color: #6b7280; font-size: 0.875rem; background-color: #000; padding-bottom: 1rem; margin: 0;'>&copy; 2025 BITA CLOUD INFO TECH PVT LTD. All rights reserved.</p>",
    unsafe_allow_html=True
)


# 3. Floating WhatsApp Widget (using a reliable icon/emoji)
# We place the CSS and the link in one final block.

whatsapp_html = """
    <style>
    /* CSS for the Floating WhatsApp Button */
    .whatsapp-float {
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 40px;
        background-color: #25d366; 
        color: #FFF;
        border-radius: 50px;
        text-align: center;
        font-size: 30px;
        box-shadow: 2px 2px 3px #999;
        z-index: 10000; 
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        line-height: 60px; /* Center icon vertically */
    }
    .whatsapp-float:hover {
        background-color: #128C7E;
    }
    </style>

    <a href="https://wa.me/918982296014" class="whatsapp-float" target="_blank">
        &#x1F4F1; </a>
"""
st.markdown(whatsapp_html, unsafe_allow_html=True)

st.markdown("""
    <footer style="background-color: #000; border-top: 1px solid #1f2937; padding: 2rem; text-align: center; color: #6b7280; font-size: 0.875rem;">
    </footer>
""", unsafe_allow_html=True)

st.markdown("---") 

# 3. Floating WhatsApp Widget 
whatsapp_html = """
    <style>
    /* CSS for the Floating WhatsApp Button */
    .whatsapp-float {
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 40px;
        background-color: #25d366; 
        color: #FFF;
        border-radius: 50px;
        text-align: center;
        font-size: 30px;
        box-shadow: 2px 2px 3px #999;
        z-index: 10000; 
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        line-height: 60px; /* Center icon vertically */
    }
    .whatsapp-float:hover {
        background-color: #128C7E;
    }
    </style>

    <a href="https://wa.me/918982296014" class="whatsapp-float" target="_blank">
        &#x1F4F1; </a>
"""
st.markdown(whatsapp_html, unsafe_allow_html=True)

# st.markdown("""
#     <footer style="background-color: #000; border-top: 1px solid #1f2937; padding: 2rem; text-align: center; color: #6b7280; font-size: 0.875rem;">
#     </footer>
# """, unsafe_allow_html=True)
