# interactive-design-demo

A single-page static HTML/CSS/JavaScript layout template with placeholder content ("Lorem ipsum") and a few scroll and motion interactions.

## Overview

`index.html` (title "Document") uses Bootstrap (`assets/css/bootstrap.min.css`) plus custom styles (`assets/css/style.css`) and Google Fonts (Lobster, Poppins). It has a fixed header with a placeholder "Logo" link and a cover section.

`assets/js/app.js` (~70 lines) implements a navbar that switches to an active style after scrolling roughly a third of the viewport height, and a small "ball" animation in the cover section.

## Running

No build step or dependencies. Open `index.html` or serve the directory with any static file server.

## Layout

```
index.html
assets/css/   Bootstrap and custom styles
assets/js/    app.js
```
