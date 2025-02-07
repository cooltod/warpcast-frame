// app.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/frame") // Calls your server-side endpoint
    .then(response => response.json())
    .then(data => {
      // Update the DOM with fetched data
      const container = document.getElementById("news-container");
      container.innerHTML = `<div class="news-card">${data.headline}</div>`;
    })
    .catch(error => console.error("Error:", error));
});
