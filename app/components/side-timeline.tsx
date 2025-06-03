'use client'

import { useState, useEffect } from 'react'
import { User, FolderOpen, Code, Mail } from 'lucide-react'

const sections = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'tech-stack', label: 'Tech Stack', icon: Code },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function SideTimeline() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3 // Adjusted for better section detection
      const docHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      const scrollableHeight = docHeight - windowHeight

      // If we're at the bottom of the page, activate the contact section
      if (window.scrollY >= scrollableHeight - 50) {
        setActiveSection('contact')
        return
      }

      // Otherwise, detect section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Add a small offset to account for the fixed header
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
        
        {sections.map((section, index) => {
          const Icon = section.icon
          const isActive = activeSection === section.id
          
          return (
            <div key={section.id} className="relative group">
              {/* Timeline dot */}
              <button
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative z-10 flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                  ${isActive 
                    ? 'bg-primary border-primary text-primary-foreground shadow-lg scale-110' 
                    : 'bg-background border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5'
                  }
                `}
                aria-label={`Go to ${section.label} section`}
              >
                <Icon className="w-5 h-5" />
              </button>
              
              {/* Label tooltip */}
              <div className={`
                absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                bg-popover text-popover-foreground border shadow-lg backdrop-blur-sm
                opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none
                transform translate-x-2 group-hover:translate-x-0
              `}>
                {section.label}
                {/* Arrow */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-popover" />
              </div>
              
              {/* Active indicator pulse */}
              {isActive && (
                <div className="absolute -inset-3 rounded-full bg-primary/20 animate-pulse" />
              )}
            </div>
          )
        })}
        
        {/* Progress indicator */}
        <div 
          className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary to-primary/50 transition-all duration-500 ease-out -translate-x-1/2"
          style={{ 
            height: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` 
          }} 
        />
      </div>
    </div>
  )
} 