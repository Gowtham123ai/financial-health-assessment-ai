from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

from finance_analyzer import analyze_financials
from ai_engine import ai_insights

app = FastAPI(title="Financial Health AI")

# ✅ CORS FIX (THIS LINE FIXES YOUR ERROR)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Backend is running"}
from file_loader import load_file

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...), language: str = "English", industry: str = "Services"):
    df = load_file(file.file, file.filename)
    metrics = analyze_financials(df)
    insights = ai_insights(metrics, language, industry)
    return {"metrics": metrics, "ai_insights": insights}
