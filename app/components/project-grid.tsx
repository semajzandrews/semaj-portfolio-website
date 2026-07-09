"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Project } from "../data/projects"

interface ProjectGridProps {
  projects: Project[]
}

// One page comfortably holds the whole featured set, so the default
// (Featured sort) opens with every curated pick visible at once.
const ITEMS_PER_PAGE = 12

const categoryHierarchy: Record<string, string[]> = {
  "AI Development": ["AI Agents", "AI Pipelines & Orchestration"],
  "Web Development": ["Front-End Development", "Full-Stack Development", "Browser Extensions"],
  "Mobile App Development": ["Native iOS", "Native Android"],
  "Email Development": [
    "Welcome Emails",
    "Transactional Emails",
    "Onboarding Emails",
    "Win-Back Emails",
    "Newsletter Emails",
    "Promotional Emails",
  ],
  "Game Development": ["2D Game Development", "3D Game Development"],
}

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
}

/** Sortable timestamp from a "Jul 2026" date or a bare year. Undated sorts last. */
function projectTime(p: Project): number {
  if (p.date) {
    const [mon, yr] = p.date.split(" ")
    if (mon in MONTHS && yr) return new Date(Number(yr), MONTHS[mon], 1).getTime()
  }
  const yr = p.year?.match(/\d{4}/)?.[0]
  if (yr) return new Date(Number(yr), 0, 1).getTime()
  return 0
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSubcategory, setSelectedSubcategory] = useState("All")
  // ONE concept: "Featured" — hand-picked work, shown first by default.
  // "Newest" reorders the same grid chronologically. No separate curated view.
  const [sortMode, setSortMode] = useState<"newest" | "featured">("featured")

  // All categories present in data, surfaced as filter chips. Hierarchy order first, then anything else.
  const allFromData = Array.from(new Set(projects.flatMap((p) => p.categories ?? [])))
  const ordered = [
    ...Object.keys(categoryHierarchy).filter((c) => allFromData.includes(c)),
    ...allFromData.filter((c) => !(c in categoryHierarchy)),
  ]
  const categories = ["All", ...ordered]

  const getSubcategories = (category: string) => {
    if (category === "All") return ["All"]
    const subs = categoryHierarchy[category] ?? []
    const present = new Set(
      projects
        .filter((p) => (p.categories ?? []).includes(category) && p.subcategory)
        .map((p) => p.subcategory as string),
    )
    return ["All", ...subs.filter((s) => present.has(s))]
  }

  const filteredProjects = projects
    .filter((project) => {
      const cats = project.categories ?? []
      if (selectedCategory !== "All" && !cats.includes(selectedCategory)) return false
      if (selectedSubcategory !== "All" && project.subcategory !== selectedSubcategory) return false
      return true
    })
    .sort((a, b) => {
      if (sortMode === "featured") {
        const f = Number(!!b.featured) - Number(!!a.featured)
        if (f !== 0) return f
      }
      return projectTime(b) - projectTime(a)
    })

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const currentProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Projects</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {projects.length} shipped projects{sortMode === "featured" ? " · featured picks first" : " · newest first"}
          </p>
        </div>
        <div className="inline-flex rounded-md border overflow-hidden self-start sm:self-auto">
          <button
            className={`px-3 py-1.5 text-xs font-medium transition-colors ${sortMode === "featured" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:text-foreground"}`}
            onClick={() => { setSortMode("featured"); setCurrentPage(1) }}
          >
            Featured
          </button>
          <button
            className={`px-3 py-1.5 text-xs font-medium transition-colors ${sortMode === "newest" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:text-foreground"}`}
            onClick={() => { setSortMode("newest"); setCurrentPage(1) }}
          >
            Newest
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setSelectedSubcategory("All")
              setCurrentPage(1)
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-input hover:text-foreground hover:border-primary/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        {selectedCategory !== "All" && getSubcategories(selectedCategory).length > 1 ? (
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
        ) : (
          <div />
        )}

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
                / <span className="font-medium">{selectedSubcategory}</span>
              </span>
            )}
          </p>
        </div>
      )}

      {filteredProjects.length === 0 ? (
        <div className="py-12 text-center text-sm text-muted-foreground border border-dashed rounded-lg">
          No projects yet in this category, more on the way.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} {...project} showSignature={!!project.featured} />
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
