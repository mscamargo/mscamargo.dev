# mscamargo.dev

Personal landing page for Marcos Camargo, backend engineer.

## About

A single retrowave-styled page: the tagline **"think twice, code once."** set in
condensed display type on a frosted glass panel, over a synthwave scene — star
field, banded sun, neon horizon and a scrolling perspective grid.

- One file (`index.html`), no build, no framework
- Dark theme only
- Scene is pure CSS: gradients, masks, `transform: perspective()` for the grid
- Glassmorphism via `backdrop-filter`, with an opaque fallback under `@supports`
- Buttons swap their label to the handle on hover/focus (`@mscamargo`, or the
  full address for email); both labels share one grid cell so the width never
  shifts
- linkedin / github open in a new tab; **email copies the address to the
  clipboard** (with `execCommand` and `mailto:` fallbacks) instead of opening a
  mail client
- The grid animation is disabled under `prefers-reduced-motion`
- One third-party request: **Big Shoulders Display** + **Chakra Petch** from
  Google Fonts
- A few lines of inline JavaScript, only for the clipboard copy

## Development

Open `index.html` in a browser, or serve it with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

MIT
