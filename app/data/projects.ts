export type Project = {
  id: number
  title: string
  description: string
  image: string
  /** Generic project URL. Optional — leave undefined for proprietary
   *  projects so the detail page renders a disabled button. */
  link?: string
  tags: string[]
  categories: string[]
  subcategory?: string
  detailedDescription?: string
  features?: string[]
  technologies?: string[]
  challenges?: string[]
  solutions?: string[]
  screenshots?: string[]
  year?: string
  role?: string
  outcome?: string
  liveUrl?: string
  repoUrl?: string
  /** Path to a scroll-through preview WebM. When set, the detail page
   *  shows this autoplay-muted-loop video in place of the static hero. */
  previewVideo?: string
  /** Optional poster frame for the previewVideo. */
  previewPoster?: string
}

export const projects: Project[] = [
  {
    id: 3,
    title: "BuildWhatYouWant",
    year: "2026",
    role: "Founder, Designer & Engineer",
    description:
      "A sales conversion platform: a custom website is hand-built for a local business before they've heard of me. The owner enters a 6-digit PIN, sees their finished site, and checks out.",
    image: "/projects/buildwhatyouwant/hero.png",
    link: "https://github.com/semajzandrews/buildwhatyouwant",
    repoUrl: "https://github.com/semajzandrews/buildwhatyouwant",
    liveUrl: "https://buildwhatyouwant.com",
    tags: ["Next.js 16", "Stripe", "Framer Motion", "Sales Platform"],
    categories: ["Web Development"],
    subcategory: "Full-Stack Development",
    detailedDescription:
      "BuildWhatYouWant is the sales surface that wraps the IGRIS pipeline. Walk a neighborhood, study storefronts, build sites in advance. Each business receives a unique 6-digit PIN (last six of phone number) printed on a card or QR code. The owner enters the PIN at buildwhatyouwant.com, sees their finished work, and checks out at a flat rate ($149) plus optional industry-specific add-ons. Seven-day preview window — love it or owe nothing. Built on Next.js 16 with Stripe Checkout, Framer Motion scroll choreography, and a Fraunces / Inter / JetBrains Mono typographic stack. FireCrawl + Brave APIs feed ongoing design intelligence into the pipeline.",
    features: [
      "6-digit PIN unlock per business — pre-built preview before any contact",
      "Flat-rate checkout ($149) with industry-specific add-ons",
      "7-day preview window with auto-expire",
      "QR-code-on-card field distribution",
      "Owner self-serve customization (color, copy)",
      "Stripe Checkout integration for one-shot payment",
      "Remotion-generated reveal videos per business",
    ],
    technologies: [
      "Next.js 16 (App Router, React 19, TypeScript)",
      "Tailwind CSS v4",
      "Framer Motion for scroll-triggered animation",
      "Stripe Checkout",
      "FireCrawl + Brave Search for design intelligence",
      "Remotion video pipeline for reveal videos",
    ],
    challenges: [
      "Removing every barrier to 'yes' in a sales motion built around a stranger's offer",
      "Distributing PINs at scale without triggering spam filters",
      "Making a flat-rate checkout feel premium, not cheap",
    ],
    solutions: [
      "Pre-built preview replaces the pitch — the work IS the proposal",
      "Physical-card distribution with QR fallback bypasses email gatekeepers entirely",
      "Editorial typography and intentional motion let the platform read premium at the flat rate",
    ],
    outcome:
      "Platform operational; pipeline of 1,081 local prospects identified across six industries.",
  },

  {
    "id": 87,
    "title": "Alpha Daycare Center",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "Soft, reassuring childcare hero with a 'We hold the whole day' headline and a clean licensed-hours stat row.",
    "image": "/projects/alpha-daycare-center/hero.png",
    "link": "https://alpha-daycare-center.vercel.app",
    "liveUrl": "https://alpha-daycare-center.vercel.app",
    "tags": [
      "Childcare",
      "Warm",
      "Trust"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Warm off-white space and a gentle italic 'whole' set a calm, trustworthy tone for parents working long shifts. A rounded photo of a sunlit playroom sits beside copy that speaks plainly to City of Orange families, while a tidy fact strip lays out licensing, hours, and the 6:30 to 6:30 window. Mustard pill buttons add friendly warmth without ever feeling juvenile.",
    "features": [
      "Reassuring headline with italic emphasis on 'whole'",
      "Licensed-care fact strip with hours and credentials",
      "Rounded, sunlit playroom hero image",
      "Warm mustard pill CTAs for enroll and tour",
      "Plain-spoken copy aimed at long-shift parents"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "A small licensed daycare now communicates safety and long-day coverage at a glance."
  },

  {
    "id": 54,
    "title": "Kador Beauty Salon",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A glowing vanity-bulb mirror frames the portrait while a luminous italic serif spells out \"Sit down. Leave luminous.\" against deep espresso.",
    "image": "/projects/kador-beauty-salon/hero.png",
    "link": "https://kador-beauty-salon.vercel.app",
    "liveUrl": "https://kador-beauty-salon.vercel.app",
    "tags": [
      "Luminous",
      "Editorial Serif",
      "Dark Mode"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "The hero leans on a single theatrical device: a portrait boxed inside a Hollywood vanity-light frame, every bulb modeled to throw real warm glow across near-black walls. A mixed roman-and-italic serif headline does the talking in oversized type, and the muted gold accent threads from the button to the mirror so the whole frame reads as one lit object.",
    "features": [
      "Vanity-bulb mirror frame with modeled glow around the portrait",
      "Oversized roman-plus-italic serif headline treatment",
      "Espresso-and-gold palette pulled through nav, buttons, and frame",
      "Pill CTA buttons paired with an inline review-star strip",
      "Slim top navigation that stays out of the hero's way"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Framer Motion",
      "Lenis"
    ],
    "outcome": "A salon homepage that sells atmosphere on sight, the lit-mirror hero doing the work of a full brand shoot."
  },

  {
    "id": 67,
    "title": "Brandy's Lounge & Liquors",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "An atmospheric liquor-store site lit by amber light streaks, with a bottle hero and the line 'After the streetlights, the good stuff.'",
    "image": "/projects/brandys-lounge-liquors/hero.png",
    "link": "https://brandys-lounge-liquors.vercel.app",
    "liveUrl": "https://brandys-lounge-liquors.vercel.app",
    "tags": [
      "Liquor Store",
      "Atmospheric Glow",
      "Nightlife"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Warm amber ribbons of light sweep across a deep plum background, lending a late-night lounge glow to a single backlit bottle hero. A tall serif headline with an italic 'good stuff' accent and a gold primary button capture the neighborhood bottle-shop voice, with hours and 'Cash & card' details kept close.",
    "features": [
      "Flowing amber light-streak hero backdrop",
      "Backlit bottle product photography",
      "Italic serif accent phrasing",
      "'Call' and 'Get directions' action pair",
      "Open-hours and payment info strip"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A corner bottle shop given a moody, after-hours identity that feels like the neighborhood's late-night destination."
  },

  {
    "id": 85,
    "title": "Saucy Bitez",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "Dark, cinematic restaurant hero where dripping sauce and live flame frame an outline-stroke 'SAUCY BITEZ' logotype.",
    "image": "/projects/saucy-bitez/hero.png",
    "link": "https://saucy-bitez.vercel.app",
    "liveUrl": "https://saucy-bitez.vercel.app",
    "tags": [
      "Cinematic",
      "Dark Mode",
      "Food Photography"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "A near-black canvas hands the whole stage to a single dramatic shot: jerk-glazed meat catching real flame with sauce pulling off the fork. The brand name sits in oversized hollow outline letters, letting the food burn through from behind. Orange spice swatches and a red 'call now' button echo the heat without crowding the photography.",
    "features": [
      "Full-bleed dark food hero with flame and sauce motion",
      "Outline-stroke display logotype layered over imagery",
      "Warm spice-tone swatch row as a visual menu cue",
      "High-contrast red call-to-action against deep black",
      "Minimal top nav that stays out of the photo's way"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "A takeout spot now opens with the kind of moody food hero you'd expect from a flagship steakhouse."
  },

  {
    "id": 95,
    "title": "Mama Lola",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A dark, fire-lit Spanish-language hero ('De la dehesa al fuego') over close-up grilled meat, with a stat row selling provenance and craft.",
    "image": "/projects/mama-lola/hero.png",
    "link": "https://mama-lola.vercel.app",
    "liveUrl": "https://mama-lola.vercel.app",
    "tags": [
      "Restaurant",
      "Dark Mode",
      "Spanish Language"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Mama Lola opens in Spanish on a near-black hero where flame-orange italics ('al fuego') cut through a tight shot of charcoal-grilled Iberian meat. A metrics strip across the bottom (4.5 stars, 100% wood-fired, one daily seating, Elx) reads like a steakhouse credential list. Reserve and menu CTAs sit in burnt-orange and outline pills, leaning into the asador's grill-house identity.",
    "features": [
      "Spanish-first copy for the local clientele",
      "Flame-orange italic accent on a charcoal-dark hero",
      "Close-up grilled-meat photography as the centerpiece",
      "Credential stat row (rating, wood-fired %, seating, town)",
      "Reservation and 'Ver la carta' CTA pair"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "Gave a wood-fire asador a moody, reservation-driven landing page in its customers' language."
  },

  {
    "id": 77,
    "title": "Hundred Wellness",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A warm, inviting wellness hero pairing 'A hundred small ways to feel well' with a sunlit shelf of labeled botanical jars.",
    "image": "/projects/hundred-wellness/hero.png",
    "link": "https://hundred-wellness.vercel.app",
    "liveUrl": "https://hundred-wellness.vercel.app",
    "tags": [
      "Wellness",
      "Warm Palette",
      "Product Photography"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Soft sand backgrounds and oversized friendly type set a neighborhood-apothecary mood, with the word 'well' italicized for warmth. A glowing product photo of remedy jars anchors the right, joined by category chips, a star rating and an open-now badge that make the small Center Street shop feel approachable.",
    "features": [
      "Sand-toned palette with oversized humanist headline",
      "Sunlit product shot of labeled botanical jars",
      "Category chips for botanicals and supplements",
      "Inline star rating and open-now status",
      "Find-the-shop and directions calls to action"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A small wellness shop that feels welcoming and local without trying too hard."
  },

  {
    id: 1,
    title: "IGRIS · Production Website Agent + Quality Bar",
    year: "2025 – present",
    role: "Architect & Engineer (Solo)",
    description:
      "The named craft intelligence behind every site in this portfolio. 9-step pipeline, 4-question quality framework, full tool registry across every modern framework. Mission: beat Awwwards, not match them.",
    image: "/projects/igris/hero.png",
    tags: [
      "Anthropic Claude",
      "Next.js / Vite / Astro",
      "Differentiation Engine",
      "Award-grade",
      "Proprietary",
    ],
    categories: ["AI Development"],
    subcategory: "AI Agents",
    detailedDescription:
      "IGRIS is the craft-layer agent at the center of my build process. It's not a workflow doctrine — it's the named intelligence that picks the stack, defines the signature moment, enforces the quality bar, and ships. Every project starts with four mandatory questions: What's the ONE visual idea that makes this unforgettable? What would someone screenshot and post? What does the visitor feel in three seconds? What design decision here has never been done for this industry before? If I can't answer all four, the design isn't ready and we go back to research. The 9-step pipeline runs Brief → Research (Awwwards + Dribbble + competitor crawl) → Signature moment → Stack selection → Design system → Hero first → Full build → Preview audit → Deploy. The tool registry is deliberately broad — Next.js, Vite, Astro, SvelteKit, Remix on the framework side; GSAP, Framer Motion, Rive, Lottie, Anime.js, Three.js / R3F, Spline, Babylon, WebGPU on the motion + 3D side; Supabase, Neon, PlanetScale, Convex, Clerk, Sanity, Stripe, Mux, Cloudinary, Remotion, Mapbox, Expo on the platform side — because the stack must serve the design vision, not the other way around. Phase 1 (live now): world-class front-end across any stack. Phase 2 (in progress): full-stack autonomy — backend, database, auth, business logic, API layer all built and deployed automatically. Phase 3 (the goal): IGRIS spawns asynchronous autonomous sub-agents, each owning a domain (design, frontend, backend, database, auth, deployment), executing in parallel. A complete production-quality full-stack application in under five minutes. Source is proprietary — happy to walk through in a call.",
    features: [
      "9-step pipeline · Brief → Research → Signature moment → Stack → Design system → Hero → Build → Audit → Deploy",
      "4-question Quality Framework — mandatory before any code is written",
      "Differentiation Engine — fingerprint registry refuses aesthetic repetition across builds",
      "Full tool registry — picks per project, not per template (Next/Vite/Astro/SvelteKit; GSAP/Framer/Rive/R3F; Supabase/Convex/Clerk/Stripe)",
      "Award-tier quality bar — every output benchmarked against Awwwards winners + Dribbble top shots before ship",
      "Phase 2 active: full-stack autonomy (DB, auth, API, business logic)",
      "Phase 3 vision: parallel multi-agent swarm, complete app in under 5 minutes",
    ],
    technologies: [
      "Anthropic Claude (Sonnet / Opus) — agent intelligence core",
      "Claude Code SDK + custom orchestration shell",
      "Stack picked per project: Next.js / Vite / Astro / SvelteKit / Remix",
      "Motion arsenal: GSAP, Framer Motion, Rive, Lottie, Anime.js, Three.js / R3F",
      "Backend arsenal: Supabase, Neon, PlanetScale, Convex, Drizzle, tRPC",
      "Custom differentiation engine + build_registry.json fingerprint store",
    ],
    challenges: [
      "Defining aesthetic distance between two builds in a way the agent can enforce",
      "Preventing drift into a house style under sequential-output pressure",
      "Holding one award-tier quality bar across rapid output, not just one hero build",
    ],
    solutions: [
      "Fingerprint extractor hashes palette + typography + motion grammar into a comparable vector",
      "Differentiation gate at build-start refuses any spec matching the last N fingerprints",
      "4-question quality framework halts the build if any answer is unclear — back to research, never forward to code",
    ],
    outcome:
      "Live and shipping. 24 Orange Corridor sites built and deployed this batch. Pulse Point Logistics greenlit by a real client. Systemomtics, Nails Fever Spa, Southern Komfort, Hong Am all came through IGRIS earlier in the year. Source proprietary — happy to demo in a call.",
  },

  {
    id: 2,
    title: "AI Software Factory · One-Person Agency OS",
    year: "2025 – present",
    role: "Architect & Engineer (Solo)",
    description:
      "A one-person agency in a box. 4-phase deterministic workflow, 5-agent specialist swarm, multi-platform reach (Web + iOS + Android + PWA + Chrome Ext), Zero-Trust security, tiered business engine from $0 to $250K. The system around the craft.",
    image: "/projects/ai-software-factory/hero.png",
    tags: [
      "Anthropic API + MCP",
      "Multi-Agent Swarm",
      "Zero-Trust",
      "Web + iOS + Android + PWA + Chrome",
      "Tiered SaaS",
      "Proprietary",
    ],
    categories: ["AI Development"],
    subcategory: "AI Pipelines & Orchestration",
    detailedDescription:
      "The AI Software Factory is the operating system I built around IGRIS — the business model, the multi-agent specialist swarm, the deterministic workflow, the security architecture, and the multi-platform reach that lets one person ship like a 30-person agency. Where IGRIS is the named craft intelligence, the Factory is the studio: the gated 4-phase pipeline (Brain → Design → Atomization → Execution) with a binding execution checklist that halts the build if any gate fails; the specialist agent crew (Spec Agent · Design Agent · Frontend Agent · Backend Agent · QA Agent · Task Planner Agent — each with their own identity, prompt, and mandate files); the multi-platform reach via native conversion mappings to SwiftUI and Jetpack Compose so a web product becomes an iOS + Android app without a rewrite; the Zero-Trust security model (mock data only in cloud, real API keys never leave the local Antigravity layer); the 120+ screen registry tagged by version tier; and the tiered business engine that converts technical capability into recurring revenue. Three Unbreakable Laws govern every build: Zero-Context Assumption (any agent receiving any file produces production output without prior context), True Atomization (1 task = 1 component / endpoint / test / migration = 1 commit), S-Rank or Nothing (every output, free tier or $250K tier, looks Awwwards-winning from the first commit). Pricing ladder: Free Tier ($0, ~15 min hook to sell with) → v1 MVP ($2.5K–5K, 2 weeks) → v2 True Desired App ($5K–15K, 4–8 weeks) → v3 Growth Product ($15K–50K, 8–24 weeks) → v4 Futurist / Category-Killer ($50K–250K, 24–52 weeks). Plus standalone add-on revenue layered on top: Autonomous AI Sales Agent ($1K–3K/mo), AI Operations Manager ($2K–5K/mo), AI Call Center ($3K–7K/mo), Dynamic Scheduling + CRM Bridge, Automated Reputation Engine, Real-Time KPI Command Center. Status: foundation in production use — the arsenal, registry, differentiation engine, locator, scrape-to-brief adapter, native-conversion mappings, and the full specialist agent identity files are all written and battle-tested through the Orange Corridor batch. The full multi-agent overnight orchestrator running unattended N-site batches and the v1–v4 paid-client business flow are the next active build. Source proprietary.",
    features: [
      "4-phase deterministic pipeline with binding gates · Brain (spec) → Design (Stitch Loop) → Atomization (1 task = 1 commit) → Execution (surgical rebuild)",
      "5+ agent specialist swarm · Spec Agent / Design Agent / Frontend Agent / Backend Agent / QA Agent / Task Planner Agent — each with its own prompt + mandate",
      "Multi-platform from day one · Web + iOS (SwiftUI) + Android (Jetpack Compose) + PWA + Chrome Extension",
      "Native conversion mappings (web → SwiftUI / Compose) checked into the repo",
      "Zero-Trust security · mock data in cloud AIs, real keys injected only in local Antigravity layer at Phase 4",
      "120+ screen registry across v1–v4 version tiers",
      "Three Unbreakable Laws · Zero-Context Assumption / True Atomization / S-Rank or Nothing",
      "Tiered business engine · Free → $250K + recurring AI Operations Manager / Call Center / Reputation Engine",
      "Designed daily output target · 5–15 S-Rank applications",
    ],
    technologies: [
      "Anthropic Claude API + MCP integrations",
      "Google Stitch + Google AI Studio for cloud screen generation",
      "React 18+ / TypeScript strict / Tailwind v4 / Framer Motion / Shadcn-UI + Radix",
      "Convex / Supabase for backend tier",
      "SwiftUI + Jetpack Compose for native conversion",
      "Custom 5-agent prompt + handoff layer with binding execution checklist",
      "Local Antigravity layer for secure key injection (Zero-Trust enforcement point)",
      "Stripe / Lemon Squeezy / Inngest / Upstash for the recurring-revenue tier",
    ],
    challenges: [
      "Designing handoffs between 5 specialist agents so context never bottlenecks",
      "Holding the quality bar consistent across many parallel builds, not just one",
      "Building Zero-Trust into the architecture from day one without slowing iteration",
      "Mapping web design language to native (SwiftUI / Compose) without losing the visual signature",
    ],
    solutions: [
      "Every spec file is hermetically self-contained — any agent picks up any task with zero prior context",
      "Binding execution checklist with hard gates — no phase advances until validated against approved specs",
      "Real keys injected only in the local Phase 4 surgical-reconstruction step, after cloud-generated code is audited",
      "Explicit native-conversion mapping documents for SwiftUI + Compose so visual signature survives the platform jump",
    ],
    outcome:
      "Designed to ship agency-quality applications in hours not weeks, across an entire pricing ladder, by one person. Foundation in production: every Orange Corridor batch site used the Factory's arsenal + registry + differentiation engine + locator. Next milestone: full multi-agent specialist swarm running unattended overnight batches with TTS progress narration, then v1–v4 paid-client flow goes live. Source proprietary — happy to demo in a call.",
  },

  {
    "id": 62,
    "title": "Mo's Hot Chicken",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A clean split layout pairs \"Pick your heat\" in bold sans with a dark overhead shot of crispy Nashville chicken and a \"medium, the right call\" heat tag.",
    "image": "/projects/mos-hot-chicken/hero.png",
    "link": "https://mos-hot-chicken.vercel.app",
    "liveUrl": "https://mos-hot-chicken.vercel.app",
    "tags": [
      "Split Layout",
      "Food Photography",
      "Appetite Appeal"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "The page splits crisp white type on the left against a moody dark food plate on the right, where overhead-lit fried chicken, a yolk, and a gingham napkin do the selling. \"Heat\" gets a burnt-orange highlight, an inline heat-level label overlays the photo, and rounded CTAs keep the order path obvious without crowding the appetizing shot.",
    "features": [
      "Clean split hero: bold sans left, food photo right",
      "Burnt-orange keyword highlight on \"heat\"",
      "Overhead, moody Nashville-chicken plating shot",
      "On-image heat-level tag overlay",
      "Rounded order CTAs with an open-now status line"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A hot-chicken site that makes the heat the hook, the split layout keeping ordering one tap from a mouth-watering plate."
  },

  {
    "id": 108,
    "title": "Eterna Primavera",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A Spanish-first restaurant landing with a full-bleed taco hero, a tall gold-and-white serif lockup, and a warm crimson overlay washing the whole frame.",
    "image": "/projects/eterna-primavera-restaurant/hero.png",
    "link": "https://eterna-primavera-restaurant.vercel.app",
    "liveUrl": "https://eterna-primavera-restaurant.vercel.app",
    "tags": [
      "Restaurant",
      "Spanish First",
      "Photography"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "An overhead shot of tacos fills the hero behind a stacked 'Eterna Primavera' title where the second word glows gold against white. Spanish body copy and 'Ver el menu' / 'Llamar - Pedir' buttons serve the core clientele, while a bottom bar of hours and address keeps the warm, saturated composition functional.",
    "features": [
      "Full-bleed overhead food photography hero",
      "Two-tone serif lockup with gold accent word",
      "Spanish-first copy and CTAs (Ver el menu, Llamar)",
      "Warm crimson overlay unifying the frame",
      "Bottom info bar with hours and Main Street address"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "Speaks directly to a Spanish-speaking clientele with an appetite-first hero and native-language calls to action."
  },

  {
    "id": 63,
    "title": "Red Crab Fish Market",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A warm editorial serif reads \"The block runs on fresh fish\" beside real iced market cases, with a scrolling species ticker of snapper, perch, and crab.",
    "image": "/projects/red-crab-fish/hero.png",
    "link": "https://red-crab-fish.vercel.app",
    "liveUrl": "https://red-crab-fish.vercel.app",
    "tags": [
      "Editorial Serif",
      "Marquee",
      "Market Photography"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "This leans warm and editorial: a cream backdrop, a serif headline that flips to red italic on \"fresh fish,\" and a genuine photo of iced fish cases that proves the market is the real thing. A full-width marquee of species (Croaker, Perch, Red Snapper, Tilapia, Blue Crab) runs the bottom, doing the menu work while keeping a neighborhood, old-school feel.",
    "features": [
      "Warm cream-and-red editorial serif headline",
      "Red italic accent on the key phrase",
      "Authentic iced fish-case market photography",
      "Scrolling species ticker across the footer",
      "Uppercase locator label and rating detail line"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis"
    ],
    "outcome": "A fish-market page that feels neighborhood-true, the real cases and species ticker selling freshness over slick stock imagery."
  },

  {
    "id": 80,
    "title": "South Valley",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A moody BBQ-lounge hero with condensed display type, a serif-italic 'Good music.' and dark imagery of a grilled cut and a glass of liquor.",
    "image": "/projects/southvalley/hero.png",
    "link": "https://southvalley.vercel.app",
    "liveUrl": "https://southvalley.vercel.app",
    "tags": [
      "Moody",
      "Supper Club",
      "Condensed Type"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Stacked condensed 'SOUTH VALLEY BBQ LOUNGE' lettering rides over smoky, low-lit food and drink photography for a warm supper-club feel. The 'Good vibes. Good drinks. Good music.' line, reserve and book-the-blue-room buttons, and a row of footer links lean into atmosphere as much as the smoked menu.",
    "features": [
      "Condensed display wordmark over moody grill imagery",
      "Serif-italic accent on the closing tagline",
      "Reserve and private-room booking buttons",
      "Dark supper-club color grading",
      "Footer nav for menu, events and contact"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Three.js",
      "Lucide React"
    ],
    "outcome": "A BBQ spot positioned as an evening experience, vibes and music alongside the brisket."
  },

  {
    id: 38,
    title: "My Amor Coffee Shop",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "Coffee shop on South Main, Orange NJ. Warm third-wave aesthetic — cream + terracotta + espresso + olive. Hand-drawn cup with steam, foam-heart latte art.",
    image: "/projects/my-amor-coffee/hero.png",
    previewVideo: "/projects/my-amor-coffee/preview.webm",
    previewPoster: "/projects/my-amor-coffee/preview-poster.jpg",
    link: "https://github.com/semajzandrews/my-amor-coffee",
    repoUrl: "https://github.com/semajzandrews/my-amor-coffee",
    liveUrl: "https://my-amor-coffee.vercel.app",
    tags: ["Next.js 16","Motion","SVG","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "My Amor Coffee Shop opens at 5 AM. The site is warm and slow — cream base, terracotta accents, espresso ink, olive details. The signature is a hand-drawn coffee cup SVG with three rising steam wisps animating on staggered delays, a foam-heart latte art shape on the espresso surface. Caveat script subtitles ('— good morning —') anchor each section. Two-column menu (Coffee + Bites) with dotted leaders. The morning section calls out the 5 AM opening as a service to nurses off the overnight, parents, contractors. Terracotta-on-cream visit card.",
    features: ["Hand-drawn coffee cup SVG with rising steam","Foam-heart latte art detail","Caveat script section subtitles","Two-column dotted-leader menu (Coffee + Bites)","Three-stat morning callout (5 AM doors · 2 PM close · 7 days)"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","DM Serif Display + Nunito + Caveat"],
    challenges: ["Coffee shops are over-templated — needed warmth that felt real","Differentiating from Cantina 443 (also warm/late hours)"],
    solutions: ["Hand-drawn illustrations instead of photography","Coffee shop is dawn-warm, Cantina is midnight-loud — opposite times of day"],
    outcome: "Live and ready to feed the morning rush.",
  },

  {
    "id": 60,
    "title": "BakedSome",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A punchy black hero with \"Baked by hand, served by the dozen\" in orange-and-white block caps, a hands-on-dough photo, and a scrolling menu marquee of Mediterranean dishes.",
    "image": "/projects/bakedsome/hero.png",
    "link": "https://bakedsome.vercel.app",
    "liveUrl": "https://bakedsome.vercel.app",
    "tags": [
      "Bold Type",
      "Marquee",
      "Food Photography"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "This one is loud in the right way: chunky condensed caps split between white and hot orange, set on near-black, with a rounded photo of hands shaping dough and a \"100% made fresh\" badge. A full-width marquee of menu items (Kafta, Chicken Shawarma, Falafel, Baba Ghanoush) scrolls across the bottom, turning the menu itself into motion.",
    "features": [
      "Two-tone orange-and-white condensed block caps",
      "Hands-on-dough hero photo with a fresh-made badge",
      "Scrolling menu-item marquee along the footer edge",
      "Near-black backdrop for high food-color contrast",
      "Floating round phone CTA and pill action buttons"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A Mediterranean bakery site with real appetite appeal, the scrolling menu and punchy type making the food the headline."
  },

  {
    "id": 103,
    "title": "Bobby's Discount Store",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A clean cream layout with a bold headline ('If you need cleaning supplies it's probably here.') beside a bright real photo of a shopper in the aisles.",
    "image": "/projects/bobbys-discount-store/hero.png",
    "link": "https://bobbys-discount-store.vercel.app",
    "liveUrl": "https://bobbys-discount-store.vercel.app",
    "tags": [
      "Discount Store",
      "Warm Neutrals",
      "Retail"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Bobby's pairs confident dark type with a warm cream background and a genuine, well-lit photo of a smiling customer browsing the stocked shelves. 'Cleaning supplies' flips to orange to land the variety-store pitch (housewares, party goods, batteries), and a left rail organizes Directory, Why Bobby's, Inside, and Visit. Phone CTAs plus a rating-and-hours strip ('7 days', 'no membership') keep the everyday-essentials promise front and center.",
    "features": [
      "Bold dark headline with orange keyword emphasis",
      "Bright real photo of a shopper in the stocked aisles",
      "Left-rail nav (Directory, Why Bobby's, Inside, Visit)",
      "Variety-store copy spanning housewares to party goods",
      "Rating, '7 days', and 'no membership' trust strip"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "Gave a neighborhood discount store an approachable, everyday-essentials brand."
  },

  {
    id: 26,
    title: "Cantina 443",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Late-night tacos and mezcal bar on Conover Terrace, Orange NJ. Midnight + neon magenta/marigold/papaya. Giant neon CANTINA 443 sign signature with marquee menu ticker.",
    image: "/projects/cantina-443/hero.png",
    previewVideo: "/projects/cantina-443/preview.webm",
    previewPoster: "/projects/cantina-443/preview-poster.jpg",
    link: "https://github.com/semajzandrews/cantina-443",
    repoUrl: "https://github.com/semajzandrews/cantina-443",
    liveUrl: "https://cantina-443.vercel.app",
    tags: ["Next.js 16", "Motion", "Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Cantina 443 is a late-night bar and kitchen on Conover Terrace, Orange NJ. The site is unashamedly loud — midnight maroon-black surfaces with electric magenta + marigold + papaya neon glows. The signature is the hero text itself: 'CANTINA' in Bebas Neue glowing magenta, '443' beneath it flickering marigold like a sputtering neon sign. Magenta-bordered menu marquee scrolls dish names horizontally below the headline. A rotating citrus + cocktail glass SVG floats on the right with a stir animation. Tonight's schedule is a six-night card grid where every card has a different neon color. The Visit CTA is a giant 'COME HUNGRY.' in neon magenta. Designed to feel like the bar is already half full.",
    features: [
      "Massive neon-glow CANTINA 443 hero with flicker on '443'",
      "Horizontal menu marquee ticker (al pastor → birria → mezcal flight)",
      "Animated citrus + cocktail SVG that stirs on a 18s loop",
      "Two-column tacos + platillos menu (six each, dashed leader dots)",
      "Six cocktail cards (paloma, negroni, margarita brava, mezcal sour, michelada, agua fresca)",
      "Six nights of programming (Taco Tuesday → Familia Sunday)",
      "Bebas Neue display + Caveat handwritten script",
    ],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Bebas Neue + Inter + Caveat"],
    challenges: ["Going maximalist neon without losing the menu's legibility","Differentiating from every other site in the batch by being the only one that's loud"],
    solutions: ["Neon glows isolated to display text only; body copy stays clean and bone-cream","Magenta + marigold restricted to one accent each per section so they feel like signs lighting up, not chaos"],
    outcome: "Live and feeling like the bar already opened.",
  },

  {
    "id": 107,
    "title": "Clancy's Pub",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A warm editorial pub page that frames 'A proper local on Broughton Ave' in serif type beside a hand-drawn pint and a 'good things take time' line.",
    "image": "/projects/clancys-pub/hero.png",
    "link": "https://clancys-pub.vercel.app",
    "liveUrl": "https://clancys-pub.vercel.app",
    "tags": [
      "Pub",
      "Editorial",
      "Local"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Cream paper tones, a red italic accent on 'Broughton Ave,' and a simple line-art pint give this neighborhood pub a cozy, classic feel. Beneath the headline, a copy block about the game on the screens and a proper pour sits above a star rating, a Call and Find us hours pair, and a row of warm interior photos showing the bar and taps.",
    "features": [
      "Warm cream palette with red italic serif accent",
      "Line-art pint motif beside the headline",
      "Trust row with star rating and '120 neighbors and counting'",
      "Paired Call and Find us & hours CTAs",
      "Interior photo strip of the bar, taps, and room"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "Captures the comfortable, regulars-welcome feel of a true neighborhood local while keeping hours and contact one tap away."
  },

  {
    "id": 55,
    "title": "PL Home Improvement",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A full-bleed dusk shot of a glass-and-timber modern home anchors a headline that swaps roman for italic mid-sentence: \"the careful one you actually want in your house.\"",
    "image": "/projects/plhomeimprovement/hero.png",
    "link": "https://plhomeimprovement.vercel.app",
    "liveUrl": "https://plhomeimprovement.vercel.app",
    "tags": [
      "Cinematic",
      "Mixed Serif",
      "Photographic Hero"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "This one trades on a single cinematic photograph, a modern home glowing at blue hour with warm interior light spilling out, and lets the type ride right over it. The headline mixes a crisp white serif with a swooping gold italic so \"in your house\" lands soft, and a bottom stat row (4.9 stars, 22 reviews, Orange NJ) grounds the mood in proof.",
    "features": [
      "Full-bleed dusk architectural hero with warm interior glow",
      "Roman-to-italic serif headline shift for emphasis",
      "Gold italic accent against high-contrast white type",
      "Bottom credibility row with rating, review count, and location",
      "Floating phone CTA pinned to the corner"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A contractor site that feels like an architecture magazine cover, positioning careful craftsmanship as the selling point."
  },

  {
    "id": 93,
    "title": "Today's Kids",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "Soft cream editorial for a kids' shop, pairing a 'Dressed for every little today' headline with a playful star-wand portrait.",
    "image": "/projects/todays-kids/hero.png",
    "link": "https://todays-kids.vercel.app",
    "liveUrl": "https://todays-kids.vercel.app",
    "tags": [
      "Childrenswear",
      "Editorial",
      "Playful"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "A gentle cream layout and a serif headline with italic 'every little' give this children's clothing store a storybook polish. A framed photo of a child in a leopard coat waving a gold star wand brings the play, while a drop-cap intro grounds it in the City of Orange. Gold accents and outlined collection buttons keep things refined yet clearly made for little ones.",
    "features": [
      "Editorial cream layout with serif and italic headline",
      "Playful star-wand child portrait in a framed crop",
      "Drop-cap intro tying the shop to its neighborhood",
      "Gold accents with outlined collection CTAs",
      "Tidy top nav for collections, store, and visit"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A children's boutique gets a storybook-elegant storefront that still feels joyful and kid-first."
  },

  {
    "id": 75,
    "title": "Babyland Family Services",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A heritage-green serif identity built around a sunlit photo of a child and the quiet line 'Held. Since 1969.'",
    "image": "/projects/babyland-family-services/hero.png",
    "link": "https://babyland-family-services.vercel.app",
    "liveUrl": "https://babyland-family-services.vercel.app",
    "tags": [
      "Heritage",
      "Nonprofit",
      "Editorial Serif"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Cream paper tones, a deep forest serif headline and a polaroid-style photo dated to 1969 frame more than fifty years of family work. The mission paragraph sits calm and centered, with pill buttons and a row of footer stats marking the nonprofit's roots in the City of Orange.",
    "features": [
      "Heritage serif wordmark and headline pairing",
      "Sunlit photo styled as a dated keepsake",
      "Cream and forest-green editorial palette",
      "Founding-year story woven through the hero",
      "Footer credibility row with nonprofit stats"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A warm, trust-first presence that lets a 1969 legacy speak for itself."
  },

  {
    id: 29,
    title: "Dell'italia & Santola",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "A two-partner consultancy on Central Ave, Orange NJ. Aged paper + forest + brass + claret. Reads like a privately-printed monograph.",
    image: "/projects/dellitalia-santola/hero.png",
    previewVideo: "/projects/dellitalia-santola/preview.webm",
    previewPoster: "/projects/dellitalia-santola/preview-poster.jpg",
    link: "https://github.com/semajzandrews/dellitalia-santola",
    repoUrl: "https://github.com/semajzandrews/dellitalia-santola",
    liveUrl: "https://dellitalia-santola.vercel.app",
    tags: ["Next.js 16","Motion","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "Dell'italia & Santola is a small two-partner consultancy. The layout grammar is unlike anything in Season 1: a narrow single-column manifesto, generous whitespace, content centered between 820px gutters. Cormorant Garamond throughout, set at 18px with 1.55 line-height like the first page of a privately-printed monograph. Four numbered Articles (Practice · Method · Partners · Engage) with brass-gold ornamental rules and centered ❧ flourishes. The first paragraph uses a CSS drop-cap in claret. Reads slow on purpose.",
    features: ["Narrow single-column manifesto layout (820px max-width)","Four numbered Articles with ❧ flourish ornaments","Brass-gold ornamental hairline rules","Drop-cap first letter in claret","Roman numerals for practice-area listings"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Cormorant Garamond + Inter"],
    challenges: ["Conveying authority without legalese","Differentiating layout grammar from every other site in the registry"],
    solutions: ["Single-column manifesto layout — first IGRIS site to use it","Voice in the copy stays plainspoken: 'patient, learned'"],
    outcome: "Live and quietly excellent.",
  },

  {
    "id": 96,
    "title": "Nash Sales Depot",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A shouting yellow-and-white slogan ('IF NASH HAS IT, YOU NEED IT.') stacked over a real photo of the crammed variety-store shelves.",
    "image": "/projects/nash-sales-depot/hero.png",
    "link": "https://nash-sales-depot.vercel.app",
    "liveUrl": "https://nash-sales-depot.vercel.app",
    "tags": [
      "Retail",
      "Bold Typography",
      "High Contrast"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Nash leads with attitude: an oversized condensed headline where 'YOU NEED IT' flips to bright yellow over a darkened, true-to-life shot of the store's packed aisles. The hero badges the address and a star rating like a marquee, and the copy frames Nash as the neighborhood catch-all for housewares, candy, and back-to-school. CTA pills ('See what we carry', 'Hours & directions') keep it practical under all the swagger.",
    "features": [
      "Oversized condensed slogan with yellow keyword emphasis",
      "Real darkened storefront-aisle photo as the backdrop",
      "Marquee-style address and star-rating badges",
      "Variety-store positioning copy (housewares, candy, school)",
      "Practical 'what we carry' and 'hours & directions' CTAs"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "Turned a packed corner variety store into a confident, slogan-led brand."
  },

  {
    "id": 94,
    "title": "Dici Beauty Supply",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A warm taupe editorial layout that frames a hand-stocked beauty counter, pairing a serif-and-italic headline with a tactile product still life.",
    "image": "/projects/dici-beauty-supply/hero.png",
    "link": "https://dici-beauty-supply.vercel.app",
    "liveUrl": "https://dici-beauty-supply.vercel.app",
    "tags": [
      "Editorial",
      "Warm Neutrals",
      "Product Photography"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Dici trades the usual neon beauty-supply look for a muted taupe-and-cream palette and a 'stocked by hand' headline that mixes upright serif with italic. A full-bleed product photo of brushes, palettes, and a marble tray anchors the right side, giving the page a curated, almost apothecary feel. Pill buttons and a slim top nav (The Counter, Aisles, Shelves) keep the browsing logic calm and shoppable.",
    "features": [
      "Taupe and cream palette swapped in for typical beauty-supply neon",
      "Serif plus italic headline lockup ('stocked by hand')",
      "Full-bleed tactile product photo with marble-tray styling",
      "Aisle-themed nav: The Counter, Aisles, Shelves",
      "Address chip and click-to-call pill in the hero"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lucide React"
    ],
    "outcome": "Repositioned a beauty-supply shop as a curated counter rather than a discount aisle."
  },

  {
    "id": 79,
    "title": "Quick Stop",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A neon-purple corner-store hero with a glowing OPEN sign and 'THE CORNER THAT NEVER MISSES' over a dark night-shop backdrop.",
    "image": "/projects/quick-stop/hero.png",
    "link": "https://quick-stop.vercel.app",
    "liveUrl": "https://quick-stop.vercel.app",
    "tags": [
      "Neon",
      "Nightlife",
      "Convenience"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Electric violet lighting and a pulsing neon OPEN graphic give a humble convenience store late-night personality. The hero pairs in-stock and directions buttons with an open-hours badge, and a glowing marquee of LOTTO, ATM, SNACKS, GAS and more scrolls across the footer like storefront signage.",
    "features": [
      "Neon-purple night palette with glowing OPEN sign",
      "See-what's-in-stock and directions buttons",
      "Always-open hours badge",
      "Illuminated scrolling marquee of store offerings",
      "Moody nighttime shop backdrop"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A corner store reimagined with neon swagger that makes round-the-clock feel like a destination."
  },

  {
    id: 30,
    title: "Empire Dental",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "A calm dentist on Central Ave, Orange NJ. Mint + coral + porcelain bento-grid layout. Animated smile-arc signature.",
    image: "/projects/empire-dental/hero.png",
    previewVideo: "/projects/empire-dental/preview.webm",
    previewPoster: "/projects/empire-dental/preview-poster.jpg",
    link: "https://github.com/semajzandrews/empire-dental",
    repoUrl: "https://github.com/semajzandrews/empire-dental",
    liveUrl: "https://empire-dental.vercel.app",
    tags: ["Next.js 16","Motion","SVG","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "Empire Dental is a calm general dentistry on Central Ave, Orange NJ. The hero uses a BENTO GRID — twelve-column rows of mixed-size rounded cards (28px radius), each with its own background tone in the mint/coral/porcelain family. The animated smile-arc with floating tooth-dots is the signature, set inside one of the bento tiles. Soft, clinical-but-warm, the opposite of cold dentistry stock photography. Fraunces + DM Sans.",
    features: ["BENTO GRID hero layout (12-col, mixed-size cards, 28px radius)","Animated smile-arc with tooth-dots inside the bento","Six-card care grid + six-step first-visit flow","Mint + coral palette, no medical sterility","Fraunces italic display"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Fraunces + DM Sans"],
    challenges: ["Making a dentist feel welcoming without saccharine","Bento layout discipline — easy to bloat"],
    solutions: ["Used mint + coral instead of medical blue","Each bento tile holds exactly one idea, no more"],
    outcome: "Live and accepting new patients.",
  },

  {
    id: 17,
    title: "Janie & Jack — Welcome",
    year: "2023",
    role: "Email Developer (Solo)",
    description:
      "Welcome email for Janie & Jack. Premium kids' apparel brand voice, considered typography, conversion-tuned introduction.",
    image: "/projects/email-janie-and-jack/hero.png",
    link: "https://github.com/semajzandrews/email-development-portfolio/tree/main/welcome/janieandjack-welcome-email",
    repoUrl: "https://github.com/semajzandrews/email-development-portfolio/tree/main/welcome/janieandjack-welcome-email",
    tags: ["HTML", "CSS", "Welcome", "Apparel"],
    categories: ["Email Development"],
    subcategory: "Welcome Emails",
    detailedDescription:
      "Janie & Jack welcome email — first-touch introduction for the premium kids' apparel brand. Considered typography, restrained color, and cross-client tested. Hand-coded for rendering integrity across Outlook, Gmail, Apple Mail, and mobile.",
    features: [
      "First-touch welcome for premium kids' apparel",
      "Considered typography, restrained color",
      "Mobile-first layout",
      "Cross-client tested",
    ],
    technologies: [
      "HTML / CSS for email-safe markup",
      "Table-based hybrid layout",
      "Outlook conditional fallbacks",
      "Litmus / Email on Acid for QA",
    ],
    challenges: [
      "Premium brand voice within email's restricted CSS surface",
      "Brand-precise color rendering across client-side dark-mode",
    ],
    solutions: [
      "Editorial copy and restrained color carry the premium positioning",
      "Color-locked palette with dark-mode preservation directives",
    ],
    outcome: "Production welcome email shipped for Janie & Jack.",
  },

  {
    "id": 97,
    "title": "Berkeley Liquors & Deli",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A clean editorial bottle-shop page where multicolor type ('The corner pours & stacks.') sits beside a single, precise illustrated wine glass.",
    "image": "/projects/berkeley-liquors-deli/hero.png",
    "link": "https://berkeley-liquors-deli.vercel.app",
    "liveUrl": "https://berkeley-liquors-deli.vercel.app",
    "tags": [
      "Liquor Store",
      "Minimal",
      "Editorial Type"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Berkeley keeps things spare and confident: a tri-color headline ('pours' in red, 'stacks' in teal) against lots of cream whitespace, balanced by one minimal line-drawn glass of red wine. A second 'The shelves' section begins below, and the nav splits the store into The Shelves and The Counter. The restraint reads upmarket, treating a liquor-and-deli as a quiet corner editorial rather than a cluttered shop.",
    "features": [
      "Tri-color headline emphasis on key verbs (pours, stacks)",
      "Single minimal illustrated wine glass as the only image",
      "Generous cream whitespace for an editorial feel",
      "Split sectioning: The Shelves vs. The Counter",
      "Sticky red 'Call' pill in the top-right"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion"
    ],
    "outcome": "Elevated a corner liquor-deli with a sparse, type-forward editorial look."
  },

  {
    "id": 59,
    "title": "Sisters In Motion",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A striking portrait amid green foliage sits beside \"Hands that keep beauty in motion,\" set in a confident serif with a wine-red italic close.",
    "image": "/projects/sisters-in-motion/hero.png",
    "link": "https://sisters-in-motion.vercel.app",
    "liveUrl": "https://sisters-in-motion.vercel.app",
    "tags": [
      "Portrait Hero",
      "Confident Serif",
      "Botanical"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "The build pairs a richly lit braiding portrait, framed by deep tropical greens, with a tall left-aligned serif headline that drops into a wine-red italic on \"in motion.\" The clean light background lets the photograph carry the color, and rounded burgundy CTAs plus a quiet rating line keep the layout elegant and on-brand for the atelier.",
    "features": [
      "Foliage-framed braiding portrait as hero imagery",
      "Serif headline with wine-red italic accent line",
      "Light, airy canvas that foregrounds the photo's color",
      "Rounded burgundy CTA pair with review stars",
      "Compact uppercase locator and category labels"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A braiding atelier page that centers real craft and clientele, the portrait and serif giving it a premium, personal feel."
  },

  {
    "id": 57,
    "title": "GQ Cutz Barber Boutique",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A tight close-up portrait fills the frame behind a magazine-style masthead, sold as \"The Grooming Issue\" with \"It is not just a haircut, it is a lifestyle.\"",
    "image": "/projects/gq-cutz-barber-boutique/hero.png",
    "link": "https://gq-cutz-barber-boutique.vercel.app",
    "liveUrl": "https://gq-cutz-barber-boutique.vercel.app",
    "tags": [
      "Magazine",
      "Portrait Hero",
      "Editorial"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "The entire page is built like a magazine cover: an intimate, shadowed portrait runs edge to edge while a bold condensed masthead and issue line (\"No. 01, Barber Boutique\") layer over it. Amber accents pick out the CTAs and the side callout column, and the small-caps subheads plus a barcode footer push the print-editorial illusion all the way through.",
    "features": [
      "Edge-to-edge portrait hero with cinematic shadow",
      "Magazine masthead and issue-number framing",
      "Amber accents on pill CTAs and side callouts",
      "Italic serif pull-quote against condensed display type",
      "Barcode and small-caps details in the footer"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A barbershop site styled as a grooming magazine, elevating a fresh cut into a lifestyle brand statement."
  },

  {
    "id": 91,
    "title": "Obal's Inn",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "Cozy all-brown tavern hero with a centered serif 'The corner that knows your name' and a seventy-four-year heritage note.",
    "image": "/projects/obals-inn/hero.png",
    "link": "https://obals-inn.vercel.app",
    "liveUrl": "https://obals-inn.vercel.app",
    "tags": [
      "Tavern",
      "Cozy",
      "Heritage"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Deep cocoa browns and a centered serif headline give this Broad Street bar a warm, lamplit den feeling. The copy frames seventy-four years on the same corner as a wall of regulars' reviews, leaning into belonging over flash. A gold-bordered 'Call the bar' button glows like a single bulb against the dark woodwork.",
    "features": [
      "Monochrome brown palette evoking a lamplit tavern",
      "Centered serif headline on heritage and belonging",
      "Seventy-four-year 'since 1951' credibility framing",
      "Gold-outlined 'Call the bar' focal button",
      "Quiet two-link nav for tonight's setup and visiting"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "A neighborhood bar's seventy-four years of regulars now come through the moment the page loads."
  },

  {
    "id": 100,
    "title": "Keeping It Handsome",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A warm editorial barbershop hero ('Walk in. Walk out handsome.') with a serif-italic flourish over a real grid of shop interior shots.",
    "image": "/projects/keeping-it-handsome/hero.png",
    "link": "https://keeping-it-handsome.vercel.app",
    "liveUrl": "https://keeping-it-handsome.vercel.app",
    "tags": [
      "Barbershop",
      "Editorial",
      "Warm Luxury"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Keeping It Handsome reads like a modern grooming brand: a stacked serif headline where 'handsome' breaks into italic, set in a warm off-white frame with a gold accent. The hero subtitle leans on 'modern luxury barbershop' and a 5.0 rating, and a real photo grid of the chairs and mirror stations sits directly below. Gold 'Book a Chair' and outline 'View the Services' buttons keep the booking path obvious.",
    "features": [
      "Stacked serif headline with italic 'handsome' flourish",
      "Warm off-white palette with gold accent details",
      "Real interior photo grid of chairs and stations",
      "5.0 rating and 'modern luxury' positioning line",
      "Gold 'Book a Chair' primary CTA"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "Framed a neighborhood barbershop as a polished, bookable luxury grooming brand."
  },

  {
    "id": 61,
    "title": "Mercadito Chapin",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "Vivid stacks of Guatemalan textiles run down the right while a Spanish-first serif headline reads \"La eterna primavera, a una cuadra.\"",
    "image": "/projects/mercadito-chapin/hero.png",
    "link": "https://mercadito-chapin.vercel.app",
    "liveUrl": "https://mercadito-chapin.vercel.app",
    "tags": [
      "Cultural Color",
      "Spanish-First",
      "Textile Imagery"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Culture drives the color here: rolls of woven Guatemalan fabric in saturated reds, blues, and greens fill the right edge, set against a soft blush canvas. The headline is Spanish-first in a roman-and-italic serif for the Latino clientele, and a small \"El Mercadito\" badge plus a phone pill keep the warm, neighborhood-shop personality intact.",
    "features": [
      "Saturated Guatemalan textile photography as the color source",
      "Spanish-first roman-and-italic serif headline",
      "Blush canvas balancing the vivid woven hues",
      "Circular brand badge and rounded phone CTA",
      "Bilingual-aware locator and hours line"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis"
    ],
    "outcome": "A Guatemalan grocery page that wears its culture proudly, the textile color and Spanish copy speaking straight to the community it serves."
  },

  {
    "id": 69,
    "title": "Mary Finesse Beauty",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A rich chocolate-brown nail-salon site with an italic 'Done with finesse' headline and an elegant manicure close-up.",
    "image": "/projects/mary-finesse-beauty/hero.png",
    "link": "https://mary-finesse-beauty.vercel.app",
    "liveUrl": "https://mary-finesse-beauty.vercel.app",
    "tags": [
      "Nail Salon",
      "Warm Editorial",
      "Bilingual"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Deep cocoa-brown tones wrap a refined serif headline where 'finesse' turns italic and warm-orange. A close-up of polished nails resting on a knit sweater anchors the hero, while orange pill buttons, a 5.0 rating, and an ES-EN toggle signal a bilingual, detail-obsessed esthetics studio.",
    "features": [
      "Manicure close-up hero photography",
      "Italic orange accent in serif headline",
      "Bilingual ES-EN language toggle",
      "Rating and years-in-service stat row",
      "'Call to book' and 'Pick a color' CTAs"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "A nail and esthetics studio with a luxe, bilingual brand that turns its craft and reviews into bookings."
  },

  {
    id: 13,
    title: "Michael Kors — Account Confirmation",
    year: "2024",
    role: "Email Developer (Solo)",
    description:
      "Luxury account-confirmation email for Michael Kors. Editorial typography, brand-precise rendering, and conversion-tuned CTAs.",
    image: "/projects/email-michael-kors/hero.png",
    link: "https://github.com/semajzandrews/email-development-portfolio/tree/main/account-confirmation/michaelkors-account-confirmation",
    repoUrl: "https://github.com/semajzandrews/email-development-portfolio/tree/main/account-confirmation/michaelkors-account-confirmation",
    tags: ["HTML", "CSS", "Transactional", "Luxury"],
    categories: ["Email Development"],
    subcategory: "Transactional Emails",
    detailedDescription:
      "Michael Kors account-confirmation email — luxury-tier transactional template. Editorial typography, restrained color, brand-precise rendering across clients. Hand-coded to preserve the brand's high-end positioning even within email's restricted CSS surface. Cross-client tested before sign-off.",
    features: [
      "Editorial type stack tuned for luxury retail",
      "Account-creation confirmation with conversion CTAs",
      "Mobile-first with desktop refinement",
      "Brand-accurate rendering across major clients",
    ],
    technologies: [
      "HTML / CSS for email-safe markup",
      "Hybrid table-based layout",
      "Outlook-specific conditional fallbacks",
      "Litmus / Email on Acid for QA",
    ],
    challenges: [
      "Holding luxury brand typography on Outlook (which strips most font choices)",
      "Conversion CTAs that feel intentional, not aggressive",
    ],
    solutions: [
      "Webfont with system-font fallback chain optimized for Outlook",
      "Editorial copy + restrained color carry the CTA's weight",
    ],
    outcome: "Production luxury-retail transactional email shipped for Michael Kors.",
  },

  {
    "id": 56,
    "title": "A&A Perfume & Jewelry",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A soft cream layout with a tilted product card and the line \"A gift, composed by hand\" set in a delicate high-contrast serif.",
    "image": "/projects/a-and-a-perfume-jewelry/hero.png",
    "link": "https://a-and-a-perfume-jewelry.vercel.app",
    "liveUrl": "https://a-and-a-perfume-jewelry.vercel.app",
    "tags": [
      "Editorial",
      "Luxe Minimal",
      "Warm Neutral"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Restraint is the whole move here: a warm ivory canvas, generous whitespace, and one perfume-and-roses still life tilted on a slight angle like a placed object. The serif headline runs in alternating roman and italic weights, and vertical side labels plus a thin \"scroll\" cue keep the composition feeling like an editorial spread rather than a storefront.",
    "features": [
      "Tilted, framed product still-life as the focal element",
      "Alternating roman-italic high-contrast serif headline",
      "Warm ivory palette with abundant negative space",
      "Vertical side-set labels and scroll indicator",
      "Minimal nav with a single rounded pill action"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A boutique page that reads as quiet luxury, framing perfume and jewelry as composed, gift-worthy objects."
  },

  {
    "id": 81,
    "title": "Able Bail Bonds",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A warm navy night hero with a tasteful serif 'Get them home by morning' beside a softly lit photo of a house with the porch light on.",
    "image": "/projects/able-bail-bonds/hero.png",
    "link": "https://able-bail-bonds.vercel.app",
    "liveUrl": "https://able-bail-bonds.vercel.app",
    "tags": [
      "Empathetic",
      "Twilight Palette",
      "Trust"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Deep blue twilight tones and an empathetic serif headline reframe a stressful service with calm and care. A gentle image of a lit-up home captioned 'The lights stay on until everyone's home' sits next to a 24/7 call button and a how-it-works link, all anchored by an always-available footer note.",
    "features": [
      "Twilight navy palette with empathetic serif headline",
      "Warm porch-light home photo with caption",
      "24/7 call button and how-it-works link",
      "County and city locating eyebrow",
      "Always-available reassurance footer"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "A bail bonds page that leads with compassion, treating a hard moment with dignity."
  },

  {
    "id": 102,
    "title": "Sudzy Laundromat",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A striking close-up of a spinning washer drum behind a clean white headline ('The cleanest corner on Main St.') punched up with a red accent.",
    "image": "/projects/orange-sudzy-laundromat/hero.png",
    "link": "https://orange-sudzy-laundromat.vercel.app",
    "liveUrl": "https://orange-sudzy-laundromat.vercel.app",
    "tags": [
      "Laundromat",
      "Dark Mode",
      "Photography Hero"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Sudzy makes a laundromat genuinely cinematic: a tight, motion-blurred shot of laundry tumbling inside a front-loader fills the hero, dark vignette holding white type readable on top. 'Main St.' lights up in red, and the copy sells self-service plus wash-and-fold by the pound with late hours. A red 'Call' pill, a phone CTA, and a 'Where's it quiet?' link add practical, locals-first touches.",
    "features": [
      "Close-up spinning washer-drum hero with motion blur",
      "White type over a dark vignette for legibility",
      "Red accent on 'Main St.' and the Call pill",
      "Self-service and wash-and-fold-by-the-pound copy",
      "Locals-first 'Where's it quiet?' utility link"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Framer Motion",
      "GSAP",
      "Lenis"
    ],
    "outcome": "Turned an everyday laundromat into a striking, photo-led corner brand."
  },

  {
    "id": 83,
    "title": "Ismael & Son Auto Repair",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A gritty garage hero where 'Honest work, handed down.' sits over a real shop interior, with bilingual trust stats along the base.",
    "image": "/projects/ismael-and-son-auto-repair/hero.png",
    "link": "https://ismael-and-son-auto-repair.vercel.app",
    "liveUrl": "https://ismael-and-son-auto-repair.vercel.app",
    "tags": [
      "Gritty",
      "Family Business",
      "Bilingual"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "A dim, authentic photo of the actual garage backs a heavy headline that nods to a father-and-son legacy, with 'down' picked out in red. Straight-talk copy about no surprises is reinforced by a stat row showing rating, years in service, ACDelco parts and a plain 'Si' for bilingual service.",
    "features": [
      "Real garage-interior hero photography",
      "Father-and-son legacy headline with red accent",
      "Bilingual trust stat row including 'Si'",
      "Rating, years-in-service and parts-brand proof points",
      "Call and what-it-needs call-to-action pair"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "An auto shop landing page that sells honesty and heritage with no polish it doesn't earn."
  },

  {
    id: 35,
    title: "Castaway Restaurant & Bar",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "Neighborhood bar and grill on Watchung Ave, Orange NJ. Kraft + deep navy + rope tan + lobster red + seafoam. 812 reviews · 4.1★.",
    image: "/projects/castaway-restaurant/hero.png",
    previewVideo: "/projects/castaway-restaurant/preview.webm",
    previewPoster: "/projects/castaway-restaurant/preview-poster.jpg",
    link: "https://github.com/semajzandrews/castaway-restaurant",
    repoUrl: "https://github.com/semajzandrews/castaway-restaurant",
    liveUrl: "https://castaway-restaurant.vercel.app",
    tags: ["Next.js 16","Motion","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "Castaway Restaurant & Bar is a 28-year-old neighborhood bar and grill with 812 Google reviews. The site borrows nautical-postcard lineage — kraft paper background, deep navy + lobster red + seafoam + rope tan accents, repeating rope-rule dividers, a dock-board cocktail section, and a hero postcard card mounted with a hand-shadow offset that says 'greetings from Orange, NJ' in handwritten Caveat. Three menu boards (Sea, Grill, Garden) each in their own card. Abril Fatface display + Caveat script.",
    features: ["Postcard hero with rope-rule borders + hand-shadow","Three-board menu (Sea · Grill · Garden) with dotted leaders","Dock-board cocktail section with horizontal stripe BG","Hours table inside a thick-bordered card with hourglass labels","Sway-rope micro-animation on the handwritten subtitles"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Abril Fatface + Inter + Caveat"],
    challenges: ["Distinguishing from L'Hirondelle (also restaurant) on every visual axis","Honoring 28 years of operation without nostalgia tropes"],
    solutions: ["Castaway is kraft-postcard nautical, L'Hirondelle is sun-ray travel-poster — completely different lineage","Used the review count (812) as headline stat instead of an established-since date"],
    outcome: "Live and ready to claim the Friday night reservations list.",
  },

  {
    id: 32,
    title: "Chubbies Deli",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "Heroes, breakfast sandwiches, hot plates on Central Ave, Orange NJ. NYC bodega awning + hand-painted sign aesthetic. Alfa Slab + Caveat chalk script.",
    image: "/projects/chubbies-deli/hero.png",
    previewVideo: "/projects/chubbies-deli/preview.webm",
    previewPoster: "/projects/chubbies-deli/preview-poster.jpg",
    link: "https://github.com/semajzandrews/chubbies-deli",
    repoUrl: "https://github.com/semajzandrews/chubbies-deli",
    liveUrl: "https://chubbies-deli.vercel.app",
    tags: ["Next.js 16","Motion","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "Chubbies Deli is a sandwich counter on Central Ave, Orange NJ. The site borrows from NYC bodega awnings and hand-painted deli signs — tile-cream background, mustard + tomato + olive accents, awning stripes top and bottom of the hero (90deg red+cream repeating stripes), Alfa Slab One slab-serif headlines, and Caveat chalk script for the daily specials. Each menu section (Heroes, Breakfast, Hot Plates) has its own background color so they read as separate boards on the wall. Today's-special card sits askew with a stamped ink texture.",
    features: ["Awning-stripe top + bottom hero bands","Multi-color menu sections (each its own background board)","Stamped-ink daily-special card with rotation","Chalk-script accents over slab-serif headlines","Dashed-leader menu rows"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Alfa Slab One + Caveat + Inter"],
    challenges: ["Avoiding kitsch — bodega aesthetic but premium execution","Multi-color sections need disciplined typography to not fight each other"],
    solutions: ["Slab-serif headline weight stays consistent; color shifts do the differentiating","Chalk script is reserved for prices and atmosphere, never body copy"],
    outcome: "Live and open six to six.",
  },

  {
    id: 12,
    title: "Spirit Airlines — Itinerary",
    year: "2024",
    role: "Email Developer (Solo)",
    description:
      "Production order-confirmation / itinerary email for Spirit Airlines. Flight details, fare breakdown, and check-in CTAs — hand-coded for cross-client rendering.",
    image: "/projects/email-spirit-airlines/hero.png",
    link: "https://github.com/semajzandrews/email-development-portfolio/tree/main/order-confirmation/spirit-airlines-itinerary",
    repoUrl: "https://github.com/semajzandrews/email-development-portfolio/tree/main/order-confirmation/spirit-airlines-itinerary",
    tags: ["HTML", "CSS", "Transactional", "Cross-Client"],
    categories: ["Email Development"],
    subcategory: "Transactional Emails",
    detailedDescription:
      "Spirit Airlines itinerary email — a production-grade transactional template covering booking confirmation, flight details, fare breakdown, and downstream CTAs (check-in, seat selection, baggage upgrades). Hand-coded with table-based layout and progressive enhancement for consistent rendering across Outlook, Gmail, Apple Mail, and major mobile clients. Tested through Litmus/Email on Acid before sign-off.",
    features: [
      "Itinerary details with multi-leg flight support",
      "Fare breakdown and ancillary product CTAs",
      "Mobile-first layout with desktop fallbacks",
      "Cross-client tested (Outlook 2007+, Gmail, Apple Mail, iOS/Android)",
    ],
    technologies: [
      "HTML / CSS for email-safe markup",
      "Table-based layout with hybrid coding",
      "Conditional Outlook fallbacks (mso)",
      "Litmus / Email on Acid for QA",
    ],
    challenges: [
      "Multi-leg itinerary table that stays readable on narrow mobile widths",
      "Brand-accurate yellow rendering across dark-mode forced inversion",
    ],
    solutions: [
      "Stacking responsive layout with media-query fallbacks",
      "Hard-coded hex with dark-mode meta directives for color preservation",
    ],
    outcome: "Production-grade transactional email shipped for Spirit Airlines.",
  },

  {
    "id": 90,
    "title": "Michele's Family Bakery",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "Soft-focus golden bread hero with an elegant serif 'Michele's Family Bakery' lockup and a teal call button for contrast.",
    "image": "/projects/micheles-family-bakery/hero.png",
    "link": "https://micheles-family-bakery.vercel.app",
    "liveUrl": "https://micheles-family-bakery.vercel.app",
    "tags": [
      "Bakery",
      "Serif",
      "Artisan"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Rows of glossy, golden-crust loaves fill the frame in dreamy soft focus, with the bakery name set in a refined serif and italic 'Family' for warmth. The cream-to-amber gradient keeps everything tender and oven-fresh, while a deep teal phone button cuts through for an unmissable call to action. The understated top nav lets the bread do the selling.",
    "features": [
      "Soft-focus golden loaf hero photography",
      "Elegant serif lockup with italic 'Family'",
      "Cream-to-amber gradient for an oven-warm mood",
      "Contrasting teal call button as the focal CTA",
      "Minimal nav that foregrounds the product"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A family bakery's storefront finally looks as inviting as the smell of its morning loaves."
  },

  {
    "id": 73,
    "title": "Shamar Hand Wash",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A moody sepia car-wash site with a colossal vintage 'SHAMAR'S' wordmark over a silhouetted car and family-run, open-daily framing.",
    "image": "/projects/shamar-hand-wash/hero.png",
    "link": "https://shamar-hand-wash.vercel.app",
    "liveUrl": "https://shamar-hand-wash.vercel.app",
    "tags": [
      "Car Wash",
      "Vintage Sepia",
      "Oversized Type"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Toned in warm vintage sepia, the design hands the whole hero to an oversized condensed-serif 'SHAMAR'S' wordmark layered over a softly lit car silhouette. Issue-number tags, a 'Run your finger across the hood' prompt, and a tactile bordered 'Tap to call' button give it a printed-poster, old-school garage character.",
    "features": [
      "Oversized vintage condensed-serif wordmark",
      "Sepia-toned car silhouette hero",
      "Magazine-style issue number tags",
      "Bordered tactile 'Tap to call' button",
      "Family-run, open-daily detail strip"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "A hand car wash given a bold, vintage-poster identity that feels like a neighborhood institution worth driving to."
  },

  {
    "id": 84,
    "title": "NYC Style Deli",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "Editorial deli site with a live ticking clock and a 'Breakfast at six, Shawarma at two' headline that swaps menus as the day turns.",
    "image": "/projects/nyc-style-deli/hero.png",
    "link": "https://nyc-style-deli.vercel.app",
    "liveUrl": "https://nyc-style-deli.vercel.app",
    "tags": [
      "Editorial",
      "Live Clock",
      "Witty"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "A Brooklyn deli reimagined as an editorial spread, anchored by a black-and-gold headline where 'two' leans into a hand-set italic. A live 3:10 PM clock widget and a horizontal day-slider turn the hero into a real-time menu, surfacing the chopped cheese as the moment-right pick. Mustard-yellow accents and a sticky 'Call to order' pill keep the witty, fast-counter energy front and center.",
    "features": [
      "Live ticking clock widget tied to time-of-day menu",
      "Interactive day-slider that swaps morning and late-night picks",
      "Editorial black-on-cream type with hand-set italic accents",
      "Sticky call-to-order pill with phone number",
      "Featured-item card spotlighting the chopped cheese"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "A scrappy corner deli now reads like a magazine feature that literally keeps time with its kitchen."
  },

  {
    "id": 68,
    "title": "Instant Printing",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A clean print-shop site with bold purple type and a slick angled paper-stack hero card reading 'Fresh off the press.'",
    "image": "/projects/instant-printing/hero.png",
    "link": "https://instant-printing.vercel.app",
    "liveUrl": "https://instant-printing.vercel.app",
    "tags": [
      "Print Shop",
      "Bold Color",
      "Modern Clean"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Set on soft off-white with mint and lavender accent shapes, the design leans on a confident two-tone headline where 'print shop' drops into vivid purple. A tilted hero card layered over a printing-press image reads 'Fresh off the press,' giving the walk-in shop a slick, modern, design-studio feel.",
    "features": [
      "Two-tone headline with purple accent",
      "Angled layered hero card over press imagery",
      "Pastel mint and lavender accent shapes",
      "'Plan a print run' and 'See what we print' CTAs",
      "Capabilities strip: cards, banners, copies"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis"
    ],
    "outcome": "A neighborhood print shop repositioned as a sharp, contemporary studio that invites walk-ins and quote requests."
  },

  {
    id: 24,
    title: "Black River Painting LLC",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Editorial residential + commercial painting practice on Freeman St, Orange NJ. Cinematic color-chip wall signature in the hero. Cormorant serif + considered palette doctrine.",
    image: "/projects/black-river-painting/hero.png",
    previewVideo: "/projects/black-river-painting/preview.webm",
    previewPoster: "/projects/black-river-painting/preview-poster.jpg",
    link: "https://github.com/semajzandrews/black-river-painting",
    repoUrl: "https://github.com/semajzandrews/black-river-painting",
    liveUrl: "https://black-river-painting.vercel.app",
    tags: ["Next.js 16", "Motion", "Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Black River Painting is an editorial-grade painting practice. The site borrows its lineage from Farrow & Ball, Pantone chip walls, and interior design magazines — art-paper cream surfaces, warm graphite ink, and five named paint chips (Hempstead Forest, Berwyn Clay, Bone Linen, Midnight Ink, Dusty Rose) that drive every section's atmosphere. Signature moment is the hero color-chip wall: five vertical chips animate in like swatches pinned to a board, each tagged with name, hex, and the room of the house it lives in. The 'Work' grid puts each finished room into a colored card with no photography — the paint color IS the portfolio piece. Process section flips to graphite background with italic Roman numerals for the six steps from visit to clean.",
    features: [
      "Animated five-chip color wall hero signature",
      "Six finished-room portfolio cards (each its own paint color)",
      "Three curated house palettes with named chips",
      "Six-step practice from Visit → Clean (Roman numerals)",
      "Cormorant Garamond italic display + Inter body",
    ],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Cormorant Garamond + Inter + JetBrains Mono"],
    challenges: ["Building a painter's portfolio without before/after photography","Selling the editorial positioning without losing the working-tradesman honesty"],
    solutions: ["The paint color itself is the portfolio piece — each card uses its featured color as the entire background","Process copy keeps it plainspoken — 'prep is the work, the painting is what people see.'"],
    outcome: "Live and ready for the practice's first email blast.",
  },

  {
    "id": 109,
    "title": "Dev's Jamaican Cuisine",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A smoky, near-black Jamaican grill site with a charred-grill hero and a giant fire-textured 'DEV'S' wordmark glowing over a dotted-ember divider.",
    "image": "/projects/devs-jamaican-cuisine/hero.png",
    "link": "https://devs-jamaican-cuisine.vercel.app",
    "liveUrl": "https://devs-jamaican-cuisine.vercel.app",
    "tags": [
      "Restaurant",
      "Jamaican",
      "Fire Texture"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "The hero opens on a dark, smoke-filled grill photo with a tight intro about a family kitchen cooking jerk for over a decade. Below, an oversized 'DEV'S / JAMAICAN CUISINE' wordmark rendered in flame texture sits above a row of glowing ember dots, and 'Coals - Low' / 'Taste the drum' labels carry the heat-and-rhythm theme through the layout.",
    "features": [
      "Smoky charred-grill photographic hero",
      "Oversized flame-textured DEV'S wordmark",
      "Glowing ember-dot divider row",
      "Heat-and-rhythm motifs ('Coals - Low', 'Taste the drum')",
      "Orange Call CTA against a near-black palette"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "Translates a decade-old jerk kitchen's smoke and fire into a moody, high-heat brand that looks as bold as the food tastes."
  },

  {
    "id": 104,
    "title": "Dada Doll Beauty Spa",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A doll-luxe spa site where a magenta italic headline and faint topographic linework keep a body-sculpting studio feeling soft, airy, and one-of-one.",
    "image": "/projects/dada-doll-beauty-spa/hero.png",
    "link": "https://dada-doll-beauty-spa.vercel.app",
    "liveUrl": "https://dada-doll-beauty-spa.vercel.app",
    "tags": [
      "Beauty Spa",
      "Editorial",
      "Magenta"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "The hero pairs a tall serif lockup, 'Sculpted, soft, unmistakably you,' with a single italic accent line in deep magenta against generous off-white space and ghosted contour lines. A tidy row of pill-tabs (Body Contouring, Wood Therapy, Post-Op Care, Facials & Glow) turns the menu into a glanceable index, while a magenta 'Book by Phone' button anchors every decision.",
    "features": [
      "Serif hero with a single magenta italic emphasis line",
      "Topographic contour linework as a subtle background texture",
      "Pill-style treatment index for Body Contouring, Wood Therapy, Post-Op Care, and Facials",
      "Dual primary CTAs: Book by Phone and View the treatments",
      "Floating phone-call pill pinned to the corner"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis"
    ],
    "outcome": "Gives a Main Street body-sculpting studio a refined, doll-luxe identity that reads premium without feeling clinical."
  },

  {
    id: 15,
    title: "PrettyLittleThing — Welcome",
    year: "2023",
    role: "Email Developer (Solo)",
    description:
      "Welcome email for PrettyLittleThing. Fast-fashion energy, conversion-tuned CTAs, mobile-first execution.",
    image: "/projects/email-prettylittlething/hero.png",
    link: "https://github.com/semajzandrews/email-development-portfolio/tree/main/welcome/prettylittlething-welcome-email",
    repoUrl: "https://github.com/semajzandrews/email-development-portfolio/tree/main/welcome/prettylittlething-welcome-email",
    tags: ["HTML", "CSS", "Welcome", "Fashion"],
    categories: ["Email Development"],
    subcategory: "Welcome Emails",
    detailedDescription:
      "PrettyLittleThing welcome email — the first-touch retail introduction. Fast-fashion brand energy with conversion-tuned CTAs and a mobile-first execution. Hand-coded for cross-client rendering across Outlook, Gmail, Apple Mail, and mobile clients.",
    features: [
      "First-touch retail welcome with conversion CTAs",
      "Mobile-first layout — primary surface for fashion shoppers",
      "Brand-energetic palette and typography",
      "Cross-client tested",
    ],
    technologies: [
      "HTML / CSS for email-safe markup",
      "Hybrid table-based layout",
      "Outlook conditional fallbacks",
      "Litmus / Email on Acid for QA",
    ],
    challenges: [
      "Carrying fast-fashion energy through email's restricted CSS surface",
      "Conversion CTAs that work at first-touch (low context)",
    ],
    solutions: [
      "Bold imagery and color carry the brand where typography is constrained",
      "Single primary CTA with discovery secondary — reduce decision load",
    ],
    outcome: "Production welcome email shipped for PrettyLittleThing.",
  },

  {
    "id": 88,
    "title": "Globe Electronics",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "Warm circuitry hero with a classic serif 'We open it up and bring it back' line over a moody close-up of stereo internals.",
    "image": "/projects/globe-electronics/hero.png",
    "link": "https://globe-electronics.vercel.app",
    "liveUrl": "https://globe-electronics.vercel.app",
    "tags": [
      "Repair",
      "Serif",
      "Moody"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "A repair shop earns gravitas through a refined serif headline glowing over an amber-lit shot of capacitors and circuit boards. The italic 'back' lands the promise: fifteen years of fixing what others write off. Burnt-orange CTAs and a thin credibility strip ('since 2009') keep the tone confident and trade-proud rather than flashy.",
    "features": [
      "Amber-lit macro photo of circuitry as hero",
      "Elegant serif headline with italic closing word",
      "Established-since credibility strip",
      "Burnt-orange primary CTA paired with a call button",
      "Quiet footer cues for warranty and bluetooth services"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "An electronics repair shop now reads as a trusted craftsman, not a strip-mall counter."
  },

  {
    id: 5,
    title: "Systemomtics",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Botanical wellness brand site. Small-batch, handcrafted, earth-derived products — balms, art pieces, and educational PDFs. The first production deployment of IGRIS.",
    image: "/projects/systemomtics/hero.png",
    link: "https://github.com/semajzandrews/systemomtics-site",
    repoUrl: "https://github.com/semajzandrews/systemomtics-site",
    liveUrl: "https://systemomtics-site.vercel.app",
    tags: ["Next.js 16", "Tailwind v4", "Framer Motion", "Editorial"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Systemomtics is a botanical wellness brand — small-batch, handcrafted, earth-derived. The site sells balms (earth-derived butters, Rosminté & Lavilla Root, botanical ingredients), customizable art pieces ('Wear the Intention'), and free educational PDFs from The L.A.B. The visual language pairs a warm cream palette with editorial serif typography and intentional scroll motion; sections numbered 01–04 carry the reader through Collection → Balms → Art → Free PDFs. Built with Next.js 16, React 19, Tailwind v4, and Framer Motion v12 — the first production deployment of the IGRIS pipeline.",
    features: [
      "Editorial typography paired with a warm botanical palette",
      "Sectioned narrative (Collection · Balms · Art · Free PDFs)",
      "Customizable art-piece product line ('Wear the Intention')",
      "Free PDF library — 'Knowledge as a gift' from The L.A.B.",
      "Subtle scroll-triggered motion via Framer Motion",
      "Mobile-first with desktop refinement layer",
    ],
    technologies: [
      "Next.js 16 (App Router)",
      "React 19",
      "Tailwind CSS v4",
      "Framer Motion v12",
      "TypeScript strict",
    ],
    challenges: [
      "Positioning a botanical brand as editorial and intentional, not crunchy",
      "Tuning motion to feel grounded rather than ornamental",
    ],
    solutions: [
      "Serif display paired with restrained body typography for editorial weight",
      "Motion easing curves borrowed from print-magazine pacing",
    ],
    outcome:
      "First IGRIS reference build — proves the pipeline produces shippable, brand-coherent work outside of fintech defaults.",
  },

  {
    "id": 86,
    "title": "Sensational Beauty Supply",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "Cream editorial layout pairing a mixed serif 'Sensational Beauty Supply' lockup with a glamorous pink-backdrop portrait.",
    "image": "/projects/sensational-beauty-supply/hero.png",
    "link": "https://sensational-beauty-supply.vercel.app",
    "liveUrl": "https://sensational-beauty-supply.vercel.app",
    "tags": [
      "Editorial",
      "Beauty",
      "Portrait"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "A warm cream page treats a neighborhood beauty supply like a fashion editorial, mixing weights and an italic 'Beauty' across the three-line headline. A drop-cap intro and a real Google rating of 4.1 ground the polish in trust, while a portrait against bubblegum pink supplies the color. Outlined buttons and a clean top index keep the aisle of wigs, braids, and skincare feeling curated.",
    "features": [
      "Mixed-weight serif headline with italic emphasis",
      "Drop-cap editorial intro paragraph",
      "Embedded Google rating with star display",
      "Glamour portrait on a saturated pink backdrop",
      "Outlined index and call buttons for a refined feel"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A Main Street supply counter presents with the confidence of a boutique beauty brand."
  },

  {
    id: 6,
    title: "Nails Fever Spa",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Luxury dark-theme beauty site with Three.js hero scene. A high-end nail and spa boutique built to feel like a fashion editorial rather than a service business.",
    image: "/projects/nails-fever-spa/hero.png",
    link: "https://github.com/semajzandrews/nails-fever-spa",
    repoUrl: "https://github.com/semajzandrews/nails-fever-spa",
    liveUrl: "https://nails-fever-spa.vercel.app",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Nails Fever Spa is a luxury dark-theme site for a boutique nail and spa business. The build leans editorial — large-format imagery, intentional negative space, and a Three.js hero scene that gives the homepage a tactile depth typical of high-end fashion sites rather than service businesses. Built via the IGRIS pipeline with strict differentiation against prior beauty-vertical work.",
    features: [
      "Three.js hero scene for tactile depth",
      "Editorial dark-theme palette tuned for luxury positioning",
      "Service catalog with intentional typographic hierarchy",
      "Booking call-to-action with conversion-optimized motion",
      "Mobile-first execution",
    ],
    technologies: [
      "Next.js 15",
      "Three.js for hero scene",
      "Framer Motion",
      "Tailwind CSS",
    ],
    challenges: [
      "Positioning a local service business as a luxury brand without losing approachability",
      "Three.js hero performance on mid-tier mobile devices",
    ],
    solutions: [
      "Typography and color discipline carry the luxury feel; copy stays warm",
      "Three.js scene degrades to static hero image on low-spec devices",
    ],
    outcome:
      "Production-ready luxury site for a local boutique — pipeline-built, differentiation-verified.",
  },

  {
    "id": 89,
    "title": "Luna Llena Beauty Salon",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "Spanish-first salon hero bathed in golden moonlight, with 'Te ves preciosa bajo esta luz' set in flowing serif italics.",
    "image": "/projects/luna-llena-beauty-salon/hero.png",
    "link": "https://luna-llena-beauty-salon.vercel.app",
    "liveUrl": "https://luna-llena-beauty-salon.vercel.app",
    "tags": [
      "Bilingual",
      "Luxury",
      "Golden Hour"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "A glowing full-moon backdrop in deep golds gives Luna Llena a literal namesake hero, with the headline leaning into warm italic serif. The copy leads in Spanish for the City of Orange clientele and offers an English toggle, honoring the neighborhood it serves. Gold-outlined reservation buttons and a floating call pill carry the moonlit luxury all the way down.",
    "features": [
      "Golden full-moon hero matching the 'Luna Llena' name",
      "Spanish-first copy with English language toggle",
      "Flowing italic serif headline on dark gold",
      "Gold-outlined reserve and portfolio CTAs",
      "Floating call pill for one-tap booking"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A bilingual salon greets its community in its own language under a hero as warm as its name."
  },

  {
    id: 22,
    title: "Blessed Hope Daycare Center",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Licensed home childcare on Joyce Street, Orange NJ. Warm picture-book palette, hand-drawn flower bloom signature, hand-illustrated house in the visit section.",
    image: "/projects/blessed-hope-daycare/hero.png",
    previewVideo: "/projects/blessed-hope-daycare/preview.webm",
    previewPoster: "/projects/blessed-hope-daycare/preview-poster.jpg",
    link: "https://github.com/semajzandrews/blessed-hope-daycare",
    repoUrl: "https://github.com/semajzandrews/blessed-hope-daycare",
    liveUrl: "https://blessed-hope-daycare.vercel.app",
    tags: ["Next.js 16", "Motion", "SVG", "Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Blessed Hope is a licensed home daycare on Joyce Street in Orange, NJ. The lineage is Eric Carle picture-book gouache meets Montessori classroom card meets nursery-rhyme palette — warm milk-cream, cocoa brown, peach hug, sage leaves, butter highlights. The signature moment is a hand-drawn flower bloom in the hero: eight back petals plus eight front petals plus a butter-yellow freckled center, all popping in on the bloom-pop keyframe. The leaves sway gently. Six golden sparkles float-soft around the composition. The Visit section ends in a hand-drawn front-of-house illustration with windows, a sage door, a heart on the door, a tree, and clouds. Handwritten Caveat-script accents throughout sell the human warmth.",
    features: [
      "Hand-drawn flower bloom signature moment (16 petals + sparkles)",
      "Four age-group program cards (Infants, Toddlers, Preschool, Pre-K) with ratios",
      "Ten-step daily-rhythm schedule",
      "Six daily-promise trust cards (licensed, CPR, ratios, notes, food, outside)",
      "Hand-drawn front-of-house SVG illustration in Visit section",
      "Fraunces display + Nunito body + Caveat handwritten script",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Motion",
      "Lenis",
      "Fraunces + Nunito + Caveat (next/font)",
    ],
    challenges: [
      "Making a licensed-home-daycare site feel warm and trustworthy without crossing into kitschy",
      "Differentiating from the harder industrial sites in the same batch (Orange Central Supply, Claude's Auto)",
    ],
    solutions: [
      "Hand-illustrated SVG vocabulary in place of stock photography or AI imagery",
      "Caveat handwritten accents on specific lines ('tours available most afternoons, just ask.') add human voice",
    ],
    outcome:
      "Live and ready for tours-from-the-phone on Monday's walk. Cost under two dollars in AI generation.",
  },

  {
    id: 27,
    title: "Edgar Jewelry",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "Heirloom craft, quietly kept. A neighborhood jeweler on Central Ave, Orange NJ. Velvet aubergine + champagne + diamond white. Spinning faceted-gem signature.",
    image: "/projects/edgar-jewelry/hero.png",
    previewVideo: "/projects/edgar-jewelry/preview.webm",
    previewPoster: "/projects/edgar-jewelry/preview-poster.jpg",
    link: "https://github.com/semajzandrews/edgar-jewelry",
    repoUrl: "https://github.com/semajzandrews/edgar-jewelry",
    liveUrl: "https://edgar-jewelry.vercel.app",
    tags: ["Next.js 16","Motion","SVG","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "Edgar Jewelry is a one-bench atelier on Central Avenue, Orange NJ. The site borrows from Tiffany catalogs, jewelry-box velvet, and Vogue editorials. Bodoni Moda display over deep aubergine velvet. The hero is asymmetric: a spinning faceted-gem SVG floats overlapping the headline column with a soft facet-light sweep. The Collection grid uses an asymmetric overlap layout where cards intentionally offset their neighbors vertically — reading as a curated table-top rather than a uniform grid. Six numbered articles (Custom commission stages, Atelier, Visit) close out.",
    features: ["Spinning faceted-gem hero with light-sweep","Asymmetric overlap card grid (intentional vertical offsets)","Six-stage custom commission flow with Roman numerals","Italic display headlines throughout (Bodoni Moda + Italiana script)","Champagne hairline rules + velvet noise texture"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Bodoni Moda + Inter + Italiana"],
    challenges: ["Selling luxury without losing the neighborhood-jeweler positioning","Differentiating from prior dark-palette IGRIS builds (Pulse Point, Claude's)"],
    solutions: ["Aubergine instead of black; champagne instead of chrome — same depth, different mood","Asymmetric layout grammar (not used in any Season 1 build)"],
    outcome: "Live and ready to take by-appointment viewings.",
  },

  {
    "id": 64,
    "title": "Park Crescent Health Care",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A warm forest-green skilled-nursing site that leads with a genuine resident portrait and a serif headline promising the way back to yourself.",
    "image": "/projects/park-crescent-health-care/hero.png",
    "link": "https://park-crescent-health-care.vercel.app",
    "liveUrl": "https://park-crescent-health-care.vercel.app",
    "tags": [
      "Healthcare",
      "Serif Editorial",
      "Warm Palette"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "Built on a deep evergreen field with cream type, the design pairs a stately serif headline against a candid laughing-resident portrait framed in soft rounded corners. An italic accent on the word 'yourself' and a floating 'Admissions, seven days a week' card give the recovery-focused message real human dignity rather than clinical coldness.",
    "features": [
      "Pill-shaped click-to-call and 'Plan a visit' CTAs",
      "Floating admissions availability card over the hero portrait",
      "Serif headline with italic emphasis word",
      "Slim top nav with Care, The Way Back, Our People, Visit"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "A skilled-nursing brand that reads as dignified and human, turning recovery care into a warm, trustworthy first impression."
  },

  {
    id: 31,
    title: "CLEAN CUT'S Barbershop",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "Old-World barbering on Central Ave, Orange NJ. Navy + cream + tarnished gold + barber-stripe red. Split-half sticky-left layout.",
    image: "/projects/cleancuts-barbershop/hero.png",
    previewVideo: "/projects/cleancuts-barbershop/preview.webm",
    previewPoster: "/projects/cleancuts-barbershop/preview-poster.jpg",
    link: "https://github.com/semajzandrews/cleancuts-barbershop",
    repoUrl: "https://github.com/semajzandrews/cleancuts-barbershop",
    liveUrl: "https://cleancuts-barbershop.vercel.app",
    tags: ["Next.js 16","Motion","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "CLEAN CUT'S is a barbershop on Central Avenue, Orange NJ. Layout grammar is SPLIT-HALF — the left column sticks (md:sticky md:top-0 md:h-screen) showing the brand mark sandwiched between two animated barber poles (gradient stripes scrolling at opposite speeds), while the right column scrolls through four numbered Chapters. Playfair italic over Oswald condensed, navy + tarnished gold + barber-stripe red. The deco-rule hairline divider has diamond accents at both ends.",
    features: ["Split-half layout (left sticky brand panel, right scrolling content)","Two animated barber poles flanking the brand mark","Four numbered Chapters (Services · Barbers · Visit)","Deco-rule hairline with diamond accents","Lather-sweep ambient animation"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Playfair Display + Oswald + Inter"],
    challenges: ["Communicating Old-World craft without parody","First IGRIS use of sticky-half-screen layout grammar"],
    solutions: ["Italic Playfair signature on CLEAN, condensed Oswald on CUT'S — two type personalities","Sticky brand pole stays anchored as the right side scrolls through chapters"],
    outcome: "Live and ready for walk-ins.",
  },

  {
    id: 39,
    title: "Mikauri Nail Salon & Spa",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "Nail salon on Park Ave, Orange NJ. Porcelain + dusty rose + champagne + charcoal. Diagonal-split editorial hero with painted-polish-stroke SVG.",
    image: "/projects/mikauri-nail-salon/hero.png",
    previewVideo: "/projects/mikauri-nail-salon/preview.webm",
    previewPoster: "/projects/mikauri-nail-salon/preview-poster.jpg",
    link: "https://github.com/semajzandrews/mikauri-nail-salon",
    repoUrl: "https://github.com/semajzandrews/mikauri-nail-salon",
    liveUrl: "https://mikauri-nail-salon.vercel.app",
    tags: ["Next.js 16","Motion","SVG","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "Mikauri Nail Salon & Spa positions itself as a quiet luxury appointment-only nail house. The hero uses a diagonal-split background (blush left, porcelain right, polygon clip-path) overlaid with a 1200x200 hand-painted dusty-rose 'polish stroke' SVG curving across the middle of the screen. Playfair Display italic with a shimmer-gradient animation for the '& SPA.' subhead. Services rendered as an editorial 10-row pricing table with dotted leaders. Eight-swatch house-color lookbook (Porcelain → Onyx, hex codes labeled). Italianno cursive for the brand subtitle.",
    features: ["Diagonal-split hero background with polygon clip-path","Hand-painted polish-stroke SVG across the hero","Shimmer-gradient text animation on the headline","10-row pricing table services menu","8-swatch house-color lookbook with hex labels"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Playfair Display + Inter + Italianno"],
    challenges: ["Beauty industry has heavy template fatigue — needed editorial restraint","Differentiating from Edgar Jewelry (also luxury/feminine)"],
    solutions: ["Editorial pricing table grammar vs Edgar's overlap-card grammar — same vertical, different layouts","Italianno cursive instead of Edgar's Italiana — different script registers"],
    outcome: "Live and ready for the booking calendar.",
  },

  {
    id: 14,
    title: "Pizza Hut — Hut Rewards Onboarding",
    year: "2023",
    role: "Email Developer (Solo)",
    description:
      "Onboarding email for Pizza Hut's Hut Rewards loyalty program. Lifecycle-thinking design with progressive engagement and clear next steps.",
    image: "/projects/email-pizza-hut/hero.png",
    link: "https://github.com/semajzandrews/email-development-portfolio/tree/main/onboarding/pizzahut-hut-rewards-onboarding",
    repoUrl: "https://github.com/semajzandrews/email-development-portfolio/tree/main/onboarding/pizzahut-hut-rewards-onboarding",
    tags: ["HTML", "CSS", "Onboarding", "Lifecycle"],
    categories: ["Email Development"],
    subcategory: "Onboarding Emails",
    detailedDescription:
      "Hut Rewards onboarding email for Pizza Hut. Introduces the loyalty program to new members with a progressive engagement frame — earn / redeem / repeat — and clear next steps. Hand-coded with cross-client compatibility and lifecycle-aware copy structure.",
    features: [
      "Loyalty-program onboarding with progressive engagement frame",
      "Earn / redeem / repeat narrative arc",
      "Mobile-first layout with desktop polish",
      "Cross-client tested",
    ],
    technologies: [
      "HTML / CSS for email-safe markup",
      "Table-based layout",
      "Conditional Outlook fallbacks",
      "Litmus / Email on Acid for QA",
    ],
    challenges: [
      "Loyalty messaging that motivates without overwhelming first-time members",
      "Brand-loud colors that survive client-side dark-mode inversion",
    ],
    solutions: [
      "Stepped CTA hierarchy — one primary, two secondary",
      "Color-locked palette with dark-mode preservation directives",
    ],
    outcome: "Production onboarding email shipped for the Pizza Hut Hut Rewards program.",
  },

  {
    id: 7,
    title: "Southern Komfort Bar & Grill",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Warm smokehouse-themed brand site. Earthy palette, friendly editorial typography, and motion vocabulary tuned for a hospitality business that wants depth, not gloss.",
    image: "/projects/southern-komfort/hero.png",
    link: "https://github.com/semajzandrews/southern-komfort-site",
    repoUrl: "https://github.com/semajzandrews/southern-komfort-site",
    liveUrl: "https://southern-komfort-site.vercel.app",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Southern Komfort Bar & Grill is a hospitality brand site with a warm smokehouse aesthetic — earthy palette, friendly editorial typography, and scroll motion tuned to feel grounded rather than glossy. Built via the IGRIS pipeline with strict differentiation against the luxury beauty work of Nails Fever Spa.",
    features: [
      "Earthy palette tuned for hospitality warmth",
      "Friendly editorial typography over bar-and-grill tropes",
      "Menu, story, and reservations sections with intentional motion",
      "Mobile-first execution",
    ],
    technologies: [
      "Next.js 15",
      "Framer Motion",
      "Tailwind CSS",
    ],
    challenges: [
      "Making a bar-and-grill brand feel modern without losing approachability",
      "Avoiding the typical hospitality-template look",
    ],
    solutions: [
      "Editorial typography choices instead of stock display fonts",
      "Differentiation registry forced a palette and motion language unlike prior IGRIS hospitality work",
    ],
    outcome:
      "Hospitality brand site shipped via pipeline — distinct aesthetic from other IGRIS builds in the registry.",
  },

  {
    id: 19,
    title: "Pulse Point Logistics LLC",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Specialized medical, hazmat, reverse, and patient-transport logistics out of Jersey City. EKG-line hero, live vitals ticker, live dispatch console, custom cursor.",
    image: "/projects/pulsepoint/hero.png",
    previewVideo: "/projects/pulsepoint/preview.webm",
    previewPoster: "/projects/pulsepoint/preview-poster.jpg",
    link: "https://github.com/semajzandrews/pulsepoint",
    repoUrl: "https://github.com/semajzandrews/pulsepoint",
    liveUrl: "https://pulsepoint-eta.vercel.app",
    tags: ["Next.js 16", "Motion", "Lenis", "Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Pulse Point Logistics is a specialized logistics carrier based in Jersey City — radiopharmaceuticals, hazmat, reverse logistics, and patient transport across the tri-state. The brand site reads like a medical operations console: an EKG line drawn live across the hero, a vitals ticker streaming diagnostic data under the nav, and a live dispatch console showing active shipments with running elapsed timers. Custom pulse-ring cursor. TWIC/TSA/HIPAA-tier positioning baked into the copy and the credentials grid. First IGRIS build greenlit by a real client.",
    features: [
      "EKG-line hero with kinetic per-character headline reveal",
      "Continuous diagnostic vitals ticker beneath the nav",
      "Live dispatch console with running elapsed timers and status pills",
      "Network map with 15 real tri-state hubs and 20 animated lanes",
      "Custom pulse-ring cursor (split detect + listener effects)",
      "Mobile-first hamburger nav with staggered link entrance",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Motion",
      "Lenis (smooth scroll)",
      "Lucide React",
    ],
    challenges: [
      "Translating a clinical operations feel without leaning on hospital-website tropes",
      "Keeping the EKG line and ticker animations performant on mid-tier mobile",
    ],
    solutions: [
      "EKG line driven by a single SVG path with stroke-dashoffset; ticker uses CSS transform marquee",
      "Network map rendered as SVG with declarative animations rather than canvas",
    ],
    outcome:
      "Live and approved by the client. First IGRIS production deliverable that an external buyer signed off on.",
  },

  {
    "id": 110,
    "title": "Fabco Shoes",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A bright, blue-accented footwear retail page headlined 'Every size for the whole family, under one roof,' with clean cards and a 'this week on the wall' shelf.",
    "image": "/projects/fabco-shoes/hero.png",
    "link": "https://fabco-shoes.vercel.app",
    "liveUrl": "https://fabco-shoes.vercel.app",
    "tags": [
      "Footwear",
      "Retail",
      "Family"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "On crisp white, a bold black headline with a blue emphasis line frames Fabco as a try-before-you-buy family shoe store, backed by a soft product shot. Rounded blue 'Shop the floor' and 'Get directions' buttons lead the way, while a 'Find your fit' card with a large '13' count and a warm 'This week on the wall' tile add retail texture without clutter.",
    "features": [
      "Clean white layout with blue accent emphasis line",
      "Family-first headline over a soft product shot",
      "Rounded Shop the floor and Get directions CTAs",
      "'Find your fit' card with a large live count stat",
      "'This week on the wall' featured-product tile"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion"
    ],
    "outcome": "Frames a walk-in family shoe store as the approachable, every-size local stop with directions and inventory front and center."
  },

  {
    "id": 70,
    "title": "More More Now Records",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A dramatic dark record-shop site built around a spotlit vinyl record and a refined serif line about two sides one basement keeps apart.",
    "image": "/projects/more-more-now-records/hero.png",
    "link": "https://more-more-now-records.vercel.app",
    "liveUrl": "https://more-more-now-records.vercel.app",
    "tags": [
      "Record Shop",
      "Dark Editorial",
      "Music Culture"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "On a near-black stage, a single glossy vinyl record sits center under a soft top-light, its half-toned sheen doing the heavy lifting. A refined serif headline with a coral italic accent and tracked-out micro-labels give the shop a moody, crate-digger editorial mood that feels collectible and curated.",
    "features": [
      "Spotlit centered vinyl record hero",
      "Refined serif headline with coral italic accent",
      "Tracked-out genre micro-labels (house, techno)",
      "Minimal Side A / Side B / Guest nav",
      "High-contrast dark editorial layout"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis"
    ],
    "outcome": "An independent record shop given a collectible, gallery-dark identity that speaks to serious crate diggers."
  },

  {
    "id": 66,
    "title": "AAA Able Plumbing & Heating",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A moody near-black plumbing and heating site with a glowing smart-thermostat reading 108 degrees and bold 'Water and heat, handled' type.",
    "image": "/projects/aaa-able-plumbing-heating/hero.png",
    "link": "https://aaa-able-plumbing-heating.vercel.app",
    "liveUrl": "https://aaa-able-plumbing-heating.vercel.app",
    "tags": [
      "Home Services",
      "Dark Cinematic",
      "Trade Confidence"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "This trade site swaps the usual bright-blue cliche for a dark, cinematic treatment: a softly lit photo of hands at a radiator and a circular thermostat glowing 108 degrees. A heavy sans headline with an amber 'handled' accent and a single gold call button keep the tone confident and no-nonsense.",
    "features": [
      "Dramatic thermostat-glow hero photography",
      "Amber accent word on a heavy sans headline",
      "Prominent click-to-call as the primary action",
      "Google star-rating trust line",
      "Tight nav: Services, The System, Reviews, Visit"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A plumbing and heating brand that feels premium and dependable instead of generic, built to drive direct calls."
  },

  {
    id: 33,
    title: "Linden Pain Relief",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "A small chiropractic + recovery practice on Linden Ave, Orange NJ. Japanese minimalist medicine — paper + ink + jade + single red seal accent.",
    image: "/projects/linden-pain-relief/hero.png",
    previewVideo: "/projects/linden-pain-relief/preview.webm",
    previewPoster: "/projects/linden-pain-relief/preview-poster.jpg",
    link: "https://github.com/semajzandrews/linden-pain-relief",
    repoUrl: "https://github.com/semajzandrews/linden-pain-relief",
    liveUrl: "https://linden-pain-relief.vercel.app",
    tags: ["Next.js 16","Motion","SVG","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "Linden Pain Relief is a chiropractic practice with a Japanese minimalist medicine lineage — paper-cream background, warm ink, jade green for trust signals, and a single red 'seal' accent stamp used sparingly. The hero shows a charcoal human silhouette with six floating pressure-point dots (each pulsing at staggered delays), paired with a vertical-tate '図一・体' annotation. Five-step method uses brushed numerals 一二三四五. Six kanji-led concerns (頸 neck, 腰 low back, 肩 shoulder, 膝 knee, 頭 head, 睡 sleep) anchor the care grid.",
    features: ["Charcoal silhouette with pulsing pressure-point markers","Single red seal accent (used sparingly)","Brushed Japanese numerals (一二三四五) for the method steps","Kanji-led concern cards (頸 腰 肩 膝 頭 睡)","Vertical-tate writing-mode annotations"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Cormorant Garamond + Inter"],
    challenges: ["Borrowing from Japanese aesthetic without appropriation — show respect","Communicating medical authority through restraint"],
    solutions: ["Used the lineage as composition discipline, not surface ornament","Single seal-red, never used as bulk background"],
    outcome: "Live and ready for first-visit appointments.",
  },

  {
    id: 40,
    title: "The Lounge",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "Cocktail lounge on Central Ave, Orange NJ. Speakeasy smoke + oxblood + brass + ivory. Drifting smoke-curl SVGs + brass-line dividers.",
    image: "/projects/the-lounge-orange/hero.png",
    previewVideo: "/projects/the-lounge-orange/preview.webm",
    previewPoster: "/projects/the-lounge-orange/preview-poster.jpg",
    link: "https://github.com/semajzandrews/the-lounge-orange",
    repoUrl: "https://github.com/semajzandrews/the-lounge-orange",
    liveUrl: "https://the-lounge-orange.vercel.app",
    tags: ["Next.js 16","Motion","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "The Lounge is a cocktail bar with 180 reviews. The site is hushed-room theatrical — deep smoke-black surfaces, oxblood maroon for accents, brass for hairlines, ivory for body. Two drifting smoke-curl SVGs (one rose-magenta, one oxblood) curl up behind the centered Cinzel-display headline. The cocktail list runs eight rows deep with dashed dividers. Weekly nights grid (Vinyl Wednesday, Jazz Trio Thursday, Late Set Friday, Cocktail Class Saturday). Pinyon Script for the 'welcome to' / 'behind the bar' subtitles. Reserve section in full-bleed oxblood.",
    features: ["Two drifting smoke-curl SVG animations","Cinzel display with 0.06em letter-spacing","Brass-line gradient hairline dividers","8-cocktail list with dashed leader dividers","4-night weekly programming grid"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Cinzel + Inter + Pinyon Script"],
    challenges: ["Speakeasy aesthetic is over-done — needed distinctive restraint","Differentiating from Cantina 443's neon-loud bar vibe"],
    solutions: ["Smoke-and-brass theatrical instead of neon-and-magenta — opposite mood","Pinyon Script + Cinzel pairing is unlike anything in registry"],
    outcome: "Live and pouring properly.",
  },

  {
    id: 8,
    title: "Hong Am",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Brand site shipped through IGRIS with a distinct visual language gated by the Differentiation Engine against prior pipeline builds.",
    image: "/projects/hong-am/hero.png",
    link: "https://github.com/semajzandrews/hong-am-site",
    repoUrl: "https://github.com/semajzandrews/hong-am-site",
    liveUrl: "https://hong-am-site.vercel.app",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Hong Am is a brand site shipped via the IGRIS pipeline. Like every IGRIS build, its aesthetic was gated by the Differentiation Engine — palette, type stack, motion vocabulary, and layout grammar all had to clear the registry threshold against prior builds before generation was permitted.",
    features: [
      "Distinct aesthetic vs. prior IGRIS pipeline builds",
      "Differentiation Engine-verified palette and motion",
      "Mobile-first execution",
      "Production-tuned performance",
    ],
    technologies: [
      "Next.js 15",
      "Framer Motion",
      "Tailwind CSS",
    ],
    challenges: [
      "Producing a coherent brand identity while satisfying the differentiation registry",
    ],
    solutions: [
      "Pipeline brief generation seeded with anti-patterns from prior IGRIS builds",
    ],
    outcome:
      "Production brand site shipped via the pipeline — Differentiation Engine-verified.",
  },

  {
    "id": 65,
    "title": "Soca Tattoo Studio",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "A near-black editorial tattoo site where an oversized serif 'We build the picture into the skin' frames a real elephant-tattoo close-up.",
    "image": "/projects/soca-tattoo-studio/hero.png",
    "link": "https://soca-tattoo-studio.vercel.app",
    "liveUrl": "https://soca-tattoo-studio.vercel.app",
    "tags": [
      "Tattoo Studio",
      "Dark Editorial",
      "Bold Typography"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "The layout runs on a charcoal canvas with a tall serif statement headline and a single hero photo of a finished forearm tattoo, vivid against the dark. Orange italic emphasis and a brick-red 'Book a session' button add editorial heat, while a five-star rating strip and 'South Orange, NJ' anchor it as a collective studio.",
    "features": [
      "Full-bleed real tattoo hero photography",
      "Italic accent words inside the serif headline",
      "Five-star review and location credibility strip",
      "'Book a session' and 'See the work' dual CTAs",
      "Minimal Work / The Collective / Services nav"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A dark, gallery-grade studio site that makes the artwork the headline and earns the booking."
  },

  {
    id: 34,
    title: "FURNITURE R US",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "A no-nonsense furniture warehouse on Central Ave, Orange NJ. Memphis revival — black + white + electric blue + signal yellow + blush + mint. Maximalist.",
    image: "/projects/furniture-r-us/hero.png",
    previewVideo: "/projects/furniture-r-us/preview.webm",
    previewPoster: "/projects/furniture-r-us/preview-poster.jpg",
    link: "https://github.com/semajzandrews/furniture-r-us",
    repoUrl: "https://github.com/semajzandrews/furniture-r-us",
    liveUrl: "https://furniture-r-us.vercel.app",
    tags: ["Next.js 16","Motion","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "FURNITURE R US is the loud retail counterpoint to the other Season 2 builds. Memphis-design revival — Archivo Black uppercase headlines at clamp(4rem, 14vw, 15rem), with floating geometric shapes (circles, squares, triangles, dots) drifting around the hero on staggered float-shape animations. Squiggle-pattern hairlines, hard 12px hand-shadow on cards (shadow-[12px_12px_0_0_var(--coal)]), and four full-bleed Room sections each in a different electric color (electric blue, blush, mint, signal yellow). Loud, declarative, fearless.",
    features: ["Memphis-design hero (floating shapes, dot patterns, squiggle hairlines)","Hard hand-shadow cards (12px offset solid black)","Four full-bleed room sections each in its own electric color","Archivo Black uppercase at 15rem max","Spinning slow-rotating border-ring background ornaments"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Archivo Black + Inter + JetBrains Mono"],
    challenges: ["Going maximalist without sacrificing legibility","Differentiating from neighboring Cantina 443 (also bold/loud)"],
    solutions: ["Heavy weight stays consistent — color does the variation","Geometric shapes instead of neon glow — different brand of loud"],
    outcome: "Live and shouting friendly.",
  },

  {
    "id": 71,
    "title": "R&S Jewelry & Electronics",
    "year": "2026",
    "role": "Designer & Engineer",
    "description": "An elegant dark-chocolate jewelry site with gold serif type and the line 'Gold that keeps its warmth.'",
    "image": "/projects/rns-jewelry-electronics/hero.png",
    "link": "https://rns-jewelry-electronics.vercel.app",
    "liveUrl": "https://rns-jewelry-electronics.vercel.app",
    "tags": [
      "Jewelry",
      "Gold-on-Brown",
      "Quiet Luxury"
    ],
    "categories": [
      "Web Development"
    ],
    "subcategory": "Front-End Development",
    "detailedDescription": "A warm espresso-brown field carries a large cream serif headline accented by a gold italic 'keeps,' channeling a quiet luxury counter. Gold pill buttons for call and directions, plus a tidy services row for custom design, watch and screen repair, and gold buy and trade-in, balance the boutique tone with real shop utility.",
    "features": [
      "Gold italic accent on cream serif headline",
      "Gold pill call and directions buttons",
      "Services row: custom design, repairs, trade-in",
      "Warm espresso-brown luxury palette",
      "Slim The Counter / Pieces / Services nav"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "GSAP",
      "Lenis",
      "Lucide React"
    ],
    "outcome": "A Main Street jewelry and repair counter elevated to a warm, boutique-grade brand that still surfaces every service."
  },

  {
    id: 16,
    title: "New Era — Welcome",
    year: "2023",
    role: "Email Developer (Solo)",
    description:
      "Welcome email for New Era. Streetwear / sports cap brand identity, conversion-tuned introduction.",
    image: "/projects/email-new-era/hero.png",
    link: "https://github.com/semajzandrews/email-development-portfolio/tree/main/welcome/newera-welcome-email",
    repoUrl: "https://github.com/semajzandrews/email-development-portfolio/tree/main/welcome/newera-welcome-email",
    tags: ["HTML", "CSS", "Welcome", "Streetwear"],
    categories: ["Email Development"],
    subcategory: "Welcome Emails",
    detailedDescription:
      "New Era welcome email — first-touch introduction for the streetwear and sports-cap brand. Hand-coded with brand-identity-preserving typography and cross-client tested layout.",
    features: [
      "First-touch welcome for a streetwear / sports brand",
      "Brand-identity-preserving typography and color",
      "Mobile-first execution",
      "Cross-client tested",
    ],
    technologies: [
      "HTML / CSS for email-safe markup",
      "Table-based layout",
      "Outlook conditional fallbacks",
      "Litmus / Email on Acid for QA",
    ],
    challenges: [
      "Preserving brand-identity typography where webfonts get stripped",
      "Mobile parity with desktop without sacrificing visual weight",
    ],
    solutions: [
      "System-font fallback chain matched to brand voice",
      "Stacked mobile layout with media-query refinement",
    ],
    outcome: "Production welcome email shipped for New Era.",
  },

  {
    id: 28,
    title: "L'Hirondelle Restaurant",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description: "Haitian + Caribbean kitchen on Central Ave, Orange NJ. Cobalt + saffron + earth red travel-poster aesthetic. Horizontal-scroll plates carousel signature.",
    image: "/projects/lhirondelle-restaurant/hero.png",
    previewVideo: "/projects/lhirondelle-restaurant/preview.webm",
    previewPoster: "/projects/lhirondelle-restaurant/preview-poster.jpg",
    link: "https://github.com/semajzandrews/lhirondelle-restaurant",
    repoUrl: "https://github.com/semajzandrews/lhirondelle-restaurant",
    liveUrl: "https://lhirondelle-restaurant.vercel.app",
    tags: ["Next.js 16","Motion","Tailwind v4"],
    categories: ["Web Development"],
    subcategory: "Front-End Development",
    detailedDescription: "L'Hirondelle is a Haitian + Caribbean restaurant on Central Avenue, Orange NJ. The site reads as travel poster meets street market — cobalt + saffron + earth red + mint, sun-ray fan rising behind the headline, drifting postage-stamp luggage-tag elements layered over a chalk-cream background. Signature layout grammar: a 10-plate menu rendered as a horizontal-scroll snap carousel that runs sideways across the entire viewport, instead of stacking vertically. Anton condensed display + Caveat script for the French-Creole subtitles.",
    features: ["Horizontal-scroll plates carousel (snap-scroll, 10 cards)","Sun-ray conic gradient backdrop","Drifting travel-stamp luggage tags","Stamp-edge dotted hr borders","French-Creole script subtitles via Caveat"],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Anton + Inter + Caveat"],
    challenges: ["Capturing Caribbean joy without lapsing into tourist clichés","Building a sideways-scroll layout that still works on mobile"],
    solutions: ["Drew from Haitian street-market signage rather than postcards","Snap-scroll with momentum + visible scrollbar so the affordance reads"],
    outcome: "Live and Sunday-lunch ready.",
  },
]
