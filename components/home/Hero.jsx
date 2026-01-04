"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Cloud,
  Lock,
  Cpu,
  Database,
  Code,
  Server,
  Zap,
  Sparkles,
  Globe,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
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

  return (
    <section className="pt-20 relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-[#7835ff] to-primary-dark">
      {/* Ultra Creative Background Design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Massive Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-white to-purple-300 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-1/3 -left-1/4 w-[900px] h-[900px] bg-gradient-to-tr from-[#061039] to-indigo-400 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl"
        />

        {/* Animated Grid Pattern with Glow */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.08)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,.08)_2px,transparent_2px)] bg-[size:80px_80px]"
          style={{
            backgroundPosition: "0% 0%",
          }}
        />

        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className={`absolute rounded-xl bg-white/10 backdrop-blur-sm border border-white/20`}
            style={{
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Particle System */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [0, -800],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 8,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          />
        ))}

        {/* Radial Gradient Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,16,57,0.4)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="text-left"
          >
            {/* Epic Heading with Gradient Text */}
            <motion.h1
              variants={textVars}
              className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-8"
            >
              <span className="block mb-2">Technology Solutions</span>
              <span className="block">Built for </span>
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="inline-block bg-gradient-to-r from-white via-green-200 to-white bg-[length:200%_auto] bg-clip-text text-transparent"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Performance
              </motion.span>
              <span className="block mt-2">
                Security, and{" "}
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 40px rgba(255,255,255,0.8)",
                      "0 0 20px rgba(255,255,255,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-green-300"
                >
                  Growth
                </motion.span>
              </span>
            </motion.h1>

            {/* Description with Glass Effect */}
            <motion.div
              variants={textVars}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-10 shadow-xl"
            >
              <p className="lg:text-lg text-white leading-relaxed">
                <strong>PHEBEH</strong> partners with forward-thinking
                businesses to design, build, and manage digital systems that
                deliver long-term value.
              </p>
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div variants={textVars} className="flex flex-wrap gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(255, 255, 255, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 lg:px-10 py-2.5 lg:py-5 bg-white text-primary rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center gap-3 shadow-2xl overflow-hidden"
                >
                  <motion.div
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-green-200 to-transparent"
                  />
                  <Rocket className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Get a Free Consultation</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <ArrowRight size={24} />
                  </motion.span>
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 lg:px-10 py-2.5 lg:py-5 bg-white/20 backdrop-blur-xl text-white border-2 border-white/50 rounded-lg font-bold text-lg hover:border-white transition-all duration-300 inline-flex items-center gap-3 shadow-xl"
                >
                  <Globe className="w-6 h-6" />
                  View Our Services
                  <ArrowRight size={24} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - 3D Icon Sphere System */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="relative hidden lg:block lg:h-[700px]"
          >
            {/* Central Glowing Core */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 60px rgba(255,255,255,0.3)",
                  "0 0 100px rgba(255,255,255,0.5)",
                  "0 0 60px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-2xl rounded-full border-4 border-white/40 shadow-2xl flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Server className="w-32 h-32 text-white drop-shadow-2xl" />
              </motion.div>

              {/* Orbiting Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-white/30 rounded-full"
                style={{ borderStyle: "dashed" }}
              />
            </motion.div>

            {/* Orbiting Service Icons */}
            {[
              {
                Icon: Shield,
                color: "from-blue-400 to-blue-600",
                orbit: 220,
                speed: 12,
              },
              {
                Icon: Cloud,
                color: "from-purple-400 to-purple-600",
                orbit: 220,
                speed: 14,
              },
              {
                Icon: Lock,
                color: "from-green-400 to-green-600",
                orbit: 220,
                speed: 16,
              },
              {
                Icon: Cpu,
                color: "from-orange-400 to-orange-600",
                orbit: 220,
                speed: 18,
              },
              {
                Icon: Database,
                color: "from-pink-400 to-pink-600",
                orbit: 280,
                speed: 20,
              },
              {
                Icon: Code,
                color: "from-green-400 to-green-600",
                orbit: 280,
                speed: 22,
              },
              {
                Icon: Zap,
                color: "from-indigo-400 to-indigo-600",
                orbit: 280,
                speed: 24,
              },
              {
                Icon: Sparkles,
                color: "from-red-400 to-red-600",
                orbit: 280,
                speed: 26,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                animate={{ rotate: 360 }}
                transition={{
                  duration: item.speed,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: item.orbit * 2,
                  height: item.orbit * 2,
                  marginLeft: -item.orbit,
                  marginTop: -item.orbit,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.4,
                    rotate: 720,
                    boxShadow: "0 20px 60px rgba(255,255,255,0.5)",
                  }}
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl shadow-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/40 cursor-pointer`}
                >
                  <item.Icon className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>
            ))}

            {/* Outer Glow Rings */}
            {[400, 500, 600].map((size, i) => (
              <motion.div
                key={size}
                animate={{
                  rotate: i % 2 === 0 ? 360 : -360,
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white/10 rounded-full"
                style={{ width: size, height: size }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-sm font-medium">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
