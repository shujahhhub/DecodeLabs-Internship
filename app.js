const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Atlas-Core Dashboard</title>
            <style>
                body { font-family: sans-serif; background: #0f172a; color: #f8fafc; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                .card { background: #1e293b; padding: 2rem; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5); text-align: center; border: 1px solid #334155; }
                h1 { color: #38bdf8; margin-bottom: 0.5rem; }
                .status { display: inline-block; padding: 0.25rem 0.75rem; background: #15803d; color: #4ade80; border-radius: 9999px; font-weight: bold; font-size: 0.875rem; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Atlas-Core Engine</h1>
                <p>High-precision data processing framework</p>
                <span class="status">SYSTEM ONLINE</span>
            </div>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
