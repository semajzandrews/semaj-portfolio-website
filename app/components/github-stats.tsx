"use client"

import { useEffect, useState } from "react"

interface GitHubStatsProps {
  /** Number of curated projects featured in the grid below. */
  featured: number
  /** Fallback repo count if the GitHub API is unavailable. */
  fallbackRepos?: number
  username?: string
}

/**
 * A small stat band that surfaces the live public-repo count from GitHub,
 * so visitors see the true volume of work. Falls back to a static number
 * if the unauthenticated GitHub API is rate-limited or offline.
 */
export default function GitHubStats({
  featured,
  fallbackRepos = 157,
  username = "semajzandrews",
}: GitHubStatsProps) {
  const [repos, setRepos] = useState<number | null>(null)

  useEffect(() => {
    let active = true
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        if (active && typeof d?.public_repos === "number") setRepos(d.public_repos)
      })
      .catch(() => {
        /* keep fallback */
      })
    return () => {
      active = false
    }
  }, [username])

  const repoCount = repos ?? fallbackRepos

  const stats = [
    { value: `${repoCount}+`, label: "Public Repositories" },
    { value: `${featured}`, label: "Featured Projects" },
    { value: "Web · AI · Mobile", label: "Across Domains" },
  ]

  return (
    <div className="mx-auto mb-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border bg-background/60 px-4 py-5 text-center backdrop-blur transition-colors hover:border-primary/50"
        >
          <div className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
            {s.value}
          </div>
          <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
