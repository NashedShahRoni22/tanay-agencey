"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target, TrendingUp } from "lucide-react";

const ServiceHero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars = {
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

  const features = [
    { icon: Zap, text: "Lightning Fast Delivery" },
    { icon: Target, text: "Precision & Quality" },
    { icon: TrendingUp, text: "Proven Results" },
    { icon: Sparkles, text: "Innovative Solutions" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary text-white overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={itemVars} className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                ✨ Premium Services
              </span>
            </motion.div>

            <motion.h1
              variants={itemVars}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Transform Your
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mt-2">
                Digital Presence
              </span>
            </motion.h1>

            <motion.p
              variants={itemVars}
              className="text-xl text-white/90 leading-relaxed max-w-xl"
            >
              We deliver cutting-edge solutions that drive growth, enhance user experience, and elevate your brand to new heights. Let's build something extraordinary together.
            </motion.p>

            <motion.div variants={itemVars} className="flex flex-wrap gap-4">
              <button className="bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group shadow-xl">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                View Our Work
              </button>
            </motion.div>

            <motion.div
              variants={itemVars}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Elements */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Main Card */}
            <motion.div
              variants={floatingVars}
              animate="animate"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8"
            >
              <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-white/80" />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-2xl shadow-xl backdrop-blur-sm border border-white/30"
            />

            <motion.div
              animate={{
                y: [0, 25, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 left-10 w-24 h-24 bg-white/20 rounded-xl shadow-xl backdrop-blur-sm border border-white/30"
            />

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute top-1/3 left-5 w-20 h-20 bg-white/20 rounded-full shadow-xl backdrop-blur-sm border border-white/30"
            />

            {/* Decorative Rings */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 border-white/10 rounded-full"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border-2 border-white/5 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;