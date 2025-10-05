"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import type { Project } from "./projects"

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative bg-card border border-border rounded-lg overflow-hidden cursor-pointer"
      whileHover={{
        y: -8,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          width={400}
          height={192}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.liveUrl, "_blank")
                }}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.githubUrl, "_blank")
                }}
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </Button>
            )}
            <Button size="sm" variant="default">
              <Eye className="w-4 h-4 mr-1" />
              Details
            </Button>
          </div>
        </motion.div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        {/* Category */}
        <div className="text-xs text-muted-foreground uppercase tracking-wide">{project.category}</div>
      </div>
    </motion.div>
  )
}
