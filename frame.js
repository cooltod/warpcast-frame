export default function handler(req, res) {
    res.json({
        "frames": [
            {
                "image": "https://ibb.co/HL04tRwT",
                "post_url": "https://coffee-oralle-35.tiiny.sitee",
                "buttons": [{ "text": "Click Me", "action": "post" }]
            }
        ]
    });
}
