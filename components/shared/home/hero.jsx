"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const pushToRegistration = (type) => {
    const search = type ? `?type=${type}` : "";
    router.push(`/register${search}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const floatVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#f5f7ff] via-white to-[#4f63e7] overflow-hidden min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:space-y-8 z-10 max-w-2xl lg:max-w-none"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 sm:gap-3"
            >
              <div className="relative w-12 sm:w-14 h-5 sm:h-6 bg-[#596CFF] rounded-full transition-colors duration-300">
                <div className="absolute top-0.5 sm:top-1 left-7 sm:left-8 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300"></div>
              </div>
              <span className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
                Find Your Dream Job
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#0a1128]"
            >
              Where Great Talent Meets Opportunity.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xl"
            >
              <span className="text-[#596CFF] font-semibold">Talenxify</span>{" "}
              connects skilled professionals with recruiters looking for their
              next great hire.{" "}
              <span className="font-bold text-gray-900">
                Simple. Fast. Reliable.
              </span>
            </motion.p>

            {/* Profile Avatars and Count */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 sm:gap-4"
            >
              <div className="flex -space-x-2 sm:-space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white overflow-hidden shadow-md">
                  <Image
                    src="/hero/ellipse1.jpg"
                    alt="User 1"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white overflow-hidden shadow-md">
                  <Image
                    src="/hero/ellipse2.jpg"
                    alt="User 2"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white overflow-hidden shadow-md">
                  <Image
                    src="/hero/ellipse3.jpg"
                    alt="User 3"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-snug max-w-xs">
                Over <span className="text-[#596CFF] font-bold">5000+</span>{" "}
                freelancers to complete your projects
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#596CFF] text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => pushToRegistration("talent")}
              >
                Sign Up as Talent
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0a1128] text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => pushToRegistration("hirer")}
              >
                Sign Up as Recruiter
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] md:flex items-center hidden justify-center lg:justify-end"
          >
            {/* Decorative Wave Lines - Left */}
            <motion.svg
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-24 sm:w-14 sm:h-28 lg:w-16 lg:h-32 z-10 hidden sm:block"
              viewBox="0 0 50 100"
              fill="none"
            >
              <path
                d="M10 10 Q20 25 10 40 Q20 55 10 70 Q20 85 10 100"
                stroke="#596CFF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M25 10 Q35 25 25 40 Q35 55 25 70 Q35 85 25 100"
                stroke="#596CFF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M40 10 Q50 25 40 40 Q50 55 40 70 Q50 85 40 100"
                stroke="#596CFF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </motion.svg>

            {/* Decorative Wave Lines - Right */}
            <motion.svg
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-24 sm:w-14 sm:h-28 lg:w-16 lg:h-32 z-10 hidden sm:block"
              viewBox="0 0 50 100"
              fill="none"
            >
              <path
                d="M10 10 Q20 25 10 40 Q20 55 10 70 Q20 85 10 100"
                stroke="#596CFF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M25 10 Q35 25 25 40 Q35 55 25 70 Q35 85 25 100"
                stroke="#596CFF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M40 10 Q50 25 40 40 Q50 55 40 70 Q50 85 40 100"
                stroke="#596CFF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </motion.svg>

            {/* Main Hero Image Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              // 👇 Added translate-x to shift image left by ~30%
              className="relative w-full max-w-full h-full flex justify-center lg:translate-x-[-30%] lg:translate-y-[-10%]
              "
            >
              <div className="relative w-[700px] h-[900px] md:h-[1000px] lg:h-[840px]">
                <Image
                  src="/hero/3.png"
                  alt="Happy professional"
                  fill
                  className="object-contain scale-150"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Card - Available Jobs */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-2 sm:left-4 md:left-8 lg:left-4 xl:left-8 bg-white rounded-xl sm:rounded-2xl shadow-xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 z-20"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-xl sm:text-2xl md:text-3xl">💼</div>
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#596CFF]">
                    50K+
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    Available Jobs
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - People Hired */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-16 sm:bottom-24 md:bottom-32 lg:bottom-40 right-2 sm:right-4 md:right-8 lg:right-4 xl:right-8 bg-white rounded-xl sm:rounded-2xl shadow-xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 z-20"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-xl sm:text-2xl md:text-3xl">💼</div>
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#596CFF]">
                    30K+
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    People got hired
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
