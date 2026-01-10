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
  Zap,
  Sparkles,
  Globe,
  Rocket,
  Server,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-[#7c3aff] to-primary-dark">
      {/* Dynamic Animated Background */}
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
          className="absolute -bottom-1/3 -left-1/4 w-[900px] h-[900px] bg-gradient-to-tr from-primary-dark to-indigo-400 rounded-full blur-3xl"
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
          className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-purple-400 to-primary rounded-full blur-3xl"
        />

        {/* Animated Grid Pattern */}
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
            className="absolute rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
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

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(100,33,255,0.3)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { Icon: Shield, pos: "top-10 left-[5%]", delay: 0 },
              { Icon: Cloud, pos: "top-20 right-[8%]", delay: 0.5 },
              { Icon: Database, pos: "bottom-32 left-[10%]", delay: 1 },
              { Icon: Code, pos: "bottom-40 right-[12%]", delay: 1.5 },
              { Icon: Zap, pos: "top-1/3 left-[2%]", delay: 2 },
              { Icon: Sparkles, pos: "top-1/2 right-[5%]", delay: 2.5 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: item.delay,
                }}
                className={`absolute ${item.pos} hidden xl:block`}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                  <item.Icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Server className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-white text-sm font-medium">Enterprise IT Solutions</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Technology Solutions Built for{" "}
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-white via-green-200 to-white bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
              >
                Performance
              </motion.span>
              , Security & Growth
            </h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-lg text-white/90 leading-relaxed">
                <span className="font-semibold">PHEBEH</span> partners with forward-thinking businesses to design, build, and manage digital systems that deliver long-term value.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { Icon: Lock, label: "Secure" },
                { Icon: Zap, label: "Fast" },
                { Icon: Shield, label: "Reliable" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2 backdrop-blur-sm cursor-default"
                >
                  <feature.Icon className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-white text-primary rounded-lg font-semibold text-base transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-white/25 overflow-hidden hover:shadow-white/40"
                >
                  <motion.div
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-green-200 to-transparent"
                  />
                  <Rocket className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Get Free Consultation</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-base hover:border-white/50 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Globe className="w-5 h-5" />
                  View Our Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">Explore More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 group-hover:border-white/50 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}