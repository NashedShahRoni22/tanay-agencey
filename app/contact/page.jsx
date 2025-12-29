"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Send, 
  Globe, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";

const ContactPage = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary py-24 lg:py-48 px-4 overflow-hidden">
      
      {/* --- Professional Animated Background --- */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-12 gap-0 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden"
        >
          
          {/* LEFT COLUMN: Contact Narrative */}
          <div className="lg:col-span-5 p-8 md:p-14 flex flex-col justify-between border-r border-white/10">
            <div>
              <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-white/80 text-sm font-medium tracking-widest uppercase">Our team is online</span>
              </motion.div>
              
              <motion.h1 variants={itemVars} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let’s talk about your <span className="text-white/60">next big idea.</span>
              </motion.h1>
              
              <motion.p variants={itemVars} className="text-white/70 text-lg mb-12 leading-relaxed">
                Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer.
              </motion.p>

              <motion.div variants={itemVars} className="space-y-8">
                <div className="group flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email Us</h4>
                    <p className="text-white/60">hello@yourcompany.com</p>
                  </div>
                </div>

                <div className="group flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Global Headquarters</h4>
                    <p className="text-white/60">123 Innovation Drive, Silicon Valley, CA</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVars} className="pt-12 border-t border-white/10 mt-12 flex items-center justify-between">
              <div className="flex gap-5">
                {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 text-white/50 text-xs tracking-wide">
                <Globe className="w-4 h-4" />
                <span>UTC-8 PACIFIC TIME</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Professional Form - NOW SOLID WHITE */}
          <div className="lg:col-span-7 p-8 md:p-14 bg-white">
            <motion.div variants={itemVars} className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-500 font-medium">We'll get back to you as soon as possible.</p>
            </motion.div>

            <motion.form variants={containerVars} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVars} className="space-y-2 col-span-1">
                <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-tight">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 outline-none transition-all font-medium"
                />
              </motion.div>

              <motion.div variants={itemVars} className="space-y-2 col-span-1">
                <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-tight">Work Email</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 outline-none transition-all font-medium"
                />
              </motion.div>

              <motion.div variants={itemVars} className="space-y-2 col-span-2">
                <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-tight">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 outline-none transition-all font-medium"
                />
              </motion.div>

              <motion.div variants={itemVars} className="space-y-2 col-span-2">
                <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-tight">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 outline-none transition-all resize-none font-medium"
                />
              </motion.div>

              <motion.div variants={itemVars} className="col-span-2 pt-4">
                <button 
                  type="submit" 
                  className="btn-primary w-full md:w-auto shadow-2xl shadow-primary/30"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>
                <p className="text-gray-400 text-[11px] mt-6 text-center md:text-left leading-relaxed">
                  By clicking submit, you agree to our <span className="underline cursor-pointer">Privacy Policy</span> and <span className="underline cursor-pointer">Terms of Service</span>.
                </p>
              </motion.div>
            </motion.form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;