/** Search vocabulary.
 *
 *  `tags` on a project are editorial — they name the signature move of that
 *  build ("Broth Steam", "Editorial Serif") and they render on the card.
 *  They are deliberately NOT search keywords.
 *
 *  `vertical` is the one thing a project IS. It never renders. It exists so
 *  search can answer "food", "restaurant", "eat" and "takeout" with the same
 *  ramen shop without any of those words being typed into the data.
 *
 *  Adding a project means setting one `vertical`. Adding a genuinely new kind
 *  of business means adding one row here. There is no per-project keywording.
 */

export const VERTICAL_ALIASES = {
  // ---- Food & drink ----
  restaurant: ["food", "eat", "dining", "eatery", "menu", "cuisine", "takeout", "kitchen", "chef", "grill", "hospitality"],
  "food-truck": ["food", "eat", "truck", "street food", "menu", "takeout", "restaurant", "hospitality"],
  cafe: ["coffee", "espresso", "food", "drink", "breakfast", "cafe", "shop", "hospitality"],
  bakery: ["bread", "pastry", "dessert", "food", "baked", "cake", "hospitality"],
  bar: ["drink", "cocktail", "nightlife", "pub", "tavern", "lounge", "beer", "hospitality", "food"],
  "liquor-store": ["alcohol", "drink", "wine", "spirits", "bottle", "retail", "store"],

  // ---- Grocery & convenience ----
  grocery: ["food", "market", "store", "produce", "shop", "retail"],
  "convenience-store": ["store", "shop", "corner store", "bodega", "retail", "food"],

  // ---- Grooming & beauty ----
  barbershop: ["barber", "haircut", "grooming", "hair", "shave", "fade", "beauty"],
  salon: ["hair", "beauty", "stylist", "braiding", "grooming", "styling"],
  "nail-salon": ["nails", "manicure", "pedicure", "beauty", "salon", "spa"],
  spa: ["massage", "wellness", "relaxation", "beauty", "treatment", "body"],
  "beauty-supply": ["beauty", "cosmetics", "hair", "products", "retail", "store"],
  tattoo: ["ink", "body art", "piercing", "studio", "art"],

  // ---- Health & care ----
  healthcare: ["health", "medical", "clinic", "care", "patient", "therapy", "nursing"],
  dental: ["dentist", "teeth", "oral", "health", "medical", "clinic"],
  veterinary: ["vet", "animal", "pet", "clinic", "health", "medical"],
  daycare: ["childcare", "kids", "children", "preschool", "nursery", "family"],
  "family-services": ["family", "children", "kids", "community", "care", "social services"],
  wellness: ["health", "botanical", "herbal", "natural", "self care", "holistic"],

  // ---- Auto ----
  "auto-repair": ["car", "mechanic", "vehicle", "garage", "auto", "repair", "service"],
  "auto-glass": ["car", "windshield", "glass", "auto", "repair", "vehicle"],
  "tire-shop": ["tires", "car", "wheels", "auto", "vehicle", "repair"],
  "car-wash": ["car", "wash", "detailing", "auto", "vehicle", "clean"],

  // ---- Home & trade ----
  roofing: ["roof", "contractor", "home", "construction", "repair", "storm", "exterior"],
  plumbing: ["plumber", "heating", "hvac", "home", "contractor", "repair", "water"],
  painting: ["painter", "home", "contractor", "interior", "exterior", "renovation"],
  "home-improvement": ["home", "contractor", "renovation", "remodel", "construction", "repair"],

  // ---- Retail ----
  retail: ["store", "shop", "shopping", "goods", "merchandise"],
  jewelry: ["jeweler", "gold", "rings", "accessories", "luxury", "retail", "store"],
  "furniture-store": ["furniture", "home", "retail", "store", "decor"],
  electronics: ["electronics", "repair", "tech", "devices", "retail", "store"],
  "shoe-store": ["shoes", "footwear", "sneakers", "retail", "store", "apparel"],
  "record-store": ["music", "vinyl", "records", "retail", "store"],
  "pet-store": ["pet", "animal", "dog", "cat", "supplies", "retail", "store"],

  // ---- Services ----
  laundromat: ["laundry", "wash", "clean", "dry cleaning", "service"],
  printing: ["print", "signage", "banners", "copy", "service"],
  legal: ["law", "lawyer", "attorney", "counsel", "firm", "professional"],
  logistics: ["shipping", "transport", "delivery", "freight", "medical transport", "fleet"],
  "bail-bonds": ["bail", "bonds", "legal", "service"],
  "event-space": ["events", "venue", "studio", "rental", "booking", "creative"],
  "professional-services": ["consulting", "advisory", "professional", "firm", "business"],

  // ---- My own products & non-client work ----
  "email-campaign": ["email", "marketing", "lifecycle", "campaign", "newsletter", "brand"],
  "ai-platform": ["ai", "agent", "automation", "pipeline", "llm", "internal tool"],
  "developer-tool": ["tool", "utility", "extension", "developer", "automation", "script"],
  "saas-platform": ["saas", "platform", "product", "checkout", "sales", "business"],
} as const

export type Vertical = keyof typeof VERTICAL_ALIASES

/** The vertical plus its aliases, as one lowercase searchable string. */
export function verticalSearchText(vertical: Vertical | undefined): string {
  if (!vertical) return ""
  const aliases = VERTICAL_ALIASES[vertical] as readonly string[] | undefined
  if (!aliases) return ""
  return [vertical.replace(/-/g, " "), ...aliases].join(" ").toLowerCase()
}
