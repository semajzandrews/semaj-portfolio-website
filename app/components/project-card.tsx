import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: number
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  categories: string[]
}

export default function ProjectCard({ id, title, description, image, tags, categories }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className="block group">
      <Card className="overflow-hidden h-full transition-all group-hover:border-primary/50 group-hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">{title}</h3>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {categories.map((c) => (
              <span key={c} className="inline-block text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-md">
                {c}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

