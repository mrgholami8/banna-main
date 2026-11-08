# banna

By [Mohammadreza Rokhbin](https://rokhbin.ir). The name is Persian: بنّا (banna) means builder.

A crew of cursors builds your page in front of the visitor: drawing boxes, typing text and clicking buttons into place. The first screen builds on load and the rest on scroll.

One file, no dependencies, no build step. MIT license.

**Live demo:** [فارسی](https://rokhbin.github.io/banna/demo/) · [English](https://rokhbin.github.io/banna/demo/en/)

## Use

Add this to `<head>`, before your stylesheets if you can:

```html
<script src="https://cdn.jsdelivr.net/gh/Rokhbin/banna@1/banna.js"></script>
```

Or copy `banna.js` to your own site and load it from there:

```html
<script src="/banna.js"></script>
```

That is all. Keep it in `<head>` without `defer` or `async`, so the page does not flash before the build starts.

## Demo

The demo is a small sample page in Persian and English: a shop card, a blog post, a sign-up box and the usual sections of a site. To open it on your computer, serve the folder with any web server:

```bash
python3 -m http.server 8146 --directory banna
```

Then open `http://localhost:8146/demo/` or `http://localhost:8146/demo/en/`.

## Options

Set them on the script tag.

```html
<script src="/banna.js" data-speed="0.7" data-once="session"></script>
```

| Option | Default | What it does |
|---|---|---|
| `data-speed` | `1` | Higher is faster. `0.5` is slow, `2` is brisk |
| `data-agents` | `8`, or `4` on phones | Number of cursors |
| `data-max-wait` | `7` | Seconds an element may wait before it simply appears |
| `data-max-layers` | `400` | Most elements to animate; the rest just show normally |
| `data-once` | off | `session` plays once per browser session |
| `data-auto` | `true` | `false` waits for `Banna.start()` |
| `data-bar` | `true` | `false` hides the status bar and its skip button |
| `data-credit` | `true` | `false` hides the small rokhbin.ir link in the status bar |
| `data-colors` | seven colors | Comma-separated cursor colors |
| `data-exclude` | none | CSS selector for elements to leave alone |
| `data-label-agents`, `data-label-layers`, `data-label-skip`, `data-label-credit` | English or Persian by page language | Status bar text |

Add `data-banna-skip` to any element to leave it and its contents alone. Add `?nobanna` to a URL to turn it off for that visit.

## From JavaScript

```js
Banna.start() // run again, for example after a route change
Banna.skip()  // show everything now
Banna.stop()
document.addEventListener('banna:done', () => {})
```

## What it does not do to your site

- Elements are hidden with a class and revealed with a clip. Your HTML and text are never rewritten, so search engines still read the whole page.
- Nothing is sent anywhere, and nothing is loaded from other sites.
- It does not run for visitors who ask for reduced motion. Without JavaScript the page is simply there.
- Visitors can skip with the button or Esc, and keyboard focus reveals what it lands on.
- If the script fails, the page appears anyway.

## Good to know

- It delays when content appears, so it can hurt conversions and performance scores such as Largest Contentful Paint. Measure before using it on a shop or landing page, and consider `data-once="session"`.
- Content added after load, as in single-page apps, is not built unless you call `Banna.start()` again.

## License and credit

MIT. See [LICENSE](LICENSE). The demo uses the Vazirmatn font, under the SIL Open Font License ([OFL.txt](demo/assets/fonts/OFL.txt)).

Written from scratch by [Mohammadreza Rokhbin](https://rokhbin.ir). The idea of cursors building a page comes from [Swarm](https://califa.github.io/swarm-site/) by Joel Califa.
