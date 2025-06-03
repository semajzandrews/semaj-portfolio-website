import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { projects } from "@/app/data/projects"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ThemeToggle from "@/app/components/theme-toggle"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/#projects" className="flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-12 px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
            <span className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary self-start">
              {project.category}
            </span>
            <p className="text-lg text-muted-foreground mt-2">{project.description}</p>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-medium ring-1 ring-inset ring-gray-500/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-12">
            <Link href={project.link} target="_blank">
              <Button className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                View on GitHub
              </Button>
            </Link>
            <Link href={project.link} target="_blank">
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </Link>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground">{project.detailedDescription}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.features?.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.technologies?.map((tech, index) => (
                  <li key={index} className="text-muted-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Challenges</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.challenges?.map((challenge, index) => (
                      <li key={index} className="text-muted-foreground">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Solutions</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.solutions?.map((solution, index) => (
                      <li key={index} className="text-muted-foreground">
                        {solution}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {project.screenshots?.map((screenshot, index) => (
                  <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Semaj.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

