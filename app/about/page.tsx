"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground">
              I'm a passionate Full Stack Developer with over 5 years of experience in
              building modern web applications. I specialize in React, Node.js, and
              cloud technologies.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-8">Skills & Expertise</h2>
            <div className="space-y-8">
              {skills.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h3 className="text-xl font-medium mb-4">{category.category}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-12 h-12"
                        />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium">Senior Full Stack Developer</h3>
                <p className="text-muted-foreground">Tech Company • 2020 - Present</p>
                <p className="mt-2">
                  Led development of multiple high-impact projects and mentored junior
                  developers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Full Stack Developer</h3>
                <p className="text-muted-foreground">Digital Agency • 2018 - 2020</p>
                <p className="mt-2">
                  Developed and maintained various client projects using modern web
                  technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="gap-2">
              <FileDown className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}