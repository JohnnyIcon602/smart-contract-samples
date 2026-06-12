#!/usr/bin/env bash
set -euo pipefail

PORT=${1:-8765}
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MC_DIR="$ROOT_DIR/mission-control"
LOG_DIR="$ROOT_DIR/tmp"
mkdir -p "$LOG_DIR"
SERVER_LOG="$LOG_DIR/mission-control-server.log"

if ! command -v cloudflared >/dev/null 2>&1; then
  echo "cloudflared is not installed. Install via 'brew install cloudflare/cloudflare/cloudflared'" >&2
  exit 1
fi

cd "$MC_DIR"
python3 -m http.server "$PORT" >"$SERVER_LOG" 2>&1 &
SERVER_PID=$!

echo "Started Mission Control server on http://localhost:$PORT"
echo "Logs: $SERVER_LOG"

tunnel_cleanup() {
  echo "\nShutting down tunnel and server..."
  kill "$TUNNEL_PID" "$SERVER_PID" 2>/dev/null || true
}

trap tunnel_cleanup EXIT

cloudflared tunnel --url "http://localhost:$PORT" --no-autoupdate &
TUNNEL_PID=$!

wait "$TUNNEL_PID"
