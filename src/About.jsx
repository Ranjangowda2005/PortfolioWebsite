import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import img1 from "./assets/img1.jpeg";
const About = (props) => {
  return (
    <div>
      <div className="flex ml-[150px]">
        <Navbar />
        <div className="flex w-[2000px]  m-[100px] mt-[150px]">
          <img
            src={img1}
            alt="image"
            className="rounded-3xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
          ></img>
        </div>
        <div className="mt-[150px] space-y-3 text-2xl">
          <p>{props.name}</p>
          <p>{props.email}</p>
          <p>{props.phone}</p>
          <p>{props.address}</p>
          <p>{props.course}</p>
          <p>{props.year}</p>
          <p>
            A software developer is a creative, analytical professional who
            designs, codes, tests, and maintains computer programs and
            applications. They are the driving force behind everything from
            mobile apps and web platforms to large-scale enterprise and
            operating systems, solving real-world problems through technology.
          </p>
          <br />
          <br />
          <button className="w-52 h-12 ml-48 rounded-full bg-green-600 text-white text-lg  font-semibold shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:scale-105 active:scale-95">
            Get To Know Me
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
