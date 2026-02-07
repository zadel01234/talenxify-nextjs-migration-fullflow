import React from "react";
import {
  FiEye,
  FiBriefcase,
  FiTrendingUp,
  FiUserCheck,
  FiClock,
  FiTarget,
} from "react-icons/fi";

const WhyChooseTalenxify = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-primary px-8 py-2.5 rounded-full">
            <h2 className="text-white text-sm md:text-base font-medium tracking-wide">
              WHY CHOOSE TALENXIFY
            </h2>
          </div>
        </div>

        {/* Main Description */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20">
          <p className="text-gray-900 text-lg md:text-xl lg:text-2xl leading-relaxed font-normal mb-4">
            Talenxify isn't just another job platform — it's a smart bridge
            between talents and recruiters.
          </p>
          <p className="text-gray-900 text-lg md:text-xl lg:text-2xl leading-relaxed font-normal">
            We make it easier for professionals to showcase their skills and for
            employers to discover the right fit without stress.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* For Talents Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">
              For <span className="text-primary">Talents</span>
            </h3>
            <div className="space-y-6">
              {/* Visibility */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white border-l-4 border-primary rounded-lg flex items-center justify-center shadow-sm">
                  <FiEye className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-gray-900 font-semibold text-base md:text-lg mb-1">
                    Visibility:{" "}
                    <span className="text-primary font-normal">
                      Be seen by recruiters actively searching.
                    </span>
                  </h4>
                </div>
              </div>

              {/* Opportunities */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white border-l-4 border-primary rounded-lg flex items-center justify-center shadow-sm">
                  <FiBriefcase className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-gray-900 font-semibold text-base md:text-lg mb-1">
                    Opportunities:{" "}
                    <span className="text-primary font-normal">
                      Get connected to real jobs.
                    </span>
                  </h4>
                </div>
              </div>

              {/* Career Growth */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white border-l-4 border-primary rounded-lg flex items-center justify-center shadow-sm">
                  <FiTrendingUp className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-gray-900 font-semibold text-base md:text-lg mb-1">
                    Career Growth:{" "}
                    <span className="text-primary font-normal">
                      Build your experience and network.
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* For Recruiters Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">
              For <span className="text-primary">Recruiters</span>
            </h3>
            <div className="space-y-6">
              {/* Vetted Talent */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white border-l-4 border-primary rounded-lg flex items-center justify-center shadow-sm">
                  <FiUserCheck className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-gray-900 font-semibold text-base md:text-lg mb-1">
                    Vetted Talent:{" "}
                    <span className="text-primary font-normal">
                      Access a pool of verified professionals.
                    </span>
                  </h4>
                </div>
              </div>

              {/* Save Time */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white border-l-4 border-primary rounded-lg flex items-center justify-center shadow-sm">
                  <FiClock className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-gray-900 font-semibold text-base md:text-lg mb-1">
                    Save Time:{" "}
                    <span className="text-primary font-normal">
                      Hire faster with curated profiles.
                    </span>
                  </h4>
                </div>
              </div>

              {/* Quality Matches */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white border-l-4 border-primary rounded-lg flex items-center justify-center shadow-sm">
                  <FiTarget className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-gray-900 font-semibold text-base md:text-lg mb-1">
                    Quality Matches:{" "}
                    <span className="text-primary font-normal">
                      Find the right talent for your needs.
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTalenxify;
