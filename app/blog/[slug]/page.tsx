"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

const blogPosts = {
  'getting-started-nextjs': {
    title: 'Getting Started with Next.js',
    content: `
      Next.js is a powerful framework for building React applications. It provides features like server-side rendering, static site generation, and API routes out of the box.

      ## Why Next.js?

      Next.js simplifies the development process by providing:
      - Automatic routing based on file system
      - Built-in API routes
      - Excellent developer experience
      - Great performance optimizations

      ## Getting Started

      To create a new Next.js project, you can use:

      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`

      This will set up a new project with all the necessary configurations.

      ## Key Features

      1. **File-based Routing**
         Next.js creates routes automatically based on your file structure.

      2. **API Routes**
         Create API endpoints easily by adding files to the \`pages/api\` directory.

      3. **Built-in CSS Support**
         Import CSS files directly in your components.

      ## Best Practices

      - Use Static Generation when possible
      - Implement dynamic imports for better performance
      - Optimize images using the Image component
      - Implement proper SEO using metadata
    `,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    date: '2024-03-15',
    author: 'John Doe',
    readTime: '5 min read',
    category: 'Development',
  },
  'mastering-tailwind': {
    title: 'Mastering Tailwind CSS',
    content: `
      Tailwind CSS is a utility-first CSS framework that has revolutionized how we style web applications.

      ## Why Tailwind CSS?

      Tailwind provides:
      - Rapid development
      - Consistent design system
      - Highly customizable
      - Small production bundles

      ## Key Concepts

      1. **Utility-First Approach**
         Instead of writing custom CSS, you compose styles using utility classes.

      2. **Responsive Design**
         Built-in responsive prefixes make it easy to create mobile-first designs.

      3. **Dark Mode**
         Simple implementation of dark mode using the dark: prefix.

      ## Best Practices

      - Use component extraction for reusable patterns
      - Leverage @apply for complex components
      - Implement proper responsive design
      - Use configuration file for customization
    `,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    date: '2024-03-10',
    author: 'Jane Smith',
    readTime: '7 min read',
    category: 'CSS',
  },
  'future-web-development': {
    title: 'The Future of Web Development',
    content: `
      The web development landscape is constantly evolving. Let's explore upcoming trends and technologies.

      ## Current Trends

      1. **Web Assembly**
         Bringing native performance to the web.

      2. **Edge Computing**
         Moving computation closer to the user.

      3. **AI Integration**
         Incorporating artificial intelligence into web applications.

      ## Emerging Technologies

      - **Web3 and Blockchain**
        Decentralized applications and smart contracts.

      - **Progressive Web Apps**
        Native-like experiences on the web.

      - **WebGPU**
        Next-generation graphics on the web.

      ## Future Predictions

      - Increased use of AI in development
      - More focus on privacy and security
      - Better performance optimization tools
      - Enhanced cross-platform compatibility
    `,
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
    date: '2024-03-05',
    author: 'Alex Johnson',
    readTime: '6 min read',
    category: 'Technology',
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace('##', '').trim()}
                    </h2>
                  );
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <ul key={index} className="list-disc pl-6 mb-4">
                      <li>{paragraph.replace('-', '').trim()}</li>
                    </ul>
                  );
                }
                if (paragraph.trim().startsWith('```')) {
                  const code = paragraph.split('```')[1];
                  return (
                    <pre key={index} className="bg-muted p-4 rounded-lg my-4">
                      <code>{code}</code>
                    </pre>
                  );
                }
                return paragraph.trim() && <p key={index}>{paragraph}</p>;
              })}
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
}