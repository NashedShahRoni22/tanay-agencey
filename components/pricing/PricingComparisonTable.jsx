"use client";

import { motion } from "framer-motion";
import { Check, X, Info } from "lucide-react";

const PricingComparisonTable = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const rowVars = {
    initial: { x: -20, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      category: "Design & Development",
      items: [
        {
          name: "Number of Pages",
          starter: "5",
          professional: "10",
          enterprise: "Unlimited",
        },
        {
          name: "Responsive Design",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Custom Design",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Custom Animations",
          starter: false,
          professional: "Basic",
          enterprise: "Advanced",
        },
        {
          name: "Design Revisions",
          starter: "2",
          professional: "5",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      category: "Features",
      items: [
        {
          name: "Contact Form",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "CMS Integration",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "E-commerce",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Multi-language Support",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "API Integrations",
          starter: false,
          professional: "Basic",
          enterprise: "Advanced",
        },
        {
          name: "Analytics Setup",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Enterprise",
        },
      ],
    },
    {
      category: "SEO & Marketing",
      items: [
        {
          name: "SEO Optimization",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Premium",
        },
        {
          name: "Social Media Integration",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Email Marketing",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Performance Optimization",
          starter: false,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Support & Maintenance",
      items: [
        {
          name: "Support Duration",
          starter: "1 month",
          professional: "3 months",
          enterprise: "6 months",
        },
        {
          name: "Training Sessions",
          starter: "1 hour",
          professional: "3 hours",
          enterprise: "Unlimited",
        },
        {
          name: "Priority Support",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Dedicated Manager",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
  ];

  const renderCell = (value) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-primary mx-auto" />;
    }
    if (value === false) {
      return <X className="w-5 h-5 text-gray-300 mx-auto" />;
    }
    return <span className="text-gray-700 text-sm font-medium">{value}</span>;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detailed Feature Comparison
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare all features across our plans to find the perfect fit for
            your needs
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-6 px-6 text-gray-900 font-semibold">
                  Features
                </th>
                <th className="text-center py-6 px-6">
                  <div className="text-lg font-bold text-gray-900">Starter</div>
                  <div className="text-sm text-gray-600 mt-1">$499/mo</div>
                </th>
                <th className="text-center py-6 px-6 bg-primary/5">
                  <div className="text-lg font-bold text-primary">
                    Professional
                  </div>
                  <div className="text-sm text-primary/70 mt-1">$999/mo</div>
                  <div className="inline-block mt-2 text-xs bg-primary text-white px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                </th>
                <th className="text-center py-6 px-6">
                  <div className="text-lg font-bold text-gray-900">
                    Enterprise
                  </div>
                  <div className="text-sm text-gray-600 mt-1">$1999/mo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, catIndex) => (
                <>
                  {/* Category header row */}
                  <tr key={`cat-${catIndex}`} className="bg-gray-50">
                    <td colSpan={4} className="py-4 px-6">
                      <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">
                        {category.category}
                      </h3>
                    </td>
                  </tr>

                  {/* Feature rows */}
                  {category.items.map((item, itemIndex) => (
                    <motion.tr
                      key={`item-${catIndex}-${itemIndex}`}
                      variants={rowVars}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-6 text-gray-700 text-sm">
                        {item.name}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderCell(item.starter)}
                      </td>
                      <td className="py-4 px-6 text-center bg-primary/5">
                        {renderCell(item.professional)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderCell(item.enterprise)}
                      </td>
                    </motion.tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {["Starter", "Professional", "Enterprise"].map(
            (planName, planIndex) => (
              <motion.div
                key={planIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: planIndex * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
                  planName === "Professional"
                    ? "border-primary"
                    : "border-gray-200"
                }`}
              >
                <div
                  className={`py-4 px-6 ${
                    planName === "Professional"
                      ? "bg-primary text-white"
                      : "bg-gray-50"
                  }`}
                >
                  <h3 className="font-bold text-lg">{planName}</h3>
                  <p
                    className={`text-sm ${
                      planName === "Professional"
                        ? "text-white/80"
                        : "text-gray-600"
                    }`}
                  >
                    {planName === "Starter" && "$499/month"}
                    {planName === "Professional" && "$999/month - Most Popular"}
                    {planName === "Enterprise" && "$1999/month"}
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  {features.map((category) => (
                    <div key={category.category}>
                      <h4 className="font-semibold text-gray-900 text-sm mb-3">
                        {category.category}
                      </h4>
                      <div className="space-y-2">
                        {category.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-gray-600">{item.name}</span>
                            <span className="font-medium">
                              {renderCell(
                                planName === "Starter"
                                  ? item.starter
                                  : planName === "Professional"
                                  ? item.professional
                                  : item.enterprise
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingComparisonTable;
