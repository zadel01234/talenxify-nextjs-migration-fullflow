"use client";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ayodele Temitope",
      role: "Lead designer",
      image: "/testimonials/1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cursus nibh mauris, nec sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue ut cursus pellentesque enim.",
    },
    {
      id: 2,
      name: "Paul Michael",
      role: "Web Developer",
      image: "/testimonials/2.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue ut cursus pellentesque enim.",
    },
    {
      id: 3,
      name: "Brad Smith",
      role: "Co-founder, Interswitch",
      image: "/testimonials/3.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cursus nibh mauris, nec sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue ut cursus pellentesque enim.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Product Manager",
      image: "/testimonials/3.png",

      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cursus nibh mauris, nec sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue ut cursus pellentesque enim.",
    },
    {
      id: 5,
      name: "David Chen",
      role: "Senior Engineer",
      image: "/testimonials/3.png",

      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cursus nibh mauris, nec sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue ut cursus pellentesque enim.",
    },
  ];

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getPreviousIndex = () => {
    return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div className="w-full bg-gradient-to-br from-primary via-primary to-blue-600 py-16 md:py-20 lg:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Arrows */}
        <motion.button
          onClick={handlePrevious}
          className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next testimonial"
        >
          <FiChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </motion.button>

        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by Growing Communities
          </motion.h2>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                animate={{
                  width: index === currentIndex ? ["10px", "40px"] : "12px",
                  height: index === currentIndex ? "12px" : "12px",
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials Container */}
        <div className="relative h-[400px] md:h-[450px] lg:h-[500px] perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Left Card - Hidden on mobile */}
            <motion.div
              key={`left-${getPreviousIndex()}`}
              className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-0"
              initial={{ opacity: 0, x: -100, rotateY: -25, scale: 0.8 }}
              animate={{ opacity: 0.6, x: 0, rotateY: -15, scale: 0.85 }}
              exit={{ opacity: 0, x: -100, rotateY: -25, scale: 0.8 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <TestimonialCard
                testimonial={testimonials[getPreviousIndex()]}
                position="side"
              />
            </motion.div>

            {/* Center Card - Main */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (direction) => ({
                    x: direction > 0 ? 300 : -300,
                    opacity: 0,
                    scale: 0.8,
                    rotateY: direction > 0 ? 45 : -45,
                    z: -100,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    z: 0,
                  },
                  exit: (direction) => ({
                    x: direction < 0 ? 300 : -300,
                    opacity: 0,
                    scale: 0.8,
                    rotateY: direction < 0 ? 45 : -45,
                    z: -100,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
                }}
                className="relative z-10"
                style={{ transformStyle: "preserve-3d" }}
              >
                <TestimonialCard
                  testimonial={testimonials[currentIndex]}
                  position="center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Right Card - Hidden on mobile */}
            <motion.div
              key={`right-${getNextIndex()}`}
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-0"
              initial={{ opacity: 0, x: 100, rotateY: 25, scale: 0.8 }}
              animate={{ opacity: 0.6, x: 0, rotateY: 15, scale: 0.85 }}
              exit={{ opacity: 0, x: 100, rotateY: 25, scale: 0.8 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <TestimonialCard
                testimonial={testimonials[getNextIndex()]}
                position="side"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Testimonial Card Component
const TestimonialCard = ({ testimonial, position }) => {
  const isCenter = position === "center";

  return (
    <motion.div
      className={`relative bg-white rounded-[40px] md:rounded-[50px] shadow-2xl ${
        isCenter
          ? "w-[320px] md:w-[450px] lg:w-[520px] h-[360px] md:h-[420px]"
          : "w-[280px] md:w-[380px] h-[320px] md:h-[380px]"
      }`}
      whileHover={
        isCenter
          ? {
              y: -10,
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 60px rgba(99, 102, 241, 0.3)",
              transition: { duration: 0.3 },
            }
          : {}
      }
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Enhanced Dark shadow blob at bottom */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-gray-900/80 rounded-[40px] blur-xl -z-10"
        animate={{
          scale: isCenter ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center p-6 md:p-8 lg:p-10">
        {/* Profile Image */}
        <motion.div
          className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="relative">
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 md:border-[6px] border-white shadow-xl bg-gray-200"
              whileHover={{ borderColor: "#6366f1" }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Glowing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Name and Role */}
        <motion.div
          className="text-center mt-10 md:mt-12 lg:mt-14 mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h3
            className="text-gray-900 text-lg md:text-xl lg:text-2xl font-bold mb-1"
            whileHover={{ scale: 1.05, color: "#6366f1" }}
          >
            {testimonial.name}
          </motion.h3>
          <motion.p
            className="text-gray-600 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {testimonial.role}
          </motion.p>
        </motion.div>

        {/* Quote Icon */}
        <motion.div
          className="mb-3 md:mb-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 200,
          }}
        >
          <motion.svg
            className="w-6 h-6 md:w-8 md:h-8 text-gray-400"
            fill="currentColor"
            viewBox="0 0 32 32"
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757l-2.121-2.122c-.545.544-1.293.879-2.122.879-1.657 0-3-1.343-3-3s1.343-3 3-3c.829 0 1.577.335 2.122.879l2.121-2.122c-1.086-1.085-2.586-1.757-4.243-1.757zM24 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757l-2.121-2.122c-.545.544-1.293.879-2.122.879-1.657 0-3-1.343-3-3s1.343-3 3-3c.829 0 1.577.335 2.122.879l2.121-2.122c-1.086-1.085-2.586-1.757-4.243-1.757z" />
          </motion.svg>
        </motion.div>

        {/* Testimonial Text */}
        <motion.div
          className="flex-1 overflow-y-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p
            className={`text-gray-700 text-center leading-relaxed ${
              isCenter
                ? "text-sm md:text-base lg:text-lg"
                : "text-xs md:text-sm"
            }`}
          >
            {testimonial.text}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
