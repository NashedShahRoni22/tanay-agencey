"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Zap, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

const CustomPlanInquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    budget: "$5,000 - $10,000",
    details: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const features = [
    {
      icon: Rocket,
      title: "Tailored Solutions",
      description: "Custom features built specifically for your business needs"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your own project manager and development team"
    },
    {
      icon: Zap,
      title: "Flexible Pricing",
      description: "Pay only for what you need, when you need it"
    },
    {
      icon: Shield,
      title: "Priority Support",
      description: "24/7 premium support with guaranteed response times"
    }
  ];

  const benefits = [
    "Unlimited revisions during development",
    "Custom integrations with your existing tools",
    "Scalable architecture for future growth",
    "White-label options available",
    "Dedicated account manager",
    "SLA guarantees"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-semibold">Enterprise & Custom Solutions</span>
            </motion.div>

            <motion.h2
              variants={itemVars}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Need Something More Specific?
            </motion.h2>
            <motion.p
              variants={itemVars}
              className="text-xl text-white/90 leading-relaxed"
            >
              Let's build a custom plan that perfectly fits your unique requirements and budget. 
              No two businesses are the same, and neither should their solutions be.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Features */}
            <motion.div variants={itemVars} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVars}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="p-3 bg-white/20 rounded-lg inline-flex mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVars} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="font-bold text-xl mb-6">What's Included:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={itemVars}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your Custom Quote
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a personalized proposal.
              </p>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Estimated Budget
                  </label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                  >
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 resize-none"
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
                >
                  Request Custom Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p className="text-center text-gray-500 text-xs">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVars}
            className="mt-16 text-center"
          >
            <p className="text-white/90 mb-4">
              Prefer to talk directly? Schedule a call with our team
            </p>
            <button className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2">
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomPlanInquiry;