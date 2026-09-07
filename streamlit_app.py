import streamlit as st
import requests

st.set_page_config(page_title="SSB Screening System", layout="wide")
st.title("🛡️ Ministry of Home Affairs · Checkpoint")

col1, col2 = st.columns(2)

with col1:
    st.subheader("1. Document Scan")
    doc_file = st.file_uploader("Upload ID (JPEG/PNG)", type=["jpg", "jpeg", "png"])

with col2:
    st.subheader("2. Live Kiosk Feed")
    live_pic = st.camera_input("Look into the camera")

if doc_file and live_pic:
    if st.button("EXECUTE FORENSIC SCAN", type="primary", use_container_width=True):
        with st.spinner("Analyzing compression artifacts and facial geometry..."):
            # Package both images to send to your FastAPI backend
            files = {
                "file": (doc_file.name, doc_file.getvalue(), "image/jpeg"),
                "live_frame": ("live.jpg", live_pic.getvalue(), "image/jpeg")
            }
            
            try:
                response = requests.post("http://localhost:8000/screen", files=files)
                data = response.json().get("results", {})
                
                # Display Results
                if data.get("calculated_risk", 0) > 0.65:
                    st.error(f"🚨 ESCALATE: FORGERY DETECTED (Risk: {data.get('calculated_risk') * 100}%)")
                else:
                    st.success(f"✅ CLEAR TO PROCEED (Risk: {data.get('calculated_risk') * 100}%)")
                
                st.json(data)
            except Exception as e:
                st.error("Backend connection failed. Is FastAPI running?")