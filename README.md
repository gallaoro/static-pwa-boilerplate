# Basic html template for modern static websites

Ready to create a static [progressive web app](https://developers.google.com/web/progressive-web-apps/) with a manifest and a serviceworker, easily deployable with [Github pages](https://pages.github.com/).

Includes:

* Thumbnail images
* [Skeleton CSS](http://getskeleton.com/) + normalize
* Web app manifest
* Basic service worker + registration companion
* Initial web push notification support (you will need a external server)

#### DEMO: [https://lellefood.github.io/static_pwa_boilerplate/](https://lellefood.github.io/static_pwa_boilerplate/) or visit the gh-pages branch of this repository

![demo application](static.png "Installation prompt -> Installed notification -> PWA in application list -> PWA loading screen")

### Installation

* Install git `sudo apt-get install git`
* Clone the repo: `git clone https://github.com/lellefood/static_pwa_boilerplate.git`
* Rename directory: `mv static_html_template <new_project_name>`
* Change directory: `cd <new_project_name>`
* Modify the `manifest.json` with your informations
* Start writing your website

### Developing

#### Project folder stucture

```
root
├── css
│   └── skeleton.css
│   └── normalize.css
│   └── index.css
│
├── js
│   └── index.js
│
├── img
│   └── thumb
│       └── 64.png
│       └── 144.png
│       └── 192.png
│       └── 512.png
│       └── 1366x768.png
│
├── index.html
├── manifest.json
├── README.md
└── serviceworker.js
```

#### FAQ

* **How can I add a new page?** Add a new file `<new_page_name>.html` in the root of the project.  
Link to it with `/<new_page_name>.html`

* **How can I add web push notifications?** The initial code to get a pushSubscription is already given in the `index.js` script, follow [this tutorial](https://web-push-book.gauntface.com/) to know how web push work.

### Deploy

Follow the instructions on [Github pages website](https://pages.github.com/)
