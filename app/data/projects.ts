export type Project = {
  id: number
  title: string
  description: string
  image: string
  link: string
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
}

export const projects: Project[] = [
  // ─────────── AI / Automation ───────────
  {
    id: 1,
    title: "IGRIS — Production Website Agent",
    year: "2026",
    role: "Architect & Engineer (Solo)",
    description:
      "My named AI agent for shipping production-ready websites. 72-hour build cycle, fingerprint registry that bans aesthetic repetition, and every client site below was built through it.",
    image: "/projects/igris/hero.png",
    link: "https://github.com/semajzandrews",
    tags: ["Next.js 16", "Anthropic", "Differentiation Engine", "Agent"],
    categories: ["AI Development"],
    subcategory: "Production Agent",
    detailedDescription:
      "IGRIS started as a Solo Leveling-inspired shadow agent and evolved into the working pipeline I use to ship production websites end-to-end. Every site is gated by a fingerprint registry — palette family, type stack, motion vocabulary, and layout grammar are extracted and compared against the last several builds, refusing any spec that would repeat aesthetics. The pipeline produces Next.js 16 / React 19 / Tailwind v4 / Framer Motion deliverables with a documented quality bar. Mobile-first execution is mandatory because demos happen on the salesperson's phone. Next milestone: extending IGRIS from websites into native mobile applications.",
    features: [
      "Named agent identity — IGRIS owns the build, the operator orchestrates",
      "72-hour build ceiling per site, end-to-end",
      "Differentiation Engine — fingerprint registry bars aesthetic repetition across builds",
      "Mobile-first execution; demos run on phones",
      "Documented quality bar gates every deploy",
      "PIN-gated preview infrastructure for pre-sale showcase",
      "Mobile application pipeline coming online next",
    ],
    technologies: [
      "Next.js 16 (App Router, React 19, TypeScript strict)",
      "Tailwind CSS v4 + custom design tokens per build",
      "Framer Motion v12 for scroll-triggered motion",
      "Three.js for select hero scenes",
      "Anthropic Claude (Sonnet) as the build agent backbone",
      "Custom fingerprint extractor — palette / typography / motion DNA",
    ],
    challenges: [
      "Defining 'aesthetic distance' between two builds programmatically",
      "Preventing the pipeline from sliding into a house style under output pressure",
      "Holding a single quality bar across rapid output",
    ],
    solutions: [
      "Fingerprint extractor hashes palette, typography, and motion grammar into a comparable vector",
      "Differentiation check at build-start refuses any spec matching the last three fingerprints",
      "An IGRIS quality bar gates every deploy — no skips for deadline pressure",
    ],
    outcome:
      "Production agent shipping real client sites. Systemomtics, Nails Fever Spa, Southern Komfort, and Hong Am all came through IGRIS.",
    repoUrl: "https://github.com/semajzandrews",
  },
  {
    id: 2,
    title: "AI Software Factory",
    year: "2026",
    role: "Architect & Engineer (Solo)",
    description:
      "A multi-agent batch system that reads a CSV of businesses and produces unique, production-quality websites in parallel — running unattended with TTS-spoken progress reports.",
    image: "/projects/ai-software-factory/hero.png",
    link: "https://github.com/semajzandrews/AISoftwareFactoryTemplate",
    repoUrl: "https://github.com/semajzandrews/AISoftwareFactoryTemplate",
    tags: ["Python", "Anthropic API", "Multi-Agent", "Batch"],
    categories: ["AI Development"],
    subcategory: "Multi-Agent Orchestration",
    detailedDescription:
      "Sister system to IGRIS — similar in goal, different in shape. Where IGRIS is a single-build production agent, AI Software Factory is the batch orchestrator: it reads a CSV of businesses, researches design trends per industry vertical, and dispatches unique production-quality builds in parallel. The orchestrator processes 30–38+ rows in a single overnight run. A research engine pulls trends from Awwwards, Dribbble, Framer, and CSS Design Awards; a design strategy module translates research into a per-site brief; a generation engine produces full frontend output. A TTS reporter narrates progress aloud so the operator can walk away and wake to finished work.",
    features: [
      "CSV-driven batch ingestion for 30+ businesses per run",
      "Per-industry design research from Awwwards / Dribbble / Framer / CSS Design Awards",
      "Multi-agent pipeline: research → strategy → generation → verification",
      "TTS progress reporting via Mistral / Piper for unattended operation",
      "Autonomous overnight operation with morning summary report",
      "Per-row error recovery and resume-from-failure",
    ],
    technologies: [
      "Python orchestrator with async task queues",
      "Anthropic Claude (Sonnet) for design strategy and generation",
      "FireCrawl + Brave Search APIs for trend research",
      "Next.js + Tailwind output target stack",
      "Piper / Mistral TTS for progress narration",
      "Local SQLite for batch state",
    ],
    challenges: [
      "Coordinating many long-running LLM calls without blowing the token budget",
      "Recovering gracefully from per-row failures without halting the entire batch",
      "Holding output quality at parity with hand-shepherded IGRIS builds",
    ],
    solutions: [
      "Token-aware budgeting with phase-level checkpointing and resumption",
      "Idempotent per-row state machine — failures pause the row, not the batch",
      "Each Factory build is gated by IGRIS's quality bar before deploy",
    ],
    outcome:
      "Designed to produce agency-quality websites in hours instead of weeks across an entire batch — IGRIS's quality bar applied at scale.",
  },

  // ─────────── Platforms ───────────
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
    categories: ["Web Development", "AI Development"],
    subcategory: "Sales Conversion",
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
    id: 4,
    title: "MacSwift Hub",
    year: "2026",
    role: "Architect & Engineer (Solo)",
    description:
      "A multi-domain operations platform that unifies eBay listings, market intelligence, and a portfolio of sourcing and commerce subsystems behind one dashboard.",
    image: "/projects/macswift-hub/hero.png",
    link: "https://github.com/semajzandrews",
    tags: ["Python", "Flask", "eBay API", "Multi-Domain"],
    categories: ["Web Development"],
    subcategory: "Operations & Commerce",
    detailedDescription:
      "MacSwift Hub is the platform layer behind a multi-domain business operation — starting with eBay (Apple hardware resale) and expanding to additional revenue domains over time. The hub centralizes inventory state, listing health, market-pricing intelligence, daily API rate-limit awareness, and a sourcing pipeline that tracks deal candidates from upstream feeders like Mac Mini Watch. Built with a Python/Flask web layer over a typed domain core, the hub exposes a real-time dashboard, automated draft-listing workflows (so iteration never touches live commerce), and a registry of rate budgets per upstream API. The architecture is designed to absorb new domains as folders, not as rewrites.",
    features: [
      "Unified dashboard across multiple revenue domains",
      "Daily API rate-limit awareness (eBay Browse, Inventory, Marketing)",
      "Draft-listing workflow for safe iteration on live inventory",
      "Market-pricing intelligence pipeline",
      "Typed domain core with per-domain expansion as folders",
      "Sourcing pipeline integration (Mac Mini Watch feeder)",
    ],
    technologies: [
      "Python 3.11 with typed core modules",
      "Flask for the web dashboard",
      "eBay Browse / Inventory / Marketing APIs",
      "SQLite + JSON-on-disk for state",
      "Cron-driven sync routines",
    ],
    challenges: [
      "Managing rate limits across multiple eBay endpoints with different daily caps",
      "Iterating on listing logic without affecting live inventory",
      "Architecting for unknown future domains without re-architecting",
    ],
    solutions: [
      "Per-endpoint rate budget tracker with hourly reset and degraded-mode fallback",
      "Draft-only workflow — every command writes to draft state with an explicit promotion step",
      "Domain-as-folder pattern: each new revenue stream is a self-contained module",
    ],
    outcome:
      "Operational platform managing live eBay inventory; foundation ready for additional domain expansion.",
  },

  // ─────────── Websites (IGRIS-built) ───────────
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
    categories: ["Web Development", "AI Development"],
    subcategory: "Botanical / Wellness",
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
    categories: ["Web Development", "AI Development"],
    subcategory: "Beauty / Luxury",
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
    categories: ["Web Development", "AI Development"],
    subcategory: "Hospitality",
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
    categories: ["Web Development", "AI Development"],
    subcategory: "Brand",
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

  // ─────────── Mobile / iOS ───────────
  {
    id: 9,
    title: "BeatMyTravel",
    year: "2024 – 2026",
    role: "iOS Lead (Solo)",
    description:
      "Multi-modal travel deal finder. Combines cheap flights with rail and bus connectors to beat direct-route booking sites on price.",
    image: "/projects/beatmytravel/hero.png",
    link: "https://github.com/semajzandrews/BeatMyTravel",
    repoUrl: "https://github.com/semajzandrews/BeatMyTravel",
    tags: ["Swift", "SwiftUI", "MapKit", "iOS"],
    categories: ["Mobile App Development"],
    subcategory: "Native iOS",
    detailedDescription:
      "BeatMyTravel is a multi-modal travel deal finder built natively in SwiftUI. Where most booking sites search direct routes only, BeatMyTravel combines cheap flights with rail and bus connectors — a graph-search across Amtrak, Frontier, Spirit, Megabus, FlixBus and others — to surface hidden-leg routes that beat direct prices. Designed, engineered, and shipped solo.",
    features: [
      "Multi-modal route finder (flight + rail + bus combinations)",
      "Graph-search across multiple transport providers",
      "Map-based route visualization",
      "Price + duration trade-off ranking",
      "Native SwiftUI with UIKit fallback for older devices",
    ],
    technologies: [
      "Swift / SwiftUI",
      "MapKit for route visualization",
      "Combine for reactive state",
      "Custom graph-search engine",
      "Provider integrations: Amtrak, Frontier, Spirit, Megabus, FlixBus",
    ],
    challenges: [
      "Building hidden-leg route search that actually beats direct-route booking sites",
      "Coordinating real-time pricing across heterogeneous transport providers",
    ],
    solutions: [
      "Custom graph-search algorithm with cost-versus-time pareto ranking",
      "Per-provider adapter pattern with rate-limit-aware caching",
    ],
    outcome:
      "Native iOS deal-finder app shipped solo; foundation for a public flash-sale flight product launching soon.",
  },
  {
    id: 10,
    title: "StationMD Telehealth",
    year: "2023 – 2026",
    role: "iOS Engineer",
    description:
      "Production iOS app for a behavioral health telehealth network. Patient and clinician workflows, secure video, and HIPAA-aligned data handling.",
    image: "/projects/stationmd/hero.png",
    link: "https://github.com/semajzandrews/StationMD-iOS",
    repoUrl: "https://github.com/semajzandrews/StationMD-iOS",
    tags: ["Swift", "UIKit", "Telehealth", "HIPAA"],
    categories: ["Mobile App Development"],
    subcategory: "Enterprise iOS",
    detailedDescription:
      "StationMD is a behavioral health telehealth network. I contribute as an iOS engineer on production mobile work — patient and clinician workflows, secure video consultations, and HIPAA-aligned data handling. This is enterprise-grade iOS in a regulated environment.",
    features: [
      "Patient and clinician workflows in a single shipped app",
      "Secure video consultation",
      "HIPAA-aligned data handling",
      "Production iOS engineering in a regulated enterprise environment",
    ],
    technologies: [
      "Swift / UIKit / SwiftUI",
      "WebRTC for video consultations",
      "Secure storage with proper encryption-at-rest",
      "Enterprise auth integration",
    ],
    challenges: [
      "Holding HIPAA compliance while shipping fast iteration on UX",
      "Coordinating patient and clinician flows in one app surface",
    ],
    solutions: [
      "Compliance baked into the data layer rather than bolted on per-screen",
      "Role-aware navigation: same binary, distinct surfaces, no state leakage",
    ],
    outcome:
      "Active production iOS work for a behavioral health network — current role.",
  },

  // ─────────── Browser Extension ───────────
  {
    id: 11,
    title: "Scan to QR",
    year: "2025 – 2026",
    role: "Designer & Engineer (Solo)",
    description:
      "A Chrome extension that scans page content and generates QR codes on demand. Live on the Chrome Web Store.",
    image: "/projects/scan-to-qr/hero.png",
    link: "https://chromewebstore.google.com/",
    tags: ["Chrome Extension", "JavaScript", "QR", "Web"],
    categories: ["Web Development"],
    subcategory: "Browser Extensions",
    detailedDescription:
      "Scan to QR is a published Chrome extension that scans page content (URLs, selected text, images) and instantly generates QR codes for sharing or device handoff. Designed and engineered solo; currently live on the Chrome Web Store. The extension uses Chrome's modern Manifest V3 service-worker architecture and a minimal popup UI tuned for one-click flow.",
    features: [
      "One-click QR generation from any page content",
      "URL / text / image scan modes",
      "Lightweight Manifest V3 service worker",
      "Minimal popup UI — generate-and-go",
      "Published on the Chrome Web Store",
    ],
    technologies: [
      "Chrome Extension Manifest V3",
      "JavaScript / TypeScript",
      "QR generation library",
      "Service worker background scripts",
    ],
    challenges: [
      "Designing a popup UI that needs zero learning curve",
      "Holding extension size minimal for fast install",
    ],
    solutions: [
      "Single-action popup with smart defaults — no settings page on first run",
      "Aggressive bundle trimming and lazy-loaded QR codec",
    ],
    outcome:
      "Live on the Chrome Web Store — installable product, not a demo.",
  },,
