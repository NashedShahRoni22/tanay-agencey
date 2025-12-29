"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, CheckCircle, Clock } from "lucide-react";

const AnimatedCounter = ({
  from,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(
    rounded,
    (latest) => `${prefix}${latest}${suffix}`
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [count, to, duration, inView]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const StatCard = ({ value, suffix, prefix, label, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center group hover:bg-white/20 hover:border-white/40 transition-all duration-300"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300"
        >
          <Icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
        </motion.div>
        <motion.div
          className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AnimatedCounter
            from={0}
            to={value}
            suffix={suffix}
            prefix={prefix}
          />
        </motion.div>
      </div>
      <div className="text-sm md:text-base text-white/90 font-medium mt-3 group-hover:text-white transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  );
};

export default function StatusCounter() {
  const stats = [
    {
      value: 5,
      suffix: "+",
      label: "Years Experience",
      icon: Award,
    },
    {
      value: 98,
      suffix: "%",
      label: "Customer Satisfaction",
      icon: Users,
    },
    {
      value: 500,
      suffix: "+",
      label: "Completed Projects",
      icon: CheckCircle,
    },
    {
      value: 15,
      suffix: "min",
      label: "Average Response Time",
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#061039] via-[#0a1854] to-[#061039] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circle - Top Right */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        
        {/* Medium Circle - Bottom Left */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary rounded-full blur-3xl"
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnpNMzQgMzZoLTJ2LTJoMnYyem0wLTJoMnYyaC0ydi0yem0wIDBoLTJ2Mmgydi0yem0wIDBoMnYtMmgtMnYyem0wLTJoLTJ2Mmgydi0yem0wIDBoMnYtMmgtMnYyem0yLTJoLTJ2Mmgydi0yem0wIDBoMnYtMmgtMnYyem0wLTJoLTJ2Mmgydi0yem0wIDBoMnYtMmgtMnYyem0wLTJoLTJ2Mmgydi0yem0wIDBoMnYtMmgtMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}