# 🛡️ AI-Powered Real-Time Toxicity Detector

An AI-powered web application that detects toxic text in real time using Natural Language Processing (NLP) and Machine Learning. The system classifies user input as **Toxic** or **Non-Toxic** and helps create safer online communication environments.

---

## 📌 Overview

Online platforms receive millions of comments every day, making it difficult to manually identify abusive or offensive content. This project uses a trained machine learning model to analyze text instantly and predict whether it contains toxic language.

The application can be integrated into:

- 💬 Chat applications
- 🌐 Social media platforms
- 🎮 Online gaming communities
- 📚 Educational discussion forums
- 🛒 E-commerce review systems

---

## ✨ Features

- ⚡ Real-time toxicity detection
- 🤖 Machine Learning based classification
- 📝 Text preprocessing using NLP
- 🎯 High prediction accuracy
- 🌐 Interactive web interface
- 📊 Displays toxicity prediction instantly
- 🔍 Easy-to-use interface

---

## 🛠️ Tech Stack

### Programming Language
- Python

### Machine Learning
- Scikit-learn
- Pandas
- NumPy

### Natural Language Processing
- NLTK
- Regular Expressions

### Web Framework
- Flask

### Frontend
- HTML
- CSS
- JavaScript
- Bootstrap

---

## 📂 Project Structure

```
AI-Powered-Real-Time-Toxicity-Detector/
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
├── templates/
│   └── index.html
│
├── model/
│   ├── model.pkl
│   └── vectorizer.pkl
│
├── dataset/
│
├── app.py
├── train_model.py
├── requirements.txt
├── README.md
└── LICENSE
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/kethavath-Muni18/AI-Powered-Real-Time-Toxicity-Detector.git
```

### 2. Navigate to the project

```bash
cd AI-Powered-Real-Time-Toxicity-Detector
```

### 3. Create a virtual environment (Optional)

**Windows**

```bash
python -m venv venv
venv\Scripts\activate
```

**Linux/Mac**

```bash
python3 -m venv venv
source venv/bin/activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

### 5. Run the application

```bash
python app.py
```

The application will start at:

```
http://127.0.0.1:5000/
```

---

## 🚀 How It Works

1. User enters text.
2. Text is cleaned and preprocessed.
3. The trained vectorizer converts text into numerical features.
4. The machine learning model predicts toxicity.
5. The prediction is displayed instantly.

---

## 📊 Machine Learning Pipeline

```
User Input
      │
      ▼
Text Cleaning
      │
      ▼
Tokenization
      │
      ▼
TF-IDF Vectorization
      │
      ▼
Trained ML Model
      │
      ▼
Prediction
      │
      ▼
Toxic / Non-Toxic
```

---

## 📈 Future Enhancements

- Multi-language toxicity detection
- Deep Learning (LSTM/BERT)
- Speech-to-text toxicity detection
- REST API support
- User authentication
- Toxicity severity score
- Explainable AI predictions
- Docker deployment

---

## 📷 Screenshots

Add screenshots here:

```
screenshots/home.png

screenshots/result.png
```

Example:

| Home Page | Prediction |
|-----------|------------|
| ![](screenshots/home.png) | ![](screenshots/result.png) |

---

## 📋 Requirements

Example:

```
Flask
numpy
pandas
scikit-learn
nltk
joblib
```

Install using:

```bash
pip install -r requirements.txt
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Kethavath Muni**

GitHub: https://github.com/kethavath-Muni18

---
