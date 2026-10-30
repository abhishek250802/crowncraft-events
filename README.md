# Crowncraft Events

Marketing website for [Crowncraft Events](https://www.instagram.com/crowncraftevents2.o/), an event management company in Varanasi led by Director Abhiraj Kumar Chaudhary — weddings, corporate events, social events, cultural fests and sports events.

**Live site:** https://crowncraft-events.vercel.app

## Stack

Plain HTML/CSS/JS — no build step, no dependencies. Deployed on Vercel, auto-deploying from the `main` branch.

## Structure

```
index.html      # home — hero, highlights, upcoming event, teasers
about.html      # company story, stats, director profile
services.html   # service categories (sports, weddings, corporate, social, cultural, more)
gallery.html    # filterable photo gallery + lightbox
contact.html    # enquiry form (WhatsApp + email) + map
css/style.css   # styles
js/script.js    # nav, scroll reveal, gallery filter, lightbox, contact form
images/         # photos (images/uploads/ is a local scratch folder, gitignored)
favicon.svg
```

## Local development

Serve the folder with any static file server, e.g.:

```bash
npx serve .
```

## Editing content

- Each page's content lives directly in its own HTML file.
- The contact form (`contact.html`) builds a WhatsApp message and a mailto link client-side (`js/script.js`) — no backend required.
