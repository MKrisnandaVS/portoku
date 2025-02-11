"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import ProjectPreview from "./components/ProjectPreview"
import BlogPostPreview from "./components/BlogPostPreview"
import dynamic from "next/dynamic"

const Carousel = dynamic(() => import("./components/Carousel"), { ssr: false })

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/projects/ecommerce.jpg",
    link: "/projects/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A React-based task management application with drag-and-drop functionality",
    image: "/projects/task-management.jpg",
    link: "/projects/task-management",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS",
    image: "/projects/portfolio.jpg",
    link: "/projects/portfolio",
  },
]

const blogPosts = [
  {
    title: "Introduction to React Hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in your components.",
    link: "/blog/intro-to-react-hooks",
  },
  {
    title: "Building Scalable Node.js Applications",
    excerpt: "Discover best practices for building scalable and maintainable Node.js applications.",
    link: "/blog/scalable-nodejs-apps",
  },
  {
    title: "Mastering CSS Grid Layout",
    excerpt: "Explore advanced techniques for creating complex layouts with CSS Grid.",
    link: "/blog/mastering-css-grid",
  },
]

export default function Home() {
  const roles = ["Full Stack Developer", "Data Scientist", "Project Manager", "UI/UX Enthusiast"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000) // Ganti setiap 3 detik

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex flex-col items-center space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Image
          src="/profile-picture.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-8"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Muhammad Krisnanda
        </h1>
        <div className="h-8 mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
            >
              {roles[currentRoleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        <Link
          href="/projects"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          View All Projects
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
        <Carousel items={projects.map((project) => <ProjectPreview key={project.title} {...project} />)} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Latest Blog Posts</h2>
        <Carousel items={blogPosts.map((post) => <BlogPostPreview key={post.title} {...post} />)} />
      </motion.div>
    </div>
  )
}

