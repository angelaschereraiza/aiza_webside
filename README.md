# Aiza GmbH Website

Static single-page website for **Aiza GmbH** with **DE/EN i18n**, **light/dark theme**, a **mobile menu**, smooth scrolling, and a **legal modal** (*Imprint* / *Privacy Policy*). Deployment is done via `rsync` over SSH (see `Makefile`).

## Features

- **One-page layout**: Hero, Services, Technologies, About, Contact, Footer
- **Internationalization (i18n)**: DE / EN via `data-i18n` attributes + `I18N` object in `script.js`
- **Theme toggle**: Dark/Light using CSS tokens (`data-theme="dark|light"`)
- **Responsive navigation**: Desktop navigation + hamburger menu for mobile
- **Legal modal**: Imprint/Privacy content stored as HTML snippets in `script.js`
- **SEO basics**:
  - Meta description / Open Graph tags
  - `hreflang` + canonical
  - JSON-LD Organization schema

## Local development

### Prerequisites

- Node.js (only needed for the local dev server)
- `browser-sync`

Install `browser-sync` globally:

```bash
npm i -g browser-sync
```

### Run locally

From the project root:

```bash
make serve
```

This starts a static server and watches for changes in `*.html`, `*.css`, `*.js`, and `images/*`.

## Deployment

Deployment uses `rsync` via SSH (port `17022`). Targets are configured in the `Makefile`:

- `make deploy` → production: `aiza.ch:_/htdocs/`
- `make deploy_test` → test: `aiza.ch:test/htdocs/`

> Note: You need SSH access/keys for host `aiza.ch`. Ensure the destination paths exist on the server.

## Internationalization (DE/EN)

Text elements are marked in HTML with `data-i18n`, for example:

```html
<h1 data-i18n="hero.title">Consulting, Architecture & Software Development</h1>
```

Translations are defined in the `I18N` object in `script.js`:

```js
I18N.en.hero.title
I18N.de.hero.title
```

When `setLanguage(lang)` is called, all `[data-i18n]` elements are updated. The selected language is stored in `localStorage` under the key `language`.

### Switching language

- Desktop: `DE` / `EN` buttons in the header
- Mobile: `DE` / `EN` buttons inside the mobile menu

## Theme (Dark/Light)

Theme is controlled via the `data-theme` attribute on the `<html>` element:

- `data-theme="dark"`
- `data-theme="light"`

CSS uses custom properties (tokens) in `:root` and overrides them in `[data-theme="light"]`.  
The chosen theme is stored in `localStorage` under the key `theme`.

### Theme toggle

- Desktop: toggle button in the header
- Mobile: toggle button inside the mobile menu

Additionally, `meta[name="theme-color"]` is updated based on the active theme.

## Legal modal (Imprint / Privacy Policy)

Footer links use:

- `data-doc="imprint"`
- `data-doc="privacy"`

Clicking them opens a modal and renders content from:

- `I18N[currentLang].legal.imprint_html`
- `I18N[currentLang].legal.privacy_html`

The modal also uses `history.pushState()` so that the browser **Back** button closes the modal instead of navigating away.

## Images & assets

- Logos/icons are located in `images/`
- The logo switches depending on the theme (CSS `content: url(...)`)

Make sure paths are consistent (e.g., `/images/...` vs `images/...`) depending on how the site is hosted.

## Security notes

- Legal texts are injected via `innerHTML`. This is safe as long as the content is trusted and maintained in the repository (do not inject untrusted user content).
- External links use `target="_blank"` with `rel="noopener"`.

## Customization checklist

- Update SEO/OG images:
  - `og:image` points to `https://aiza.ch/images/social.jpg`
- Keep contact details consistent:
  - in HTML and in the legal snippets
- Adjust deployment targets:
  - SSH host, port, and destination paths in `Makefile`

## License

Internal company project. Add a license here if you want to publish/reuse this repository.
