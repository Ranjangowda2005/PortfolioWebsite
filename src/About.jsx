import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import img1 from "./assets/img1.jpeg";

const About = (props) => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col lg:flex-row items-center justify-center px-5 sm:px-8 lg:px-12 pt-28 pb-16 gap-10">

        <div className="flex w-full lg:w-1/2 justify-center">
          <img
            src={img1}
            alt="image"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-3 text-lg sm:text-xl lg:text-2xl">
          <p>{props.name}</p>
          <p className="break-all">{props.email}</p>
          <p>{props.phone}</p>
          <p>{props.address}</p>
          <p>{props.course}</p>
          <p>{props.year}</p>

          <p className="leading-8 text-justify">
            A software developer is a creative, analytical professional who
            designs, codes, tests, and maintains computer programs and
            applications. They are the driving force behind everything from
            mobile apps and web platforms to large-scale enterprise and
            operating systems, solving real-world problems through technology.
          </p>

          <div className="pt-6 flex justify-center lg:justify-start">
            <button className="w-52 h-12 rounded-full bg-green-600 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:scale-105 active:scale-95">
              Get To Know Me
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default About;