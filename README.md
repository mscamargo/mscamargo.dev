# mscamargo.dev

Personal landing page for Marcos Camargo, backend engineer.

## About

A single page: the tagline **"think twice, code once."** in a clean display
typeface on a dark background, with a small cyan neon accent, and three buttons —
linkedin, github, email.

- One file (`index.html`), no build, no framework
- Dark theme only
- Buttons swap their label to the handle on hover/focus (`@mscamargo`, or the
  full address for email)
- linkedin / github open in a new tab; **email copies the address to the
  clipboard** (with a `mailto:` fallback) instead of opening a mail client
- One third-party request: the **Space Grotesk** font from Google Fonts
- A few lines of inline JavaScript, only for the clipboard copy

## Development

Open `index.html` in a browser, or serve it with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

MIT
