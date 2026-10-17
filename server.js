const http = require('http');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 3000;

// Active sessions map: code -> { token, guideWs, listeners: Set }
const sessions = new Map();

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname.startsWith('/join/')) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>صوت الأمان Online Tour</title>
<style>
  body { font-family: sans-serif; background: #0f172a; color: #f8fafc; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
  .card { background: #1e293b; padding: 32px; border-radius: 24px; text-align: center; max-width: 360px; width: 100%; border: 1px solid #334155; }
  h1 { font-size: 1.4rem; margin-bottom: 16px; color: #fff; }
  button { background: #10b981; color: #0f172a; border: none; padding: 14px 28px; font-size: 1rem; font-weight: bold; border-radius: 999px; cursor: pointer; width: 100%; }
</style>
</head>
<body>
  <div class="card">
    <h1>صوت الأمان Online Tour</h1>
    <p style="color:#94a3b8; margin-bottom:20px; font-size:0.9rem;">Connected via Cloud Relay</p>
    <button onclick="alert('Streaming active!')">Start Listening</button>
  </div>
</body>
</html>`);
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws, req) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  // Handle WebSocket connections for guide and listeners
});

server.listen(PORT, () => {
  console.log(`TourVoice Relay Server running on port ${PORT}`);
});
