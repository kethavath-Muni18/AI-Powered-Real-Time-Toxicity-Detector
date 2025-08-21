import pickle
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS so your frontend or extension can call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your domain for production
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load your pickle model (make sure toxic_model.pkl is in the same directory)
with open("toxic_model.pkl", "rb") as f:
    model = pickle.load(f)

# Request body schema
class TextIn(BaseModel):
    text: str

# Simple root endpoint for quick check
@app.get("/")
async def root():
    return {"message": "Toxicity Detection API is running."}

# POST endpoint for toxicity prediction
@app.post("/predict")
async def predict_toxicity(data: TextIn):
    text = data.text

    # Make prediction
    pred = model.predict([text])[0]

    # Get prediction probability if available
    if hasattr(model, "predict_proba"):
        proba = model.predict_proba([text])[0][pred]
    else:
        proba = 0.9 if pred == 1 else 0.1  # fallback probabilities

    label = "Toxic" if pred == 1 else "Safe"

    return {"label": label, "score": proba}
