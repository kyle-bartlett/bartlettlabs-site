# BARTLETT LABS REHAUL ROADMAP

## Phase 1: Visual Engine
- [x] Setup Three.js Isometric Baseplate (LEGO-style).
- [x] Configure Tailwind with Navy/Orange/Parchment palette.
- [x] Implement Slab Serif (Arvo) for Headlines.

## Phase 2: The "Handshake" Content
- [x] Rewrite "About" section: Ford Dealership + Purdue + Apple.
- [x] Replace "Industries" with Bento Grid service cards.
- [x] Build the "Service Menu" Cards (Lead Wrangler, Weekend Recovery, Custom Lab Build, Digital Vault).
- [x] Build Proof of Concept section (SMS Lead-Responder, Invoicing Automation).

## Phase 3: GHL & Voice Integration
- [x] Embed GHL "Efficiency Audit" booking iframe with form_embed.js.
- [x] Replace Calendly with GHL booking URL across all components.
- [ ] Integrate ElevenLabs (Silvy) Voice Widget (deferred — not in current sprint).

## Phase 4: Trust & Local Proof
- [x] Add "Digital Vault" (Security/Privacy) section with 3-lock guarantee.
- [x] Add pricing section (Lead Wrangler, Weekend Recovery, Custom Lab Build).
- [x] Add "Hand-Built in Texas" / "Crosby Grown" footer badges.
- [x] Add "Your Data Stays in Your Shop" security badge.

---

## TECHNICAL DEBT & ARCHITECTURAL LOG

### 2026-02-24 — Modern Workshop Overhaul Complete
- **Completed:**
  - `globals.css`: Full palette overhaul (Parchment #F5F3F0, Navy #1B263B, Burnt Orange #C05746, Sage Green #84A59D). Arvo slab-serif for --font-heading. Rounded Workshop-style buttons replacing sharp Baseten style.
  - `layout.tsx`: Added Arvo font via next/font/google. Removed Calendly Script tag and CSS import. Updated metadata for Crosby, TX.
  - `HeroCanvas.tsx`: Rewritten with Navy LEGO baseplate (10x10 stud grid), 4 animated RoundedBox blocks (Lead Capture, AI Follow-Up, Scheduling, Invoicing), isometric PerspectiveCamera at [10,10,10] fov 35, OrbitControls with autoRotate, reduced-motion fallback.
  - `Hero.tsx`: New copy — "World-class systems. Small-town values." Tags: Purdue Engineering, AI Automation, Crosby TX. CTA links to GHL.
  - `AuditButton.tsx`: New component, links to GHL booking URL.
  - `CalendlyButton.tsx`: Converted to GHL compatibility wrapper (7 sub-pages still import it).
  - `Founder.tsx`: Full "Nerdy Hillbilly" bio from CLAUDE.md. Indiana, Ford dealership, Purdue, Apple, 15 years corporate.
  - `Services.tsx`: Bento Grid with 4 cards (Lead Wrangler, Weekend Recovery, Custom Lab Build, Digital Vault). Framer Motion spring hover { mass: 1, stiffness: 170, damping: 26 }.
  - `Proof.tsx`: Two proof cards with honest language — "Beta Testing Complete", "Prototype Active". Burnt Orange metrics, Navy left border.
  - `DiagnosticAudit.tsx`: GHL booking iframe embed with form_embed.js script, security footer.
  - `FinalCTA.tsx`: SecurityBadge (Encrypted & Local, No Data Training) + 3-tier pricing.
  - `Header.tsx`: Slab-serif wordmark, anchor links (#services, #about, #audit), Burnt Orange CTA.
  - `Footer.tsx`: Navy bg, Crosby blurb from CLAUDE.md, "Hand-Built in Texas" badge, LinkedIn link.
  - `page.tsx`: Reordered — Header > Hero > Founder > Services > Proof > DiagnosticAudit > FinalCTA > Footer.
  - Deleted: Industries.tsx, Demo.tsx, ProblemSolution.tsx, ChatBubble.tsx, Process.tsx, calendly.d.ts.
- **Unfinished Logic:** ElevenLabs (Silvy) voice widget integration deferred.
- **Variable Mapping:** GHL booking URL = `https://api.leadconnectorhq.com/widget/booking/tnWattFiELBGpctlleU8`

---

## PERSISTENT TODO (The "Next Step" Buffer)
1. [ ] **NEXT:** Visual QA — check 3D hero renders correctly on desktop + mobile, test GHL iframe loads
2. [ ] **THEN:** Integrate ElevenLabs voice widget (Phase 3 remaining item)
3. [ ] **THEN:** Migrate industry/services/about/contact sub-pages to new Workshop design + replace CalendlyButton imports with AuditButton
