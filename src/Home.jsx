import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import {
  Code2,
  Palette,
  Server,
  Database,
  Wrench,
  ArrowRight,
  Mail,
  ExternalLink,
  UserRound,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

const Home = () => {
  const skills = [
    {
      title: "Frontend",
      icon: Palette,
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      technologies: ["Node.js", "Express.js", "REST API", "JWT"],
    },
    {
      title: "Database",
      icon: Database,
      technologies: ["MongoDB", "MySQL", "Mongoose"],
    },
    {
      title: "Development Tools",
      icon: Wrench,
      technologies: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  const projects = [
    {
      title: "MediCare",
      description:
        "A MERN stack doctor appointment platform with user authentication, doctor management, appointment booking and appointment status updates.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
      github: "#",
    },

    {
      title: "Coffeiin Homestay Website",
      description:
        "A responsive homestay website designed to showcase rooms, facilities, location and booking information with a modern user-friendly interface.",
      technologies: [
        "HTML",
        "JavaScript",
        "PHP",
        "Responsive Design",
      ],
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
      github: "https://ranjangowda2005.github.io/homeStay/",
    },

    {
      title: "RentalU",
      description:
        "An Android rental application with authentication and CRUD functionality for managing rental listings and user information.",
      technologies: ["Java", "XML", "MySQL", "Android"],
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
      github: "#",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />

        {/* Background Glow */}
        <div className="absolute top-32 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center min-h-[75vh]">
            {/* HERO CONTENT */}

            <div>
              <div className="flex items-center gap-3 text-indigo-400 font-medium tracking-wide mb-5">
                <Code2 size={20} />

                <span>Hello, I'm Ranjan Gowda</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
                Software
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Developer
                </span>
              </h1>

              <p className="mt-6 text-slate-300 text-base sm:text-lg leading-8 max-w-xl">
                B.Voc Software & App Development graduate and MERN Stack
                Developer passionate about building responsive, scalable and
                user-friendly web applications.
              </p>

              {/* TECHNOLOGIES */}

              <div className="flex flex-wrap gap-3 mt-7">
                {["React.js", "Node.js", "Express.js", "MongoDB", "Java"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-4 mt-9">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition duration-300 font-medium shadow-lg shadow-indigo-600/20"
                >
                  <span className="flex items-center gap-2">
                    View My Projects
                    <ArrowRight size={18} />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl border border-slate-600 hover:bg-white hover:text-black transition duration-300 font-medium"
                >
                  <span className="flex items-center gap-2">
                    Contact Me
                    <Mail size={18} />
                  </span>
                </a>
              </div>
            </div>

            {/* HERO IMAGE */}

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow */}

                <div className="absolute -inset-5 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-20" />

                <div className="relative w-[280px] sm:w-[360px] lg:w-[430px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                    alt="Developer workspace"
                    className="w-full h-[380px] sm:h-[450px] lg:h-[500px] object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                    <p className="text-sm text-indigo-300">
                      MERN Stack Developer
                    </p>

                    <h3 className="text-xl font-semibold mt-1">
                      Building ideas into applications.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT SECTION
      ========================================================= */}

      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* ABOUT CONTENT */}

            <div>
              <div className="flex items-center gap-3 text-indigo-400 font-medium mb-4">
                <UserRound size={21} />

                <span>ABOUT ME</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold">
                Turning ideas into practical digital experiences.
              </h2>

              <p className="text-slate-400 leading-8 mt-6">
                I am a software development graduate focused on building modern
                web applications using the MERN stack. I enjoy working on both
                frontend interfaces and backend APIs while continuously
                improving my development skills.
              </p>

              <p className="text-slate-400 leading-8 mt-4">
                My projects include doctor appointment systems, homestay
                websites, Android applications and other software solutions.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-7 text-indigo-400 hover:text-indigo-300 font-medium transition"
              >
                Let's work together
                <ArrowRight size={17} />
              </a>
            </div>

            {/* ABOUT STATS */}

            <div className="grid grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition">
                <Code2 size={28} className="text-indigo-400" />

                <h3 className="text-2xl font-bold text-white mt-5">MERN</h3>

                <p className="text-slate-400 mt-2">Full Stack Development</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition">
                <BriefcaseBusiness size={28} className="text-indigo-400" />

                <h3 className="text-2xl font-bold text-white mt-5">Java</h3>

                <p className="text-slate-400 mt-2">Programming</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition">
                <Server size={28} className="text-indigo-400" />

                <h3 className="text-2xl font-bold text-white mt-5">REST</h3>

                <p className="text-slate-400 mt-2">API Development</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition">
                <GraduationCap size={28} className="text-indigo-400" />

                <h3 className="text-2xl font-bold text-white mt-5">B.Voc</h3>

                <p className="text-slate-400 mt-2">
                  Software & App Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS SECTION
      ========================================================= */}

      <section id="skills" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-indigo-400 font-medium mb-3">MY SKILLS</p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Technologies I Work With
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto mt-4">
              Technologies and development tools I use to build modern web and
              software applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="group p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:-translate-y-2 transition duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-5">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl font-semibold">{skill.title}</h3>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-2 rounded-lg bg-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS SECTION
      ========================================================= */}

      <section id="projects" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-14">
            <div>
              <p className="text-indigo-400 font-medium mb-3">MY WORK</p>

              <h2 className="text-3xl sm:text-4xl font-bold">
                Featured Projects
              </h2>
            </div>

            <p className="text-slate-400 max-w-md">
              Some of the projects I have developed while learning and improving
              my software development skills.
            </p>
          </div>

          {/* PROJECT CARDS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition duration-300"
              >
                {/* PROJECT IMAGE */}

                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* PROJECT CONTENT */}

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="text-slate-400 text-sm leading-6 mt-3">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* PROJECT LINK */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-sm text-white hover:text-indigo-400 transition"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT SECTION
      ========================================================= */}

      <section id="contact" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 sm:p-12 text-center">
            {/* Background decoration */}

            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />

            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-2xl" />

            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail size={24} />
                </div>
              </div>

              <p className="text-indigo-100 font-medium">
                HAVE A PROJECT IN MIND?
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                Let's build something together.
              </h2>

              <p className="text-indigo-100 max-w-2xl mx-auto mt-5">
                I'm currently looking for software development opportunities
                where I can contribute, learn and grow as a developer.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {/* EMAIL */}

                <a
                  href="mailto:ranjangowdadidupe@gmail.com"
                  className="px-6 py-3 bg-white text-indigo-700 rounded-xl font-medium hover:bg-slate-100 transition"
                >
                  <span className="flex items-center gap-2">
                    <Mail size={18} />
                    Email Me
                  </span>
                </a>

                {/* PROJECTS */}

                <a
                  href="#projects"
                  className="px-6 py-3 border border-white/40 text-white rounded-xl font-medium hover:bg-white/10 transition"
                >
                  <span className="flex items-center gap-2">
                    <BriefcaseBusiness size={18} />
                    Explore Projects
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </div>
  );
};

export default Home;
