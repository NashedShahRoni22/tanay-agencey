"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Award, TrendingUp, Globe, Sparkles } from "lucide-react";

export default function CompanyTimeline() {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "PHEBEH was founded with a vision to transform digital experiences. Started with a team of 3 passionate developers.",
      icon: Rocket,
      color: "from-blue-500 to-blue-600",
      stats: "3 Team Members"
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Landed our first enterprise client and expanded our service offerings to include cloud solutions and mobile development.",
      icon: Users,
      color: "from-green-500 to-green-600",
      stats: "50+ Projects"
    },
    {
      year: "2021",
      title: "Award Recognition",
      description: "Received 'Best Digital Agency' award and grew our team to 20+ professionals. Launched our AI-powered solutions.",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      stats: "20+ Team Members"
    },
    {
      year: "2022",
      title: "Rapid Growth",
      description: "Expanded to international markets and achieved 200% revenue growth. Established partnerships with Fortune 500 companies.",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      stats: "200% Growth"
    },
    {
      year: "2023",
      title: "Global Presence",
      description: "Opened offices in 3 countries and served clients across 15+ nations. Launched our innovation lab for R&D.",
      icon: Globe,
      color: "from-pink-500 to-pink-600",
      stats: "15+ Countries"
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description: "Leading the industry with cutting-edge AI and blockchain solutions. Serving 500+ satisfied clients worldwide.",
      icon: Sparkles,
      color: "from-yellow-500 to-yellow-600",
      stats: "500+ Clients"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#061039] via-[#0a1854] to-[#061039] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnpNMzQgMzZoLTJ2LTJoMnYyem0wLTJoMnYyaC0ydi0yem0wIDBoLTJ2Mmgydi0yem0wIDBoMnYtMmgtMnYyem0wLTJoLTJ2Mmgydi0yem0wIDBoMnYtMmgtMnYyem0yLTJoLTJ2Mmgydi0yem0wIDBoMnYtMmgtMnYyem0wLTJoLTJ2Mmgydi0yem0wIDBoMnYtMmgtMnYyem0wLTJoLTJ2Mmgydi0yem0wIDBoMnYtMmgtMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-6 border border-white/20"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.span>
            Our Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Milestones That{" "}
            <span className="text-primary">Shaped Our Story</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 max-w-3xl mx-auto"
          >
            From humble beginnings to industry leadership, every step of our journey 
            has been driven by innovation, dedication, and our commitment to client success.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-purple-500 to-primary" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-20">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`lg:w-5/12 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:text-right' : ''
                  }`}
                >
                  <div className={`flex items-center gap-3 mb-4 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <span className="text-4xl font-bold text-primary">{milestone.year}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">{milestone.description}</p>
                  
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-semibold text-white/90`}>
                    {milestone.stats}
                  </div>
                </motion.div>

                {/* Center Icon */}
                <div className="lg:w-2/12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 0.3, 
                      type: "spring", 
                      stiffness: 200 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: "0 20px 40px rgba(100, 33, 255, 0.4)"
                    }}
                    className={`w-20 h-20 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center shadow-xl relative z-10`}
                  >
                    <milestone.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}