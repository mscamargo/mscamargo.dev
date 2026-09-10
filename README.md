# mscamargo.dev

Personal landing page for Marcos Camargo, backend engineer.

## About

A single page with no background scene: the tagline **"think twice, code
once."** rendered as a neon bar sign — hollow tube lettering inside a glowing
magenta frame, mounted on frosted glass — above a row of arcade-style neon
buttons.

- One file (`index.html`), no build, no framework
- Dark theme only
- Tube lettering is `-webkit-text-stroke` plus stacked `drop-shadow()` glows,
  with a filled fallback under `@supports`
- Glassmorphism via `backdrop-filter`, with an opaque fallback under `@supports`;
  soft radial glows behind the page give the blur something to bend
- Buttons pair `border` with an offset `outline` for the twin-ring look; the
  flanking slashes and the marquee slabs are pseudo-elements
- Buttons swap their label to the handle on hover/focus (`@mscamargo`, or the
  full address for email); both labels share one grid cell so the width never
  shifts
- linkedin / github open in a new tab; **email copies the address to the
  clipboard** (with `execCommand` and `mailto:` fallbacks) instead of opening a
  mail client
- The sign's power-on flicker is disabled under `prefers-reduced-motion`
- One third-party request: **Poppins** + **Chakra Petch** from Google Fonts
- A few lines of inline JavaScript, only for the clipboard copy

## Development

Open `index.html` in a browser, or serve it with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

MIT
