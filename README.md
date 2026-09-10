# mscamargo.dev

Personal landing page for Marcos Camargo, backend engineer.

## About

A single page with no background scene: the tagline **"think twice, code
once."** lit as a small neon sign — a thin tube frame hugging the text, clamped
to a frosted glass plate — with three quiet neon links below it.

- One file (`index.html`), no build, no framework
- Dark theme only
- The lettering is **Quicksand 500**, a monoline face, so the glyphs are already
  tube-shaped: filled white-hot and glowed, rather than outlined with
  `-webkit-text-stroke`
- Restraint on the glow: two shadow layers per element (one tight halo, one
  soft), and a single faint radial for the light the sign throws into the room
- Glassmorphism via `backdrop-filter`, with an opaque fallback under `@supports`;
  that radial also gives the blur something to bend
- The frame is `width: fit-content` so it wraps the tube the way a bent sign
  does; the mount clips at the mid-edges are two small spans
- Links swap to the handle on hover/focus (`@mscamargo`) and email swaps to
  *copied*; the swapped label is absolutely positioned, so the row keeps its
  natural width instead of padding out to the longer label
- linkedin / github open in a new tab; **email copies the address to the
  clipboard** (with `execCommand` and `mailto:` fallbacks) instead of opening a
  mail client
- The tube's strike flicker is disabled under `prefers-reduced-motion`
- One third-party request: **Quicksand** + **Chakra Petch** from Google Fonts
- A few lines of inline JavaScript, only for the clipboard copy

## Development

Open `index.html` in a browser, or serve it with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

MIT
