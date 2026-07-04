import React from "react"
import {
  SiSwift, SiKotlin, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiPython, SiNodedotjs, SiPostgresql, SiMongodb,
  SiFirebase, SiSupabase, SiDocker, SiVercel, SiGit, SiGithubactions,
  SiFigma, SiOpenai, SiAmazon
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

type Tech = {
  name: string
  icon: React.JSX.Element
  color: string // brand hex, applied to the icon
}

const ICON = "w-8 h-8 md:w-9 md:h-9"

const stack: { group: string; items: Tech[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "TypeScript", icon: <SiTypescript className={ICON} />, color: "#3178C6" },
      { name: "Swift", icon: <SiSwift className={ICON} />, color: "#F05138" },
      { name: "JavaScript", icon: <SiJavascript className={ICON} />, color: "#F7DF1E" },
      { name: "Python", icon: <SiPython className={ICON} />, color: "#3776AB" },
      { name: "Kotlin", icon: <SiKotlin className={ICON} />, color: "#7F52FF" },
      { name: "Java", icon: <FaJava className={ICON} />, color: "#E76F00" },
    ],
  },
  {
    group: "Frameworks & UI",
    items: [
      { name: "React", icon: <SiReact className={ICON} />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs className={ICON} />, color: "currentColor" },
      { name: "SwiftUI", icon: <SiSwift className={ICON} />, color: "#0A84FF" },
      { name: "Node.js", icon: <SiNodedotjs className={ICON} />, color: "#5FA04E" },
      { name: "TailwindCSS", icon: <SiTailwindcss className={ICON} />, color: "#06B6D4" },
    ],
  },
  {
    group: "Data & Cloud",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className={ICON} />, color: "#4169E1" },
      { name: "Supabase", icon: <SiSupabase className={ICON} />, color: "#3FCF8E" },
      { name: "Firebase", icon: <SiFirebase className={ICON} />, color: "#FFCA28" },
      { name: "MongoDB", icon: <SiMongodb className={ICON} />, color: "#47A248" },
      { name: "AWS", icon: <SiAmazon className={ICON} />, color: "#FF9900" },
      { name: "Docker", icon: <SiDocker className={ICON} />, color: "#2496ED" },
      { name: "Vercel", icon: <SiVercel className={ICON} />, color: "currentColor" },
    ],
  },
  {
    group: "Tools & AI",
    items: [
      { name: "Git", icon: <SiGit className={ICON} />, color: "#F05032" },
      { name: "GitHub Actions", icon: <SiGithubactions className={ICON} />, color: "#2088FF" },
      { name: "OpenAI API", icon: <SiOpenai className={ICON} />, color: "currentColor" },
      { name: "Figma", icon: <SiFigma className={ICON} />, color: "#F24E1E" },
    ],
  },
]

export default function TechStack() {
  return (
    <div className="w-full space-y-10">
      {stack.map(({ group, items }) => (
        <div key={group}>
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              {group}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {items.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center gap-2 w-[92px] md:w-[104px] py-4 rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
              >
                <span style={{ color: tech.color }} className="transition-transform duration-200 group-hover:scale-110">
                  {tech.icon}
                </span>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground text-center leading-tight px-1">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
