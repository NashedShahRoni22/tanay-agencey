"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Users, ArrowRight } from 'lucide-react';
import teamImage from "@/public/team.jpeg";
import Image from "next/image";

// Dummy team data
const teamMembers = [
  {
    id: 1,
    name: "MD Niamul Islam Tanay",
    role: "Founder & Chief Executive Officer",
    bio: "Leads the overall direction and operations of PHEBEH, with responsibility for defining strategic priorities, guiding business growth, and ensuring the delivery of reliable and high-quality IT and digital solutions.",
    image: teamImage,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 2,
    name: "Md. Tarikul Islam",
    role: "Team Lead",
    bio: "Provides overall technical leadership and project oversight. Responsible for planning and coordinating development activities, ensuring best practices, resolving technical challenges, and delivering projects on time with a strong focus on quality and reliability.",
    image: teamImage,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 3,
    name: "Rashedul Alom",
    role: "Senior Software Engineer",
    bio: "Designs and maintains complex software systems, translating business requirements into scalable and secure solutions. Oversees code quality, mentors engineers, and resolves critical technical issues to ensure system performance and stability.",
    image: teamImage,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 4,
    name: "Azizur Rahman",
    role: "Full Stack Software Engineer",
    bio: "Delivers end-to-end application development across frontend and backend systems. Focuses on performance, security, API integration, and building reliable, user-friendly applications in close collaboration with the team.",
    image: teamImage,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 5,
    name: "Jehan Rahman",
    role: "Senior Database Engineer",
    bio: "Leads database design, optimisation, and performance management. Ensures data security, compliance, and high availability while supporting critical production systems and mentoring database engineers.",
    image: teamImage,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 6,
    name: "Muntasir Rahman",
    role: "Database Engineer",
    bio: "Supports database development and maintenance, including SQL queries, data processing, reporting, and performance tuning, ensuring data consistency and system reliability.",
    image: teamImage,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 7,
    name: "Apple Mahmadud",
    role: "UI & Frontend Designer",
    bio: "Designs intuitive and visually refined user interfaces, transforming concepts into responsive frontend layouts while maintaining consistent design standards and strong user experience.",
    image: teamImage,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 8,
    name: "Mahatab Uddin",
    role: "IT Engineer",
    bio: "Manages and maintains IT infrastructure, including servers, networks, and systems. Ensures operational stability, security, and reliable day-to-day technical support.",
    image: teamImage,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
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
            PHEBEH is led by experienced professionals with strong technical expertise and a shared commitment to delivering reliable, secure, and high-quality digital solutions.
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
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
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
                      // href={member.social.facebook}
                      href="/contact"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                      aria-label="Facebook"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      // href={member.social.twitter}
                      href="/contact"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                      aria-label="Twitter"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      // href={member.social.linkedin}
                      href="/contact"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      // href={member.social.instagram}
                      href="/contact"
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