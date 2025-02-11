"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/projects/ecommerce.jpg",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/johndoe/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A React-based task management application with drag-and-drop functionality",
    image: "/projects/task-management.jpg",
    category: "Frontend",
    technologies: ["React", "Redux", "DnD"],
    github: "https://github.com/johndoe/task-manager",
    demo: "https://task-manager-demo.com",
  },
  {
    id: 3,
    title: "Mobile Weather App",
    description: "A cross-platform mobile app for real-time weather updates",
    image: "/projects/weather-app.jpg",
    category: "Mobile",
    technologies: ["React Native", "API Integration"],
    github: "https://github.com/johndoe/weather-app",
    demo: "https://weather-app-demo.com",
  },
]

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"]

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">My Projects</h1>
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

