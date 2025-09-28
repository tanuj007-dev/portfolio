"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Merriweather } from "next/font/google"; // ✅ font import
import { useState, useEffect } from "react";
import Link from "next/link";
// font initialize
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Typing effect with endless loop
  const fullText = "Frontend Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 120; // deleting faster than typing
    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        // typing forward
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        // deleting backward
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      } else if (index === fullText.length && !isDeleting) {
        // pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (index === 0 && isDeleting) {
        // start typing again
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ✅ Endless typing effect */}
          <h1
            className={`${merriweather.className} text-5xl sm:text-7xl mt-8 font-bold text-foreground mb-4 leading-tight`}
          >
            {displayedText}
            <span className="border-r-2 border-foreground animate-pulse ml-1"></span>
          </h1>

          <p
            className={`${merriweather.className} text-xl sm:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto`}
          >
            Aspiring Frontend Developer | Crafting responsive, interactive web
            apps with React & Next.js
          </p>
        </motion.div>
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
            href="https://www.linkedin.com/in/tanujverma05?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
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

          <a href="mailto:tanujverma489@gmail.com">
            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-card bg-transparent"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
        <br />
        <br />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm text-muted-foreground mb-8"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="flex justify-center"
        >
          <div className="relative w-[400px] h-[400px]  sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto -translate-y-10 ">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
            <div className="absolute inset-1 bg-background rounded-full">
              <Image
                src="/img2.jpg"
                alt="Profile photo"
                width={1200}
                height={1200}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
