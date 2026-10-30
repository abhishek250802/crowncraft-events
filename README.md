# Crowncraft Events

Marketing website for [Crowncraft Events](https://www.instagram.com/crowncraftevents2.o/), an event management company in Varanasi — weddings, birthdays, corporate events and college fests.

**Live site:** https://crowncraft-events.vercel.app

## Stack

Plain HTML/CSS/JS — no build step, no dependencies. Deployed on Vercel, auto-deploying from the `main` branch.

## Structure

```
index.html      # all page markup
css/style.css   # styles
js/script.js    # mobile nav + WhatsApp contact form
images/         # gallery & hero photos
favicon.svg
```

## Local development

Serve the folder with any static file server, e.g.:

```bash
npx serve .
```

## Editing content

- Contact details, address and services live directly in `index.html`.
- The contact form builds a WhatsApp message client-side (`js/script.js`) — no backend required.
