import React from "react";

const Navbar = () => {
  return (
    <nav className=" fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-50 bg-white/70 backdrop-blur-md border border-white/40 shadow-lg rounded-full px-8 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight text-gray-900 cursor-pointer">
          WEBSITE
        </h1>
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="text-sm font-medium text-gray-900 cursor-pointer transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="About"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer transition-colors duration-200"
          >
            About
          </a>
          <a
            href="Contact"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
