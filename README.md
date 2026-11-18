# UcheXBuilds

**Smart workflows. Seamless operations. Built for healthcare and business productivity.**

Static HTML, CSS and vanilla JavaScript. No framework, package manager or build command is required. Cloudflare Pages publishes the repository root.

## Upgrade branch
The website refresh is being prepared on `site-upgrade`. Do not merge it into `main` until the owner approves the preview.

## Before enabling the waitlist or announcing launch
- [x] Connect the waitlist form to the supplied Formspree endpoint. Submit a test and confirm delivery to `assist@uchexbuilds.site` before launch.
- [ ] If desired, enable free Cloudflare Web Analytics and add the site token to the commented snippet in `index.html`.
- [ ] Add the supplied founder portrait at `assets/images/founder-photo.jpg` and confirm the alt text. The source image is ready locally but has not yet been committed to this branch.
- [ ] Review or replace `assets/images/og-image.svg` if a final sharing image is preferred.
- [ ] Add the approved one-page `downloads/Patient-Intake-Checklist.pdf`; the existing checklist source was not present among the files available to this edit, so the download remains a placeholder until the correct PDF is added.
- [ ] Edit the launch window in the sneak-peek section of `index.html`.
- [ ] Replace the LinkedIn placeholder URL in `index.html`.
- [ ] Review the privacy and terms drafts against actual services and applicable requirements.
- [ ] Update the privacy notice with the selected form provider and retention details before collecting emails.

## Safety and content boundaries
All examples use fictional data. Do not commit patient information or PHI. The toolkit provides operational education only; it does not replace clinical judgement, legal advice, regulatory certification or an organisation's approved policies.

## Deployment
- Build command: none
- Output directory: repository root (`/`)
