// frame.js (server-side)
   export default function handler(req, res) {
     const API_KEY = process.env.API_KEY; // Securely stored in Vercel env
     // Use API_KEY to fetch data from your external API
     res.json({ data: "secure_response" });
   }
