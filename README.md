<div align="center">

# 🛡️ IRIS
### Identity Recognition & Integrated Screening

**Next-Generation Dual-Stream Biometric Border Security System**

<p>
  A high-fidelity AI-powered identity screening prototype developed for
  <strong>Smart India Hackathon (SIH)</strong>.
</p>

<br>

![React](https://img.shields.io/badge/React-18+-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.11%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-4.x-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)
![DeepFace](https://img.shields.io/badge/DeepFace-ArcFace-FF6B35?style=for-the-badge)
![WebSocket](https://img.shields.io/badge/WebSocket-Real--Time-0A0A0A?style=for-the-badge)

<br>

**Static Identity Document + Live Biometric Verification + Forensic Analysis**

</div>

---

# 📋 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Processing Pipeline](#-processing-pipeline)
- [Core Modules](#-core-modules)
- [Forensic Risk Score](#-forensic-risk-score)
- [Technology Stack](#-technology-stack)
- [Dashboard](#-dashboard)
- [Installation & Execution](#-installation--execution)
- [Security & Privacy](#-security--privacy)
- [Team / SIH](#-smart-india-hackathon)

---

# 🧭 Overview

**IRIS — Identity Recognition & Integrated Screening** is a high-fidelity biometric and document screening prototype designed for security-sensitive identity verification environments such as:

* Border checkpoints
* Immigration counters
* Airport security
* Government identity verification centers
* High-security access control points

Traditional identity verification often treats a document and a person as two separate verification problems. IRIS combines both streams into a single workflow, simultaneously analyzing the document, the live traveler, potential document tampering, and facial biometric similarity.

---

# 🎯 Problem Statement

Identity fraud at checkpoints can involve several attack vectors:

### 1. Document Forgery
A counterfeit or modified identity document may contain altered photographs, modified text, or digitally manipulated regions.

### 2. Digital Tampering
An attacker may digitally manipulate a document image before submitting it via image splicing, region replacement, or JPEG compression manipulation.

### 3. Physical Impersonation
A legitimate identity document may belong to one person while another individual attempts to use it, creating a critical mismatch:
`Valid Document + Wrong Person = Identity Fraud`

---

# 💡 Solution

IRIS neutralizes these threat vectors by deploying a **Dual-Stream Authentication Engine**. By forcing a live physical capture alongside the static document scan, the system mathematically links the physical presenter to the digital credential. 

---

# ✨ Key Features

* **Dual-Stream Processing:** Synchronized ingestion of static P<IND Passport scans and live `mediaDevices` HTML5 canvas snapshots.
* **Error Level Analysis (ELA):** Mathematical detection of localized JPEG compression anomalies to flag digital splicing.
* **Biometric Intersection:** Utilizes `DeepFace`/`ArcFace` neural networks to map facial geometry and compute cosine distance.
* **Dynamic Tactical UI:** React-based dashboard featuring real-time cardiovascular mock-telemetry and instant threat-level escalation.

---

# 🧠 System Architecture

The application is built on an isolated, local execution model to ensure zero-trust compliance for highly sensitive biometric data.

| Component | Technology | Responsibility |
| :--- | :--- | :--- |
| **Frontend UI** | React, TypeScript, Tailwind | Renders the tactical dashboard and captures HTML5 canvas frames. |
| **Backend Engine** | FastAPI, Python, Uvicorn | Orchestrates ML pipelines and physical file I/O operations. |
| **Vision/ML** | OpenCV, DeepFace, TensorFlow | Executes facial mapping (ArcFace) and forensic compression algorithms. |

---

# 🔬 Processing Pipeline & Core Modules

1. **Ingestion:** Securely receives multipart/form-data containing the static ID and live webcam frame.
2. **Standardization:** Normalizes color spaces, resolutions, and executes MTCNN face detection/cropping.
3. **Forensic Analysis (ELA):** Resaves images at a known quality rate and calculates pixel-level differentiation to highlight manipulated boundary artifacts.
4. **Biometric Verification:** Extracts 512-dimensional facial embeddings and calculates cosine similarity.
5. **Score Fusion:** Aggregates all anomalies into the master Forensic Risk Score (FRS).

---

# 📊 Forensic Risk Score (FRS)

The FRS is the ultimate output of the IRIS pipeline. It ranges from **0.0 to 1.0 (0% to 100% Risk)**.

* **0.00 – 0.35:** ✅ **CLEAR.** High biometric match, no forensic anomalies detected.
* **0.36 – 0.65:** ⚠️ **WARNING.** Minor anomalies detected (e.g., poor lighting, slight document compression artifacts). Manual review advised.
* **0.66 – 1.00:** 🚨 **ESCALATE.** Severe mismatch or confirmed digital splicing. Immediate intervention required.

---

# 🖥️ Dashboard

The system features a dynamic React-based dashboard designed for high-stress border environments.

<div align="center">
  <img width="1511" height="780" alt="dashboard" src="https://github.com/user-attachments/assets/24af1ff4-1408-48b5-a2a3-f860db7317d3" />
</div>

---

# 🚀 Installation & Execution

### 1. Initialize the Screening Engine (Backend)
### 2. Launch the Tactical Dashboard (Frontend)
### 3. Alternative UI (Rapid Testing)
```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload


### 2. Launch the Tactical Dashboard (Frontend)
```bash
cd frontend
npm install
npm run dev

###3. Alternative UI (Rapid Testing)
# Run from the root directory
streamlit run streamlit_app.py
