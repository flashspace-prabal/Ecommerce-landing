
## Use InterTight-Black as Primary Font

### What's Changing

The uploaded font file `InterTight-Black.ttf` will be integrated as the primary font across the entire site, replacing the current Google Fonts Inter import.

### Implementation Steps

**1. Copy Font File to Project**
Copy `user-uploads://InterTight-Black.ttf` → `public/fonts/InterTight-Black.ttf`

The `public/` folder is the right place since fonts referenced in CSS work best from there (no need to import as JS module).

**2. Register the Font in `src/index.css`**
Add a `@font-face` declaration at the top of the file (before the `@tailwind` directives area, after removing the Google Fonts Inter imports):

```css
@font-face {
  font-family: 'InterTight';
  src: url('/fonts/InterTight-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
```

Since only the Black (900) weight is being uploaded, it will be applied to all headings and bold text. The body text will fall back to system `Inter` or system sans-serif for lighter weights.

**3. Update `tailwind.config.ts`**
Replace `Inter` with `InterTight` as the first font in the `sans` stack so Tailwind's `font-sans` utility uses it:

```ts
fontFamily: {
  sans: ['InterTight', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
}
```

**4. Update `src/index.css` body + heading rules**
Change `font-family` references from `'Inter'` to `'InterTight'`:

```css
body {
  font-family: 'InterTight', 'Inter', system-ui, sans-serif;
}

h1, h2, h3, h4 {
  font-family: 'InterTight', system-ui, sans-serif;
}
```

### Important Note on Weight

The uploaded file is **InterTight-Black** (weight 900). This means:
- Headings and bold text will render in InterTight's Black weight — very impactful and sharp
- Body text (weight 400–600) will technically use the same font file but the browser will simulate lighter weights, OR fall back to system Inter for anything not declared as bold

If you'd like to upload additional weights (e.g., Regular 400, Medium 500, SemiBold 600), I can register all of them separately for full typographic control.
