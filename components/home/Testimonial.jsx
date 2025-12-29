"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      review: "Tanay Agency transformed our digital presence completely. Their expertise in modern web technologies and attention to detail exceeded our expectations. The team's communication was excellent throughout the project.",
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "InnovateLab",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      review: "Working with Tanay Agency was a game-changer for our startup. They delivered a robust mobile application that our users love. Their agile approach and technical expertise helped us launch ahead of schedule.",
      project: "Mobile App Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthCorp",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      review: "The cloud infrastructure solution provided by Tanay Agency has significantly improved our operational efficiency. Their 24/7 support and proactive monitoring give us complete peace of mind.",
      project: "Cloud Migration"
    },
    {
      id: 4,
      name: "David Park",
      position: "Founder",
      company: "DataFlow Systems",
      avatar: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      review: "Tanay Agency's cybersecurity expertise helped us strengthen our defenses against modern threats. Their comprehensive security audit and implementation were exactly what we needed to protect our business.",
      project: "Security Audit & Implementation"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Operations Manager",
      company: "StreamLine Solutions",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      review: "The database optimization service from Tanay Agency improved our application performance by 300%. Their technical knowledge and systematic approach to problem-solving is outstanding.",
      project: "Database Optimization"
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Product Manager",
      company: "NextGen Apps",
      avatar: "https://i.pravatar.cc/150?img=6",
      rating: 5,
      review: "Tanay Agency delivered a cutting-edge web application that perfectly met our complex requirements. Their innovative solutions and commitment to quality are truly impressive.",
      project: "Web Application Development"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Subtle wave pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-primary"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-primary/10 rounded-2xl mb-6"
          >
            <Quote className="w-8 h-8 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#061039] mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say
            about working with Tanay Agency and the results we've delivered.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative px-4 sm:px-8 lg:px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.5}
            navigation={{
              nextEl: '.testimonial-button-next',
              prevEl: '.testimonial-button-prev',
            }}
            pagination={{
              el: '.testimonial-pagination',
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.8,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full"
                >
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <Quote className="w-8 h-8 text-primary/30" />
                  </motion.div>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.review}"
                  </p>

                  {/* Project Tag */}
                  <div className="mb-6">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20"
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-[#061039]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="testimonial-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200 hover:border-primary cursor-pointer">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="testimonial-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200 hover:border-primary cursor-pointer">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Custom Pagination */}
          <div className="testimonial-pagination flex justify-center mt-8 space-x-2"></div>
        </div>
      </div>
    </section>
  );
}