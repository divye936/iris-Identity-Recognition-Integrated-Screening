<div align="center">

# 🛡️ IRIS
## Identity Recognition & Integrated Screening

### Next-Generation Dual-Stream Biometric Border Security System

<p>
  <strong>Smart India Hackathon — High-Fidelity AI Security Prototype</strong>
</p>

<br>

![React](https://img.shields.io/badge/React-18+-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.13-3776AB?style=for-the-badge&logo=python&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-4.x-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)
![DeepFace](https://img.shields.io/badge/DeepFace-ArcFace-FF6B35?style=for-the-badge)
![WebSocket](https://img.shields.io/badge/WebSocket-Real--Time-0A0A0A?style=for-the-badge)

<br>

**Static Identity Document + Live Biometric Verification + Digital Forensics + Real-Time Risk Intelligence**

</div>

---

# 📋 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Why IRIS?](#-why-iris)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [End-to-End Workflow](#-end-to-end-workflow)
- [Core Modules](#-core-modules)
  - [Document Processing](#1--identity-document-processing)
  - [Error Level Analysis](#2--error-level-analysis-ela)
  - [Face Verification](#3--biometric-face-verification)
  - [Risk Fusion](#4--risk-fusion-engine)
  - [Real-Time Telemetry](#5--real-time-telemetry)
- [Forensic Risk Score](#-forensic-risk-score)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Dashboard](#-dashboard)
- [Installation](#-installation)
- [Backend Setup](#-backend-setup)
- [Frontend Setup](#-frontend-setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [WebSocket API](#-websocket-api)
- [Demo Scenarios](#-demo-scenarios)
- [Security & Privacy](#-security--privacy)
- [Performance](#-performance)
- [OpenCV Compatibility](#-opencv-compatibility)
- [Known Limitations](#-known-limitations)
- [Future Scope](#-future-scope)
- [Production Roadmap](#-production-roadmap)
- [Project Status](#-project-status)
- [Smart India Hackathon](#-smart-india-hackathon)
- [License](#-license)

---

# 🧭 Overview

**IRIS — Identity Recognition & Integrated Screening** is an AI-assisted identity screening prototype designed for security-sensitive environments such as border checkpoints, immigration counters, airports, government facilities, and controlled-access locations.

The system addresses a fundamental weakness in traditional identity verification:

> A document can be genuine while the person presenting it may not be the legitimate owner.

IRIS therefore combines two primary streams of information:

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