"use client";

import { motion } from "framer-motion";
import { MessageCircle, Eye, Zap, Heart, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: MessageCircle,
      title: "Realtime Conversation",
      description:
        "Seamless real-time communication designed to keep your customers engaged instantly.",
    },
    {
      icon: Eye,
      title: "Personalized Chat Visual",
      description:
        "Custom-tailored chat experiences that align perfectly with your brand identity.",
    },
    {
      icon: Zap,
      title: "Higher Response Rate",
      description:
        "Optimized workflows that significantly improve engagement and response times.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#061039] via-[#0a1854] to-[#061039] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.12 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose <span className="text-primary">Us</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/80 mb-6">
                Why People Love Our Services
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                We combine performance, design, and usability to deliver
                solutions that feel premium, fast, and reliable—every single
                time.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-primary/40 transition-all"
            >
              <Heart className="w-5 h-5" />
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg group hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <feature.icon className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
                  </motion.div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
