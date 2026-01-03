"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Cog, TrendingUp, ArrowRight } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      description: "Understanding business priorities, risks, and technical requirements.",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description: "We design the most suitable technical solution for your needs.",
      icon: FileText,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build, test, and refine the solution with regular updates.",
      icon: Cog,
      color: "from-green-500 to-green-600"
    },
    {
      step: "04",
      title: "Lunch & Support",
      description: "We deploy the project and provide ongoing support if needed.",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-16 left-16 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-primary-dark rounded-full"></div>
        <div className="absolute bottom-24 left-1/4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 right-1/3 w-2 h-2 bg-primary-dark rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary/50 rounded-full"></div>
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
            <Cog className="w-8 h-8 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#061039] mb-6">
            Our <span className="text-primary">Work Process</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We follow a systematic approach to deliver exceptional results. From initial consultation
            to continuous improvement, we ensure every step is executed with precision and care.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Layout - Horizontal */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8 relative">
              {/* Connection Lines */}
              <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 text-center group">
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      className="relative mb-6"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#061039] mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Connector (not for last item) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      className="absolute top-24 -right-4 z-10"
                    >
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Vertical */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    {/* Step Number & Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      className="flex-shrink-0"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center -mt-3 ml-6">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#061039] mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow (not for last item) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="flex justify-center my-6"
                  >
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-4 h-4 text-white rotate-90" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
