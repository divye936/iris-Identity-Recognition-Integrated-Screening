<div align="center">
  <h1>🛡️ IRIS: Identity Recognition & Integrated Screening</h1>
  <p><strong>Next-Generation Dual-Stream Biometric Border Security System</strong></p>
  
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
  ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
  ![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)
</div>

<br />

## 📋 Project Overview
Developed as a high-fidelity Minimum Viable Product (MVP) for the Smart India Hackathon (SIH), **IRIS** bridges the gap between static document verification and physical liveness. By simultaneously processing an uploaded identity document and a live webcam feed, the system calculates a unified **Forensic Risk Score (FRS)** to instantly flag potential forgery, digital tampering, or physical impersonation at border checkpoints.

## 🧠 System Architecture & Core Features
The application runs entirely on local hardware (optimized for Apple Silicon / M-Series via explicit memory-buffer processing), ensuring sensitive biometric data never leaves the checkpoint kiosk. 

* **Dual-Stream Processing:** Synchronized ingestion of static P<IND Passport scans and live `mediaDevices` HTML5 canvas snapshots.
* **Error Level Analysis (ELA):** Mathematical detection of localized JPEG compression block anomalies to identify digital splicing and deep-fake injection.
* **Biometric Intersection:** Utilizes `DeepFace` / `ArcFace` neural networks to map facial geometry and compute cosine distance between the document portrait and the live traveler.

---

## 🖥️ Tactical UI & Dashboard
The system features a dynamic React-based dashboard designed for high-stress border environments. It includes real-time cardiovascular mock-telemetry, forensic heatmaps, and instant threat-level escalation indicators.

<div align="center">
  <img width="1511" height="780" alt="dashboard" src="https://github.com/user-attachments/assets/24af1ff4-1408-48b5-a2a3-f860db7317d3" />
</div>

---

## 🚀 Local Deployment Guide

### 1. Initialize the Screening Engine (Backend)
The backend requires an isolated virtual environment and runs a local Uvicorn server on port 8000.
```bash
# Navigate to the backend directory
cd backend

# Activate the virtual environment
source venv/bin/activate

# Launch the FastAPI server with hot-reloading
uvicorn app.main:app --reload
