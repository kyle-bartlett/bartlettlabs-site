## 🎭 Brand Persona: The Nerdy Hillbilly
- **Voice:** Purdue Engineer meets Small-Town Handshake. No jargon.
- **Visuals:** Modern Workshop. Navy (#1B263B), Burnt Orange (#C05746), Parchment (#F5F3F0).
- **Core CTA:** "Request a 10-Minute Efficiency Audit."
- **Constraint:** Remove all McKinsey/Big Tech jargon. Focus on "Digital Shop Foreman."
- **ABOUT ME ** USE THE ABOUT ME AT THE BOTTOM OF THIS FILE; DO NOT REVERT TO "CORPORATE SPEAK" WITHIN THIS FILE.

Before every compaction, update the 'Current State' in CLAUDE.md with the exact logic we just finalized for [Feature X] so we don't lose it if the terminal crashes.


# PROJECT BRAIN: [Project Name]

## 🧠 Persistence Protocol (CRITICAL)
- **Zero-Trust Memory:** Do not rely on "internal memory" or "compaction" for architectural decisions.
- **The Source of Truth:** If a plan, logic flow, or variable mapping is not written in this file or `ROADMAP.md`, it does not exist.
- **Handoff Rule:** Before every session "compaction" or exit, update the "Current State" section below with technical specifics, not summaries.

## 🛠 Tech Stack & Conventions
- **Commands:** Use `cc` for general work, `ccr` to resume.
- **Style:** [e.g., TypeScript, Functional, Pythonic]
- **Testing:** [e.g., Run `npm test` before committing]

---

## 📍 Current State
- **Last Milestone:** Modern Workshop Overhaul complete (2026-02-24). All 10 steps implemented. Build passes.
- **Active Context:** Single-page landing at `/` with new Workshop aesthetic. Sub-pages (services, about, contact, industries/*) still use old design with CalendlyButton compatibility wrapper pointing to GHL.
- **Pending Logic:** ElevenLabs (Silvy) voice widget integration not yet started. Sub-page migration to Workshop design not yet started.
- **Key Files Changed:** globals.css, layout.tsx, page.tsx, Hero.tsx, HeroCanvas.tsx, HeroVisual.tsx, AuditButton.tsx, Founder.tsx, Services.tsx, Proof.tsx, DiagnosticAudit.tsx, FinalCTA.tsx, Header.tsx, Footer.tsx
- **Key Files Deleted:** Industries.tsx, Demo.tsx, ProblemSolution.tsx, ChatBubble.tsx, Process.tsx, calendly.d.ts
- **GHL Booking URL:** `https://api.leadconnectorhq.com/widget/booking/tnWattFiELBGpctlleU8`

## 🗺 Strategic Roadmap (The "Long-Term" Memory)
1. [x] **Workshop Overhaul:** Complete — see ROADMAP.md for details
2. [ ] **Sub-page Migration:** Migrate /services, /about, /contact, /industries/* to Workshop design
3. [ ] **ElevenLabs Voice Widget:** Integrate Silvy voice widget
4. [ ] **Visual QA:** Test 3D hero + GHL iframe on mobile/desktop

---

## 🛑 Blockers & Gotchas
- CalendlyButton.tsx kept as GHL compatibility wrapper — 7 sub-pages depend on it. Replace with AuditButton imports when migrating sub-pages.
- `@react-three/drei` RoundedBox used for 3D blocks — requires drei v10+.
- GHL iframe may need height adjustment depending on booking form length.


## USE THIS FOR THE "ABOUT ME" BRAND VOICE REFERENCE

"🏗️ The "Nerdy Hillbilly" About Me
Headline: From the Shop Floor to AI Engineering
"I grew up in a town of 1,000 people in rural Indiana, hand-washing cars and working the shop floor at my family’s Ford dealership. I learned early on that in a small town, your reputation is the only thing that keeps you in business. You treat people right, you do the job properly, or you don't stay in business.

After graduating with an Industrial Engineering degree from Purdue, I spent 15 years in the corporate world—working for global giants like Apple and leading AI automation teams for international brands. I realized that the businesses that need this technology the most are the ones being left behind by the 'big tech' firms because those firms think local service is 'too small' for them.

I built Bartlett Labs to bridge the gap between old-school service and the new world of AI. I’m a Purdue-trained engineer who isn't afraid to get his hands dirty. I don’t sell jargon or fluff; I build the sturdy, automated systems that work as hard as you do.

Purdue Engineering meets a Small-Town Handshake. Let’s get your Sundays back."


## FOOTER BLURB

📍 The "Crosby Touch" Footer Blurb
"I work remote full-time in Texas and call Crosby home. When you hire Bartlett Labs, you aren't talking to a bot overseas; you’re talking to a neighbor who knows the value of hard work and a job done right."

