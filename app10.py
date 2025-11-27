import streamlit as st
import base64

# --- Page Config ---
st.set_page_config(page_title="Transparent Glass UI", layout="wide")

# --- Load Local Background Image ---
def get_base64(file):
    with open(file, "rb") as f:
        data = f.read()
    return base64.b64encode(data).decode()

bg_image = get_base64("Untitled.gif")

# --- Custom CSS ---
st.markdown(f"""
<style>
/* Full-page background image */
[data-testid="stAppViewContainer"] {{
    background: url("data:image/jpg;base64,{bg_image}");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}}

/* Hide Streamlit’s default menu and footer */
#MainMenu, footer, header {{visibility: hidden;}}

/* Glassmorphic banner (Grey Transparent Popup) */
.glass-banner {{
    background: rgba(80, 80, 80, 0.25); /* Soft grey transparency */
    border-radius: 20px;
    padding: 40px;
    width: 500px;
    margin: 120px auto;
    backdrop-filter: blur(25px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.25);
    text-align: center;
    color: white;
    font-family: 'Segoe UI', sans-serif;
}}

/* Heading and text */
.glass-banner h1 {{
    font-size: 2rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
}}

.glass-banner p {{
    color: #e0e0e0;
    font-size: 1rem;
    margin-bottom: 1.5rem;
}}

/* Button styling */
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
""", unsafe_allow_html=True)

# --- UI Layout ---
st.markdown("""
<div class="glass-banner">
    <h1>Welcome, <span style="color:#b2a0ff;">Tushar Kashyap</span></h1>
    <p>Your galaxy-powered UI is ready</p>
    <p>Let’s get started with your transparent Streamlit dashboard.</p>
</div>
""", unsafe_allow_html=True)

# --- Center Button ---
st.markdown("<div style='text-align:center;'>", unsafe_allow_html=True)
if st.button("🚀 Get Started"):
    st.success("✅ Welcome, your transparent UI is live!")
st.markdown("</div>", unsafe_allow_html=True)
