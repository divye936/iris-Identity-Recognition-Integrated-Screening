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
- [Project Structure](#-project-structure)
- [Dashboard](#-dashboard)
- [Installation](#-installation)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [WebSocket Telemetry](#-websocket-telemetry)
- [Demo Scenarios](#-demo-scenarios)
- [Security & Privacy](#-security--privacy)
- [Performance Considerations](#-performance-considerations)
- [Known Limitations](#-known-limitations)
- [Future Scope](#-future-scope)
- [Use Cases](#-use-cases)
- [Team / SIH](#-smart-india-hackathon)
- [License](#-license)

---

# 🧭 Overview

**IRIS — Identity Recognition & Integrated Screening** is a high-fidelity biometric and document screening prototype designed for security-sensitive identity verification environments such as:

- Border checkpoints
- Immigration counters
- Airport security
- Government identity verification centers
- High-security access control points
- Identity fraud screening facilities

Traditional identity verification often treats a document and a person as two separate verification problems.

IRIS combines both streams into a single screening workflow.

The system simultaneously analyzes:

1. **The submitted identity document**
2. **The live traveler / subject captured through a webcam**
3. **Potential document tampering**
4. **Facial biometric similarity**
5. **Real-time screening telemetry**

The resulting signals are fused into a unified:

> **Forensic Risk Score (FRS)**

The objective is to provide an operator with an immediate, intuitive indication of whether the submitted identity appears consistent, suspicious, or potentially fraudulent.

---

# 🎯 Problem Statement

Identity fraud at checkpoints can involve several attack vectors:

### 1. Document Forgery

A counterfeit or modified identity document may contain:

- Altered photographs
- Modified text
- Replaced identity information
- Digitally manipulated regions
- Reconstructed document images

### 2. Digital Tampering

An attacker may digitally manipulate a document image before submitting it to a verification system.

Examples include:

- Image splicing
- Region replacement
- JPEG manipulation
- Localized compression inconsistencies
- Copy-paste artifacts

### 3. Physical Impersonation

A legitimate identity document may belong to one person while another individual attempts to use it.

This creates a critical mismatch:

```text
Valid Document
      +
Wrong Person
      =
Identity Fraud