"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";

const PricingCards = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

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

  const cardVars = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      description: "Perfect for small businesses and startups",
      monthlyPrice: 499,
      yearlyPrice: 4990,
      popular: false,
      features: [
        "5 page website",
        "Responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media links",
        "1 month support",
        "2 revision rounds"
      ],
      cta: "Get Started",
      color: "gray"
    },
    {
      name: "Professional",
      icon: Zap,
      description: "Ideal for growing businesses",
      monthlyPrice: 999,
      yearlyPrice: 9990,
      popular: true,
      features: [
        "10 page website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "CMS integration",
        "Analytics setup",
        "Email marketing integration",
        "3 months support",
        "5 revision rounds",
        "Performance optimization"
      ],
      cta: "Get Started",
      color: "primary"
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "For large-scale projects",
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      popular: false,
      features: [
        "Unlimited pages",
        "Premium custom design",
        "E-commerce functionality",
        "API integrations",
        "Advanced animations",
        "Multi-language support",
        "6 months support",
        "Unlimited revisions",
        "Dedicated project manager",
        "Priority support 24/7"
      ],
      cta: "Contact Sales",
      color: "gray"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-white text-primary shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 relative ${
                billingCycle === "yearly"
                  ? "bg-white text-primary shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVars}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 scale-105 md:scale-110"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  plan.popular ? "bg-primary/10" : "bg-gray-100"
                }`}>
                  <plan.icon className={`w-6 h-6 ${
                    plan.popular ? "text-primary" : "text-gray-600"
                  }`} />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  {billingCycle === "yearly" && (
                    <p className="text-sm text-gray-500 mt-2">
                      Billed ${plan.yearlyPrice} annually
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group mb-8 ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-900 mb-4">
                    What's included:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-primary" : "text-gray-400"
                      }`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            All plans include free SSL certificate, hosting for the first year, and basic training.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;