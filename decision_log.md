# Decision Log: Assessment 3

## Embed and API choices
- **Map:** I embedded an OpenStreetMap map of the Fish Creek Loop area. It is free, needs no account or API key, and keeps the page simple.
- **Weather:** I used the Open-Meteo API with `fetch()`. It is free, needs no key, and returns the current temperature and wind speed for the trail's latitude and longitude.
- **Errors:** If the weather request fails, a `try/catch` shows a friendly message ("Sorry, we can't load the weather right now") instead of a broken page.

## Privacy measures
- The map iframe uses `loading="lazy"` so it only loads when the visitor scrolls to it.
- `referrerpolicy="no-referrer"` stops the embed from seeing which page the visitor came from.
- `sandbox="allow-scripts allow-same-origin"` limits the embed to only what the map needs.
- **Residual third-party tracking:** OpenStreetMap and Open-Meteo can still see the visitor's IP address and browser details when the map and weather load. I use no cookies, analytics, or ad scripts of my own.

## Optimization steps
- I saved the photo into my own folder instead of linking to another website, which removes a third-party image request.
- The hero image is provided as WebP with a JPEG fallback using `<picture>`, in two sizes (480px and 960px) with `srcset`. It has `width` and `height` set to prevent layout shift.
- The map scales to the screen width and is taller on larger screens.
- I did not import a CSS framework, so there was no unused framework CSS to remove. All styling is in my own `styles.css`.

## SEO and AIO metadata
- `<html lang="en">`, `<title>`, `meta viewport`
- `meta name="description"`
- `meta name="author"`
- `meta name="robots"` (`index, follow`)
- Open Graph: `og:title`, `og:description`, `og:type`, `og:image`
- JSON-LD structured data (`schema.org` `WebPage`) so search engines and AI tools can understand the page
- Descriptive `alt` text on the hero image and a `title` on the map iframe