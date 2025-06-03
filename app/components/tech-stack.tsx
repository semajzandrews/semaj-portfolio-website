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
  SiWebflow, SiOpenai
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

const technologies = [
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
                  className="tech-icon-item inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium ring-1 ring-inset ring-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {getSkillIcon(skill)}
                  <span className="text-primary">{skill}</span>
                </span>
              )),
            )}
          </div>
        </TabsContent>

        <TabsContent value="category" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <Card key={tech.category} className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
                    >
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

