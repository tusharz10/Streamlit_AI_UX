# pages/ourstar.py

import streamlit as st
import os
import base64

# --- Configuration for this page ---
OUR_STARS_FOLDER = "OurStar" 
IMAGE_PATH = r"BITA_LOGO.png" 

# --- WhatsApp Configuration for Header (Must be repeated here if custom header is needed) ---
WHATSAPP_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
WHATSAPP_LINK = "https://wa.me/918982296014"


# --- Page Configuration (Repeated for consistency) ---
# --- Page Configuration ---
st.set_page_config(
    page_title="BITA CLOUD INFO TECH - Our Stars",
    page_icon="https://avatars.githubusercontent.com/u/155072885?v=4",
    layout="wide",
    initial_sidebar_state="collapsed" 
)

# --- Custom CSS Injection (To maintain header styling) ---
# NOTE: To ensure the header displays correctly on this page, the CSS must be included here too.

st.markdown("""
    <style>
        /* --- General Theme and Layout --- */
        :root {
            --primary-color: #00e0ff;
            --secondary-color: #a020f0;
            --dark-bg: #000000;
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
    </style>
    """, unsafe_allow_html=True)


# --- Fixed Navbar HTML Injection (Header content is identical to app.py) ---
try:
    with open(IMAGE_PATH, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode()
    DATA_URL = f"data:image/png;base64,{encoded_string}"

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
                <a href="/">Platform</a>
                <a href="/">Services</a>
                <a href="ourstar">Our Stars</a> 
                <a href="/">About us</a>
                <a href="/">CONTACT US</a>
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

# # --- OUR STARS PAGE CONTENT ---
# st.markdown("""
#     <div style="padding: 0 1rem; margin-top: 3rem;">
#         <h2 style="color: white; font-size: 1.875rem; font-weight: 700; margin-bottom: 2rem; border-left: 4px solid var(--secondary-color); padding-left: 1rem;">
#             ⭐ Our Stars: Success Stories and Achievements
#         </h2>
#     </div>
# """, unsafe_allow_html=True)

# List images from the OurStar folder
try:
    image_our_stars_paths = [os.path.join(OUR_STARS_FOLDER, f) for f in sorted(os.listdir(OUR_STARS_FOLDER)) 
                            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]

    if image_our_stars_paths:
        for image_path in image_our_stars_paths:
            if os.path.exists(image_path):
                st.markdown('<div class="stretched-image-container">', unsafe_allow_html=True)
                st.image(image_path)
                st.markdown('</div>', unsafe_allow_html=True)
                # st.markdown('<br>', unsafe_allow_html=True)
    else:
        st.markdown('<div style="height: 50px;"></div>', unsafe_allow_html=True)
        st.warning(f"Warning: No images found in the '{OUR_STARS_FOLDER}' folder for the Our Stars section. Create this folder and add images to display here.")
except FileNotFoundError:
    st.markdown('<div style="height: 50px;"></div>', unsafe_allow_html=True)
    st.error(f"Error: The '{OUR_STARS_FOLDER}' directory was not found.")


# --- Dedicated Footer for Our Stars Page ---
# st.markdown('<br><br>', unsafe_allow_html=True) 

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
st.markdown(
    "<p style='text-align: center; color: #6b7280; font-size: 0.875rem; background-color: #000; padding-bottom: 1rem; margin: 0;'>&copy; 2025 BITA CLOUD INFO TECH PVT LTD. All rights reserved.</p>",
    unsafe_allow_html=True
)

st.markdown("---")