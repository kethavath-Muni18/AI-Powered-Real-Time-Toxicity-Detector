document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const checkBtn = document.getElementById("checkBtn");
  const resultDiv = document.getElementById("result");
  const loadingDiv = document.getElementById("loading");

  // Load selected text from storage
  chrome.storage.local.get("selectedText", (data) => {
    if (data.selectedText) {
      inputText.value = data.selectedText;
    }
  });

  checkBtn.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (!text) {
      resultDiv.textContent = "Please select some text first.";
      return;
    }
    resultDiv.textContent = "";
    loadingDiv.style.display = "block";

    fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        loadingDiv.style.display = "none";
        if (data.label.toLowerCase() === "toxic" && data.score > 0.5) {
          resultDiv.innerHTML = `<span style="color:red;">TOXIC 🚨 (Score: ${data.score.toFixed(2)})</span>`;
        } else {
          resultDiv.innerHTML = `<span style="color:green;">SAFE ✅ (Score: ${data.score.toFixed(2)})</span>`;
        }
      })
      .catch(() => {
        loadingDiv.style.display = "none";
        resultDiv.textContent = "Error connecting to backend.";
      });
  });
});
