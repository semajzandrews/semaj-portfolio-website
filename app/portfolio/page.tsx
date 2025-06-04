"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "../components/contact-form"
import TechStack from "../components/tech-stack"
import ProjectGrid from "../components/project-grid"
import { projects } from "../data/projects"
import ThemeToggle from "../components/theme-toggle"
import SideTimeline from "../components/side-timeline"
import MobileScrollProgress from "../components/mobile-scroll-progress"
import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const { theme, resolvedTheme } = useTheme()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mounted, setMounted] = useState(false)

  // Ensure we're mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let direction = 1 // 1 for forward, -1 for backward

    const handleTimeUpdate = () => {
      if (direction === 1 && video.currentTime >= video.duration - 0.1) {
        // Reached end, start going backward
        direction = -1
        video.playbackRate = -1
      } else if (direction === -1 && video.currentTime <= 0.1) {
        // Reached beginning, start going forward
        direction = 1
        video.playbackRate = 1
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  // Determine which video to use based on theme
  const getVideoSrc = () => {
    if (!mounted) return "/ascii-face-dark.webm" // default fallback
    const isDark = resolvedTheme === 'dark'
    return isDark ? "/ascii-face-dark.webm" : "/ascii-face-light.webm"
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Side Timeline Navigation */}
      <SideTimeline />
      
      {/* Mobile Scroll Progress */}
      <MobileScrollProgress />
      
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/portfolio">
              <span className="hidden font-bold sm:inline-block">Semaj.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#tech-stack" className="transition-colors hover:text-foreground/80">
                Tech Stack
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/game-landing">
              <Button variant="outline" size="sm">
                🎮 Play Game
              </Button>
            </Link>
            <Button variant="outline">Resume</Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="w-full">
        {/* Hero/About Section - Full viewport height with proper spacing */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-8 pb-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-10 text-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <video
                    ref={videoRef}
                    key={getVideoSrc()} // Force re-render when video source changes
                    src={getVideoSrc()}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: 'center 25%',
                      transform: 'scale(1.15)'
                    }}
                    aria-label="Semaj Andrews - ASCII Art Animation"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-4 -mt-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Software Engineer
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl lg:text-2xl">
                  Building digital experiences with modern technologies. Focused on creating elegant solutions to
                  complex problems.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <Link href="https://github.com" target="_blank">
                  <Button variant="outline" size="lg" className="h-12 w-12">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <Button variant="outline" size="lg" className="h-12 w-12">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button variant="outline" size="lg" className="h-12 w-12">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:hello@example.com">
                  <Button variant="outline" size="lg" className="h-12 w-12">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Full viewport height with proper spacing */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-8 pb-24 bg-muted/30">
          <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                A showcase of my recent work and personal projects
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <ProjectGrid projects={projects} />
            </div>
          </div>
        </section>

        {/* Tech Stack Section - Full viewport height with proper spacing */}
        <section id="tech-stack" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-8 pb-24">
          <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">Tech Stack</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                With expertise across multiple domains, I leverage a diverse set of technologies to build robust,
                scalable, and innovative solutions.
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <TechStack />
            </div>
          </div>
        </section>

        {/* Contact Section - Full viewport height with proper spacing */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-8 pb-24 bg-muted/30">
          <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                Ready to collaborate? Let's discuss your next project
              </p>
            </div>
            <div className="flex-1 flex items-start justify-center">
              <div className="w-full max-w-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">© 2024 Semaj.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
} 