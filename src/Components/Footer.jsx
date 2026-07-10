import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Left */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">RANJAN</h1>

          <p className="text-gray-700 break-all">
            ranjangowdadidupe@gmail.com
          </p>

          <p className="text-gray-700 mt-1">
            9902476568
          </p>

          <div className="flex justify-center md:justify-start gap-5 mt-5 text-2xl text-gray-600">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-600 duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/ranjan-gowda-72b381294/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-500 duration-300"
            >
              <FaTwitter />
            </a>

          </div>
        </div>

        {/* Middle */}

        <div className="text-center">
          <h1 className="text-2xl font-bold mb-3">
            Language
          </h1>

          <p>HTML</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>

        {/* Right */}

        <div className="text-center md:text-right">
          <h1 className="text-2xl font-bold mb-3">
            About
          </h1>

          <a href="/" className="hover:text-blue-600">
            Home
          </a>

          <br />

          <a href="About" className="hover:text-blue-600">
            About Us
          </a>

          <br />

          <a href="Contact" className="hover:text-blue-600">
            Contact Us
          </a>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;