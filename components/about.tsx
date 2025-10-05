"use client";
import { SkillBar } from "@/components/skill-bar";
import { TimelineItem } from "@/components/timeline-item";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { Merriweather } from "next/font/google";

// font initialize
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const skills = [
    { name: "Html5", level: 84, color: "bg-orange-500" },
      
  { name: "JavaScript", level: 80, color: "bg-yellow-500" },
  { name: "React", level: 75, color: "bg-blue-500" },
  { name: "TypeScript", level: 75, color: "bg-pink-600" },
  { name: "CSS/Tailwind", level: 80, color: "bg-cyan-500" },
    { name: "Next.js", level: 70, color: "bg-gray-500" },
  { name: "Git/Github", level: 80, color: "bg-amber-500" },
 

];

const education = [
  {
    year: "2023-2026",
    degree: "BCA - Bachelor of Computer Applications",
    institution: "CCS University, Ghaziabad, Uttar Pradesh",
    description:
      "#rd year with specialization in web technologies and software development. Completed projects in HTML, CSS, JavaScript, and React, java, DBMS, OOPs concepts, operating systems",
    subjects: ["Web Development", "Problem-Solving", "java", "DBMS", "UI/UX Design"],
  },
  {
    year: "2022",
    degree: "Senior Secondary (12th)",
    institution:  "CBSE Board, Delhi",
    description:
      "Completed senior secondary education with a focus on Humanities. Achieved strong foundation in analytical thinking and communication skills.",
  
    subjects: ["History", "Geography", "Political Science", "English"],}
];

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-background">
      <div className="max-w-md xs:max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-2 xs:px-3 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-12 sm:mb-16">
          <h2
            className={`${merriweather.className} text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4`}
          >
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm a passionate frontend developer with over 4 years of experience
            crafting accessible, pixel-perfect digital experiences.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Personal Info & Skills */}
          <div>
            <RevealOnScroll direction="left" className="mb-10 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                My Story
              </h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p className="text-justify">
                  Hi, I’m <strong>Tanuj Verma</strong>, a passionate{" "}
                  <strong>Frontend Developer</strong> from Delhi. I specialize
                  in <strong>React, Next.js, and Tailwind CSS</strong>, crafting
                  modern, responsive, and animated user interfaces. Currently,
                  I’m exploring the <strong>MERN stack and AI-powered applications</strong> to expand my skills. Outside of coding, I enjoy{" "}
                  <strong>designing and exploring new technologies</strong>. I’m
                  always excited to connect and work on impactful projects!
                </p>
              </div>
            </RevealOnScroll>

            {/* Skills */}
            <RevealOnScroll direction="left" delay={0.2}>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Technical Skills
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Education */}
          <div>
            <RevealOnScroll direction="right">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Education
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-6 sm:space-y-8">
                  {education.map((item, index) => (
                    <TimelineItem
                      key={index}
                      item={{
                        year: item.year,
                        title: item.degree,
                        company: item.institution,
                        description: item.description,
                        technologies: item.subjects,
                      }}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
