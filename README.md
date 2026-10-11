# mscamargo.dev

Personal site and blog, built with [Astro](https://astro.build) and Tailwind CSS.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the static site to `./dist/`          |
| `npm run preview` | Preview the build locally                   |
| `npm run check`   | Type-check `.astro` and `.ts` files         |

## Writing a post

Add a Markdown (`.md`) or MDX (`.mdx`) file to `src/content/blog/`. The file name becomes the URL slug.

```md
---
title: 'Post title'
description: 'One-line summary, shown in the post list and RSS feed.'
pubDate: '2026-10-11'
updatedDate: '2026-10-12' # optional
heroImage: '../../assets/some-image.jpg' # optional
---
```

The frontmatter schema lives in `src/content.config.ts`. Profile details, links and the site title live in `src/consts.ts`.
