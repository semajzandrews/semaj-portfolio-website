'use client'

import { useState, useEffect } from 'react'

export default function MobileScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      // Ensure progress goes to 100% when close to the bottom
      const progress = scrollTop >= docHeight - 50
        ? 100
        : (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
      <div className="h-1 bg-border">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  )
} 