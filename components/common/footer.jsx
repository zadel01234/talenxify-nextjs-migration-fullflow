import React from "react";
import { FiSearch } from "react-icons/fi";
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Top Section - Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-3xl font-bold">
              <span className="bg-primary text-white px-2 py-1 rounded">
                talen
              </span>
              <span className="text-gray-900">xify</span>
            </span>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full lg:w-auto">
            <div className="flex items-center bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-md lg:max-w-lg">
              <div className="pl-4 pr-2">
                <FiSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email to get the latest news..."
                className="flex-1 py-3 px-2 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent min-w-0"
              />
              <button className="bg-primary text-white px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Left Section - Brand Description */}
          <div className="lg:col-span-1">
            <p className="text-gray-700 text-lg leading-relaxed mb-1">
              <span className="text-primary font-semibold">Talenxify</span>{" "}
              <span className="text-gray-900">
                connects skilled professionals with recruiters looking for their
                next great hire.
              </span>
            </p>
            <p className="text-gray-900 font-bold text-lg mt-4">
              Simple. Fast. Reliable.
            </p>
          </div>

          {/* Navigation Column 1 */}
          <div>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition-colors text-base font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition-colors text-base font-medium"
                >
                  Find a Job
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition-colors text-base font-medium"
                >
                  Talents
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition-colors text-base font-medium"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition-colors text-base font-medium"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition-colors text-base font-medium"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h4 className="text-gray-900 font-semibold text-base mb-6">
              Join Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-md text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaYoutube className="w-5 h-5" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-md text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-md text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaTwitter className="w-5 h-5" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-md text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-md text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <p className="text-gray-700 text-sm">
              Talenxify@2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
