"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"

import { Merriweather } from "next/font/google"; // ✅ font import

// font initialize
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission - replace with actual form service
      // Example: Netlify Forms, Formspree, or your own API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Example Netlify Forms integration:
      // const response = await fetch('/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   body: new URLSearchParams({
      //     'form-name': 'contact',
      //     ...formData
      //   }).toString()
      // })

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      setFormData({ name: "", email: "", subject: "", message: "" })
      setErrors({})
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-20 bg-card/50">
      <div className="max-w-md xs:max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-2 xs:px-3 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <h2 className={` ${merriweather.className}  text-3xl sm:text-4xl font-bold text-foreground mb-4`}>Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
            together.
          </p>
        </RevealOnScroll>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <RevealOnScroll direction="left" className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, creative projects, or just having a good
                conversation about web development and design.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">tanujverma489@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Delhi, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">+91 9582714839</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
        <div className="flex gap-4">
  <a
    href="https://github.com/tanuj007-dev"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="outline"
      size="icon"
      className="border-border hover:bg-card bg-transparent"
    >
      <Github className="h-5 w-5" />
    </Button>
  </a>

  <a
    href="ttps://www.linkedin.com/in/tanujverma05?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="outline"
      size="icon"
      className="border-border hover:bg-card bg-transparent"
    >
      <Linkedin className="h-5 w-5" />
    </Button>
  </a>

  <a href="mailto:your-email@example.com">
    <Button
      variant="outline"
      size="icon"
      className="border-border hover:bg-card bg-transparent"
    >
      <Mail className="h-5 w-5" />
    </Button>
  </a>
</div>

            </div>
          </RevealOnScroll>

          {/* Contact Form */}
          <RevealOnScroll direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Integration Instructions */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Form Integration</h4>
              <p className="text-sm text-muted-foreground">
                This form is ready for Netlify Forms integration. For other services like Formspree, update the form
                action and method attributes accordingly.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
