"use client"

import { useEffect, useRef } from "react"

/**
 * Slowed scroll-through preview for the project detail hero.
 * Plays at 0.6x so the page walk-through is readable; stays paused
 * on the poster under prefers-reduced-motion.
 */
export default function DetailPreviewVideo({
  src,
  poster,
  title,
}: {
  src: string
  poster?: string
  title: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = 0.6
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    video.play().catch(() => {})
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
      aria-label={`Scrolling preview of ${title}`}
    />
  )
}
