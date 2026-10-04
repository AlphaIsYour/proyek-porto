# Product Roadmap & GitHub Issues Specification

This document provides industry-standard specifications for 8 priority features to scale **Yoralph (Brainwave)** into a production-grade AI SaaS and developer portfolio platform.

---

## Issue 1: [FEAT] Interactive AI Chatbot Sandbox with Streaming LLM Responses

- **Labels**: `enhancement`, `priority: high`, `ai/llm`, `frontend`
- **Estimate / Milestone**: Sprint 1 / Q1 Milestone

### User Story
As a prospective client or SaaS evaluator,  
I want to test a live generative AI chat prompt directly within an interactive drawer or modal on the website,  
So that I can experience the platform's AI capability firsthand before registering or purchasing a subscription.

### Technical Specification
- Create an interactive floating/drawer chat component (`src/components/ChatModal.jsx`).
- Integrate client-side streaming completions using OpenAI API or Google Gemini API via serverless endpoint or direct API key configuration.
- Implement markdown rendering for chat messages with syntax highlighting for code snippets.
- Add mock fallback mode when no API key is configured to allow offline demonstration.

### Work Checklist
- [ ] Create `ChatModal.jsx` matching the cyberpunk dark-mode aesthetic (`#0E0C15`, border glowing gradients).
- [ ] Connect input field to streaming chat handler with abort controller support.
- [ ] Add code block copy button and syntax highlighter (`prismjs` or `highlight.js`).
- [ ] Implement rate-limiting / token usage badge on client.
- [ ] Update `Generating.jsx` status widget to trigger or link with the active sandbox.

### Acceptance Criteria
- [ ] User can send a message and see real-time streaming tokens render without UI freezing.
- [ ] Chat modal complies with responsive mobile and desktop screen sizes.
- [ ] Graceful error message displayed if network or API quota error occurs.

---

## Issue 2: [FEAT] Authentication & User Profile State Management (OAuth2)

- **Labels**: `enhancement`, `priority: high`, `auth`, `security`
- **Estimate / Milestone**: Sprint 1 / Q1 Milestone

### User Story
As an existing or new user,  
I want to sign in using GitHub or Google OAuth2 and manage my profile session,  
So that my chat history, preferences, and subscription tier status persist across visits.

### Technical Specification
- Replace dummy `#login` and `#signup` anchors in `Header.jsx` with active authentication handlers.
- Integrate lightweight authentication provider (Supabase Auth, Firebase, or Clerk).
- Store active user session in React Context / Zustand store.
- Render user avatar, name, and logout option in header when authenticated.

### Work Checklist
- [ ] Scaffold `AuthContext.jsx` with `login()`, `logout()`, and `user` state.
- [ ] Create `AuthModal.jsx` for modal-based sign-in and sign-up.
- [ ] Configure OAuth providers (GitHub & Google).
- [ ] Add session token storage in secure cookies or encrypted local storage.
- [ ] Update `Header.jsx` to dynamically render user profile dropdown when logged in.

### Acceptance Criteria
- [ ] User can authenticate via OAuth provider and redirect smoothly back to previous page state.
- [ ] Navigation header dynamically swaps "Sign in" button with user avatar and menu.
- [ ] User session persists on page refresh.

---

## Issue 3: [FEAT] Dynamic Payment Gateway & Subscription Checkout Flow

- **Labels**: `enhancement`, `priority: high`, `monetization`, `integration`
- **Estimate / Milestone**: Sprint 2 / Q2 Milestone

### User Story
As an interested customer,  
I want to click "Get started" on the Premium ($9.99/mo) or Basic ($0) tier cards and enter a seamless checkout flow,  
So that I can subscribe to the platform using credit card or localized payment methods.

### Technical Specification
- Integrate Stripe Elements or Midtrans Snap payment gateway SDK.
- Connect `PricingList.jsx` action buttons to an asynchronous checkout session creator.
- Provide a webhook receiver (or mock fulfillment handler) to handle successful subscription status.
- Add monthly/yearly billing toggle with a 20% discount badge.

