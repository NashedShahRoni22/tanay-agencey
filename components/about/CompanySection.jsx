"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CompanySection() {
  const features = [
    "Leading Business Solution",
    "Business is the best plan",
    "Services we provide",
  ];

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Purple Circle - Left */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute -left-40 top-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        
        {/* Small Circle - Right */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute -right-32 bottom-1/4 w-80 h-80 bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Professional IT Team"
                className="w-full h-[500px] object-cover"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>

            {/* Floating Badge - 25 Years */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-8 left-8 bg-primary text-white rounded-2xl px-8 py-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl font-bold"
                >
                  5
                </motion.div>
                <div className="border-l-2 border-white/30 pl-4">
                  <div className="text-sm font-semibold uppercase tracking-wider">
                    Years of Experience
                  </div>
                  <div className="text-xs opacity-90">in startup building</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative animated circles */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 right-8 w-4 h-4 bg-primary/40 rounded-full backdrop-blur-sm"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#061039] mb-6 leading-tight"
              >
                We're a Trusted and Secure Web Agency
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                An IT business thrives on innovation, utilizing advanced technologies like AI, cloud computing, blockchain, and cybersecurity to deliver efficient and future-proof solutions. Keeping up with the latest tech trends ensures businesses...
              </motion.p>
            </div>

            {/* Features List - Two Columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Left Column */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex-shrink-0"
                    >
                      <CheckCircle className="w-5 h-5 text-primary fill-primary/20" />
                    </motion.div>
                    <span className="text-gray-700 font-medium group-hover:text-primary transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex-shrink-0"
                    >
                      <CheckCircle className="w-5 h-5 text-primary fill-primary/20" />
                    </motion.div>
                    <span className="text-gray-700 font-medium group-hover:text-primary transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Section - Reviews + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              {/* Active Reviews */}
              <div className="flex items-center gap-4">
                {/* Avatar Stack */}
                <div className="flex -space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-primary to-primary-dark overflow-hidden"
                  >
                    <img
                      src="https://i.pravatar.cc/150?img=1"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-primary to-primary-dark overflow-hidden"
                  >
                    <img
                      src="https://i.pravatar.cc/150?img=2"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-primary to-primary-dark overflow-hidden"
                  >
                    <img
                      src="https://i.pravatar.cc/150?img=3"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#061039]">1500+</div>
                  <div className="text-sm text-primary font-medium">Active Reviews</div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(100, 33, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}