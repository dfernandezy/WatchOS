// /api/subscribers.js (en un proyecto Vercel)
export default async function handler(req, res) {
    const API_KEY = process.env.YOUTUBE_API_KEY;  // Clave de API almacenada en las variables de entorno de Vercel
    const CHANNEL_ID = "UCiFbnEm2yeAs7Qj3hS3o3WA";  // Tu ID de canal
  
    try {
      const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      
      const subscribers = data.items[0].statistics.subscriberCount;
      
      res.status(200).json({ subscribers });
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
  }