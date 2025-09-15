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

// Define hierarchical category structure
const categoryHierarchy = {
  "Email Development": {
    "Welcome Emails": [],
    "Transactional Emails": [],
    "Win-Back Emails": [],
    "Newsletter Emails": [],
    "Promotional Emails": []
  },
  "Web Development": {
    "Front-End Development": [],
    "Full-Stack Development": []
  },
  "Mobile App Development": {
    "Native iOS": [],
    "Native Android": []
  },
  "Game Development": {
    "2D Game Development": [],
    "3D Game Development": []
  }
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSubcategory, setSelectedSubcategory] = useState("All")

  // Get unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

  // Get subcategories for the selected category
  const getSubcategories = (category: string) => {
    if (category === "All" || !categoryHierarchy[category as keyof typeof categoryHierarchy]) {
      return ["All"]
    }
    return ["All", ...Object.keys(categoryHierarchy[category as keyof typeof categoryHierarchy])]
  }

  // Filter projects based on selected category and subcategory
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true
    if (project.category !== selectedCategory) return false
    
    if (selectedSubcategory === "All") return true
    
    // Check if project subcategory matches the selected subcategory
    return project.subcategory === selectedSubcategory
  })

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)

  // Get current page projects
  const currentProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Main Category Dropdown */}
          <Select
            value={selectedCategory}
            onValueChange={(value) => {
              setSelectedCategory(value)
              setSelectedSubcategory("All") // Reset subcategory when main category changes
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

          {/* Subcategory Dropdown - Only show if a specific category is selected */}
          {selectedCategory !== "All" && (
            <Select
              value={selectedSubcategory}
              onValueChange={(value) => {
                setSelectedSubcategory(value)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-full sm:w-[250px]">
                <SelectValue placeholder="Select subcategory" />
              </SelectTrigger>
              <SelectContent>
                {getSubcategories(selectedCategory).map((subcategory) => (
                  <SelectItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        
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
      
      {/* Filter Status */}
      {(selectedCategory !== "All" || selectedSubcategory !== "All") && (
        <div className="mb-6 p-3 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            {selectedCategory !== "All" && (
              <span> in <span className="font-medium">{selectedCategory}</span></span>
            )}
            {selectedSubcategory !== "All" && (
              <span> - <span className="font-medium">{selectedSubcategory}</span></span>
            )}
          </p>
        </div>
      )}
      
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

