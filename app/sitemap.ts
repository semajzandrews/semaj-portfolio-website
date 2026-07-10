import { projects } from "@/app/data/projects"
import type { MetadataRoute } from "next"

const siteUrl = "https://www.bysemaj.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/portfolio`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projectRoutes,
  ]
}
