"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface TimelineItemData {
  year: string
  title: string
  company: string
  description: string
  technologies: string[]
}

interface TimelineItemProps {
  item: TimelineItemData
  index: number
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
      </div>

      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="mb-2">
          <span className="text-sm text-muted-foreground font-mono">{item.year}</span>
        </div>
        <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
        <p className="text-accent font-medium mb-3">{item.company}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>

        <div className="flex flex-wrap gap-1">
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
