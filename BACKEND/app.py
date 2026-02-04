from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from finance_analyzer import analyze_financials
from ai_engine import ai_insights
from file_loader import load_file

app = FastAPI(title="Financial Health AI")

# ✅ CORS FIX (PRODUCTION + NETLIFY SAFE)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Backend is running"}

@app.post("/upload/")
async def upload_file(
    file: UploadFile = File(...),
    language: str = "English",
    industry: str = "Services"
):
    df = load_file(file.file, file.filename)
    metrics = analyze_financials(df)
    insights = ai_insights(metrics, language, industry)
    return {
        "metrics": metrics,
        "ai_insights": insights
    }
