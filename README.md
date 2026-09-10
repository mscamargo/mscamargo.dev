# mscamargo.dev

Personal landing page for Marcos Camargo, backend engineer.

## About

A single page: a synthwave sunset. The tagline **"think twice, code once."**
in chrome-and-neon type up in the sky, a banded sun sinking into the horizon,
and a cyan grid running away underneath it.

- One file (`index.html`), no build, no framework
- Dark only — the whole scene is one gradient sky plus three elements
- **Sun**: a circle with a yellow → magenta → violet gradient, sliced by a
  `mask-image` whose bands widen as they fall, so it dissolves into the horizon
- **Grid**: two `repeating-linear-gradient`s on a plane tipped with
  `perspective() rotateX()`, masked to nothing at the far end and scrolling on
  a loop (stopped under `prefers-reduced-motion`)
- **Horizon**: a one-pixel cyan line with a wide pink `box-shadow`
- CRT scanlines are a `repeating-linear-gradient` over the whole scene
- The lettering is **Orbitron 900**, uppercase, with a chrome gradient clipped
  to the text (`background-clip: text`) — sized to one line and repeated down,
  so both lines catch the same light — over a pink `drop-shadow()` glow
- The scene sits in a fixed `.scene` at `z-index: -1`; `body` deliberately
  carries **no background**, which would otherwise paint over it
- Type at the top, links at the bottom on the grid, so neither fights the sun;
  a `max-height` query pulls all three in on landscape laptops
- linkedin / github open in a new tab; **email copies the address to the
  clipboard** (with `execCommand` and `mailto:` fallbacks) instead of opening a
  mail client
- One third-party request: **Orbitron** from Google Fonts
- A few lines of inline JavaScript, only for the clipboard copy

## Development

Open `index.html` in a browser, or serve it with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

MIT
