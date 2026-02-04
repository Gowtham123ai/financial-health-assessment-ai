# Financial Health Assessment Tool for SMEs

## Overview
An AI-powered platform that analyzes SME financial data to assess financial health, creditworthiness, risks, and provide actionable recommendations.

## Features
- Upload CSV / XLSX / PDF financial data
- Revenue, expense, receivables, payables, debt analysis
- Industry benchmarking
- Multilingual output (English & Hindi)
- Secure architecture
- SME-friendly dashboard

## Tech Stack
- Frontend: React.js
- Backend: FastAPI (Python)
- Data Processing: Pandas
- Database: PostgreSQL
- Security: Encryption at rest & in transit

## Live Demo
Frontend: https://dancing-tarsier-2b5d91.netlify.app

## How to Run Locally

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
