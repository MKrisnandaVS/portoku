"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

// Mock API function
const fetchPosts = async () => {
  // In a real application, this would be an API call to your headless CMS
  return [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and start building your first app.",
    },
    {
      id: 2,
      title: "Advanced TypeScript Techniques",
      excerpt: "Dive deep into TypeScript and learn advanced concepts.",
    },
    {
      id: 3,
      title: "Building Scalable Node.js Applications",
      excerpt: "Learn how to build and scale Node.js applications for production.",
    },
  ]
}

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts().then(setPosts)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
              >
                Read more
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

