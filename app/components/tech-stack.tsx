import React from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  SiSwift, SiKotlin, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiSass,
  SiWebpack, SiVite, SiFigma, SiAdobexd, SiSketch, SiPython,
  SiCplusplus, SiPhp, SiGit, SiGithub,
  SiXcode, SiAndroidstudio, SiPostman, SiJira, SiSlack, SiNotion,
  SiPandas, SiNumpy, SiSelenium, SiNodedotjs, SiExpress, SiPostgresql,
  SiMysql, SiMongodb, SiFirebase, SiSupabase, SiAmazon, SiDocker,
  SiGithubactions, SiVercel, SiNetlify, SiHeroku, SiLinux, SiSocketdotio,
  SiJsonwebtokens, SiSolidity, SiEthereum, SiUnity, SiWebgl, SiFramer,
  SiWebflow, SiOpenai, SiMailchimp, SiSendgrid, SiHubspot
} from "react-icons/si"
import { 
  FaMobile, FaAndroid, FaApple, FaReact, FaGitlab, FaBitbucket,
  FaLock, FaShieldAlt, FaDatabase, FaCode, FaCube, FaJava
} from "react-icons/fa"
import { IoLogoIonic } from "react-icons/io"
import { TbBrandReactNative } from "react-icons/tb"
import { VscCode } from "react-icons/vsc"

// Icon mapping for skills
const getSkillIcon = (skill: string): React.JSX.Element => {
  const iconMap: { [key: string]: React.JSX.Element } = {
    // Email Development
    "HTML Email Development": <SiHtml5 className="w-4 h-4" />,
    "Klaviyo": <FaCode className="w-4 h-4" />,
    "Salesforce Marketing Cloud": <FaCode className="w-4 h-4" />,
    "Responsive Email Design": <SiCss3 className="w-4 h-4" />,
    "Email Testing": <FaShieldAlt className="w-4 h-4" />,
    "Mailchimp": <SiMailchimp className="w-4 h-4" />,
    "SendGrid": <SiSendgrid className="w-4 h-4" />,
    "HubSpot": <SiHubspot className="w-4 h-4" />,
    "Email Automation": <FaCode className="w-4 h-4" />,
    "A/B Testing": <FaCode className="w-4 h-4" />,
    "Email Analytics": <FaDatabase className="w-4 h-4" />,
    "Transactional Emails": <FaCode className="w-4 h-4" />,
    "Email Deliverability": <FaShieldAlt className="w-4 h-4" />,
    "MJML": <FaCode className="w-4 h-4" />,
    "Litmus": <FaCode className="w-4 h-4" />,
    "Email on Acid": <FaCode className="w-4 h-4" />,
    
    // Mobile Development
    "Swift": <SiSwift className="w-4 h-4" />,
    "SwiftUI": <SiSwift className="w-4 h-4" />,
    "Objective-C": <FaApple className="w-4 h-4" />,
    "iOS Development": <FaApple className="w-4 h-4" />,
    "Kotlin": <SiKotlin className="w-4 h-4" />,
    "Jetpack Compose": <SiKotlin className="w-4 h-4" />,
    "Java": <FaJava className="w-4 h-4" />,
    "Android Development": <FaAndroid className="w-4 h-4" />,
    "React Native": <TbBrandReactNative className="w-4 h-4" />,
    "Ionic": <IoLogoIonic className="w-4 h-4" />,
    "Mobile UI/UX": <FaMobile className="w-4 h-4" />,
    "Responsive Design": <FaMobile className="w-4 h-4" />,
    
    // Frontend & Web Development
    "HTML5": <SiHtml5 className="w-4 h-4" />,
    "CSS3": <SiCss3 className="w-4 h-4" />,
    "JavaScript": <SiJavascript className="w-4 h-4" />,
    "Bootstrap": <SiBootstrap className="w-4 h-4" />,
    "React": <SiReact className="w-4 h-4" />,
    "TypeScript": <SiTypescript className="w-4 h-4" />,
    "Next.js": <SiNextdotjs className="w-4 h-4" />,
    "SASS/SCSS": <SiSass className="w-4 h-4" />,
    "TailwindCSS": <SiTailwindcss className="w-4 h-4" />,
    "Webpack": <SiWebpack className="w-4 h-4" />,
    "Three.js": <FaCube className="w-4 h-4" />,
    "Vite": <SiVite className="w-4 h-4" />,
    "Progressive Web Apps (PWA)": <FaReact className="w-4 h-4" />,
    "Framer": <SiFramer className="w-4 h-4" />,
    "Webflow": <SiWebflow className="w-4 h-4" />,
    
    // Design & UX Tools
    "Figma": <SiFigma className="w-4 h-4" />,
    "Adobe XD": <SiAdobexd className="w-4 h-4" />,
    "Sketch": <SiSketch className="w-4 h-4" />,
    "WCAG Accessibility": <FaShieldAlt className="w-4 h-4" />,
    "User Interface Design": <FaMobile className="w-4 h-4" />,
    "Prototyping": <FaCube className="w-4 h-4" />,
    
    // Programming Languages
    "Python": <SiPython className="w-4 h-4" />,
    "C#": <FaCode className="w-4 h-4" />,
    "C++": <SiCplusplus className="w-4 h-4" />,
    "PHP": <SiPhp className="w-4 h-4" />,
    "Bash/Shell": <FaCode className="w-4 h-4" />,
    
    // Development Tools
    "Git": <SiGit className="w-4 h-4" />,
    "GitHub": <SiGithub className="w-4 h-4" />,
    "VS Code": <VscCode className="w-4 h-4" />,
    "Xcode": <SiXcode className="w-4 h-4" />,
    "Android Studio": <SiAndroidstudio className="w-4 h-4" />,
    "Postman": <SiPostman className="w-4 h-4" />,
    "Jira": <SiJira className="w-4 h-4" />,
    "GitLab": <FaGitlab className="w-4 h-4" />,
    "Bitbucket": <FaBitbucket className="w-4 h-4" />,
    "Slack": <SiSlack className="w-4 h-4" />,
    "Notion": <SiNotion className="w-4 h-4" />,
    
    // Data Science & AI
    "OpenAI API": <SiOpenai className="w-4 h-4" />,
    "Pandas": <SiPandas className="w-4 h-4" />,
    "NumPy": <SiNumpy className="w-4 h-4" />,
    "Selenium": <SiSelenium className="w-4 h-4" />,
    
    // Backend & Database
    "Node.js": <SiNodedotjs className="w-4 h-4" />,
    "Express": <SiExpress className="w-4 h-4" />,
    "PostgreSQL": <SiPostgresql className="w-4 h-4" />,
    "MySQL": <SiMysql className="w-4 h-4" />,
    "MongoDB": <SiMongodb className="w-4 h-4" />,
    "Firebase Firestore": <SiFirebase className="w-4 h-4" />,
    "Supabase": <SiSupabase className="w-4 h-4" />,
    "SQL": <FaDatabase className="w-4 h-4" />,
    
    // Security
    "JWT": <SiJsonwebtokens className="w-4 h-4" />,
    "OAuth 2.0": <FaLock className="w-4 h-4" />,
    "HTTPS/SSL/TLS": <FaShieldAlt className="w-4 h-4" />,
    "Encryption": <FaLock className="w-4 h-4" />,
    "API Security": <FaShieldAlt className="w-4 h-4" />,
    
    // DevOps & Cloud
    "AWS": <SiAmazon className="w-4 h-4" />,
    "Docker": <SiDocker className="w-4 h-4" />,
    "GitHub Actions": <SiGithubactions className="w-4 h-4" />,
    "Vercel": <SiVercel className="w-4 h-4" />,
    "Netlify": <SiNetlify className="w-4 h-4" />,
    "Heroku": <SiHeroku className="w-4 h-4" />,
    "Linux Administration": <SiLinux className="w-4 h-4" />,
    
    // Web Technologies
    "Socket.io": <SiSocketdotio className="w-4 h-4" />,
    
    // Specialized Skills
    "Solidity": <SiSolidity className="w-4 h-4" />,
    "Ethereum": <SiEthereum className="w-4 h-4" />,
    "Unity": <SiUnity className="w-4 h-4" />,
    "WebGL": <SiWebgl className="w-4 h-4" />,
  }
  
  return iconMap[skill] || <FaCode className="w-4 h-4" />
}

