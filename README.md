<div align="center">

# 🛡️ IRIS: Identity Recognition & Integrated Screening

### Next-Generation Dual-Stream Biometric Border Security System

<p>
  <strong>High-Fidelity AI-Assisted Identity Screening Prototype</strong>
</p>

<p>
  Built for <strong>Smart India Hackathon (SIH)</strong>
</p>

<br />

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)
![DeepFace](https://img.shields.io/badge/DeepFace-ArcFace-FF6B35?style=for-the-badge)

<br />

**Document Forensics + Face Verification + Live Camera + Real-Time Risk Intelligence**

</div>

---

# 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Why IRIS?](#-why-iris)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [End-to-End Workflow](#-end-to-end-workflow)
- [Core Modules](#-core-modules)
  - [Identity Document Processing](#1--identity-document-processing)
  - [Error Level Analysis](#2--error-level-analysis-ela)
  - [Biometric Face Verification](#3--biometric-face-verification)
  - [Risk Fusion Engine](#4--risk-fusion-engine)
  - [Real-Time Telemetry](#5--real-time-telemetry)
- [Forensic Risk Score](#-forensic-risk-score)
- [Tactical UI & Dashboard](#-tactical-ui--dashboard)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Local Deployment](#-local-deployment)
- [Backend Setup](#-backend-setup)
- [Frontend Setup](#-frontend-setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [API Reference](#-api-reference)
- [WebSocket API](#-websocket-api)
- [Demo Scenarios](#-demo-scenarios)
- [Security & Privacy](#-security--privacy)
- [Apple Silicon Support](#-apple-silicon-support)
- [OpenCV Compatibility](#-opencv-compatibility)
- [Troubleshooting](#-troubleshooting)
- [Known Limitations](#-known-limitations)
- [Future Scope](#-future-scope)
- [Potential Applications](#-potential-applications)
- [Production Roadmap](#-production-roadmap)
- [Responsible AI](#-responsible-ai)
- [Project Status](#-project-status)
- [Smart India Hackathon](#-smart-india-hackathon)
- [License](#-license)
- [Vision](#-vision)

---

# 📋 Project Overview

**IRIS — Identity Recognition & Integrated Screening** is a high-fidelity Minimum Viable Product (MVP) designed for identity screening in security-sensitive environments such as border checkpoints, immigration counters, airports, government facilities, and controlled-access locations.

The system addresses an important limitation of conventional document verification:

> A document can be genuine while the person presenting it may not be the legitimate owner.

IRIS therefore combines two primary information streams:

```text
                    IRIS
                     │
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
   Identity Document       Live Person
          │                     │
          ▼                     ▼
   Forensic Analysis       Face Analysis
          │                     │
          └──────────┬──────────┘
                     ▼
              Risk Fusion
                     │
                     ▼
          Forensic Risk Score
                     │
                     ▼
            Operator Dashboard
