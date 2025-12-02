import streamlit as st
import base64
import os
import requests
import json
import time
from PIL import Image

# --- Configuration ---
SLIDES_FOLDER_NAME = "HomeSlides" 
IMAGE_PATH = r"BITA_LOGO.png" 

# Define common logo sizes and placeholder URLs for key tools
LOGO_STYLE = "height: 35px; width: 35px; vertical-align: middle; margin-right: 8px; border-radius: 4px;"
ADF_LOGO_URL = "https://symbols.getvecta.com/stencil_27/36_data-factory.e36cbf28ed.png"
Azure_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png" 
Fabric_LOGO_URL = "https://davidalzamendi.com/wp-content/uploads/2023/05/Fabric_final_x256.png" 
PBI_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png" 
SQL_LOGO_URL = "https://symbols.getvecta.com/stencil_27/79_sql-database-generic.494ff6320e.png"

# --- WhatsApp Configuration for Header ---
WHATSAPP_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
WHATSAPP_LINK = "https://wa.me/918982296014"

# --- Dummy Functions/Session State (Retained for structure) ---
if 'insight_data' not in st.session_state: st.session_state.insight_data = None
if 'error_message' not in st.session_state: st.session_state.error_message = None


# --- Page Configuration ---
st.set_page_config(
    page_title="BITA CLOUD INFO TECH - Software Development & Product Development Services",
    page_icon="https://avatars.githubusercontent.com/u/155072885?v=4",
    layout="wide",
    initial_sidebar_state="collapsed" 
)

# --- CACHING FUNCTION TO PREVENT CONSTANT RERUNS ---
# This function performs disk access (os.path.exists and loading the image) 
# only once per session, which should stop the infinite refresh loop.
@st.cache_data
def display_slideshow(image_paths, section_id=None):
    """Caches the display logic for a set of images to prevent Streamlit reruns."""
    if section_id:
        st.markdown(f'<div id="{section_id}"></div>', unsafe_allow_html=True)
    
    # Filter for existing paths only once
    valid_paths = [path for path in image_paths if os.path.exists(path)]

    for image_path in valid_paths:
        # Load and display the image
        st.markdown('<div class="stretched-image-container">', unsafe_allow_html=True)
        st.image(image_path)
        st.markdown('</div>', unsafe_allow_html=True)
        st.markdown('<br>', unsafe_allow_html=True)


# --- Custom CSS Injection ---
st.markdown("""
    <style>
        /* --- General Theme and Layout --- */
        :root {
            --primary-color: #00e0ff;
            --secondary-color: #a020f0;
            --dark-bg: #000000;
            --card-bg: #1f2937;
            --whatsapp-green: #25d366;
            --whatsapp-hover-green: #128C7E;
        }
        
        .stApp {
            background-color: var(--dark-bg);
            color: #e5e7eb;
            font-family: 'Inter', sans-serif;
            padding-top: 80px !important; 
        }
        
        header { 
            visibility: hidden; 
            height: 0px !important;
            padding: 0 !important;
        } 
        
        .block-container {
            padding-top: 0 !important;
            padding-left: 1rem;
            padding-right: 1rem;
            margin-top: -1rem !important;
        }

        /* --- Image Stretching Isolation --- */
        .stretched-image-container {
            width: 100vw !important; 
            margin-left: calc(50% - 50vw) !important; 
        }
        
        .stretched-image-container .stImage img {
            width: 100% !important; 
            max-height: 80vh !important; 
            object-fit: contain; 
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
        .navbar a:hover:not(.whatsapp-link) { 
            color: var(--primary-color);
            background-color: rgba(0, 224, 255, 0.1);
        }
        /* WhatsApp Icon Styling */
        .whatsapp-link {
            background-color: var(--whatsapp-green) !important;
            padding: 6px 10px !important; 
            border-radius: 6px !important;
            border: none !important;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 30px; 
        }
        .whatsapp-icon {
            height: 25px; 
            width: 25px; 
            vertical-align: middle;
        }
        .logo-text {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--primary-color);
            text-shadow: 0 0 5px rgba(0, 224, 255, 0.5);
        }
        
        /* --- Hero and Contact Styling --- */
        .hero-title-main {
            font-size: clamp(1.25rem, 2.5vw, 2.25rem); 
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
        .contact-header {
            color: white; 
            font-size: 1.875rem; 
            font-weight: 700; 
            margin-bottom: 2rem; 
            border-left: 4px solid var(--primary-color); 
            padding-left: 1rem;
        }
        .contact-form-container {
            background-color: #1a1a1a; 
            padding: 2.5rem;
            border-radius: 12px;
            border: 1px solid #333;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            max-width: 800px;
            margin: 0 auto 3rem auto; 
        }
        /* Card and Button Styling (for the Home Page) */
        .service-card {
            background-color: var(--card-bg);
            padding: 1.5rem;
            border-radius: 0.75rem;
            border: 1px solid #374151;
            transition: all 0.3s ease;
            height: 100%;
        }
        .card-title {
            color: var(--primary-color);
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
        }
    </style>
    """, unsafe_allow_html=True)


# --- Fixed Navbar HTML Injection (Simplified Links to use Streamlit's default page handling) ---
try:
    with open(IMAGE_PATH, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode()
    DATA_URL = f"data:image/png;base64,{encoded_string}"

    # IMPORTANT: The link to the main page is now just '/' or '#anchor' for in-page navigation.
    # The link to 'Our Stars' will be automatically handled by Streamlit's page system.
    st.markdown(
        f"""
        <div class="navbar">
            <a href="/" class="logo-text"> 
                <img src="{DATA_URL}" alt="BITA Logo" style="height: 30px; margin-right: 5px; vertical-align: middle;"> 
            </a>
            <nav style="display: flex; gap: 30px; align-items: center;">
                <a href="{WHATSAPP_LINK}" target="_blank" class="whatsapp-link" title="Chat on WhatsApp">
                    <img src="{WHATSAPP_LOGO_URL}" alt="WhatsApp" class="whatsapp-icon">
                </a>
                <a href="#services">Platform</a>
                <a href="#Servicess">Services</a>
                <a href="ourstar">Our Stars</a> 
                <a href="#Aboutus">About us</a>
                <a href="#contact-us-section" style="border: 2px solid var(--primary-color); border-radius: 9999px; padding: 6px 16px;">CONTACT US</a>
            </nav>
        </div>
        """, unsafe_allow_html=True
    )

except FileNotFoundError:
    st.error(f"Error: Image file not found at the specified path: {IMAGE_PATH}")
    st.markdown(f'<a href="/" class="logo-text">&lt;BITA&gt;</a>', unsafe_allow_html=True)

except Exception as e:
    st.error(f"An unexpected error occurred while loading the image: {e}")
    st.markdown(f'<a href="/" class="logo-text">&lt;BITA&gt;</a>', unsafe_allow_html=True)

st.write('')
st.write('')
st.write('')

# --- HOME PAGE CONTENT (All content is here, no need for conditional checks) ---

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

# --- 2. Services Section (Platform) ---
st.markdown('<div id="services"></div>', unsafe_allow_html=True)
st.markdown("""
    <div>
        <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-bottom: 2rem; border-left: 4px solid #00e0ff; padding-left: 1rem;">
            Core Data & Analytics Platform
        </h2>
    </div>
""", unsafe_allow_html=True)

col1, col2, col3, col4, col5 = st.columns(5)

# Service Cards
with col5: st.markdown(f"""<div class="service-card"><p class="card-title"><img src="{ADF_LOGO_URL}" style="{LOGO_STYLE}">Azure Data Factory</p><p style="color: #9ca3af;">Orchestrating data pipelines for hybrid, scalable, and automated ETL/ELT.</p></div>""", unsafe_allow_html=True)
with col4: st.markdown(f"""<div class="service-card"><p class="card-title"><img src="{PBI_LOGO_URL}" style="{LOGO_STYLE}">Power BI</p><p style="color: #9ca3af;">Load, transform, visualize: SaaS and Fabric deliver secure cloud data insights.</p></div>""", unsafe_allow_html=True)
with col3: st.markdown(f"""<div class="service-card"><p class="card-title"><img src="{SQL_LOGO_URL}" style="{LOGO_STYLE}">SQL Server</p><p style="color: #9ca3af;">Reliable, high-performance database foundation for secure, complex applications.</p></div>""", unsafe_allow_html=True)
with col1: st.markdown(f"""<div class="service-card"><p class="card-title"><img src="{Azure_LOGO_URL}" style="{LOGO_STYLE}">Microsoft Azure</p><p style="color: #9ca3af;">Scalable, secure cloud solutions: migration, development, and managed infrastructure services.</p></div>""", unsafe_allow_html=True)
with col2: st.markdown(f"""<div class="service-card"><p class="card-title"><img src="{Fabric_LOGO_URL}" style="{LOGO_STYLE}">Microsoft Fabric</p><p style="color: #9ca3af;">Cloud, SaaS, and Fabric: Modern solutions for secure data development and scaling.</p></div>""", unsafe_allow_html=True)

# --- 3. AI Insight Generator (Placeholder/Inactive) ---
if st.session_state.error_message:
    st.error(st.session_state.error_message)

if st.session_state.insight_data:
    insight_data = st.session_state.insight_data
    # Display logic for insights...
    pass

# --- Services Page Slideshow (Now using cached function) ---
image_Servicespaths = [
    "ServicesSlides/1.png", "ServicesSlides/2.png", "ServicesSlides/3.png", "ServicesSlides/4.png", 
    "ServicesSlides/5.png", "ServicesSlides/6.png", "ServicesSlides/7.png", "ServicesSlides/8.png", 
    "ServicesSlides/9.png", 
]

display_slideshow(image_Servicespaths, section_id="Servicess")

# --- Home Slideshow (About Us - Now using cached function) ---
image_paths = [
    "HomeSlides/1.png", "HomeSlides/2.png", "HomeSlides/3.png", "HomeSlides/4.png", 
    "HomeSlides/5.png", "HomeSlides/6.png", "HomeSlides/7.png", "HomeSlides/8.png", 
    "HomeSlides/9.png", "HomeSlides/10.png","HomeSlides/11.png",
]

display_slideshow(image_paths, section_id="Aboutus")


# --- 5. Contact Us Section (Dark Box Form) ---
st.markdown('<br><br>', unsafe_allow_html=True) 
st.markdown('<div id="contact-us-section"></div>', unsafe_allow_html=True)

# --- Contact Us Content ---
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

# Create separation
st.markdown('<br><br>', unsafe_allow_html=True) 

# 1. Contact information 
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

# 2. Copyright line
st.markdown(
    "<p style='text-align: center; color: #6b7280; font-size: 0.875rem; background-color: #000; padding-bottom: 1rem; margin: 0;'>&copy; 2025 BITA CLOUD INFO TECH PVT LTD. All rights reserved.</p>",
    unsafe_allow_html=True
)

st.markdown("---")
# Cleaned up the extraneous user comment from the end of the file.