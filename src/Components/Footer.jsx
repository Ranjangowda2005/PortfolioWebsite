import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="w-[100%] h-[200px]  flex justify-around items-center text-1xl">
        <div>
          <h1 className="text-2xl font-bold">RANJAN</h1>
          <p>ranjangowdadidupe@gmail.com</p>
          <p>9902476568</p>
          <div className="flex gap-4 mt-3 text-xl text-gray-600">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition-colors ml-4"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors ml-4"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors ml-4"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Language</h1>
          <p>HTML</p>
          <p>Javascript</p>
          <p>REACT</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">About</h1>
          <a href="/">Home</a>
          <br />
          <a href="About">About Us</a>
          <br />
          <a href="Contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
