# mscamargo.dev

Personal landing page for Marcos Camargo, backend engineer.

## About

A single page, no scene and no frame: the tagline **"think twice, code once."**
set large in wide squarish type, with the three links spread beneath it. The
neon and the glass are carried by the lettering itself.

- One file (`index.html`), no build, no framework
- Dark theme only
- The lettering is **Orbitron 800**, uppercase, in a `fit-content` block
- Glass is a gradient sheen clipped to the text (`background-clip: text`),
  sized to one line and repeated down, so the second line catches the same
  light instead of sinking to grey
- Neon is a chromatic fringe rather than a halo — a pink `drop-shadow()`
  offset left, a cyan one offset right. A wide halo just fuses the two lines
  into a glowing slab
- Behind it: two low radial neon sources and a sheet of frosted glass across
  the middle band (`backdrop-filter`), its edges masked to nothing so it
  frosts the light without drawing a box
- The link row is `space-between` across exactly the headline's width;
  hover/focus lights it and turns on `[ brackets ]`, which sit in the layout
  at zero opacity so nothing shifts
- linkedin / github open in a new tab; **email copies the address to the
  clipboard** (with `execCommand` and `mailto:` fallbacks) instead of opening a
  mail client
- One third-party request: **Orbitron** from Google Fonts; the links use the
  system UI font
- A few lines of inline JavaScript, only for the clipboard copy

## Development

Open `index.html` in a browser, or serve it with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

MIT
