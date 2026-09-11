# mscamargo.dev

Personal landing page for Marcos Camargo, backend engineer.

## About

A single page: one bordered card on black, holding the tagline
**"think twice, code once."** in heavy uppercase type, with a divider and the
three links — linkedin / github / e-mail — spread along the bottom edge.

- One file (`index.html`), no build, no framework
- Dark only, loosely following Vercel's **Geist** design system: `#000`
  background, `#ededed` foreground, `#8f8f8f` links, `#2e2e2e` borders
- **Geist** (weights 400/500/800) from Google Fonts — the one third-party
  request — over a system sans fallback stack
- The card is a single 1px border; the footer row is a `border-top` and a
  `space-between` flex, so the links sit at the left, center and right edges
- Type scales with `clamp()` on both size and padding, so the card holds its
  proportions from phone width up
- linkedin / github open in a new tab; **e-mail copies the address to the
  clipboard** and confirms with a small toast, instead of opening a mail
  client — with an `execCommand` fallback and, if both fail, the `mailto:`
- ~40 lines of inline JavaScript, only for that copy

## Development

Open `index.html` in a browser, or serve it with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

MIT