// Brand color mapping for each individual skill
const getSkillBrandColor = (skill: string) => {
  const brandColorMap: { [key: string]: string } = {
    // Email Development
    "HTML Email Development": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "Klaviyo": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "Salesforce Marketing Cloud": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Responsive Email Design": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Email Testing": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Mailchimp": "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
    "SendGrid": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "HubSpot": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "Email Automation": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "A/B Testing": "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200",
    "Email Analytics": "bg-indigo-100 text-indigo-800 border-indigo-200 hover:bg-indigo-200",
    "Transactional Emails": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "Email Deliverability": "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
    "MJML": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Litmus": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "Email on Acid": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    
    // Mobile Development
    "Swift": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "SwiftUI": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "Objective-C": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "iOS Development": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "Kotlin": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "Jetpack Compose": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "Java": "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
    "Android Development": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "React Native": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Ionic": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Mobile UI/UX": "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200",
    "Responsive Design": "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200",
    
    // Frontend & Web Development
    "HTML5": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "CSS3": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "JavaScript": "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
    "Bootstrap": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "React": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "TypeScript": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Next.js": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "SASS/SCSS": "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200",
    "TailwindCSS": "bg-cyan-100 text-cyan-800 border-cyan-200 hover:bg-cyan-200",
    "Webpack": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Three.js": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "Vite": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "Progressive Web Apps (PWA)": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Framer": "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200",
    "Webflow": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    
    // Design & UX Tools
    "Figma": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "Adobe XD": "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200",
    "Sketch": "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
    "WCAG Accessibility": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "User Interface Design": "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200",
    "Prototyping": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    
    // Programming Languages
    "Python": "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
    "C#": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "C++": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "PHP": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "Bash/Shell": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    
    // Development Tools
    "Git": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "GitHub": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "VS Code": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Xcode": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Android Studio": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Postman": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "Jira": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Agile": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Scrum": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Kanban": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "GitLab": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "Bitbucket": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Cursor": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "Slack": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "Notion": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    
    // Data Science & AI
    "OpenAI API": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Pandas": "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
    "NumPy": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Selenium": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Data Visualization": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "BeautifulSoup": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Matplotlib": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    
    // Backend & Database
    "Node.js": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Express": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "API Design": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "PostgreSQL": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "MySQL": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "MongoDB": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Firebase Firestore": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "Supabase": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "SQL": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "ConvexDB": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    
    // Security
    "OAuth 2.0": "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
    "JWT": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "HTTPS/SSL/TLS": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Encryption": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "Hashing": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "Vulnerability Assessment": "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
    "API Security": "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
    "Two-Factor Authentication": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    
    // DevOps & Cloud
    "AWS": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "Docker": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "GitHub Actions": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "S3": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "Vercel": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "Netlify": "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    "Heroku": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "Linux Administration": "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
    
    // Web Technologies
    "WebSockets": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "RabbitMQ": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
    "Socket.io": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "OAuth": "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
    
    // Specialized Skills
    "Web3.js": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "Solidity": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "Ethereum": "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    "Smart Contracts": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "Unity": "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
    "3D Modeling": "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
    "WebGL": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
  }
  return brandColorMap[skill] || "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
}

