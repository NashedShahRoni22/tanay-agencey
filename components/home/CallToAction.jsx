"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

const CallToAction = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      subtext: "We'll respond within 24 hours"
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
      subtext: "Sat - Sun: Closed"
    }
  ];

  const benefits = [
    "Free initial consultation",
    "Custom project proposals",
    "Competitive pricing",
    "Ongoing support included"
  ];

  return (
    <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVars}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            variants={itemVars}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Let's discuss your project and create something amazing together.
            Get in touch today for a free consultation and see how we can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="text-2xl font-bold mb-8"
            >
              Get In Touch
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVars}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{contact.title}</h4>
                      <p className="text-white/90 font-medium">{contact.details}</p>
                      <p className="text-white/70 text-sm mt-1">{contact.subtext}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Form/Conversion Section */}
          <motion.div
            variants={containerVars}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <motion.h3
              variants={itemVars}
              className="text-2xl font-bold mb-6"
            >
              Start Your Project Today
            </motion.h3>

            <motion.div
              variants={itemVars}
              className="mb-8"
            >
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVars}
              className="space-y-4"
            >
              <button className="w-full bg-white text-primary-dark font-semibold py-4 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="w-full border-2 border-white/30 text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Send Us a Message
              </button>
            </motion.div>

            <motion.p
              variants={itemVars}
              className="text-center text-white/70 text-sm mt-6"
            >
              No commitment required • Free 30-minute consultation
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
