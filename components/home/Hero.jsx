"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

// --- ANIMATION VARIANTS ---
const containerVars = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVars = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const imageVars = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const floatingVars = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f4ff]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circle - Top Right */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        
        {/* Medium Circle - Bottom Left */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#061039] rounded-full blur-3xl"
        />
        
        {/* Small Floating Shapes */}
        <motion.div
          variants={floatingVars}
          animate="animate"
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full opacity-20"
        />
        <motion.div
          variants={floatingVars}
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary rounded-full opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-50 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="text-left"
          >

            {/* Main Heading */}
            <motion.h1
              variants={textVars}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#061039] leading-tight mb-6"
            >
              Elevating Your IT Business{" "}
              <span className="text-primary">With Industry Experts</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={textVars}
              className="text-lg text-gray-600 mb-8 max-w-xl"
            >
              We are dedicated to building long-term partnerships with our clients, 
              ensuring their success through innovative technology solutions and 
              exceptional service delivery.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={textVars}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(100, 33, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group"
              >
                View Services
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary group"
              >
                Make Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            variants={imageVars}
            initial="initial"
            animate="animate"
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Purple Background Shape */}
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-primary to-[#501ACD] rounded-3xl -z-10"
              />
              
              {/* Dark Shape Behind */}
              <motion.div
                initial={{ scale: 0.8, rotate: 5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute -bottom-6 -left-6 w-full h-full bg-[#061039] rounded-3xl -z-20"
              />

              {/* Hero Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/3]"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="IT Team Collaboration"
                  className="w-full h-full object-cover"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Card - Years of Experience */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">25</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Years of experience</div>
                    <div className="font-semibold text-[#061039]">in startup building</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Active Reviews */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-[#061039] border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="font-bold text-[#061039]">1500+</div>
                    <div className="text-xs text-gray-600">Active Reviews</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}