const technologies = [
  {
    category: "Email Development",
    skills: [
      "HTML Email Development",
      "Responsive Email Design",
      "Email Automation",
      "Klaviyo",
      "Mailchimp",
      "Salesforce Marketing Cloud",
      "A/B Testing",
      "Email Analytics",
      "Email Deliverability",
      "SendGrid",
      "HubSpot",
      "MJML",
      "Email Testing",
      "Litmus",
      "Email on Acid",
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      "Swift",
      "SwiftUI",
      "Objective-C",
      "iOS Development",
      "Kotlin",
      "Jetpack Compose",
      "Java",
      "Android Development",
      "React Native",
      "Ionic",
      "Mobile UI/UX",
      "Responsive Design",
    ],
  },
  {
    category: "Frontend & Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "React",
      "TypeScript",
      "Next.js",
      "SASS/SCSS",
      "TailwindCSS",
      "Webpack",
      "Three.js",
      "Vite",
      "Progressive Web Apps (PWA)",
      "Framer",
      "Webflow",
    ],
  },
  {
    category: "Design & UX Tools",
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Mobile UI/UX",
      "Responsive Design",
      "WCAG Accessibility",
      "User Interface Design",
      "Prototyping",
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      "Swift",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Kotlin",
      "C#",
      "C++",
      "PHP",
      "Objective-C",
      "Bash/Shell",
    ],
  },
  {
    category: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Xcode",
      "Android Studio",
      "Postman",
      "Jira",
      "Agile",
      "Scrum",
      "Kanban",
      "GitLab",
      "Bitbucket",
      "Cursor",
      "Slack",
      "Notion",
    ],
  },
  {
    category: "Data Science & AI",
    skills: [
      "Python",
      "OpenAI API",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "BeautifulSoup",
      "Selenium",
      "Matplotlib",
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "API Design",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase Firestore",
      "Supabase",
      "SQL",
      "ConvexDB",
    ],
  },
  {
    category: "Security",
    skills: [
      "OAuth 2.0",
      "JWT",
      "HTTPS/SSL/TLS",
      "Encryption",
      "Hashing",
      "Vulnerability Assessment",
      "API Security",
      "Two-Factor Authentication",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "S3",
      "Vercel",
      "Netlify",
      "Heroku",
      "Linux Administration",
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      "WebSockets",
      "RabbitMQ",
      "Socket.io",
      "JWT",
      "OAuth",
      "PHP",
    ],
  },
  {
    category: "Specialized Skills",
    skills: [
      "Web3.js",
      "Solidity",
      "Ethereum",
      "Smart Contracts",
      "Unity",
      "C#",
      "3D Modeling",
      "WebGL",
      "Three.js",
    ],
  },
]

export default function TechStack() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="grid" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList>
            <TabsTrigger value="category">Category View</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="grid" className="mt-0">
          <div className="flex flex-wrap gap-2 justify-center">
            {technologies.flatMap((tech) =>
              tech.skills.map((skill) => (
                <span
                  key={`${tech.category}-${skill}`}
                  className={`tech-icon-item inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium ring-1 ring-inset transition-colors ${getSkillBrandColor(skill)}`}
                >
                  {getSkillIcon(skill)}
                  <span>{skill}</span>
                </span>
              )),
            )}
          </div>
        </TabsContent>

        <TabsContent value="category" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <Card key={tech.category} className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary text-center">{tech.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset transition-colors ${getSkillBrandColor(skill)}`}
                    >
                      {getSkillIcon(skill)}
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