### Work Checklist
- [ ] Add billing toggle (`Monthly` vs `Yearly`) in `src/components/Pricing.jsx`.
- [ ] Create checkout trigger handler on "Get started" button in `PricingList.jsx`.
- [ ] Display loading spinner during checkout session generation.
- [ ] Implement success (`/checkout/success`) and cancelled (`/checkout/cancel`) toast notifications or modal states.
- [ ] Display active tier badge if user is logged in.

### Acceptance Criteria
- [ ] Clicking payment buttons opens the designated payment modal / gateway URL without console errors.
- [ ] Toggling billing frequency recalculates plan price labels dynamically.
- [ ] Complete transaction feedback displayed clearly to user.

---

## Issue 4: [FEAT] Dynamic Project Portfolio & Case Studies CMS

- **Labels**: `enhancement`, `priority: high`, `portfolio`, `cms`
- **Estimate / Milestone**: Sprint 2 / Q2 Milestone

### User Story
As an IT recruiter or enterprise client reviewing Alphareno's work,  
I want to inspect detailed case studies of actual software engineering and AI projects,  
So that I can evaluate code quality, tech stack details, and live project demos.

### Technical Specification
- Introduce structured portfolio projects schema in `src/constants/projects.js` or via localized Markdown/MDX files.
- Replace generic placeholder cards in `#portfolio` / `Roadmap.jsx` with detailed project cards.
- Add modal or expandable drawer showing project architecture diagrams, problem statements, and outcomes.
- Include direct links to GitHub repositories, live deployments, and interactive previews.

### Work Checklist
- [ ] Define `Project` data model (title, slug, summary, techStack, githubUrl, liveUrl, thumbnail, metrics).
- [ ] Implement project card component with tag filters (e.g., `All`, `AI/ML`, `Web Development`, `Full Stack`).
- [ ] Build modal detail view for deep dive into architectural decisions.
- [ ] Populate data with at least 4 real-world projects by Alphareno.

### Acceptance Criteria
- [ ] Projects can be filtered dynamically by category/tag without full page reloads.
- [ ] Each project card links to verifiable live demo and/or repository.
- [ ] Layout remains visually harmonious with the futuristic dark aesthetic.

---

## Issue 5: [FEAT] Interactive Contact & Lead Capture Form with Instant Notification

- **Labels**: `enhancement`, `priority: medium`, `leads`, `integration`
- **Estimate / Milestone**: Sprint 3 / Q2 Milestone

### User Story
As an enterprise lead or recruiter,  
I want to submit an inquiry or project proposal directly through an intuitive contact form,  
So that I can easily connect with the developer and receive a prompt response.

### Technical Specification
- Create a designated contact section (`src/components/Contact.jsx`) with inputs for Name, Email, Subject, Budget Range, and Message.
- Implement client-side form validation (email format, required fields) using `react-hook-form` or native form validation.
- Dispatch submission payloads via Formspree, Resend API, or a Discord/Telegram webhook.
- Provide accessible micro-feedback (submitting, success, error) with celebratory micro-animations.

### Work Checklist
- [ ] Scaffold `Contact.jsx` with responsive grid layout and futuristic form controls.
- [ ] Implement input validation with informative error messages.
- [ ] Connect submission handler to webhook or transactional email API.
- [ ] Add spam protection (honeypot field or Cloudflare Turnstile).
- [ ] Integrate into main page layout and header navigation (`#contact`).

### Acceptance Criteria
- [ ] Submitting valid data sends formatted alert to recipient channel within seconds.
- [ ] Form displays clear confirmation message upon successful delivery.
- [ ] Invalid inputs are highlighted with assistive error feedback.

---

## Issue 6: [FEAT] Internationalization (i18n) Support for English & Bahasa Indonesia

- **Labels**: `enhancement`, `priority: medium`, `i18n`, `ux`
- **Estimate / Milestone**: Sprint 3 / Q3 Milestone

