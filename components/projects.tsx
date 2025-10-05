"use client"

import React, { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

import { Merriweather } from "next/font/google"; // ✅ font import

// font initialize
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern, accessible e-commerce platform built with Next.js and TypeScript.",
    longDescription:
      "A comprehensive e-commerce solution featuring advanced search, real-time inventory management, and seamless checkout experience. Built with performance and accessibility as core principles, achieving 98+ Lighthouse scores across all metrics.",
    image: "/modern-ecommerce-dashboard.png",
    images: ["/ecommerce-homepage.png", "/product-listing-page.jpg", "/shopping-cart-interface.jpg"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "Web App",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
    featured: true,
  },
  {
    id: "2",
    title: "Design System",
    description: "Comprehensive design system with 50+ components and extensive documentation.",
    longDescription:
      "A scalable design system built from the ground up, featuring atomic design principles, comprehensive accessibility guidelines, and automated testing. Used across 12+ products with consistent theming and dark mode support.",
    image: "/design-system-components.png",
    images: ["/component-library.png", "/design-tokens.jpg", "/documentation-site.jpg"],
    technologies: ["React", "Storybook", "TypeScript", "CSS-in-JS"],
    category: "Design System",
    liveUrl: "https://storybook.example.com",
    githubUrl: "https://github.com/example/design-system",
    featured: true,
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    longDescription:
      "A powerful analytics platform providing real-time insights with interactive charts, custom date ranges, and exportable reports. Features advanced filtering, drill-down capabilities, and responsive design for mobile analytics on-the-go.",
    image: "/analytics-dashboard-charts.png",
    images: ["/dashboard-overview.png", "/data-visualization-charts.png", "/mobile-dashboard.jpg"],
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    category: "Web App",
    liveUrl: "https://analytics.example.com",
    githubUrl: "https://github.com/example/analytics",
    featured: false,
  },
  {
    id: "4",
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication.",
    longDescription:
      "A secure, user-friendly mobile banking application featuring biometric authentication, real-time transaction monitoring, and comprehensive financial management tools. Built with React Native and following strict security protocols.",
    image: "/mobile-banking-app.png",
    images: ["/banking-app-login.png", "/account-overview.jpg", "/transaction-history.jpg"],
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB"],
    category: "Mobile App",
    githubUrl: "https://github.com/example/banking-app",
    featured: false,
  },
  {
    id: "5",
    title: "AI Content Generator",
    description: "AI-powered content generation tool with custom templates and workflows.",
    longDescription:
      "An intelligent content generation platform leveraging advanced AI models to create high-quality content across multiple formats. Features custom templates, workflow automation, and collaborative editing capabilities.",
    image: "/ai-content-generator-interface.png",
    images: ["/content-editor.jpg", "/template-library.jpg", "/ai-generation-results.jpg"],
    technologies: ["React", "Python", "OpenAI API", "FastAPI"],
    category: "AI Tool",
    liveUrl: "https://ai-content.example.com",
    githubUrl: "https://github.com/example/ai-content",
    featured: true,
  },
  {
    id: "6",
    title: "Task Management System",
    description: "Collaborative task management with real-time updates and team features.",
    longDescription:
      "A comprehensive project management solution with real-time collaboration, advanced filtering, time tracking, and team analytics. Features drag-and-drop interfaces, custom workflows, and integration with popular development tools.",
    image: "/task-management-kanban.png",
    images: ["/kanban-board.png", "/project-timeline.jpg", "/team-collaboration.png"],
    technologies: ["React", "Socket.io", "Express", "Redis"],
    category: "Web App",
    liveUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/example/task-manager",
    featured: false,
  },
]

const categories = ["All", "Web App", "Mobile App", "Design System", "AI Tool"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mounted, setMounted] = useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  if (!mounted) {
    // Optionally render a fallback skeleton or nothing
    return null
  }

  return (
    <section id="projects" className="py-12 sm:py-20 bg-card/50">
      <div className="max-w-md xs:max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-2 xs:px-3 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <>
            <h2 className={`  ${merriweather.className}        text-3xl sm:text-4xl font-bold text-foreground mb-4`}>Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A collection of projects showcasing my expertise in frontend development, design systems, and user
              experience.
            </p>
            
          </>
        </RevealOnScroll>

        {/* Category Filter */}
        <RevealOnScroll delay={0.2} className="flex flex-wrap justify-center gap-2 mb-12">
          <>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </>
        </RevealOnScroll>

        {/* Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <div key={project.id}>
                <RevealOnScroll delay={index * 0.1}>
                  <ProjectCard project={project} onSelect={setSelectedProject} />
                </RevealOnScroll>
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  )
}
