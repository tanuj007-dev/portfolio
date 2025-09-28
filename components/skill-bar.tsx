"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillBarProps {
  skill: Skill
  delay?: number
}

export function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full ${skill.color} rounded-full`}
        />
      </div>
    </motion.div>
  )
}
