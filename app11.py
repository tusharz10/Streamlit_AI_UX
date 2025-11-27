import streamlit as st
import base64

# --- Page Config ---
st.set_page_config(page_title="Porsche 911 Style UI", layout="wide")

# --- Load Local Background Image ---
def get_base64(file):
    with open(file, "rb") as f:
        data = f.read()
    return base64.b64encode(data).decode()

bg_image = get_base64("download.png")  # Replace with your image file

# --- Custom CSS ---
st.markdown(f"""
<style>
/* Full-page background */
[data-testid="stAppViewContainer"] {{
    background: url("data:image/png;base64,{bg_image}") no-repeat center center fixed;
    background-size: cover;
    color: white;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
}}

/* Hide Streamlit branding */
#MainMenu, footer, header {{visibility: hidden;}}

/* Overlay gradient */
.overlay {{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(120deg, rgba(0,0,0,0.6) 10%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 100%);
    z-index: 0;
}}

/* Text container */
.text-container {{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 1;
}}

/* Hidden upper text (Porsche) */
.porsche {{
    display: none; /* completely hidden */
}}

/* 911 Text with inner glow */
.big911 {{
    font-size: 22rem;  /* slightly bigger */
    font-weight: 700;
    line-height: 0.9;
    background: linear-gradient(to top, #ffffff 0%, #fffa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
}}

.big911::after {{
    content: attr(data-text);
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(to top, #ffffff 0%, #fffa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: blur(8px); /* glow inside */
    opacity: 0.7;
    z-index: -1;
}}

/* Button */
.stButton>button {{
    background: rgba(255,255,255,0.15);
    color: white;
    font-size: 1.3rem;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 12px;
    padding: 0.7rem 2rem;
    margin-top: 2rem;
    backdrop-filter: blur(10px);
    transition: 0.3s ease;
}}
.stButton>button:hover {{
    background: rgba(255,255,255,0.3);
    transform: scale(1.05);
}}
</style>
""", unsafe_allow_html=True)

# --- UI Layout ---
st.markdown('<div class="overlay"></div>', unsafe_allow_html=True)
st.markdown(f"""
<div class="text-container">
    <div class="porsche">Porsche</div>
    <div class="big911" data-text="911">911</div>
</div>
""", unsafe_allow_html=True)

# --- Button centered below ---
st.markdown("<div style='position:absolute;bottom:50px;left:50%;transform:translateX(-50%);z-index:2;'>", unsafe_allow_html=True)
if st.button("🔥 Start Engine"):
    st.success("🚗 Porsche Mode Activated!")
st.markdown("</div>", unsafe_allow_html=True)
