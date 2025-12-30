"use client";

import { motion } from "framer-motion";
import { Shield, Users, Lightbulb, Target, Award, Zap } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: "Integrity & Trust",
      description:
        "We build lasting relationships through transparency, honesty, and ethical practices in every interaction.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and creative thinking to deliver solutions that stay ahead of the curve.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our success. We prioritize understanding your needs and exceeding your expectations.",
      iconColor: "text-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We set the highest standards for quality, pushing boundaries to deliver exceptional results every time.",
      iconColor: "text-red-600",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Zap,
      title: "Agility",
      description:
        "We adapt quickly to changes, delivering fast solutions without compromising on quality or effectiveness.",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Award,
      title: "Continuous Growth",
      description:
        "We invest in learning, development, and improvement to stay at the forefront of technology innovation.",
      iconColor: "text-pink-600",
      bgColor: "bg-pink-500/10",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#061039] mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The principles that guide our decisions, culture, and commitment to excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${value.bgColor} rounded-xl flex items-center justify-center mb-6`}
              >
                <value.icon className={`w-8 h-8 ${value.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#061039] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
