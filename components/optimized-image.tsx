"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  placeholder = "blur",
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Generate a simple blur placeholder if none provided
  const defaultBlurDataURL = `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/></svg>`,
  ).toString("base64")}`

  if (hasError) {
    return (
      <div
        className={cn("flex items-center justify-center bg-muted text-muted-foreground", className)}
        style={{ width, height }}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    )
  }

  return (
    <div className={cn("overflow-hidden", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        className={cn("transition-all duration-300", isLoading ? "scale-105 blur-sm" : "scale-100 blur-0")}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  )
}
