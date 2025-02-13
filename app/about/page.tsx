"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Code, Server, Database, PenTool, Globe } from "lucide-react"

interface Skill {
  name: string
  icon: ReactNode
}

const skills: Skill[] = [
  { name: "React", icon: <Code className="h-8 w-8" /> },
  { name: "Node.js", icon: <Server className="h-8 w-8" /> },
  { name: "SQL", icon: <Database className="h-8 w-8" /> },
  { name: "UI/UX", icon: <PenTool className="h-8 w-8" /> },
  { name: "Web Development", icon: <Globe className="h-8 w-8" /> },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">My Background</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm a passionate full-stack developer with over 5 years of experience in creating web applications. My
            journey in tech started with a Computer Science degree, and since then, I've been constantly learning and
            adapting to new technologies.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I specialize in building robust and scalable applications using modern JavaScript frameworks like React and
            Node.js. I'm also experienced in database design, API development, and cloud services.
          </p>
          <a
            href="/john-doe-resume.pdf"
            download
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out transform hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">My Skills</h2>
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-4 mb-2">{skill.icon}</div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

