"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "./projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
              <p className="text-muted-foreground">{project.category}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="aspect-video bg-muted overflow-hidden">
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {project.images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-primary" : "bg-muted-foreground/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">{project.longDescription}</p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {project.liveUrl && (
                <Button onClick={() => window.open(project.liveUrl, "_blank")}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Site
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" onClick={() => window.open(project.githubUrl, "_blank")}>
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
