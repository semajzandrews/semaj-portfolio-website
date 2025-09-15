export type Project = {
  id: number
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  category: string
  subcategory?: string
  detailedDescription?: string
  features?: string[]
  technologies?: string[]
  challenges?: string[]
  solutions?: string[]
  screenshots?: string[]
}

export const projects: Project[] = [
  // Email Development Projects
  {
    id: 1,
    title: "Email Marketing Campaign Manager",
    description: "A comprehensive email marketing platform with automation and analytics.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Email Development",
    subcategory: "Welcome Emails",
    detailedDescription:
      "This email marketing platform provides end-to-end email campaign management, featuring responsive email templates, automated workflows, A/B testing, and detailed analytics for optimizing email performance.",
    features: [
      "Responsive email template builder",
      "Automated email workflows and sequences",
      "A/B testing for subject lines and content",
      "Advanced segmentation and targeting",
      "Real-time analytics and reporting",
      "Integration with CRM and e-commerce platforms",
    ],
    technologies: [
      "HTML/CSS for email template development",
      "JavaScript for interactive elements",
      "Node.js for backend services",
      "MongoDB for campaign data storage",
      "SendGrid/Mailgun for email delivery",
      "Chart.js for analytics visualization",
    ],
    challenges: [
      "Ensuring cross-client email compatibility",
      "Creating responsive designs for all email clients",
      "Managing deliverability and spam prevention",
      "Implementing accurate email analytics tracking",
    ],
    solutions: [
      "Developed email testing framework for multiple clients",
      "Used hybrid coding techniques for maximum compatibility",
      "Implemented proper authentication and reputation management",
      "Created pixel tracking and link tracking systems",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 2,
    title: "Transactional Email System",
    description: "A robust system for automated transactional emails with dynamic content.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["Handlebars", "Node.js", "SendGrid"],
    category: "Email Development",
    subcategory: "Transactional Emails",
    detailedDescription:
      "This transactional email system handles automated emails for user actions like account creation, password resets, order confirmations, and notifications. It features dynamic content generation and multi-language support.",
    features: [
      "Dynamic email content generation",
      "Multi-language email support",
      "Email template versioning and rollback",
      "Real-time delivery status tracking",
      "Bounce and complaint handling",
      "Integration with webhook systems",
    ],
    technologies: [
      "Handlebars for email templating",
      "Node.js for email processing",
      "SendGrid API for email delivery",
      "Redis for caching and queuing",
      "PostgreSQL for template storage",
      "Webhook endpoints for status updates",
    ],
    challenges: [
      "Ensuring reliable email delivery",
      "Managing email template updates without downtime",
      "Handling high-volume email processing",
      "Maintaining email deliverability rates",
    ],
    solutions: [
      "Implemented retry logic and fallback providers",
      "Created blue-green deployment for templates",
      "Used Redis queues for scalable processing",
      "Monitored sender reputation and implemented feedback loops",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  // Web Development Projects
  {
    id: 3,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["Next.js", "Prisma", "Stripe"],
    category: "Web Development",
    subcategory: "Full-Stack Development",
    detailedDescription:
      "This e-commerce platform provides a complete solution for online stores, featuring product management, shopping cart functionality, secure checkout with Stripe, and a responsive design that works across all devices.",
    features: [
      "User authentication and account management",
      "Product catalog with categories and search",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
    technologies: [
      "Next.js for frontend and API routes",
      "Prisma ORM for database operations",
      "PostgreSQL database for data storage",
      "Stripe API for payment processing",
      "TailwindCSS for styling",
      "NextAuth.js for authentication",
    ],
    challenges: [
      "Implementing real-time inventory updates",
      "Ensuring secure payment processing",
      "Optimizing database queries for performance",
      "Building a responsive design for all devices",
    ],
    solutions: [
      "Used WebSockets for real-time inventory updates",
      "Implemented Stripe's secure checkout process",
      "Optimized database queries with proper indexing",
      "Used TailwindCSS for responsive design",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A real-time task management application with team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["React", "Node.js", "Socket.io"],
    category: "Web Development",
    subcategory: "Full-Stack Development",
    detailedDescription:
      "This task management application helps teams organize their work with real-time updates, task assignments, due dates, and progress tracking. It features a drag-and-drop interface for easy task management.",
    features: [
      "Real-time task updates across all team members",
      "Drag-and-drop task organization",
      "Task assignment and due date tracking",
      "Comment threads on tasks",
      "File attachments",
      "Email notifications for task updates",
    ],
    technologies: [
      "React for the frontend UI",
      "Node.js and Express for the backend",
      "Socket.io for real-time updates",
      "MongoDB for data storage",
      "AWS S3 for file storage",
      "SendGrid for email notifications",
    ],
    challenges: [
      "Implementing real-time updates without performance issues",
      "Building a smooth drag-and-drop interface",
      "Managing complex state across multiple users",
      "Ensuring data consistency with concurrent edits",
    ],
    solutions: [
      "Used Socket.io for efficient real-time communication",
      "Implemented React DnD for drag-and-drop functionality",
      "Used Redux for state management",
      "Implemented optimistic UI updates with server validation",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 5,
    title: "Real-time Collaborative Whiteboard",
    description: "A web-based collaborative whiteboard for remote teams.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["React", "WebSocket", "Canvas API"],
    category: "Web Development",
    subcategory: "Front-End Development",
    detailedDescription:
      "This real-time collaborative whiteboard enables remote teams to brainstorm, plan, and visualize ideas together. It features drawing tools, sticky notes, shape creation, and real-time cursor tracking for all participants.",
    features: [
      "Real-time drawing and editing",
      "Multiple drawing tools and shapes",
      "Text and sticky note creation",
      "User cursor tracking",
      "Infinite canvas with zooming and panning",
      "Session recording and playback",
    ],
    technologies: [
      "React for UI components",
      "Canvas API for drawing functionality",
      "WebSocket for real-time communication",
      "Redis for pub/sub messaging",
      "MongoDB for data persistence",
      "AWS S3 for session recording storage",
    ],
    challenges: [
      "Implementing smooth real-time collaboration",
      "Managing complex drawing state",
      "Handling network latency and disconnections",
      "Creating an infinite canvas with good performance",
    ],
    solutions: [
      "Used Operational Transformation for conflict resolution",
      "Developed a custom state management system",
      "Implemented reconnection and state synchronization",
      "Created a virtualized canvas rendering system",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 6,
    title: "Progressive Web App Music Player",
    description: "A feature-rich PWA music player with offline capabilities and native app features.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["PWA", "React", "Web Audio API"],
    category: "Web Development",
    subcategory: "Front-End Development",
    detailedDescription:
      "This Progressive Web App music player offers a native app-like experience in the browser with offline capabilities, push notifications, and installable functionality. It supports various audio formats, playlist management, and audio visualization.",
    features: [
      "Offline music playback with service workers",
      "Installable PWA with native app features",
      "Advanced playlist management",
      "Audio visualization and equalizer",
      "Push notifications for new music",
      "Cross-platform compatibility",
    ],
    technologies: [
      "React for UI components",
      "Service Workers for offline functionality",
      "Web Audio API for audio processing",
      "IndexedDB for local storage",
      "Web App Manifest for PWA features",
      "Push API for notifications",
    ],
    challenges: [
      "Implementing offline music playback",
      "Managing large music libraries in browser storage",
      "Creating smooth audio visualizations",
      "Ensuring PWA compatibility across browsers",
    ],
    solutions: [
      "Used Service Workers for offline caching",
      "Implemented efficient IndexedDB storage patterns",
      "Optimized visualization algorithms for performance",
      "Developed progressive enhancement for PWA features",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  // Mobile App Development Projects
  {
    id: 7,
    title: "Mobile Fitness Tracker",
    description: "A cross-platform mobile app for tracking workouts and nutrition.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["Swift", "iOS", "HealthKit"],
    category: "Mobile App Development",
    subcategory: "Native iOS",
    detailedDescription:
      "This mobile fitness tracker helps users monitor their workouts, nutrition, and progress towards fitness goals. It includes workout plans, nutrition tracking, progress charts, and social features for sharing achievements.",
    features: [
      "Customizable workout plans and routines",
      "Nutrition tracking with calorie and macro counting",
      "Progress tracking with charts and statistics",
      "Social sharing of achievements",
      "Integration with fitness wearables",
      "Offline mode for tracking without internet",
    ],
    technologies: [
      "Swift for iOS native development",
      "SwiftUI for modern iOS interface",
      "Core Data for local data storage",
      "HealthKit for fitness data integration",
      "Charts framework for data visualization",
      "CloudKit for data synchronization",
    ],
    challenges: [
      "Optimizing iOS performance and battery usage",
      "Implementing accurate fitness tracking algorithms",
      "Managing offline data synchronization",
      "Integrating with iOS HealthKit ecosystem",
    ],
    solutions: [
      "Used SwiftUI for efficient, native iOS performance",
      "Developed and tested custom tracking algorithms",
      "Implemented Core Data for robust offline-first architecture",
      "Leveraged HealthKit for seamless fitness data integration",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 8,
    title: "AR Product Visualizer",
    description: "An augmented reality app for visualizing products in real-world environments.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["ARKit", "Swift", "SceneKit"],
    category: "Mobile App Development",
    subcategory: "Native iOS",
    detailedDescription:
      "This augmented reality application allows users to visualize products in their real-world environment before purchasing. It features realistic 3D models, accurate scaling, and interactive product customization.",
    features: [
      "Real-time product placement in AR",
      "Accurate size and scale representation",
      "Interactive product customization",
      "Realistic lighting and shadows",
      "Product information overlay",
      "Screenshot and sharing capabilities",
    ],
    technologies: [
      "ARKit for iOS augmented reality",
      "Swift for iOS development",
      "SceneKit for 3D rendering",
      "PBR materials for realistic appearance",
      "Core ML for object recognition",
      "Firebase for backend services",
    ],
    challenges: [
      "Creating realistic 3D product models",
      "Ensuring accurate product scaling and placement",
      "Optimizing performance on mobile devices",
      "Handling various lighting conditions",
    ],
    solutions: [
      "Developed a pipeline for converting CAD models to optimized AR assets",
      "Implemented surface detection and measurement algorithms",
      "Used level-of-detail techniques for performance optimization",
      "Created adaptive lighting models for different environments",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  // Game Development Projects
  {
    id: 9,
    title: "Multiplayer Game Server",
    description: "A high-performance game server for a multiplayer online battle arena game.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["C++", "Boost.Asio", "PostgreSQL"],
    category: "Game Development",
    subcategory: "3D Game Development",
    detailedDescription:
      "This multiplayer game server powers a fast-paced online battle arena game, handling real-time player interactions, game state management, matchmaking, and persistent player data storage.",
    features: [
      "Low-latency real-time gameplay",
      "Scalable architecture for thousands of concurrent players",
      "Sophisticated matchmaking system",
      "Anti-cheat mechanisms",
      "Leaderboards and player statistics",
      "In-game economy and transactions",
    ],
    technologies: [
      "C++ for high-performance server code",
      "Boost.Asio for networking",
      "PostgreSQL for persistent data storage",
      "Redis for caching and pub/sub",
      "Docker for containerization",
      "Kubernetes for orchestration",
    ],
    challenges: [
      "Minimizing latency for real-time gameplay",
      "Scaling to handle thousands of concurrent players",
      "Preventing cheating and exploits",
      "Managing complex game state synchronization",
    ],
    solutions: [
      "Implemented a custom UDP-based protocol",
      "Designed a horizontally scalable microservices architecture",
      "Developed server-authoritative validation systems",
      "Created an efficient delta-based state synchronization system",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]