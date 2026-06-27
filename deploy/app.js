"use strict";

// Static file server with SPA fallback for cPanel / Phusion Passenger.
// Serves the built site from ./public and returns index.html for unknown
// routes so client-side routing (react-router) works on refresh/deep links.
//
// Zero dependencies — uses only Node's standard library.
// Place this file at the application root (e.g. /home/birskofp/landingpage/app.js)
// alongside the `public/` folder. Passenger provides the port/socket via PORT.

const http = require("http");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "public");
const INDEX_FILE = path.join(PUBLIC_DIR, "index.html");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".map": "application/json; charset=utf-8",
};

function send(res, status, headers, stream) {
  res.writeHead(status, headers);
  if (stream && typeof stream.pipe === "function") {
    stream.pipe(res);
  } else {
    res.end(stream);
  }
}

function serveFile(res, filePath, status) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME_TYPES[ext] || "application/octet-stream";

  // Hashed assets (everything except index.html) can be cached hard.
  const isIndex = path.basename(filePath) === "index.html";
  const cacheControl = isIndex
    ? "no-cache, no-store, must-revalidate"
    : "public, max-age=31536000, immutable";

  const stream = fs.createReadStream(filePath);
  stream.on("open", () => {
    send(res, status, { "Content-Type": type, "Cache-Control": cacheControl }, stream);
  });
  stream.on("error", () => {
    send(res, 500, { "Content-Type": "text/plain" }, "Internal Server Error");
  });
}

const server = http.createServer((req, res) => {
  // Decode and strip query string.
  let urlPath;
  try {
    urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    urlPath = "/";
  }

  // Resolve requested path inside PUBLIC_DIR and block path traversal.
  const requested = path.normalize(path.join(PUBLIC_DIR, urlPath));
  if (!requested.startsWith(PUBLIC_DIR)) {
    return send(res, 403, { "Content-Type": "text/plain" }, "Forbidden");
  }

  fs.stat(requested, (err, stats) => {
    if (!err && stats.isFile()) {
      return serveFile(res, requested, 200);
    }
    if (!err && stats.isDirectory()) {
      const indexInDir = path.join(requested, "index.html");
      if (fs.existsSync(indexInDir)) {
        return serveFile(res, indexInDir, 200);
      }
    }
    // SPA fallback: unknown route -> index.html (200 so the client router takes over).
    return serveFile(res, INDEX_FILE, 200);
  });
});

// Passenger passes the port/socket via PORT; fall back to 3000 for local runs.
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Static server listening on ${port}, serving ${PUBLIC_DIR}`);
});
