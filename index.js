import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // istersen origin kısıtları ekleriz

// Sağlık kontrolü
app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'craftex-api', time: new Date().toISOString() });
});

// Örnek endpoint
app.get('/v1/hello', (req, res) => {
  res.json({ message: 'Hello from Craftex API 🚀' });
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
