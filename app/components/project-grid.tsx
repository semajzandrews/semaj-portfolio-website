"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Project } from "../data/projects"

// Define the props for the ProjectGrid component
interface ProjectGridProps {
  projects: Project[]
}

const ITEMS_PER_PAGE = 6

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)

  // Get current page projects
  const currentProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <Select
          value={selectedCategory}
          onValueChange={(value) => {
            setSelectedCategory(value)
            setCurrentPage(1)
          }}
        >
          <SelectTrigger className="w-full sm:w-[250px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex justify-center sm:justify-end space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </div>
      )}
    </div>
  )
}

