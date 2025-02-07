// app.js (client-side)
   fetch('/api/frame') // Proxy request through your server
     .then(response => response.json())
     .then(data => console.log(data));
