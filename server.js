import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota de Healthcheck / API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'NOVAGÁS',
    timestamp: new Date().toISOString()
  });
});

// Serve static assets from Vite dist directory
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback to index.html for React SPA client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server NOVAGÁS rodando na porta ${PORT}`);
});
