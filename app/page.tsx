"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import TechStack from "./components/tech-stack"
import ProjectGrid from "./components/project-grid"
import { projects } from "./data/projects"
import ThemeToggle from "./components/theme-toggle"

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to game landing page
    router.push("/game-landing")
  }, [router])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        <p>Redirecting to interactive experience...</p>
      </div>
    </div>
  )
}

