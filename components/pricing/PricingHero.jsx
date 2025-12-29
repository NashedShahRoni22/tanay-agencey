"use client";

import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const PricingHero = () => {
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
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary via-primary-dark to-primary text-white overflow-hidden flex items-center py-20">
      {/* --- Animated Background Elements --- */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-white rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-white rounded-full blur-[130px]"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={itemVars} className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold border border-white/20 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Transparent Pricing
              </span>
            </motion.div>

            <motion.h1
              variants={itemVars}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Plans that scale
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mt-2">
                with your vision.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVars}
              className="text-xl text-white/90 leading-relaxed max-w-xl"
            >
              No hidden fees. No surprises. Choose a plan that fits your current needs and upgrade as your business grows.
            </motion.p>

            {/* Feature List */}
            <motion.div variants={itemVars} className="space-y-4">
              {[
                "No credit card required",
                "14-day free trial on all plans",
                "Cancel or switch anytime"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <div className="p-1 bg-white/20 rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-lg">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Elements (Animated Glass Cards) */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="relative h-[500px] hidden lg:block"
          >
            {/* Center Piece Card */}
            <motion.div
              variants={floatingVars}
              animate="animate"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 flex flex-col justify-between"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="h-4 w-24 bg-white/20 rounded-full mb-3" />
                <div className="h-8 w-40 bg-white/40 rounded-full" />
              </div>
            </motion.div>

            {/* Floating Accessory 1 */}
            <motion.div
              animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-10 right-4 w-40 h-24 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-4"
            >
              <ShieldCheck className="w-6 h-6 text-white/80 mb-2" />
              <div className="h-2 w-full bg-white/20 rounded-full" />
            </motion.div>

            {/* Floating Accessory 2 */}
            <motion.div
              animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-4 w-48 h-28 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 p-5"
            >
              <div className="flex gap-2 mb-3">
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/30" />)}
              </div>
              <div className="h-3 w-2/3 bg-white/20 rounded-full" />
            </motion.div>

            {/* Decorative Spinning Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-white/10 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;