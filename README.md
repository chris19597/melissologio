# melissologio

Static support site for the Melissologio (beehive tracking) app, served via GitHub Pages.

## Pages
- `index.html` — landing page
- `features.html` — feature overview
- `privacy-policy.html` — privacy policy
- `delete-account.html` — account deletion instructions

## Local preview
It is plain static HTML — serve the folder and open it in a browser:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

GitHub Pages serves these same files on push to the `main` branch.