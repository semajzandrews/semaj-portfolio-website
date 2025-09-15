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
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure we're mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which image to use based on theme
  const getImageSrc = () => {
    // Using static ASCII art image
    return "/ascii-face-static.png" // Your new avatar image
  }

  // Get theme-specific styling for image
  const getImageStyle = () => {
    if (!mounted) return { 
      objectPosition: 'center center', 
      transform: 'scale(1.02)'
    }
    
    const isDark = resolvedTheme === 'dark'
    
    if (isDark) {
      // Dark mode - enhanced professional look with subtle glow
      return {
        objectPosition: 'center center',
        transform: 'scale(1.02)'
      }
    } else {
      // Light mode - softer, more professional appearance
      return {
        objectPosition: 'center center',
        transform: 'scale(1.02)'
      }
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Side Timeline Navigation */}
      <SideTimeline />
      
      {/* Mobile Scroll Progress */}
      <MobileScrollProgress />
      
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* Signature Name - Left */}
          <div className="flex items-center py-1">
            <Link href="/portfolio" className="group">
              <span 
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent hover:from-primary/80 hover:via-primary hover:to-primary transition-all duration-300 leading-relaxed py-1" 
                style={{
                  fontFamily: "'Brittany Signature', cursive",
                  lineHeight: '1.6',
                  paddingTop: '4px',
                  paddingBottom: '4px'
                }}
              >
                Semaj Andrews
              </span>
            </Link>
          </div>

          {/* Centered Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary hover:scale-105 transform duration-200">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary hover:scale-105 transform duration-200">
              Projects
            </Link>
            <Link href="#tech-stack" className="text-sm font-medium transition-colors hover:text-primary hover:scale-105 transform duration-200">
              Tech Stack
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary hover:scale-105 transform duration-200">
              Contact
            </Link>
          </nav>

          {/* Action Buttons - Right */}
          <div className="flex items-center gap-2">
            <Link href="/game">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                🎮 Play Game
              </Button>
            </Link>
            <Button variant="outline" size="sm">Resume</Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto flex items-center justify-center space-x-6 py-3 px-4">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#tech-stack" className="text-sm font-medium transition-colors hover:text-primary">
              Tech Stack
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="w-full">
        {/* Hero/About Section - Full viewport height with proper spacing */}
        <section id="about" className="portfolio-section min-h-screen flex items-center justify-center px-4 md:px-6 pt-8 pb-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-10 text-center">
              <div className="relative group">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 opacity-60 blur-sm scale-110 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Main image container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-gradient-to-br from-background/50 to-background/20 backdrop-blur-sm video-container">
                  <img
                    key={getImageSrc()} // Force re-render when image source changes
                    src={getImageSrc()}
                    alt="Semaj Andrews - ASCII Art Portrait"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${mounted && resolvedTheme === 'dark' ? 'ascii-glow-dark' : 'ascii-glow'}`}
                    style={getImageStyle()}
                  />
                  
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Animated accent ring */}
                <div className="absolute inset-0 rounded-full border border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>

              <div className="space-y-4 -mt-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Software Engineer
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl lg:text-2xl">
                I create software that’s fast to market, easy to scale, and hard to forget. I don’t just build features — I shape experiences.
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
        <section id="projects" className="portfolio-section min-h-screen flex items-center justify-center px-4 md:px-6 pt-8 pb-24 bg-muted/30">
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
        <section id="tech-stack" className="portfolio-section min-h-screen flex items-center justify-center px-4 md:px-6 pt-8 pb-24">
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
        <section id="contact" className="portfolio-section min-h-screen flex items-center justify-center px-4 md:px-6 pt-8 pb-24 bg-muted/30">
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