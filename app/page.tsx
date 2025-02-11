"use client";

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with Next.js and Tailwind CSS',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      link: '/projects/1',
    },
    {
      title: 'Project 2',
      description: 'E-commerce platform with advanced features',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      link: '/projects/2',
    },
    {
      title: 'Project 3',
      description: 'Mobile-first social media dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      link: '/projects/3',
    },
  ];

  const blogPosts = [
    {
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications with Next.js',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      link: '/blog/getting-started-nextjs',
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt: 'Tips and tricks for using Tailwind CSS effectively',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
      link: '/blog/mastering-tailwind',
    },
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring upcoming trends in web development',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
      link: '/blog/future-web-development',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Let's work together <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-[300px] sm:w-[400px]">
                <Link href={project.link}>
                  <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full"
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index} className="w-[300px] sm:w-[400px]">
                <Link href={post.link}>
                  <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden group">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-sm">{post.excerpt}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}