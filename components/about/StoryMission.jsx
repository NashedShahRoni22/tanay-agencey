"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap } from "lucide-react";

export default function StoryMission() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute -left-32 top-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute -right-32 bottom-1/4 w-96 h-96 bg-[#061039] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="Our Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute bottom-8 left-8 bg-white rounded-2xl px-6 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#061039]">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl blur-xl -z-10"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                  Our Story
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#061039] mb-6"
              >
                Building Digital Excellence{" "}
                <span className="text-primary">Since 2019</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed mb-4"
              >
                Founded with a vision to transform how businesses leverage technology, PHEBEH 
                has grown from a small startup to a trusted partner for companies worldwide. Our journey 
                began with a simple mission: deliver innovative solutions that make a real difference.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Today, we're proud to have helped over 500 businesses achieve their digital goals, 
                combining cutting-edge technology with creative excellence to deliver results that exceed expectations.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {[
                { value: "5+", label: "Years" },
                { value: "500+", label: "Projects" },
                { value: "98%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-3xl text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                enhance efficiency, and create lasting value. We're committed to delivering 
                excellence in every project while building long-term partnerships based on 
                trust and mutual success.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#061039] to-[#0a1854] p-8 rounded-3xl text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be the leading technology partner for businesses worldwide, recognized for 
                our innovation, expertise, and unwavering commitment to client success. We 
                envision a future where technology seamlessly integrates with business strategy 
                to unlock unprecedented opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}