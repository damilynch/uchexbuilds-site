# Remote Healthcare Operations Hub — Prototype

UcheX Builds flagship product prototype. This branch is intentionally isolated from the public marketing-site `main` branch.

## Product direction

The Hub is an interactive, responsive web toolkit for remote healthcare professionals, healthcare practices and shared teams. It is educational and administrative workflow support only. It is not clinical training, legal advice, compliance certification or a guarantee of reimbursement.

## Prototype v0.1

The first front-end prototype includes:

- **Overview:** audience entry points and the end-to-end administrative operating sequence.
- **Professional Learning Centre:** six-topic Remote Patient Access, Registration & Coordination pathway, progress checkboxes and a branching data-quality scenario with explanatory feedback.
- **Healthcare Practice Centre:** remote workforce readiness checklist covering role boundaries, coverage, approved systems, access, security, supervision, quality review and onboarding.
- **Shared Team Onboarding Centre:** starter responsibility matrix and first-week checklist.
- **Lakeview Simulation:** fictional queue tasks and a queue-closeout checklist.

## Safety and data boundaries

- All training cases are fictional. No real patient records or patient uploads are collected.
- No live EHR, payer portal, payment service or clinical system is connected.
- The prototype does not make eligibility determinations or clinical decisions.
- Clinical triage, diagnosis, treatment, medical necessity decisions and clinical judgement remain with authorised clinical personnel.
- Do not merge or delete records based on name similarity or shared details alone.
- Practice access, cross-border access, security controls and delegated tasks require practice approval.

## Technical approach

- Static HTML, CSS and JavaScript; no framework or build step.
- Front-end interactions only. No authentication, database, accounts or server-side progress tracking.
- No API keys, secrets, patient uploads or payment-card collection.
- Intended hosting direction: Cloudflare Pages, subject to preview and deployment checks.

## Next build steps

1. Review the prototype on desktop and mobile and refine the user journeys.
2. Build out the full patient-access learning content from the approved SOP and Lakeview fictional sample assets.
3. Add the resource pack: SOP, coordination tracker, demographic data-quality exercise, message templates, practice readiness checklist, onboarding plan, responsibility matrix and handoff form.
4. Test keyboard access, responsive behaviour, content clarity and accessibility.
5. Pilot with a small test group before publishing or adding paid access.

## Source of truth

The product scope follows the UcheX Builds Product Blueprint & Project Checklist (Version 1.0, 11 November 2026). Expand the first release only after the prototype has been tested.
