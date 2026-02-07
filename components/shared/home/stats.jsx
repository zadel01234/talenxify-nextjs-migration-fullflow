"use client";

import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";

export default function JobSearchSection() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const searchBarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", { jobTitle, location });
    // Add your search logic here
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3 sm:space-y-4 mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1128] leading-tight px-2">
            Helping You <span className="text-[#596CFF]">Land a Job</span> and
            Live Your Dreams
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
            1,56,780+ jobs listed here! Find your dream job today.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.form
          variants={searchBarVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSearch}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl sm:rounded-full shadow-lg border border-gray-200 p-3 sm:p-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 hover:shadow-xl transition-shadow duration-300">
            {/* Job Title Input */}
            <div className="flex items-center gap-3 flex-1 w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-xl sm:rounded-none bg-gray-50 sm:bg-transparent">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Job title or keyword"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base bg-transparent"
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

            {/* Location Input */}
            <div className="flex items-center gap-3 flex-1 w-full px-3 sm:px-4 py-2.5 sm:py-2 rounded-xl sm:rounded-none bg-gray-50 sm:bg-transparent">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base bg-transparent"
              />
            </div>

            {/* Search Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#596CFF] text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 rounded-xl sm:rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
            >
              Search
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
