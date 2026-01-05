"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import blackLogo from "@/public/phebeh-black.png";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Dribbble,
  Youtube,
} from "lucide-react";
import Image from "next/image";

// --- DATA ARRAYS ---
const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

// --- ANIMATION VARIANTS ---
const mobileContainerVars = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const mobileLinkVars = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  exit: { y: 20, opacity: 0 },
};

const desktopMenuVars = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const topBarVars = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const logoVars = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll when Menu is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to check active state
  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* --- TOP BAR (Desktop Only) --- */}
      <motion.div
        variants={topBarVars}
        initial="initial"
        animate="animate"
        className="bg-primary text-white hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 text-sm font-medium">
            <div className="flex items-center gap-6">
              <motion.a
                href="tel:+61415340554"
                className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} />
                <span>+61415340554</span>
              </motion.a>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Sydney, Australia</span>
              </div>
              <motion.a
                href="mailto:phebeh@gmail.com"
                className="hidden lg:flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                <span>phebeh@gmail.com</span>
              </motion.a>
            </div>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    className="hover:text-white/70 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- MAIN NAVIGATION --- */}
      <nav
        className={`bg-white transition-all duration-300 border-b border-gray-100 ${
          isScrolled ? "shadow-lg py-3" : "shadow-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group z-50 relative cursor-pointer"
            >
              <motion.div
                variants={logoVars}
                initial="initial"
                animate="animate"
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={blackLogo}
                  alt="phebeh Logo"
                  width={140}
                  height={40}
                />
              </motion.div>
            </Link>

            {/* DESKTOP MENU (Animated on Load) */}
            <motion.div
              className="hidden lg:flex items-center gap-8"
              initial="initial"
              animate="animate"
              variants={desktopMenuVars}
            >
              {MENU_ITEMS.map((item, index) => (
                <motion.div key={index} variants={desktopMenuVars}>
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors relative cursor-pointer group ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-[#061039] hover:text-primary"
                    }`}
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="inline-block"
                    >
                      {item.label}
                    </motion.span>
                    {/* Optional: Small underline dot for active state */}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute -bottom-2 left-1/2 w-1 h-1 bg-primary rounded-full transform -translate-x-1/2"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <motion.a
                href="tel:+61415340554"
                className="hidden xl:inline-flex px-6 py-2.5 bg-primary hover:bg-[#501ACD] text-white rounded-full font-medium text-sm transition-colors shadow-lg shadow-purple-500/30 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call: +61415340554
              </motion.a>

              {/* Hamburger Button */}
              <motion.button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-[#061039] hover:text-primary transition-colors z-50 relative cursor-pointer outline-none"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Simple animation for icon swap */}
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={28} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={28} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- FULL SCREEN MOBILE MENU (With Animation) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileContainerVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-white z-40 flex flex-col lg:hidden"
          >
            {/* Scrollable Container */}
            <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
              {/* Mobile Links */}
              <div className="flex-1 flex flex-col justify-center items-center space-y-6">
                {MENU_ITEMS.map((item, index) => (
                  <motion.div key={index} variants={mobileLinkVars}>
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className={`text-2xl font-bold transition-colors cursor-pointer ${
                        isActive(item.href)
                          ? "text-primary"
                          : "text-[#061039] hover:text-primary"
                      }`}
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section: Contact & Socials */}
              <motion.div
                variants={mobileLinkVars}
                className="mt-auto pt-8 border-t border-gray-100 text-center"
              >
                <div className="flex flex-col items-center gap-3 text-gray-500 text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>1234 Elm Street, San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <a
                      href="mailto:phebeh@gmail.com"
                      className="cursor-pointer"
                    >
                      phebeh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-6">
                  {SOCIAL_LINKS.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={idx}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-gray-100 text-[#061039] flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
