"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store built with Next.js and Stripe',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    technologies: ['React', 'Redux', 'Chart.js', 'Material UI'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management solution',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    technologies: ['Vue.js', 'Vuex', 'TailwindCSS', 'Firebase'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Link
                        href={project.demoUrl}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                        target="_blank"
                      >
                        Live Demo
                      </Link>
                      <Link
                        href={project.githubUrl}
                        className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
                        target="_blank"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}