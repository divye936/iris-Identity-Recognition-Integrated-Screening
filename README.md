# 🛡️ IRIS: Identity Recognition & Integrated Screening

A high-fidelity, dual-stream biometric border security dashboard built for SIH. This system transitions from static document scanning to a live-verification pipeline, verifying document authenticity against a live traveler.

![IRIS Dashboard Preview](assets/dashboard.png)

## Core Architecture
* **Frontend:** React/TypeScript with live `mediaDevices` integration and automatic HTML5 Canvas frame-capture.
* **Backend:** FastAPI pipeline executing direct memory-buffer tensor operations.
* **Biometrics:** `DeepFace`/`ArcFace` neural network mapping facial geometry via Cosine distance.
* **Forensics:** Error Level Analysis (ELA) script detecting localized JPEG compression anomalies to flag digital splicing.
* **Risk Fusion:** Aggregates ELA and biometric mismatch scores into a unified Forensic Risk Score (FRS).

## Local Execution
**1. Initialize Screening Engine (Backend)**
```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload