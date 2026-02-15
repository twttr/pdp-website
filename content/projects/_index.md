---
title: "Projects"
layout: "single"
ShowToc: false
ShowReadingTime: false
comments: false
---

A selection of personal projects I've built and maintain.

---

## KPuppy

{{< gallery >}}
/images/projects/kpuppy/screen1.png
/images/projects/kpuppy/screen2.png
/images/projects/kpuppy/screen3.png
/images/projects/kpuppy/screen4.png
{{< /gallery >}}

A lightweight webOS LG TV app for KinoPub online cinema.

- Netflix-style dark UI optimized for TV remote navigation
- Device code authentication
- Browse movies, series, concerts, documentaries, TV shows
- Continue watching & search
- Multi-language support (English, Russian, German)
- Quality selection (4K, 1080p, 720p, 480p)

**Tech Stack:** Preact, TypeScript, Vite, Vitest

[GitHub →](https://github.com/twttr/KPuppy)

---

## kpuppy-backend

Lightweight comments API with WebSocket support. Backend service for the KPuppy ecosystem.

- Real-time comments via WebSockets
- RESTful API endpoints
- CI/CD with GitHub Actions

**Tech Stack:** Go, Echo

[GitHub →](https://github.com/twttr/kpuppy-backend)

---

## Blurry

{{< gallery >}}
/images/projects/blurry/screen1.png
/images/projects/blurry/screen2.png
/images/projects/blurry/screen3.png
/images/projects/blurry/screen4.png
{{< /gallery >}}

A macOS menu bar utility for creating blur, darken, or picture overlay effects on specific screen areas.

- Multiple effect types: blur, darken, picture overlays
- Persistent overlays across all Spaces and Desktops
- Multi-display support
- Hover detection to temporarily hide overlays
- Global hotkey (Cmd+Shift+B)
- Menu bar app (no dock icon)

**Tech Stack:** Swift, SwiftUI, macOS 12+

[GitHub →](https://github.com/twttr/blurry)

---

## Mirroreu

A lightweight macOS menu bar app that enables iPhone Mirroring in the EU by modifying system eligibility settings.

- One-click toggle to enable or disable iPhone Mirroring from the menu bar
- Automatic persistence via a privileged helper daemon
- Full Disk Access detection with setup guidance
- Localized in 23 languages
- Menu bar app (no dock icon)

**Tech Stack:** Swift, SwiftUI, macOS 15.2+

[GitHub →](https://github.com/twttr/mirroreu)

---

## Multi-Product Comparator

{{< gallery >}}
/images/projects/multi-product-comparator/screen1.png
{{< /gallery >}}

Chrome extension that highlights shops carrying all your selected products on price comparison sites.

- Add products to a compare list from any supported product page
- Shops stocking all selected items are highlighted in green
- Supports idealo, Geizhals, billiger.de, guenstiger.de across multiple countries
- Localized UI matching each domain's language (German, English, French, Spanish, Italian, Polish)

**Tech Stack:** TypeScript, esbuild, Chrome Extension Manifest V3, Vitest

[GitHub →](https://github.com/twttr/multi-product-comparator)
