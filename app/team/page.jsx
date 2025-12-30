"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Users, ArrowRight } from 'lucide-react';

// Dummy team data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "With over 15 years in software architecture, Sarah leads our technical vision and innovation strategy.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    bio: "Full-stack expert specializing in scalable cloud solutions and modern web technologies.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    bio: "Creative designer passionate about crafting beautiful and intuitive user experiences.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Cybersecurity Specialist",
    bio: "Expert in protecting digital assets with advanced security protocols and threat detection.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Project Manager",
    bio: "Agile methodology expert ensuring seamless project delivery and client satisfaction.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Database Administrator",
    bio: "Specializes in database optimization, management, and ensuring data integrity across systems.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Meet Our Team</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            The Minds Behind <br />Our Success
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
          >
            Our diverse team of experts brings together years of experience, creativity, and 
            dedication to deliver exceptional IT solutions for your business.
          </motion.p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert <span className="text-primary">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet the talented individuals who drive innovation and excellence in everything we do.
            </p>
          </motion.div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={member.social.facebook}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                      aria-label="Facebook"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                      aria-label="Twitter"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                      aria-label="Instagram"
                    >
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}