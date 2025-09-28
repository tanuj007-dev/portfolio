"use client";
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import Loader from "@/components/Loader";
import { useState } from "react"
export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <main className="min-h-screen">
       {loading && <Loader onFinish={() => setLoading(false)} />}
      <Navigation />
      {!loading && <Hero />}
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
