"use client";

import { containerVariants, itemVariants } from "@/styles/variants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-primary pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-6 mb-16"
        >
          {/* About Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-block bg-white text-[#596CFF] px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide shadow-md">
              About Talenxify
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-white text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Talenxify is a platform built to bridge the gap between recruiters
            and talents. Whether you're a young professional seeking your next
            role or a recruiter looking for verified candidates, we make the
            hiring process faster, easier, and more transparent.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
