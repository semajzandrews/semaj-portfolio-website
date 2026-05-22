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
    subcategory: "AI Agents",
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
    subcategory: "AI Pipelines & Orchestration",
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
    subcategory: "Full-Stack Development",
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
    id: 19,
    title: "Pulse Point Logistics LLC",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Specialized medical, hazmat, reverse, and patient-transport logistics out of Jersey City. EKG-line hero, live vitals ticker, live dispatch console, custom cursor.",
    image: "/projects/pulsepoint/hero.png",
    link: "https://github.com/semajzandrews/pulsepoint",
    repoUrl: "https://github.com/semajzandrews/pulsepoint",
    liveUrl: "https://pulsepoint.vercel.app",
    tags: ["Next.js 16", "Motion", "Lenis", "Tailwind v4"],
    categories: ["Web Development", "AI Development"],
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
    id: 20,
    title: "Orange Central Supply",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "A 24/7 plumbing-supply storefront on Central Avenue, Orange NJ. Drafting-paper aesthetic, animated plumbing schematic, live always-open counter.",
    image: "/projects/orange-central-supply/hero.png",
    link: "https://github.com/semajzandrews/orange-central-supply",
    repoUrl: "https://github.com/semajzandrews/orange-central-supply",
    liveUrl: "https://orange-central-supply.vercel.app",
    tags: ["Next.js 16", "Motion", "SVG", "Tailwind v4"],
    categories: ["Web Development", "AI Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Orange Central Supply is a 24/7 plumbing-supply storefront at 506 Central Ave, Orange NJ. The site is drawn like an engineering catalog: drafting-paper background, blueprint-blue grid, a hand-drafted plumbing schematic that strokes itself in across the hero, hand-drawn part icons throughout the SKU catalog, and a 'Counter' section with a live wall clock and a running 'minutes-open since 1998' meter. Safety orange is reserved exclusively for the OPEN-NOW indicator. Built via the IGRIS pipeline with a fingerprint deliberately opposed to every dark-tech logistics site in the registry.",
    features: [
      "Animated SVG plumbing schematic with stroked draw-in entrance",
      "Live 24/7 counter with running clock + minutes-open meter",
      "Six-aisle stocked-now grid + hand-drafted parts catalog SVGs",
      "Hand-drawn neighborhood site plan in the location section",
      "Khand condensed display + JetBrains Mono spec stamps",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Motion",
      "Lenis",
      "Khand + Inter + JetBrains Mono (next/font)",
    ],
    challenges: [
      "Making a 24/7 supply business feel premium without losing the working-shop honesty",
      "Twelve commit-by-commit history showing real progress for an employer scroll",
    ],
    solutions: [
      "Drafting-paper palette + hand-drawn SVG iconography pushes the site away from generic 'industrial' tropes",
      "Sequential conventional commits (scaffold → tokens → layout → each section)",
    ],
    outcome:
      "Live, indexed, and ready for door-to-door pickup as a Monday demo. Cost under two dollars in AI generation.",
  },
  {
    id: 21,
    title: "Claude's Auto Repair Shop",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Honest neighborhood mechanic on Scotland Road, Orange NJ. Chrome-and-asphalt aesthetic, rotating wheel-hub signature, garage-door roll-up bay reveals.",
    image: "/projects/claudes-auto-repair/hero.png",
    link: "https://github.com/semajzandrews/claudes-auto-repair",
    repoUrl: "https://github.com/semajzandrews/claudes-auto-repair",
    liveUrl: "https://claudes-auto-repair.vercel.app",
    tags: ["Next.js 16", "Motion", "SVG", "Tailwind v4"],
    categories: ["Web Development", "AI Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Claude's Auto Repair is a neighborhood auto repair shop at 253 Scotland Rd in Orange, NJ. The site's lineage is Hot Rod Magazine meets vintage Goodyear racing meets chrome-plated service bay — deep asphalt black surfaces, brushed chrome highlights, signal red used like a flag. The hero composition is a square wheel-hub illustration with chrome spokes rotating at 14 seconds, an outer tread ring rotating slower in the opposite direction, and a signal-red center cap. The Bays section uses a garage-door roll-up reveal that slides a brushed-metal panel up out of frame to expose each bay's contents. A neon flicker on the OPEN indicator and a yellow-and-asphalt warning stripe finish the atmosphere.",
    features: [
      "Rotating wheel-hub signature moment (two layers, opposite speeds)",
      "Three service bays with brushed-metal garage-door roll-up reveal",
      "Eight service-code cards (OIL, BRK, ALN, ELE, TRN, DIA, AC, TIR)",
      "Seven-step process timeline (Drop off → Pick up)",
      "NJ-time-aware live open/closed badge in the nav",
      "Oswald condensed display + JetBrains Mono spec stamps",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Motion",
      "Lenis",
      "Oswald + Inter + JetBrains Mono (next/font)",
    ],
    challenges: [
      "Differentiating from sibling Jefferson Auto Center (same vertical) on every fingerprint axis",
      "Selling 'honest mechanic' positioning without it reading as cheap",
    ],
    solutions: [
      "Locked Claude's into a warm night-shop atmosphere — chrome, signal red, brushed metal — distinct from Jefferson's eventual industrial palette",
      "Voice in the copy speaks directly to the customer ('Drop the keys. Pick it up fixed.') with no hedging",
    ],
    outcome:
      "Live and queued for the Monday demo run on Scotland Road. Cost under two dollars in AI generation.",
  },
  {
    id: 22,
    title: "Blessed Hope Daycare Center",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Licensed home childcare on Joyce Street, Orange NJ. Warm picture-book palette, hand-drawn flower bloom signature, hand-illustrated house in the visit section.",
    image: "/projects/blessed-hope-daycare/hero.png",
    link: "https://github.com/semajzandrews/blessed-hope-daycare",
    repoUrl: "https://github.com/semajzandrews/blessed-hope-daycare",
    liveUrl: "https://blessed-hope-daycare.vercel.app",
    tags: ["Next.js 16", "Motion", "SVG", "Tailwind v4"],
    categories: ["Web Development", "AI Development"],
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
    id: 23,
    title: "Jefferson Auto Center",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Diagnostic-grade precision-service garage on S Jefferson Street, Orange NJ. Sapphire navy + brushed steel + amber. Live telemetry gauge + OBD scan readout signature.",
    image: "/projects/jefferson-auto-center/hero.png",
    link: "https://github.com/semajzandrews/jefferson-auto-center",
    repoUrl: "https://github.com/semajzandrews/jefferson-auto-center",
    liveUrl: "https://jefferson-auto-center.vercel.app",
    tags: ["Next.js 16", "Motion", "SVG", "Tailwind v4"],
    categories: ["Web Development", "AI Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Jefferson Auto Center is a precision-protocol garage on South Jefferson Street, Orange NJ. The site reads like a telemetry dashboard — sapphire navy depths, brushed steel rules, an amber precision-warning accent that lives only on the live indicators. Signature moment is a square hero composition: a sweeping needle gauge that traces from zero to redline every eight seconds with the RPM readout below it, paired with a live OBD-II diagnostic scan that streams P-codes line by line with a soft cyan scan band. The 'Shop Telemetry' section below shows three current bays with live elapsed timers. Built as the deliberate counterpoint to Claude's warm chrome night-shop in the same batch — cool, scientific, documented.",
    features: [
      "Sweeping needle gauge + live RPM readout signature",
      "Streaming OBD-II diagnostic scan with cyan scan band",
      "Three-bay shop telemetry board with running elapsed timers",
      "Six-step documented service protocol (intake → road test)",
      "Ten-row service catalog table with code + duration + spec",
      "Space Grotesk display + JetBrains Mono tech stamps",
    ],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Space Grotesk + Inter + JetBrains Mono"],
    challenges: [
      "Differentiating from sibling Claude's Auto on every fingerprint axis",
      "Making 'diagnostic-grade' feel honest, not cold",
    ],
    solutions: [
      "Locked Jefferson into a cool scientific palette while Claude's holds the warm chrome",
      "Documented-protocol copy speaks the customer's anxiety out loud",
    ],
    outcome: "Live and ready for Monday's door-to-door demo.",
  },
  {
    id: 24,
    title: "Black River Painting LLC",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Editorial residential + commercial painting practice on Freeman St, Orange NJ. Cinematic color-chip wall signature in the hero. Cormorant serif + considered palette doctrine.",
    image: "/projects/black-river-painting/hero.png",
    link: "https://github.com/semajzandrews/black-river-painting",
    repoUrl: "https://github.com/semajzandrews/black-river-painting",
    liveUrl: "https://black-river-painting.vercel.app",
    tags: ["Next.js 16", "Motion", "Tailwind v4"],
    categories: ["Web Development", "AI Development"],
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
    id: 25,
    title: "Laundry Care",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Quiet, Muji-influenced neighborhood laundromat on Central Ave, Orange NJ. Linen + sage + clay palette. Slow tumble drum signature. Ritual not chore.",
    image: "/projects/laundry-care/hero.png",
    link: "https://github.com/semajzandrews/laundry-care",
    repoUrl: "https://github.com/semajzandrews/laundry-care",
    liveUrl: "https://laundry-care.vercel.app",
    tags: ["Next.js 16", "Motion", "SVG", "Tailwind v4"],
    categories: ["Web Development", "AI Development"],
    subcategory: "Front-End Development",
    detailedDescription:
      "Laundry Care is a 91-review neighborhood laundromat with 4.2 stars on Central Avenue, Orange NJ. The site repositions it as ritual instead of chore — Muji minimalism meets onsen towel ritual meets Aesop pharmacy. Linen-weave background, soft warm cream surfaces, sage-2 accents, with a single clay color for prices. Outfit display + italic Lora serif for the section subtitles. Signature moment is a large slow-tumble drum graphic: outer perforations rotate at 36 seconds, inner linen-fold paths rotate at 22 seconds in the opposite direction, with a quiet sage center dot. Four-services grid is gentle and rounded, no hard edges anywhere on the site.",
    features: [
      "Slow tumble drum signature with two counter-rotating layers",
      "Four service tiers (self-serve, wash & fold, bedding, pickup) with pricing",
      "Six-step care ritual section (pre-treat → bagged + labeled)",
      "Hours table with quietest/busiest hour callouts",
      "Outfit display + Lora italic serif accent",
    ],
    technologies: ["Next.js 16","React 19","Tailwind CSS v4","Motion","Lenis","Outfit + Lora + JetBrains Mono"],
    challenges: ["Repositioning a laundromat as a quiet ritual destination without losing the working-class neighborhood fit","Differentiating from every other site in the batch by going calm where they go hot or technical"],
    solutions: ["Linen-weave background + italic serif subtitles + rounded everything signals 'slow + careful'","Pulled the palette saturation way down so the site reads as exhale-not-exhaust"],
    outcome: "Live and positioning Central Ave's laundromat as the corridor's calmest storefront.",
  },
  {
    id: 26,
    title: "Cantina 443",
    year: "2026",
    role: "Designer & Engineer — built via IGRIS",
    description:
      "Late-night tacos and mezcal bar on Conover Terrace, Orange NJ. Midnight + neon magenta/marigold/papaya. Giant neon CANTINA 443 sign signature with marquee menu ticker.",
    image: "/projects/cantina-443/hero.png",
    link: "https://github.com/semajzandrews/cantina-443",
    repoUrl: "https://github.com/semajzandrews/cantina-443",
    liveUrl: "https://cantina-443.vercel.app",
    tags: ["Next.js 16", "Motion", "Tailwind v4"],
    categories: ["Web Development", "AI Development"],
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
    subcategory: "Native iOS",
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
  },

  // ─────────── Email Development ───────────
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

  // ─────────── Game Development ───────────
  {
    id: 18,
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
