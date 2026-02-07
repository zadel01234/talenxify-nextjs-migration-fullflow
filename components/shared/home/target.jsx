"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  cardVariants,
} from "@/styles/variants";
import Image from "next/image";

// Enhanced animation variants
const enhancedContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const enhancedCardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 18,
      duration: 0.6,
    },
  },
};

const Target = () => {
  return (
    <div className="relative bg-primary pt-4 overflow-hidden">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto gap-3 sm:gap-4 md:gap-6">
        {/* Badge with animation */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="flex justify-center p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[#596CFF] px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wide shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Target Audience
          </motion.div>
        </motion.div>

        {/* White section with cards */}
        <div className="bg-white min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh] w-screen relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex items-center justify-center pb-[280px] sm:pb-[300px] md:pb-[180px] lg:pb-[120px] xl:pb-0">
          <div className="absolute -bottom-[260px] sm:-bottom-[280px] md:-bottom-[160px] lg:-bottom-[100px] xl:-bottom-10 left-0 right-0">
            {/* Cards Container */}
            <motion.div
              variants={enhancedContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-6xl mx-auto px-4 sm:px-6"
            >
              {/* Talents Card */}
              <motion.div
                variants={enhancedCardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="relative bg-white overflow-hidden hover:shadow-3xl transition-shadow duration-300 h-[380px] sm:h-[420px] md:h-[450px] lg:h-[500px] xl:h-[55vh] w-full max-w-md mx-auto transform -rotate-[4deg] md:-rotate-[6deg] lg:-rotate-[8deg] rounded-tr-[20%] rounded-br-[40%] rounded-tl-[17%] rounded-bl-[16%] shadow-2xl shadow-primary"
              >
                {/* Card Content */}
                <div className="p-5 sm:p-6 md:p-8 lg:p-10 pb-0 rotate-[4deg] md:rotate-[6deg] lg:rotate-[8deg] h-full flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                      For <span className="text-[#596CFF]">Talents</span>
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 md:mb-6">
                      Young professionals, graduates, career-changers, and
                      experienced individuals seeking opportunities.
                    </p>
                  </motion.div>

                  {/* Image Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative flex-1 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] bg-gray-200 mt-auto"
                  >
                    <Image
                      src="/target/1.png"
                      alt="Young professionals"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                      className="object-contain object-bottom"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Recruiters Card */}
              <motion.div
                variants={enhancedCardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 h-[380px] sm:h-[420px] md:h-[450px] lg:h-[500px] xl:h-[60vh] w-full max-w-md mx-auto transform rotate-[4deg] md:rotate-[6deg] lg:rotate-[8deg] rounded-tr-[20%] rounded-bl-[40%] rounded-tl-[17%] rounded-br-[16%]"
              >
                {/* Card Content */}
                <div className="p-5 sm:p-6 md:p-8 lg:p-10 pb-0 transform -rotate-[4deg] md:-rotate-[6deg] lg:-rotate-[8deg] h-full flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                      For <span className="text-[#596CFF]">Recruiters</span>
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 md:mb-6">
                      Managers, founders, HR professionals, agencies, and
                      organizations looking to hire.
                    </p>
                  </motion.div>

                  {/* Image Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative flex-1 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] bg-gray-200 rounded-lg mt-auto"
                  >
                    <Image
                      src="/target/2.png"
                      alt="Professional recruiters"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                      className="object-contain object-bottom"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="w-screen bg-primary h-[280px] sm:h-[300px] md:h-[180px] lg:h-[120px] xl:h-32"></div>
      </div>
    </div>
  );
};

export default Target;
