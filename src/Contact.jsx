import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  MessageSquare,
  Globe,
  CheckCircle2,
} from "lucide-react";

const Contact = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.message) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log(data);

    setSubmitted(true);

    setData({
      name: "",
      email: "",
      website: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-10 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">
              Contact
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Let's build something
              <span className="text-indigo-400"> great together.</span>
            </h1>

            <p className="mt-6 text-slate-400 text-base sm:text-lg leading-8 max-w-2xl">
              Have a project idea, job opportunity, or just want to connect?
              Feel free to send me a message. I would be happy to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-5 sm:px-8 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Contact Information
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              I'm currently open to software development opportunities,
              freelance projects, internships, and professional connections.
            </p>

            <div className="mt-10 space-y-6">
              {/* Email */}
              <a
                href={`mailto:${props.email || "yourmail@example.com"}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>

                  <p className="text-slate-200 mt-1 break-all group-hover:text-indigo-400 transition">
                    {props.email || "ranjangowdadidupe@gmail.com"}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>

                  <p className="text-slate-200 mt-1">
                    {props.address || "Mangaluru, Karnataka, India"}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${props.phone || ""}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>

                  <p className="text-slate-200 mt-1 group-hover:text-indigo-400 transition">
                    {props.phone || "Your Phone Number"}
                  </p>
                </div>
              </a>
            </div>

            {/* Availability Card */}
            <div className="mt-10 p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>

                <p className="text-sm font-medium text-slate-300">
                  Open to opportunities
                </p>
              </div>

              <p className="text-sm text-slate-500 mt-3 leading-6">
                Available for software development roles, full-stack
                opportunities, and relevant projects.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">Send a Message</h2>

              <p className="text-slate-400 mt-3">
                Fill out the form below and I'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <User className="w-4 h-4 text-indigo-400" />
                  Name
                  <span className="text-red-400">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  Email
                  <span className="text-red-400">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                />
              </div>

              {/* Website */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  Website
                  <span className="text-slate-600 text-xs">(Optional)</span>
                </label>

                <input
                  type="url"
                  name="website"
                  value={data.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  Message
                  <span className="text-red-400">*</span>
                </label>

                <textarea
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {/* Success */}
              {submitted && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />

                  <p className="text-sm">
                    Your message has been submitted successfully.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
