from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="AI Account Prioritization Optional Support API")

class ScorePreviewRequest(BaseModel):
    account_id: str
    signals: list = []

@app.get("/")
def home():
    return {"service": "optional-python-support", "primary_orchestrator": "Vercel Eve"}

@app.post("/api/scoring/preview")
def scoring_preview(request: ScorePreviewRequest):
    # Placeholder only. Production scoring source of truth remains TypeScript tool unless explicitly migrated.
    return {"account_id": request.account_id, "score_preview": 0, "note": "optional support service"}
