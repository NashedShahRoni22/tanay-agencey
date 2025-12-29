"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const CallToAction = () => {
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
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@tanayagency.com",
      subtext: "24-hour response time"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, Suite 100",
      subtext: "San Francisco, CA 94105"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM",
      subtext: "Weekends by appointment"
    }
  ];

  const benefits = [
    "Free 30-minute consultation",
    "Custom tailored proposals",
    "Transparent pricing structure",
    "Dedicated project support"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,33,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,33,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Let's Work Together</span>
          </motion.div>
          
          <motion.h2
            variants={itemVars}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            variants={itemVars}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Schedule a free consultation to discuss your project. We'll help you create something extraordinary that drives real results.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVars}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVars}
              className="text-2xl font-bold text-gray-900 mb-8"
            >
              Get In Touch
            </motion.h3>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVars}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <contact.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                      <p className="text-gray-700 font-medium text-sm">{contact.details}</p>
                      <p className="text-gray-500 text-xs mt-1">{contact.subtext}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            variants={containerVars}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 sticky top-8"
          >
            <motion.h3
              variants={itemVars}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Start Your Project Today
            </motion.h3>

            <motion.div
              variants={itemVars}
              className="mb-8 space-y-4"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVars}
              className="space-y-3"
            >
              <button className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="w-full border-2 border-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-lg hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Send Us a Message
              </button>
            </motion.div>

            <motion.div
              variants={itemVars}
              className="mt-8 pt-6 border-t border-gray-100"
            >
              <div className="flex items-center justify-center gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-gray-500 mt-1">Projects</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-gray-500 mt-1">Satisfaction</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div>
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-gray-500 mt-1">Years</div>
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={itemVars}
              className="text-center text-gray-500 text-xs mt-6"
            >
              🔒 No commitment required • Your information is secure
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;