"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Users, Award, Sparkles, Star, Zap, Heart } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What services does Tanay Agency offer?",
    answer: "Tanay Agency specializes in comprehensive IT solutions including web development, mobile app development, cloud services, digital marketing, and IT consulting. We provide end-to-end solutions tailored to your business needs."
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
  },
  {
    id: 3,
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, and technical support to ensure your digital solutions remain secure and up-to-date."
  },
  {
    id: 4,
    question: "What is your development process?",
    answer: "Our development process follows agile methodologies with clear phases: Discovery & Planning, Design, Development, Testing, Deployment, and Maintenance. We maintain transparent communication throughout each phase with regular updates and milestones."
  },
  {
    id: 5,
    question: "Can you work with existing systems and technologies?",
    answer: "Absolutely! We have experience integrating with various existing systems, databases, and third-party services. Whether you need to modernize legacy systems or integrate new features with your current infrastructure, we can help."
  },
  {
    id: 6,
    question: "What makes Tanay Agency different from other IT companies?",
    answer: "We combine technical expertise with deep industry knowledge, personalized service, and a commitment to delivering measurable results. Our team stays current with the latest technologies while maintaining a focus on your business objectives."
  }
];

const Faqs = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const floatingElements = [
    { icon: HelpCircle, delay: 0, color: "from-primary to-primary-dark" },
    { icon: MessageSquare, delay: 0.5, color: "from-blue-500 to-blue-600" },
    { icon: Users, delay: 1, color: "from-green-500 to-green-600" },
    { icon: Award, delay: 1.5, color: "from-purple-500 to-purple-600" },
    { icon: Sparkles, delay: 2, color: "from-orange-500 to-orange-600" },
    { icon: Star, delay: 2.5, color: "from-yellow-500 to-yellow-600" }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Animated Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#061039] mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Find answers to common questions about our services, process, and how we can help your business grow.
              </p>
            </motion.div>

            {/* Floating Animated Elements */}
            <div className="relative h-80 flex items-center justify-center">
              {floatingElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: element.delay,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`absolute w-16 h-16 bg-gradient-to-br ${element.color} rounded-2xl flex items-center justify-center shadow-lg cursor-pointer`}
                  style={{
                    top: `${15 + (index * 12)}%`,
                    left: `${8 + (index * 15)}%`,
                  }}
                >
                  <element.icon className="w-8 h-8 text-white" />
                </motion.div>
              ))}

              {/* Central Animated Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-2xl"
                >
                  <HelpCircle className="w-12 h-12 text-white" />
                </motion.div>

                {/* Pulsing rings */}
                {[0, 1, 2].map((ring) => (
                  <motion.div
                    key={ring}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: ring * 0.5,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 border-2 border-primary rounded-full"
                  />
                ))}
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-primary mb-1"
                >
                  500+
                </motion.div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-primary mb-1"
                >
                  98%
                </motion.div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-primary mb-1"
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-[#061039] pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openId === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
