import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import img1 from "./assets/img1.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  CalendarDays,
  Code2,
  ArrowRight,
  BriefcaseBusiness,
  Database,
  Server,
  Monitor,
} from "lucide-react";

const About = (props) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* =========================================================
          ABOUT HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        {/* Background Glow */}

        <div className="absolute top-20 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-24">
          {/* Page Heading */}

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-indigo-400 font-medium mb-4">
              <UserRound size={20} />

              <span>ABOUT ME</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Get To Know
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Me Better
              </span>
            </h1>

            <p className="max-w-2xl mx-auto mt-5 text-slate-400 text-base sm:text-lg leading-7">
              A software developer passionate about creating modern, responsive
              and user-friendly applications.
            </p>
          </div>

          {/* =====================================================
              PROFILE SECTION
          ===================================================== */}

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* IMAGE */}

            <div className="flex justify-center">
              <div className="relative">
                {/* Image Glow */}

                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-20" />

                <div className="relative">
                  <img
                    src={img1}
                    alt="Ranjan Gowda"
                    className="w-[280px] sm:w-[350px] lg:w-[430px] h-[360px] sm:h-[440px] lg:h-[500px] object-cover rounded-3xl border border-white/10 shadow-2xl transition duration-500 hover:scale-[1.02]"
                  />

                  {/* Developer Badge */}

                  <div className="absolute bottom-5 left-5 right-5 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                        <Code2 size={21} className="text-indigo-400" />
                      </div>

                      <div>
                        <p className="text-sm text-slate-400">
                          Software Developer
                        </p>

                        <p className="font-semibold">MERN Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROFILE DETAILS */}

            <div>
              <p className="text-indigo-400 font-medium mb-3">INTRODUCTION</p>

              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Building applications with code, creativity and problem-solving.
              </h2>

              <p className="text-slate-400 leading-8 mt-6">
                I am a B.Voc Software & App Development graduate with a strong
                interest in software development and modern web technologies. I
                enjoy creating responsive interfaces and developing functional
                backend systems.
              </p>

              <p className="text-slate-400 leading-8 mt-4">
                My primary focus is MERN Stack development, while I also have
                experience with Java, MySQL, Android development and REST APIs.
                I continuously work on practical projects to improve my
                development and problem-solving skills.
              </p>

              {/* PERSONAL INFORMATION */}

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {/* Name */}

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <UserRound size={19} className="text-indigo-400" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Name</p>

                    <p className="font-medium truncate">
                      {props.name || "Ranjan Gowda"}
                    </p>
                  </div>
                </div>

                {/* Email */}

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Mail size={19} className="text-indigo-400" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Email</p>

                    <p className="font-medium truncate">
                      {props.email || "Your Email"}
                    </p>
                  </div>
                </div>

                {/* Phone */}

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Phone size={19} className="text-indigo-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Phone</p>

                    <p className="font-medium">{props.phone || "Your Phone"}</p>
                  </div>
                </div>

                {/* Location */}

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <MapPin size={19} className="text-indigo-400" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Location</p>

                    <p className="font-medium truncate">
                      {props.address || "Mangaluru, Karnataka"}
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL BUTTONS */}

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#projects"
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition flex items-center gap-2 font-medium"
                >
                  View My Work
                  <ArrowRight size={18} />
                </a>

                <a
                  href="https://github.com/Ranjangowda2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl border border-slate-700 hover:bg-white hover:text-black transition flex items-center gap-2 font-medium"
                >
                  <span>GitHub</span>
                  <FaGithub size={20} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ranjan-gowda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl border border-slate-700 hover:bg-white hover:text-black transition flex items-center gap-2 font-medium"
                >
                  <span>LinkedIn</span>
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION / EXPERIENCE
      ========================================================= */}

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-indigo-400 font-medium mb-3">BACKGROUND</p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Education & Development
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {/* EDUCATION */}

            <div className="p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <GraduationCap size={26} className="text-indigo-400" />
              </div>

              <p className="text-sm text-indigo-400 font-medium">EDUCATION</p>

              <h3 className="text-xl font-semibold mt-2">
                {props.course || "B.Voc Software & App Development"}
              </h3>

              <div className="flex items-center gap-2 text-slate-400 mt-4">
                <CalendarDays size={17} />

                <span>{props.year || "2026"}</span>
              </div>

              <p className="text-slate-400 leading-7 mt-5">
                Studied software development concepts including programming, web
                development, databases, application development and software
                project implementation.
              </p>
            </div>

            {/* DEVELOPMENT */}

            <div className="p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <BriefcaseBusiness size={25} className="text-indigo-400" />
              </div>

              <p className="text-sm text-indigo-400 font-medium">DEVELOPMENT</p>

              <h3 className="text-xl font-semibold mt-2">
                MERN Stack Development
              </h3>

              <div className="flex items-center gap-2 text-slate-400 mt-4">
                <Code2 size={17} />

                <span>React • Node.js • Express • MongoDB</span>
              </div>

              <p className="text-slate-400 leading-7 mt-5">
                Developed practical applications using modern frontend, backend
                and database technologies while working with REST APIs,
                authentication, Git and responsive UI development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY SECTION
      ========================================================= */}

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-indigo-400 font-medium mb-3">TECHNOLOGIES</p>

            <h2 className="text-3xl sm:text-4xl font-bold">What I Work With</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* FRONTEND */}

            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:-translate-y-2 hover:border-indigo-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Monitor size={25} className="text-indigo-400" />
              </div>

              <h3 className="text-xl font-semibold mt-5">Frontend</h3>

              <p className="text-slate-400 text-sm leading-6 mt-3">
                React.js, JavaScript, HTML5, CSS3 and Tailwind CSS.
              </p>
            </div>

            {/* BACKEND */}

            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:-translate-y-2 hover:border-indigo-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Server size={25} className="text-indigo-400" />
              </div>

              <h3 className="text-xl font-semibold mt-5">Backend</h3>

              <p className="text-slate-400 text-sm leading-6 mt-3">
                Node.js, Express.js, REST APIs, JWT and backend development.
              </p>
            </div>

            {/* DATABASE */}

            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:-translate-y-2 hover:border-indigo-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Database size={25} className="text-indigo-400" />
              </div>

              <h3 className="text-xl font-semibold mt-5">Database</h3>

              <p className="text-slate-400 text-sm leading-6 mt-3">
                MongoDB, Mongoose and MySQL for application data management.
              </p>
            </div>

            {/* DEVELOPMENT */}

            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:-translate-y-2 hover:border-indigo-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Code2 size={25} className="text-indigo-400" />
              </div>

              <h3 className="text-xl font-semibold mt-5">Development</h3>

              <p className="text-slate-400 text-sm leading-6 mt-3">
                Java, Git, GitHub, VS Code, Postman and application development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CALL TO ACTION
      ========================================================= */}

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 sm:p-12 text-center">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />

            <div className="relative">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <BriefcaseBusiness size={27} />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold">
                Let's build something together.
              </h2>

              <p className="text-indigo-100 max-w-2xl mx-auto mt-5 leading-7">
                I'm interested in software development opportunities where I can
                contribute my skills, learn new technologies and grow as a
                developer.
              </p>

              <a
                href="mailto:ranjangowdadidupe@gmail.com"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3 bg-white text-indigo-700 rounded-xl font-medium hover:bg-slate-100 transition"
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
