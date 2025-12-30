"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, Globe, Smartphone, Palette, Code, ExternalLink, ArrowRight } from 'lucide-react';
import Link from "next/link";

// Project categories
const categories = [
  { id: "all", name: "All Projects", icon: Briefcase },
  { id: "web", name: "Web Development", icon: Globe },
  { id: "mobile", name: "Mobile Apps", icon: Smartphone },
  { id: "design", name: "Design", icon: Palette },
  { id: "software", name: "Software", icon: Code },
];

// Dummy project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    description: "A full-featured e-commerce platform with real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "mobile",
    description: "Mobile application for tracking workouts, nutrition, and health metrics with AI-powered insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "ML"],
    link: "#"
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "design",
    description: "Complete brand identity redesign including logo, color palette, and marketing materials.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    tags: ["Figma", "Illustrator", "Branding"],
    link: "#"
  },
  {
    id: 4,
    title: "Healthcare Management System",
    category: "software",
    description: "Comprehensive healthcare management solution for patient records, appointments, and billing.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate Portal",
    category: "web",
    description: "Modern property listing platform with advanced search, virtual tours, and CRM integration.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tags: ["Next.js", "Tailwind", "Prisma"],
    link: "#"
  },
  {
    id: 6,
    title: "Food Delivery App",
    category: "mobile",
    description: "On-demand food delivery application with real-time tracking and multiple payment options.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    tags: ["Flutter", "Node.js", "Redis"],
    link: "#"
  },
  {
    id: 7,
    title: "Dashboard UI Kit",
    category: "design",
    description: "Comprehensive UI kit for admin dashboards with 100+ components and dark mode support.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    tags: ["Figma", "Design System", "UI/UX"],
    link: "#"
  },
  {
    id: 8,
    title: "Inventory Management",
    category: "software",
    description: "Enterprise inventory management system with barcode scanning and automated reporting.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    tags: ["Python", "Django", "MySQL"],
    link: "#"
  },
  {
    id: 9,
    title: "Portfolio Website",
    category: "web",
    description: "Creative portfolio website with smooth animations and interactive project showcases.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tags: ["React", "Three.js", "GSAP"],
    link: "#"
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-medium">Our Work</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Portfolio & Projects
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
          >
            Explore our diverse collection of successful projects that showcase our expertise 
            and commitment to delivering exceptional digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <a
                        href={project.link}
                        className="flex-1 bg-white text-primary px-4 py-2 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {categories.find(cat => cat.id === project.category)?.name.split(" ")[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's collaborate to bring your vision to life with innovative solutions and exceptional results.
          </p>
          <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}