"use client"

import { useEffect, useRef, useState } from "react"

type Category = { name: string; count: number }

interface GitHubStatsProps {
  /** Total number of curated projects in the grid below. */
  total: number
  /** Per-category counts, pre-sorted desc by the caller. */
  categories: Category[]
}

/** Three harmonious shades of the brand primary, biggest category first. */
const SHADES = ["bg-primary", "bg-primary/55", "bg-primary/30", "bg-primary/20"]
const DOTS = ["bg-primary", "bg-primary/55", "bg-primary/30", "bg-primary/20"]

/**
 * A "body of work" band: an animated total, a proportion bar segmented by
 * category so the shape of the work reads at a glance, a per-category legend,
 * and a domains line as supporting context.
 */
export default function GitHubStats({
  total = 0,
  categories = [],
}: GitHubStatsProps) {
  const [count, setCount] = useState(0)
  const [grown, setGrown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // animate the total + grow the bar once the band scrolls into view
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce || total <= 0) {
      setCount(total)
      setGrown(true)
      return
    }
    // grow the bar next frame; count up on mount with a guaranteed settle so
    // the final number is always correct even if rAF is throttled/backgrounded.
    const dur = 1000
    let raf = requestAnimationFrame(() => setGrown(true))
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * total))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    const settle = setTimeout(() => {
      setGrown(true)
      setCount(total)
    }, dur + 200)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(settle)
    }
  }, [total])

  const sum = categories.reduce((a, c) => a + c.count, 0) || 1

  return (
    <div ref={ref} className="mx-auto mb-12 w-full max-w-3xl">
      {/* total + supporting meta */}
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold leading-none tracking-tighter tabular-nums md:text-6xl">
              {count}
            </span>
            <span className="text-2xl font-bold leading-none tracking-tighter text-primary md:text-3xl">
              projects
            </span>
          </div>
          <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Production work, shipped
          </div>
        </div>
        <div className="text-left text-sm text-muted-foreground sm:text-right">
          <div>
            From <span className="font-semibold text-foreground">design</span> to{" "}
            <span className="font-semibold text-foreground">deployment</span>
          </div>
          <div className="mt-0.5">
            Spanning <span className="text-foreground">Web</span>,{" "}
            <span className="text-foreground">AI</span> &amp;{" "}
            <span className="text-foreground">Mobile</span>
          </div>
        </div>
      </div>

      {/* proportion bar */}
      <div
        className="mt-5 flex h-2.5 w-full gap-[3px] overflow-hidden rounded-full bg-muted"
        role="img"
        aria-label={
          `${total} projects: ` +
          categories.map((c) => `${c.count} ${c.name}`).join(", ")
        }
      >
        {categories.map((c, i) => (
          <div
            key={c.name}
            className={`${SHADES[i] ?? "bg-primary/20"} h-full rounded-full transition-[width] duration-[1100ms] ease-out`}
            style={{
              width: grown ? `${(c.count / sum) * 100}%` : "0%",
              transitionDelay: `${i * 140}ms`,
            }}
          />
        ))}
      </div>

      {/* legend */}
      <div className="mt-4 flex flex-wrap gap-x-7 gap-y-2">
        {categories.map((c, i) => (
          <div key={c.name} className="flex items-center gap-2 text-sm">
            <span className={`h-2.5 w-2.5 rounded-full ${DOTS[i] ?? "bg-primary/20"}`} />
            <span className="font-medium text-foreground">{c.name}</span>
            <span className="tabular-nums text-muted-foreground">
              {c.count}
              <span className="ml-1 text-xs">
                ({Math.round((c.count / sum) * 100)}%)
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