// ─────────── Email Development ───────────
  {
    id: 12,
    title: "Email Development Portfolio",
    year: "2022 – 2024",
    role: "Designer & Engineer (Solo)",
    description:
      "Six production-quality email templates across four major retail and travel brands — Michael Kors, Spirit Airlines, Pizza Hut, Janie & Jack, New Era, PrettyLittleThing.",
    image: "/projects/email-portfolio/hero.png",
    link: "https://github.com/semajzandrews/email-development-portfolio",
    repoUrl: "https://github.com/semajzandrews/email-development-portfolio",
    tags: ["HTML", "CSS", "Email Compatibility", "Litmus"],
    categories: ["Email Development"],
    subcategory: "Welcome Emails",
    detailedDescription:
      "A curated portfolio of six production-grade email templates spanning the full customer lifecycle: welcome (Janie & Jack, New Era, PrettyLittleThing), onboarding (Pizza Hut Hut Rewards), order confirmation (Spirit Airlines itinerary), and account confirmation (Michael Kors). Each template is hand-coded for maximum compatibility across Outlook, Gmail, Apple Mail, and mobile clients. The portfolio site itself is a carousel viewer that renders each template in an iframe so reviewers can scroll through the body of work without leaving the page.",
    features: [
      "Six production-quality email templates across four major brands",
      "Full lifecycle coverage — welcome, onboarding, transactional",
      "Hand-coded for cross-client compatibility (Outlook to mobile)",
      "Responsive layouts with mobile-first fallbacks",
      "Carousel viewer for in-browser review",
    ],
    technologies: [
      "HTML / CSS for email-safe markup",
      "Table-based layouts with progressive enhancement",
      "Litmus / Email on Acid for cross-client testing",
      "MJML where templated, hand-tuned for production",
    ],
    challenges: [
      "Outlook's quirks (mso conditionals, VML for backgrounds)",
      "Dark-mode forced color inversion on iOS / Outlook",
      "Holding pixel-perfect rendering across 30+ email clients",
    ],
    solutions: [
      "Hybrid-coded templates with conditional Outlook fallbacks",
      "Hard-coded color values and SVG fallbacks to neutralize dark-mode aggression",
      "Systematic Litmus / Email on Acid test pass before any send",
    ],
    outcome:
      "Body of email work shipped for retail and travel brands; portfolio site renders all six in a single carousel for reviewer access.",
  },

  // ─────────── Game Development ───────────
  {
    id: 13,
    title: "Disaster — Global Game Jam",
    year: "TBD",
    role: "Engineer (Team)",
    description:
      "A game built during Global Game Jam — placeholder card awaiting your details (year, team size, tech stack, URL, description). Tell me and I'll fill it in.",
    image: "/projects/disaster/hero.png",
    link: "https://github.com/semajzandrews",
    tags: ["Game Jam", "Indie"],
    categories: ["Game Development"],
    subcategory: "2D Game Development",
    detailedDescription:
      "Disaster was built during a Global Game Jam event. Placeholder description — full write-up pending from the Monarch. Once details are confirmed (game engine, team role split, mechanics, screenshots, jam year and theme), this card gets filled in.",
    features: [
      "Built within Global Game Jam's 48-hour window",
      "Team collaboration under jam constraints",
    ],
    technologies: [
      "TBD — engine and stack pending",
    ],
    challenges: [
      "Shipping a playable game within a 48-hour jam constraint",
    ],
    solutions: [
      "Scope-locked early; iterated playtest-first",
    ],
    outcome:
      "Completed and submitted to Global Game Jam — placeholder, awaiting Monarch's details.",
  },
]
