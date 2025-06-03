"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Lightbulb, LightbulbOff } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set initial theme based on time of day
  useEffect(() => {
    setMounted(true)

    // Get current hour (0-23)
    const currentHour = new Date().getHours()

    // If not manually set yet, set theme based on time
    // Light mode: 6 AM - 6 PM (6-18)
    // Dark mode: 6 PM - 6 AM (18-6)
    if (!localStorage.getItem("theme")) {
      if (currentHour >= 6 && currentHour < 18) {
        setTheme("light")
      } else {
        setTheme("dark")
      }
    }
  }, [setTheme])

  // Avoid hydration mismatch
  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <LightbulbOff className="h-5 w-5" /> : <Lightbulb className="h-5 w-5" />}
    </Button>
  )
}

