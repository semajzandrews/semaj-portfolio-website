"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Project } from "../data/projects"

interface ProjectGridProps {
  projects: Project[]
}

const ITEMS_PER_PAGE = 6

const categoryHierarchy: Record<string, string[]> = {
  "AI Development": ["Production Agent", "Multi-Agent Orchestration", "Sales Conversion"],
  "Web Development": [
    "Front-End Development",
    "Full-Stack Development",
    "Botanical / Wellness",
    "Beauty / Luxury",
    "Hospitality",
    "Brand",
    "Operations & Commerce",
    "Browser Extensions",
  ],
  "Mobile App Development": ["Native iOS", "Native Android", "Enterprise iOS"],
  "Email Development": ["Welcome Emails", "Transactional Emails", "Onboarding Emails"],
  "Game Development": ["2D Game Development", "3D Game Development"],
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSubcategory, setSelectedSubcategory] = useState("All")

  // All categories present in data, surfaced as filter options. Hierarchy order first, then anything else.
  const allFromData = Array.from(new Set(projects.flatMap((p) => p.categories ?? [])))
  const ordered = [
    ...Object.keys(categoryHierarchy).filter((c) => allFromData.includes(c)),
    ...allFromData.filter((c) => !(c in categoryHierarchy)),
  ]
  const categories = ["All", ...ordered]

  const getSubcategories = (category: string) => {
    if (category === "All") return ["All"]
    const subs = categoryHierarchy[category] ?? []
    // Only include subcategories that have at least one project under this category
    const present = new Set(
      projects
        .filter((p) => (p.categories ?? []).includes(category) && p.subcategory)
        .map((p) => p.subcategory as string),
    )
    return ["All", ...subs.filter((s) => present.has(s))]
  }

  const filteredProjects = projects.filter((project) => {
    const cats = project.categories ?? []
    if (selectedCategory !== "All" && !cats.includes(selectedCategory)) return false
    if (selectedSubcategory !== "All" && project.subcategory !== selectedSubcategory) return false
    return true
  })

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const currentProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Select
            value={selectedCategory}
            onValueChange={(value) => {
              setSelectedCategory(value)
              setSelectedSubcategory("All")
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

          {selectedCategory !== "All" && getSubcategories(selectedCategory).length > 1 && (
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
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </Button>
        </div>
      </div>

      {(selectedCategory !== "All" || selectedSubcategory !== "All") && (
        <div className="mb-6 p-3 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" && (
              <span>
                {" "}
                in <span className="font-medium">{selectedCategory}</span>
              </span>
            )}
            {selectedSubcategory !== "All" && (
              <span>
                {" "}
                — <span className="font-medium">{selectedSubcategory}</span>
              </span>
            )}
          </p>
        </div>
      )}

      {filteredProjects.length === 0 ? (
        <div className="py-12 text-center text-sm text-muted-foreground border border-dashed rounded-lg">
          No projects yet in this category — more on the way.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </div>
      )}
    </div>
  )
}
