#!/usr/bin/env python3
"""Static host for style.million-ai.com.

- 只服务 public/ 目录，dotfile 与目录穿越一律拒绝
- .md → text/markdown; charset=utf-8（浏览器直接打开可读，下载走 Content-Disposition 由页面控制）
- 文本资源按需 gzip（styles.js 未压缩约 700KB）
- HTML 不缓存，/assets 与 /styles 走 ETag + 1 天缓存
"""
import gzip
import os
import posixpath
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlparse

ROOT = os.path.join(os.path.dirname(os.path.realpath(__file__)), "public")
PORT = int(os.environ.get("PORT", "17401"))
HOST = os.environ.get("HOST", "127.0.0.1")

MIME = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".md": "text/markdown; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".avif": "image/avif",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".xml": "application/xml; charset=utf-8",
}

COMPRESSIBLE = {".html", ".css", ".js", ".mjs", ".json", ".md", ".txt", ".svg", ".xml"}
CACHE_LONG = {".woff2", ".woff", ".png", ".jpg", ".jpeg", ".webp", ".avif", ".svg", ".ico"}
CACHE_MED = {".css", ".js", ".mjs"}

SECURITY_HEADERS = {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "SAMEORIGIN",
}


class Handler(BaseHTTPRequestHandler):
    server_version = "dsg-static/1.0"
    protocol_version = "HTTP/1.1"

    # ---------- 工具 ----------
    def _resolve(self):
        raw = urlparse(self.path).path
        path = unquote(raw)
        if "\x00" in path:
            return None
        parts = [p for p in path.split("/") if p not in ("", ".")]
        if any(p == ".." or p.startswith(".") for p in parts):
            return None
        candidate = os.path.join(ROOT, *parts)
        if os.path.isdir(candidate):
            candidate = os.path.join(candidate, "index.html")
        return candidate

    def _etag(self, st):
        return '"%x-%x"' % (int(st.st_mtime), st.st_size)

    def _error(self, code, message):
        body = f"{code} {message}\n".encode()
        self.send_response(code)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for k, v in SECURITY_HEADERS.items():
            self.send_header(k, v)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    # ---------- 核心 ----------
    def _serve(self):
        target = self._resolve()
        if target is None:
            return self._error(400, "Bad Request")
        try:
            st = os.stat(target)
        except (FileNotFoundError, NotADirectoryError):
            return self._error(404, "Not Found")
        except PermissionError:
            return self._error(403, "Forbidden")
        if not os.path.isfile(target):
            return self._error(404, "Not Found")

        ext = os.path.splitext(target)[1].lower()
        ctype = MIME.get(ext, "application/octet-stream")
        etag = self._etag(st)
        inm = self.headers.get("If-None-Match")

        if inm and inm == etag:
            self.send_response(304)
            self.send_header("ETag", etag)
            self.send_header("Cache-Control", self._cache_for(ext))
            self.end_headers()
            return

        try:
            with open(target, "rb") as fh:
                body = fh.read()
        except OSError:
            return self._error(500, "Read Error")

        encoding = None
        accepts = self.headers.get("Accept-Encoding", "")
        if ext in COMPRESSIBLE and len(body) > 1200 and "gzip" in accepts:
            body = gzip.compress(body, 5)
            encoding = "gzip"

        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("ETag", etag)
        self.send_header("Cache-Control", self._cache_for(ext))
        self.send_header("Vary", "Accept-Encoding")
        if encoding:
            self.send_header("Content-Encoding", encoding)
        for k, v in SECURITY_HEADERS.items():
            self.send_header(k, v)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def _cache_for(self, ext):
        if ext in CACHE_LONG:
            return "public, max-age=86400"
        if ext in CACHE_MED:
            return "public, max-age=600, must-revalidate"
        if ext == ".md":
            return "public, max-age=3600"
        return "no-cache"

    def do_GET(self):
        self._serve()

    def do_HEAD(self):
        self._serve()

    def log_message(self, fmt, *args):
        sys.stdout.write("%s - %s\n" % (self.address_string(), fmt % args))
        sys.stdout.flush()


if __name__ == "__main__":
    if not os.path.isdir(ROOT):
        sys.exit(f"public dir missing: {ROOT}")
    ThreadingHTTPServer.allow_reuse_address = True
    httpd = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"design-style serving {ROOT} on http://{HOST}:{PORT}", flush=True)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
