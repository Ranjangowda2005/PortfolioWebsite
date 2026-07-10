import React, { useState } from "react";
import Footer from "./Components/Footer";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Navbar from "./Components/Navbar";

const Contact = (props) => {
  const [data, setState] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setState({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 px-5 sm:px-8 lg:px-12 pt-28 pb-16">

        {/* Left Side */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mt-6 leading-relaxed">
            We are committed to processing your information in order to
            contact you and talk about your project.
          </p>

          <div className="mt-8 space-y-6">

            <div className="flex items-center gap-4">
              <MdEmail className="text-3xl text-orange-400 shrink-0" />
              <span className="text-base sm:text-lg md:text-xl break-all">
                {props.email}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MdLocationOn className="text-3xl text-orange-400 shrink-0" />
              <span className="text-base sm:text-lg md:text-xl">
                {props.address}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MdPhone className="text-3xl text-orange-400 shrink-0" />
              <span className="text-base sm:text-lg md:text-xl">
                {props.phone}
              </span>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[450px]">

          <div className="relative mt-3">

            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder=" "
              className="w-full text-lg sm:text-xl p-4 border border-gray-400 rounded-lg peer focus:outline-none focus:border-pink-600"
            />

            <label className="absolute left-4 top-4 text-lg text-gray-400 pointer-events-none transition-all peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden">
              Name <span className="text-red-500">*</span>
            </label>

          </div>

          <div className="relative mt-4">

            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder=" "
              className="w-full text-lg sm:text-xl p-4 border border-gray-400 rounded-lg peer focus:outline-none focus:border-pink-600"
            />

            <label className="absolute left-4 top-4 text-lg text-gray-400 pointer-events-none transition-all peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden">
              Email <span className="text-red-500">*</span>
            </label>

          </div>

          <input
            type="text"
            name="website"
            value={data.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full text-lg sm:text-xl p-4 border border-gray-400 rounded-lg mt-4 focus:outline-none focus:border-pink-600"
          />

          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            className="w-full text-lg sm:text-xl p-4 border border-gray-400 rounded-lg mt-4 resize-none focus:outline-none focus:border-pink-600"
          />

          <button
            onClick={handleClick}
            className="w-full h-14 bg-pink-700 text-white text-lg font-semibold rounded-lg mt-5 hover:bg-pink-800 transition duration-300"
          >
            Submit
          </button>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;