const API_KEY = '4fcf281607bd266136aca3e41f246b4f7be174e18d176980c74665a64e5e'; 
const NEWS_API_URL = `https://api.cryptorank.io/v1/news?api_key=${API_KEY}`;

async function fetchNews() {
    try {
        const response = await fetch(NEWS_API_URL);
        const data = await response.json();
        displayNews(data.data);
    } catch (error) {
        console.error('error in data:', error);
    }
}

function displayNews(newsItems) {
    const container = document.getElementById('news-container');
    
    newsItems.forEach(item => {
        const newsHTML = `
            <div class="news-card">
                <h3 class="headline">${item.title}</h3>
                <p class="source">source: ${item.source}</p>
                <p>${item.description}</p>
                <a href="${item.url}" target="_blank">Read full article</a>
            </div>
        `;
        container.innerHTML += newsHTML;

window.onload = fetchNews;