### User Story
As an Indonesian or international visitor,  
I want to toggle the site content between English and Bahasa Indonesia,  
So that I can read information in my preferred language without grammatical inconsistencies.

### Technical Specification
- Install and configure `i18next` and `react-i18next`.
- Extract text strings from `src/constants/index.js` and JSX components into locale JSON dictionaries (`locales/en.json`, `locales/id.json`).
- Implement language switcher toggle button in `Header.jsx`.
- Persist language preference in `localStorage` and fallback to browser language.

### Work Checklist
- [ ] Set up `i18n.js` configuration with English as default.
- [ ] Generate `locales/en.json` and `locales/id.json` translation files.
- [ ] Refactor navigation, hero tagline, benefits, pricing, and roadmap text to use translation keys.
- [ ] Add compact language toggle component in header navigation.

### Acceptance Criteria
- [ ] Switching language updates all UI copy instantly without page refresh.
- [ ] User's selected language persists upon browser reload.
- [ ] Layout remains properly aligned across both languages without text overflow.

---

## Issue 7: [FEAT] Automated CI/CD Pipeline & Code Quality Gates via GitHub Actions

- **Labels**: `devops`, `priority: medium`, `ci-cd`, `testing`
- **Estimate / Milestone**: Sprint 4 / Q3 Milestone

### User Story
As a project maintainer and open-source contributor,  
I want automated continuous integration checks to run on every commit and pull request,  
So that regressions, broken builds, or linting failures are detected before deployment.

### Technical Specification
- Create `.github/workflows/ci.yml` running on Ubuntu runners for push and pull request events.
- Execute steps: Dependency installation (`npm ci`), ESLint lint check (`npm run lint`), Production build (`npm run build`).
- Set up automatic deployment action to Vercel, Netlify, or GitHub Pages upon merging into `master`.

### Work Checklist
- [ ] Write `.github/workflows/ci.yml` with Node.js matrix testing (`v20.x`, `v22.x`).
- [ ] Add dependency caching (`actions/cache`) to minimize workflow duration.
- [ ] Add build artifact validation step.
- [ ] Include status badge in `README.md`.

### Acceptance Criteria
- [ ] Workflow triggers automatically on commits to `master` and pull requests.
- [ ] Workflow fails if any ESLint error or build compilation failure occurs.
- [ ] Total workflow runtime remains under 2 minutes.

---

## Issue 8: [FEAT] Core Web Vitals & Asset Optimization (WebP/AVIF Image Pipeline)

- **Labels**: `performance`, `priority: medium`, `seo`, `optimization`
- **Estimate / Milestone**: Sprint 4 / Q4 Milestone

### User Story
As a mobile user on a bandwidth-constrained network,  
I want pages and rich graphical elements to load in under 1.5 seconds,  
So that I experience zero lag, jitter, or layout shifts when scrolling through animations.

### Technical Specification
- Convert heavy PNG/JPG assets (e.g., `service-1.png` 1.7MB, `service-2.png` 1.8MB, `gradient.png` 2.3MB) into next-gen WebP/AVIF formats.
- Implement responsive picture tags or lazy-loading on off-screen assets below the fold.
- Add comprehensive OpenGraph (`og:image`, `og:title`, `twitter:card`) meta tags in `index.html`.
- Add PWA web manifest and offline service worker.

### Work Checklist
- [ ] Compress and convert raster assets in `src/assets/` into compressed `.webp` with modern fallback.
- [ ] Add `loading="lazy"` attributes on non-critical images in `Services.jsx` and `Roadmap.jsx`.
- [ ] Add Open Graph and Twitter Card tags in `index.html`.
- [ ] Audit and optimize bundle chunking in `vite.config.js` (`splitVendorChunkPlugin`).
- [ ] Run Lighthouse audit to achieve 95+ score in Performance and SEO.

### Acceptance Criteria
- [ ] Total production build asset payload reduced by at least 65%.
- [ ] First Contentful Paint (FCP) under 1.2s on mobile emulation.
- [ ] Rich social preview cards render accurately when sharing URL on Discord, Twitter, and LinkedIn.
