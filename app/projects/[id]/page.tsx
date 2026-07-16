import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { projects } from "@/app/data/projects"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ThemeToggle from "@/app/components/theme-toggle"
import DetailPreviewVideo from "@/app/components/detail-preview-video"

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const projectId = Number.parseInt(id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/portfolio#projects" className="flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-4 px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-4">
          {/* Header Section */}
          <div className="space-y-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((c) => (
                  <span key={c} className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {c}
                  </span>
                ))}
                {project.subcategory && (
                  <span className="rounded-md bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.subcategory}
                  </span>
                )}
              </div>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>

            {/* Image / video Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
                {project.previewVideo ? (
                  <DetailPreviewVideo
                    src={project.previewVideo}
                    poster={project.previewPoster || project.image}
                    title={project.title}
                  />
                ) : (
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                )}
              </div>
              
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="grid gap-3 grid-cols-3">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative aspect-video overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity">
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-medium ring-1 ring-inset ring-gray-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(() => {
              // App Store / Play Store detection — relabels the live button
              // for iOS/Android projects.
              const live = project.liveUrl
              const isAppStore = !!live && live.includes("apps.apple.com")
              const isPlayStore = !!live && live.includes("play.google.com")
              const liveLabel = isAppStore
                ? "View on App Store"
                : isPlayStore
                ? "View on Play Store"
                : "View Live"
              const hasRepo = !!project.repoUrl

              return (
                <div className="flex flex-wrap gap-3">
                  {/* Live button — always rendered. Dimmed if no liveUrl. */}
                  {live ? (
                    <Link href={live} target="_blank" rel="noopener noreferrer">
                      <Button className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        {liveLabel}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      disabled
                      aria-label="No public live URL — demo available on request"
                      title="No public live URL — demo available on request"
                      className="flex items-center gap-2 opacity-50 cursor-not-allowed"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo on Request
                    </Button>
                  )}

                  {/* GitHub button — always rendered. Dimmed if no public repo. */}
                  {hasRepo ? (
                    <Link href={project.repoUrl!} target="_blank" rel="noopener noreferrer">
                      <Button variant={live ? "outline" : "default"} className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="outline"
                      disabled
                      aria-label="Source proprietary — happy to walk through in a call"
                      title="Source proprietary — happy to walk through in a call"
                      className="flex items-center gap-2 opacity-50 cursor-not-allowed"
                    >
                      <Github className="h-4 w-4" />
                      Source Private
                    </Button>
                  )}
                </div>
              )
            })()}
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            <section className="space-y-2">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-muted-foreground">{project.detailedDescription}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-bold">Features</h2>
              <ul className="list-disc pl-5 space-y-1">
                {project.features?.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-bold">Technologies Used</h2>
              <ul className="list-disc pl-5 space-y-1">
                {project.technologies?.map((tech, index) => (
                  <li key={index} className="text-muted-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Challenges</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.challenges?.map((challenge, index) => (
                      <li key={index} className="text-muted-foreground">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Solutions</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.solutions?.map((solution, index) => (
                      <li key={index} className="text-muted-foreground">
                        {solution}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="border-t mt-6">
        <div className="container flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2026 Semaj Andrews. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/semajzandrews" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="https://www.linkedin.com/in/semajzandrews" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="mailto:semajzandrews@gmail.com">
              Email
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

