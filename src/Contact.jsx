import React from "react";
import Footer from "./Components/Footer";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Navbar from "./Components/Navbar";

const Contact = (props) => {
  return (
    <div className="w-[100%] h-[100%] bg-white">
      <Navbar />
      <div className="flex mt-[40px] align-item-center justify-center">
        <div className="w-[50%] mt-[100px] mb-[10px]">
          <h1 className=" text-5xl">Contact Us</h1>
          <br />
          <p className="text-2xl">
            We are commited processing the information <br />
            in order to contact you and talk about your project
          </p>
          <br />
          <div className="flex gap-3 items-center">
            <MdEmail className="text-orange-400 shrink-0" />
            <span className="text-2xl">{props.email}</span>
          </div>
          <br />
          <div className="flex gap-3 items-center">
            <MdLocationOn className="text-orange-400 shrink-0" />
            <span className="text-2xl">{props.address}</span>
          </div>
          <br />
          <div className="flex gap-3 items-center">
            <MdPhone className="text-orange-400 shrink-0" />
            <span className="text-2xl">{props.phone}</span>
          </div>
        </div>
        <div className="w-[30%]  mt-[100px] mr-[100px]">
          <div className="relative w-[500px] mt-[10px]">
            <input
              type="text"
              className="w-full text-2xl p-[15px] border border-black/100 peer"
              placeholder=" "
            />
            <label className="absolute left-[15px] top-[15px] text-2xl text-gray-400 pointer-events-none transition-all peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden">
              Name <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="relative w-[500px] mt-[10px]">
            <input
              type="text"
              className="w-full text-2xl p-[15px] border border-black/100 peer"
              placeholder=" "
            />
            <label className="absolute left-[15px] top-[15px] text-2xl text-gray-400 pointer-events-none transition-all peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden">
              Email <span className="text-red-500">*</span>
            </label>
          </div>

          <input
            type="text"
            placeholder="Website"
            className="w-[500px] text-2xl p-[15px] border border-black/100 mt-[10px] "
          />
          <br />
          <textarea
            type="text"
            placeholder="Message"
            className="w-[500px]  h-[150px] text-2xl p-[15px] border border-black/100  mt-[10px]"
          />
          <br />
          <button className="bg-pink-700 w-[500px] h-[50px] text-white">
            Submit
          </button>
        </div>
      </div>
      <div className="mt-45">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
