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
    <button onclick="alert('Streaming active!')">Start Listeconst http = require('http');
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
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>صوت الأمان Online Tour</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #0f172a; color: #f8fafc; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 24px; }
  .card { background: #1e293b; border: 1px solid #334155; border-radius: 24px; width: 100%; max-width: 360px; padding: 32px 24px; text-align: center; display: flex; flex-direction: column; align-items: center; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); }
  .brand-header { display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; margin-bottom: 20px; direction: rtl; }
  .brand-voice { color: #ffffff; }
  .brand-safety { color: #00E676; margin-left: 8px; }
  h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; color: #ffffff; }
  #status { font-size: 0.9rem; font-weight: 500; color: #94a3b8; margin-bottom: 32px; display: inline-flex; align-items: center; gap: 8px; background: #0f172a; padding: 6px 14px; border-radius: 999px; border: 1px solid #1e293b; }
  .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
  .dot.connected { background-color: #10b981; box-shadow: 0 0 12px #10b981; animation: pulse 2s infinite; }
  .dot.disconnected { background-color: #ef4444; box-shadow: 0 0 8px #ef4444; }
  .dot.connecting { background-color: #f59e0b; box-shadow: 0 0 8px #f59e0b; animation: pulse 1.5s infinite; }
  @keyframes pulse { 0% { transform: scale(0.9); opacity: 0.6; } 50% { transform: scale(1.2); opacity: 1; } 100% { transform: scale(0.9); opacity: 0.6; } }
  #startBtn { width: 100%; background-color: #10b981; color: #0f172a; font-size: 1.1rem; font-weight: 700; padding: 16px; border: none; border-radius: 999px; cursor: pointer; }
  #startBtn:active { transform: scale(0.98); background-color: #059669; }
  #controls { display: none; flex-direction: column; align-items: center; width: 100%; gap: 24px; }
  .volume-box { width: 100%; text-align: left; }
  .volume-label { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: #94a3b8; margin-bottom: 8px; display: block; }
  input[type="range"] { -webkit-appearance: none; appearance: none; width: 100%; height: 6px; background: #334155; border-radius: 999px; outline: none; }
  input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #10b981; cursor: pointer; }
  #reconnectBtn { background: transparent; border: 1px solid #475569; color: #f8fafc; padding: 10px 20px; font-weight: 600; border-radius: 12px; cursor: pointer; display: none; }
</style>
</head>
<body>
  <div class="card">
    <div class="brand-header">
      <span class="brand-voice">صوت</span>
      <span class="brand-safety">الأمان</span>
    </div>
    <h1>Online Tour</h1>
    <div id="status">
      <span class="dot disconnected" id="statusDot"></span>
      <span id="statusText">Not connected</span>
    </div>
    <button id="startBtn">Start Listening</button>
    <div id="controls">
      <div class="volume-box">
        <span class="volume-label">Volume</span>
        <input type="range" id="volume" min="0" max="100" value="80" />
      </div>
      <button id="reconnectBtn">Reconnect</button>
    </div>
  </div>
<script>
(function () {
  var statusDot = document.getElementById('statusDot');
  var statusText = document.getElementById('statusText');
  var startBtn = document.getElementById('startBtn');
  var controls = document.getElementById('controls');
  var volumeSlider = document.getElementById('volume');
  var reconnectBtn = document.getElementById('reconnectBtn');

  var ws = null;
  var audioCtx = null;
  var gainNode = null;
  var scriptNode = null;
  var manuallyStopped = false;

  var SAMPLE_RATE = 8000;
  var BUFFER_SIZE = 32768;
  var ringBuffer = new Float32Array(BUFFER_SIZE);
  var readIndex = 0;
  var writeIndex = 0;
  var bufferedSamples = 0;
  var WARMUP_THRESHOLD = SAMPLE_RATE * 0.15;
  var MAX_DELAY_SAMPLES = SAMPLE_RATE * 0.40;
  var isWarmingUp = true;

  function setStatus(state, text) {
    statusDot.className = 'dot ' + state;
    statusText.textContent = text;
  }

  function wsUrl() {
    var loc = window.location;
    var proto = loc.protocol === 'https:' ? 'wss:' : 'ws:';
    return proto + '//' + loc.host + '/ws' + loc.search;
  }

  function setupAudio() {
    try {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass({ sampleRate: SAMPLE_RATE });
      gainNode = audioCtx.createGain();
      gainNode.gain.value = volumeSlider.value / 100;
      gainNode.connect(audioCtx.destination);

      scriptNode = audioCtx.createScriptProcessor(512, 0, 1);
      scriptNode.onaudioprocess = function(e) {
        var output = e.outputBuffer.getChannelData(0);
        var len = output.length;
        if (isWarmingUp) { output.fill(0); return; }
        var samplesToPlay = Math.min(len, bufferedSamples);
        for (var i = 0; i < samplesToPlay; i++) {
          output[i] = ringBuffer[readIndex];
          readIndex = (readIndex + 1) % BUFFER_SIZE;
        }
        for (var i = samplesToPlay; i < len; i++) { output[i] = 0; }
        bufferedSamples -= samplesToPlay;
      };
      scriptNode.connect(gainNode);
      return true;
    } catch (e) {
      setStatus('disconnected', 'Audio init failed.');
      return false;
    }
  }

  function connect() {
    manuallyStopped = false;
    setStatus('connecting', 'Syncing…');
    ws = new WebSocket(wsUrl());
    ws.binaryType = 'arraybuffer';

    ws.onopen = function() {
      setStatus('connected', 'Live Broadcast');
      reconnectBtn.style.display = 'none';
    };

    ws.onmessage = function(event) {
      if (!(event.data instanceof ArrayBuffer)) return;
      try {
        var muLawArray = new Uint8Array(event.data);
        var numSamples = muLawArray.length;
        if (numSamples === 0) return;

        if (bufferedSamples > MAX_DELAY_SAMPLES) {
          readIndex = (writeIndex - Math.floor(SAMPLE_RATE * 0.1) + BUFFER_SIZE) % BUFFER_SIZE;
          bufferedSamples = Math.floor(SAMPLE_RATE * 0.1);
        }

        for (var i = 0; i < numSamples; i++) {
          var mu = muLawArray[i] ^ 0xFF;
          var sign = mu & 0x80;
          var exponent = (mu >> 4) & 0x07;
          var mantissa = mu & 0x0F;
          var sample = (mantissa << 3) + 132;
          sample = sample << exponent;
          sample -= 132;
          ringBuffer[writeIndex] = (sign ? -sample : sample) / 32768.0;
          writeIndex = (writeIndex + 1) % BUFFER_SIZE;
        }
        bufferedSamples += numSamples;
        if (isWarmingUp && bufferedSamples >= WARMUP_THRESHOLD) { isWarmingUp = false; }
      } catch (e) {}
    };

    ws.onclose = function() {
      if (manuallyStopped) { setStatus('disconnected', 'Tour ended.'); return; }
      setStatus('disconnected', 'Disconnected.');
      reconnectBtn.style.display = 'inline-block';
    };
    ws.onerror = function() { setStatus('disconnected', 'Network error.'); };
  }

  startBtn.addEventListener('click', async function() {
    startBtn.disabled = true;
    var ok = setupAudio();
    if (ok && audioCtx.state === 'suspended') await audioCtx.resume();
    startBtn.style.display = 'none';
    controls.style.display = 'flex';
    if (ok) { connect(); }
  });

  reconnectBtn.addEventListener('click', function() { connect(); });
  volumeSlider.addEventListener('input', function() {
    if (gainNode) gainNode.gain.value = volumeSlider.value / 100;
  });
})();
</script>
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
  const pathname = url.pathname;
  const code = url.searchParams.get('code');
  const token = url.searchParams.get('token');

  if (pathname === '/guide') {
    sessions.set(code, { token, guideWs: ws, listeners: new Set() });
    console.log(`Guide connected for session ${code}`);

    ws.on('message', (data, isBinary) => {
      const session = sessions.get(code);
      if (session && session.guideWs === ws) {
        for (const listener of session.listeners) {
          if (listener.readyState === ws.OPEN) {
            listener.send(data, { binary: isBinary });
          }
        }
      }
    });

    ws.on('close', () => {
      sessions.delete(code);
      console.log(`Guide disconnected for session ${code}`);
    });
  } else if (pathname === '/ws') {
    let targetSession = null;
    for (const [sCode, sess] of sessions.entries()) {
      if (sess.token === token) {
        targetSession = sess;
        break;
      }
    }

    if (targetSession) {
      targetSession.listeners.add(ws);
      console.log(`Listener connected. Total: ${targetSession.listeners.size}`);

      ws.on('close', () => {
        targetSession.listeners.delete(ws);
        console.log(`Listener disconnected. Total: ${targetSession.listeners.size}`);
      });
    } else {
      ws.close();
    }
  }
});

server.listen(PORT, () => {
  console.log(`TourVoice Relay Server running on port ${PORT}`);
});
ning</button>
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
