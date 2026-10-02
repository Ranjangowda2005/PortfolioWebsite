import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin, ArrowUpRight, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Profile */}
          <div>
            <a href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center group-hover:bg-indigo-500 transition">
                <Code2 className="w-5 h-5 text-white" />
              </div>

              <div>
                <h2 className="text-xl font-bold">Ranjan Gowda</h2>

                <p className="text-xs text-slate-500 mt-1">
                  Software Developer
                </p>
              </div>
            </a>

            <p className="text-slate-400 leading-7 mt-6 max-w-md">
              B.Voc Software & App Development graduate focused on building
              modern web applications using React, Node.js, Express.js, MongoDB
              and Java.
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:ranjangowdadidupe@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span className="text-sm break-all">
                  ranjangowdadidupe@gmail.com
                </span>
              </a>

              <a
                href="tel:9902476568"
                className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition"
              >
                <Phone className="w-4 h-4 text-indigo-400" />
                <span className="text-sm">+91 9902476568</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-400" />

                <span className="text-sm">Mangaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="md:pl-8 lg:pl-12">
            <h3 className="text-lg font-semibold mb-5">Technologies</h3>

            <div className="space-y-3 text-sm text-slate-400">
              <p className="hover:text-white transition">JavaScript</p>

              <p className="hover:text-white transition">React.js</p>

              <p className="hover:text-white transition">Node.js</p>

              <p className="hover:text-white transition">Express.js</p>

              <p className="hover:text-white transition">MongoDB</p>

              <p className="hover:text-white transition">Java</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:pl-8 lg:pl-12">
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

            <div className="space-y-3">
              <a
                href="/"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition group"
              >
                Home
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
              </a>

              <a
                href="/about"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition group"
              >
                About
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
              </a>

              <a
                href="/contact"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition group"
              >
                Contact
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://github.com/Ranjangowda2005"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/ranjan-gowda/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
