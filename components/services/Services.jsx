"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Globe,
  Cpu,
  Headphones
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
        className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
      >
        <Icon className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
      </motion.div>

      <h3 className="text-xl font-bold text-[#061039] mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences and seamless functionality on all devices."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize performance, enhance security, and reduce operational costs."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets, ensure data integrity, and maintain regulatory compliance."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Expert database design, optimization, and maintenance services for reliable data storage, retrieval, and performance monitoring."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies, SEO optimization, and best practices."
    },
    {
      icon: Cpu,
      title: "IT Infrastructure",
      description: "Complete IT infrastructure setup, maintenance, and support services for seamless business operations and system reliability."
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical assistance and monitoring services to ensure your systems run smoothly and efficiently at all times."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-64 h-64 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-primary-dark rounded-full"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-primary/10 rounded-lg transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-primary/10 rounded-2xl mb-6"
          >
            <Code className="w-8 h-8 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#061039] mb-6">
            Our Core <span className="text-primary">IT Services</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive IT solutions that empower your business to thrive in the digital age.
            From custom software development to cloud infrastructure, we provide everything you need.
          </p>
        </motion.div>

        {/* Services Carousel */}
        <div className="relative px-4 sm:px-8 lg:px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-full">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Outside the cards */}
          <button className="swiper-button-prev-custom absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200 hover:border-primary cursor-pointer">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200 hover:border-primary cursor-pointer">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination with Primary Color */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
        </div>
      </div>
    </section>
  );
}
