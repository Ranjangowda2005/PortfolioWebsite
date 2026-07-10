import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-3 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%] lg:w-[90%] max-w-7xl z-50 bg-white/80 backdrop-blur-md border border-white/40 shadow-lg rounded-full px-4 sm:px-6 lg:px-8 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 cursor-pointer">
          WEBSITE
        </h1>

        <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
          <a
            href="/"
            className="text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </a>

          <a
            href="About"
            className="text-xs sm:text-sm md:text-base font-medium text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            About
          </a>

          <a
            href="Contact"
            className="text-xs sm:text-sm md:text-base font-medium text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;