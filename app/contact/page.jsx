"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Globe,
  Twitter,
  Linkedin,
  Instagram,
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
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary py-24 md:py-36 lg:py-48 px-4 overflow-hidden">
      {/* --- Animated Background --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[10%] -right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/10 rounded-full blur-[80px] md:blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-12 gap-0 bg-white/5 backdrop-blur-2xl rounded-3xl md:rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden"
        >
          {/* LEFT COLUMN: Info Section */}
          <div className="lg:col-span-5 p-6 sm:p-10 md:p-14 flex flex-col justify-between lg:border-r border-white/10 bg-white/5 lg:bg-transparent">
            <div>
              <motion.div
                variants={itemVars}
                className="flex items-center gap-3 mb-6"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-white/80 text-xs font-bold tracking-widest uppercase">
                  Our team is online
                </span>
              </motion.div>

              <motion.h1
                variants={itemVars}
                className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Let’s talk about your{" "}
                <span className="text-white/60">idea.</span>
              </motion.h1>

              <motion.p
                variants={itemVars}
                className="text-white/70 text-base md:text-lg mb-10 leading-relaxed"
              >
                Need help with pricing or features? Our team is here to guide
                you.
              </motion.p>

              <motion.div
                variants={itemVars}
                className="space-y-6 md:space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10 shrink-0">
                    <Mail className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-sm md:text-base">
                      Email Us
                    </h4>
                    <p className="text-white/60 text-sm md:text-base truncate">
                      hello@yourcompany.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10 shrink-0">
                    <MapPin className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm md:text-base">
                      Office
                    </h4>
                    <p className="text-white/60 text-sm md:text-base leading-snug">
                      30 South Terrace, Punchbowl-2196, NSW, Australia 🇦🇺
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVars}
              className="pt-8 border-t border-white/10 mt-10 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-white/50 hover:text-white transition-all transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 text-white/50 text-[10px] md:text-xs tracking-wide">
                <Globe className="w-3.5 h-3.5" />
                <span>UTC-8 TIME</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Form - Solid White */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 bg-white">
            <motion.div variants={itemVars} className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Send us a message
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-medium">
                We typically reply within a few hours.
              </p>
            </motion.div>

            <motion.form
              variants={containerVars}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              <motion.div
                variants={itemVars}
                className="space-y-1.5 col-span-1"
              >
                <label className="text-xs font-bold text-gray-700 ml-1 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 text-gray-900 text-base placeholder:text-gray-400 outline-none transition-all"
                />
              </motion.div>

              <motion.div
                variants={itemVars}
                className="space-y-1.5 col-span-1"
              >
                <label className="text-xs font-bold text-gray-700 ml-1 uppercase">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 text-gray-900 text-base placeholder:text-gray-400 outline-none transition-all"
                />
              </motion.div>

              <motion.div
                variants={itemVars}
                className="space-y-1.5 col-span-full"
              >
                <label className="text-xs font-bold text-gray-700 ml-1 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 text-gray-900 text-base placeholder:text-gray-400 outline-none transition-all"
                />
              </motion.div>

              <motion.div
                variants={itemVars}
                className="space-y-1.5 col-span-full"
              >
                <label className="text-xs font-bold text-gray-700 ml-1 uppercase">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your inquiry..."
                  className="w-full bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 text-gray-900 text-base placeholder:text-gray-400 outline-none transition-all resize-none"
                />
              </motion.div>

              <motion.div variants={itemVars} className="col-span-full pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto shadow-xl shadow-primary/20 flex justify-center items-center"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>
                <p className="text-gray-400 text-[10px] md:text-[11px] mt-6 text-center md:text-left">
                  By clicking submit, you agree to our{" "}
                  <span className="underline">Privacy Policy</span>.
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
