"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js and React',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Development',
    slug: 'getting-started-nextjs',
  },
  {
    title: 'Mastering Tailwind CSS',
    excerpt: 'Tips and tricks for using Tailwind CSS effectively in your projects',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    date: '2024-03-10',
    readTime: '7 min read',
    category: 'CSS',
    slug: 'mastering-tailwind',
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in web development',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Technology',
    slug: 'future-web-development',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <time className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}