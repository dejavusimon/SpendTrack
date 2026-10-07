# 我们的开销 2.0 — home-screen shell

A tiny GitHub Pages wrapper that opens the Apps Script app full-screen, with its
own icon, like a native app. It holds no data — every number lives in the
Google Sheet and is read live.

## Files
- `index.html` — the shell; set `APP_URL` near the bottom
- `manifest.webmanifest` — app name, colours, icons
- `sw.js` — caches the shell only, never Google traffic
- `icons/` — home-screen icons (must stay inside the `icons` folder, lowercase)

## Publish
1. New repo on GitHub (e.g. `SpendTrack`), upload everything in this folder.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
3. Edit `index.html`, paste your `/exec` URL into `APP_URL`, commit.
4. After a minute, open `https://dejavusimon.github.io/SpendTrack/`.

## Install
- iPhone: open in Safari → Share → Add to Home Screen.
- Galaxy: open in Chrome → ⋮ → Add to Home screen / Install app.

## Updating the shell
Bump `CACHE` in `sw.js` (e.g. `kaixiao-shell-v2`) whenever you change the
shell files, so phones pick up the new version.
