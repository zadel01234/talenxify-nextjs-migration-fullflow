import React from "react";

const HowItWorks = () => {
  return (
    <div className="flex flex-col relative min-h-[400vh] bg-white">
      {/* Top curved background */}
      <div className="bg-primary h-[60vh] md:h-[60vh] rounded-b-[90%] md:rounded-b-[90%]"></div>

      {/* Main content container */}
      <div className="absolute top-[10vh] md:top-[15vh] left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-[60rem] bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center py-8 md:py-12 px-4 md:px-12">
          {/* Header Badge */}
          <div className="bg-primary px-6 py-1 rounded-full text-white">
            <h1 className="text-sm md:text-base font-medium">HOW IT WORKS</h1>
          </div>

          {/* Introduction Text */}
          <div className="text-center pt-6 max-w-3xl">
            <p className="leading-relaxed font-extralight text-sm md:text-base text-gray-700">
              Discover a simple and transparent process designed to bring
              talents and recruiters closer together. Whether you're a
              professional looking for your next big opportunity or a recruiter
              searching for the right fit, our platform makes the connection
              effortless.
            </p>
            <p className="pt-5 text-center text-sm md:text-base text-gray-700">
              With just a few steps, you can showcase your skills, explore
              opportunities, and start meaningful collaborations.
            </p>
          </div>

          {/* FOR TALENTS SECTION */}
          <h1 className="py-8 md:py-10 font-bold text-lg md:text-xl">
            FOR <span className="text-primary underline">TALENTS</span>
          </h1>

          <div className="flex flex-col items-center justify-center gap-16 md:gap-24 lg:gap-32 w-full">
            {/* Step 01 - Create Account */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-40 lg:gap-80 w-full max-w-5xl">
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 px-4">
                <h1 className="font-semibold text-lg md:text-xl mb-2">
                  Create Account
                </h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Set up your personal talent hub in minutes. Add your skills,
                  experience, and career interests to let recruiters know who
                  you are.
                </p>
              </div>
              <div className="relative flex-shrink-0">
                <div className="flex flex-col items-start">
                  <h1 className="text-gray-300 text-4xl md:text-5xl font-poppins font-bold mb-1">
                    01
                  </h1>
                  <div className="bg-primary w-52 md:w-64 h-28 md:h-32 rounded-b-full"></div>
                </div>
                <div className="absolute -top-4 left-16 md:left-20 bg-white h-44 md:h-48 w-48 md:w-56 flex items-center justify-center shadow-2xl flex-col p-5 md:p-6 rounded-lg">
                  <h1 className="text-gray-800 text-base md:text-lg font-semibold mb-4 self-start">
                    Create Account
                  </h1>
                  <div className="w-full space-y-3 mb-4">
                    <div className="w-full h-2.5 bg-gray-300 rounded"></div>
                    <div className="w-full h-2.5 bg-gray-300 rounded"></div>
                    <div className="w-full h-2.5 bg-gray-300 rounded"></div>
                  </div>
                  <button
                    className="bg-primary text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>

            {/* Step 02 - Build Profile */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12 lg:gap-80 w-full max-w-5xl">
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 px-4 md:order-2">
                <h1 className="font-semibold text-lg md:text-xl mb-2">
                  Build Profile
                </h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Showcase your expertise and achievements. Upload your
                  portfolio, certifications, and work samples to stand out from
                  the crowd.
                </p>
              </div>
              <div className="relative flex-shrink-0 md:order-1">
                <div className="flex flex-col items-start">
                  <h1 className="text-gray-300 text-4xl md:text-5xl font-poppins font-bold mb-1">
                    02
                  </h1>
                  <div className="bg-primary w-52 md:w-64 h-28 md:h-32 rounded-b-full"></div>
                </div>
                <div className="absolute -top-4 left-16 md:left-20 bg-white h-44 md:h-48 w-48 md:w-56 flex flex-col justify-center shadow-2xl p-5 md:p-6 rounded-lg">
                  <h1 className="text-gray-800 text-sm md:text-base font-semibold mb-3">
                    Upload CV
                  </h1>
                  <div className="w-full flex-1 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50 px-3 py-4">
                    <div className="w-10 h-10 mb-2">
                      <svg
                        className="w-full h-full text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600 text-center leading-tight">
                      Drag & drop or click to choose files
                    </p>
                    <p className="text-xs text-gray-400 mt-1.5">
                      Max file size: 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 03 - Get Discovered */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12 lg:gap-80 w-full max-w-5xl">
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 px-4">
                <h1 className="font-semibold text-lg md:text-xl mb-2">
                  Get Discovered
                </h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Let recruiters find you! Our smart matching algorithm connects
                  your profile with relevant opportunities based on your skills
                  and preferences.
                </p>
              </div>
              <div className="relative flex-shrink-0">
                <div className="flex flex-col items-start">
                  <h1 className="text-gray-300 text-4xl md:text-5xl font-poppins font-bold mb-1">
                    03
                  </h1>
                  <div className="bg-primary w-52 md:w-64 h-28 md:h-32 rounded-b-full"></div>
                </div>
                <div className="absolute -top-4 left-16 md:left-20 bg-white h-48 md:h-52 w-52 md:w-64 flex items-center justify-center shadow-2xl p-4 md:p-5 rounded-lg">
                  <div className="w-full border border-blue-200 rounded-lg p-3 bg-white">
                    <div className="flex gap-2 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs md:text-sm font-semibold text-gray-800 truncate">
                          Senior Product Designer
                        </h3>
                        <p className="text-xs text-primary font-medium">
                          Barcadie Build
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span>📍 Ikoyi, Lagos</span>
                      <span className="text-primary">5 mins ago</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sed do eiusmod tempor incididunt
                    </p>
                    <div className="flex gap-1.5 mb-2 text-xs flex-wrap">
                      <span className="px-2 py-0.5 bg-blue-100 text-primary rounded">
                        Full-time
                      </span>
                      <span className="px-2 py-0.5 bg-blue-100 text-primary rounded">
                        Senior
                      </span>
                      <span className="px-2 py-0.5 bg-blue-100 text-primary rounded">
                        Remote
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">👥 50 Applied</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOR RECRUITERS SECTION */}
          <div className="w-full mt-20 md:mt-32 bg-primary rounded-2xl py-12 md:py-16 px-4 md:px-8">
            <h1 className="text-center font-bold text-lg md:text-xl mb-8 md:mb-12">
              FOR <span className="text-white underline">RECRUITERS</span>
            </h1>

            <div className="flex flex-col items-center justify-center gap-16 md:gap-24 lg:gap-32 w-full">
              {/* Recruiter Step 01 - Create Your Account */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12 lg:gap-20 w-full max-w-5xl">
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 px-4">
                  <h1 className="font-semibold text-lg md:text-xl mb-2 text-white">
                    Create Your Account
                  </h1>
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    Getting started is quick and easy. Sign up to unlock access
                    to a pool of skilled talents ready to work.
                  </p>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="flex flex-col items-start">
                    <h1 className="text-gray-100 text-4xl md:text-5xl font-poppins font-bold mb-1">
                      01
                    </h1>
                    <div className="bg-gray-800 w-52 md:w-64 h-28 md:h-32 rounded-b-full"></div>
                  </div>
                  <div className="absolute -top-4 left-16 md:left-20 bg-white h-44 md:h-48 w-48 md:w-56 flex items-center justify-center shadow-2xl flex-col p-5 md:p-6 rounded-lg">
                    <h1 className="text-gray-800 text-base md:text-lg font-semibold mb-4 self-start">
                      Create Account
                    </h1>
                    <div className="w-full space-y-3 mb-4">
                      <div className="w-full h-2.5 bg-gray-300 rounded"></div>
                      <div className="w-full h-2.5 bg-gray-300 rounded"></div>
                      <div className="w-full h-2.5 bg-gray-300 rounded"></div>
                    </div>
                    <button
                      className="bg-primary text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                      type="button"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>

              {/* Recruiter Step 02 - Browse Verified Talent */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12 lg:gap-20 w-full max-w-5xl">
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 px-4 md:order-2">
                  <h1 className="font-semibold text-lg md:text-xl mb-2 text-white">
                    Browse Verified Talent
                  </h1>
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    Search and filter through verified profiles, complete with
                    CVs and portfolios, to find candidates that match your
                    needs.
                  </p>
                </div>
                <div className="relative flex-shrink-0 md:order-1">
                  <div className="flex flex-col items-start">
                    <h1 className="text-gray-100 text-4xl md:text-5xl font-poppins font-bold mb-1">
                      02
                    </h1>
                    <div className="bg-gray-800 w-52 md:w-64 h-28 md:h-32 rounded-b-full"></div>
                  </div>
                  <div className="absolute -top-4 left-16 md:left-20 bg-white h-44 md:h-48 w-48 md:w-56 flex items-center justify-center shadow-2xl p-5 md:p-6 rounded-lg">
                    <div className="w-full bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Search services"
                        className="flex-1 bg-transparent text-sm outline-none text-gray-600 placeholder:text-gray-400"
                        readOnly
                      />
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recruiter Step 03 - Hire With Confidence */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12 lg:gap-20 w-full max-w-5xl">
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 px-4">
                  <h1 className="font-semibold text-lg md:text-xl mb-2 text-white">
                    Hire with Confidence
                  </h1>
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    Make informed decisions with verified information and secure
                    connections, ensuring you hire the right talent every time.
                  </p>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="flex flex-col items-start">
                    <h1 className="text-gray-100 text-4xl md:text-5xl font-poppins font-bold mb-1">
                      03
                    </h1>
                    <div className="bg-gray-800 w-52 md:w-64 h-28 md:h-32 rounded-b-full"></div>
                  </div>
                  <div className="absolute -top-4 left-16 md:left-20 bg-white h-48 md:h-52 w-52 md:w-64 flex items-center justify-center shadow-2xl p-4 md:p-5 rounded-lg">
                    <div className="w-full border border-blue-200 rounded-lg p-3 bg-white">
                      <div className="flex gap-2 mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs md:text-sm font-semibold text-gray-800 truncate">
                            Senior Product Designer
                          </h3>
                          <p className="text-xs text-gray-500">
                            📍 Ikoyi, Lagos
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <div className="flex gap-1.5 mb-2 text-xs flex-wrap">
                        <span className="px-2 py-0.5 bg-blue-100 text-primary rounded">
                          Full-time
                        </span>
                        <span className="px-2 py-0.5 bg-blue-100 text-primary rounded">
                          Senior
                        </span>
                        <span className="px-2 py-0.5 bg-blue-100 text-primary rounded">
                          Remote
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 flex items-center justify-between">
                        <span>💰 N500k-N800k</span>
                        <span>👥 50 Applied</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="mt-12 md:mt-16 mb-8">
            <button className="bg-primary text-white px-12 md:px-16 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Bottom curved background */}
      <div className="bg-primary h-[60vh] md:h-[60vh] rounded-t-[90%] md:rounded-t-[90%] mt-auto"></div>
    </div>
  );
};

export default HowItWorks;
