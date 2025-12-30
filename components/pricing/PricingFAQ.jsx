"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, HelpCircle, Link } from "lucide-react";

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, the credit will be applied to your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. Enterprise clients can also arrange for invoice billing.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No, there are no setup fees for any of our plans. The price you see is the price you pay. We believe in transparent pricing with no hidden costs.",
    },
    {
      question: "What happens after my support period ends?",
      answer:
        "After your included support period, you can purchase extended support packages or opt for our maintenance plans starting at $99/month. This includes updates, security patches, and technical support.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 14-day money-back guarantee for all plans. If you're not satisfied within the first 14 days, we'll provide a full refund, no questions asked.",
    },
    {
      question: "Can I get a custom plan?",
      answer:
        "Absolutely! If none of our standard plans fit your needs, we can create a custom package tailored to your specific requirements. Contact our sales team to discuss your project.",
    },
    {
      question: "What's included in the free trial?",
      answer:
        "Our 14-day free trial gives you full access to the Professional plan features. No credit card required to start. You can explore all features and decide if it's right for you.",
    },
    {
      question: "Do you provide hosting and domain?",
      answer:
        "Yes! All plans include free hosting for the first year and assistance with domain setup. After the first year, hosting is available at competitive rates or you can use your own hosting provider.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Timeline varies by plan: Starter (2-3 weeks), Professional (4-6 weeks), Enterprise (8-12 weeks). These are estimates and actual timelines depend on project complexity and your feedback response time.",
    },
    {
      question: "What if I need additional pages or features?",
      answer:
        "You can always add extra pages or features to your plan. Additional pages start at $99 each, and custom features are quoted based on complexity. Contact us for a detailed quote.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
          >
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            Everything you need to know about our pricing and plans
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 ${
                      openIndex === index ? "text-primary" : "text-gray-400"
                    }`}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
