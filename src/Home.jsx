import React from "react";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>

      {/* Hero Section */}
      <section className="flex items-center bg-gray-700 w-full min-h-[700px] px-10">
        <div className="w-1/2 text-white">
          <h4 className="text-2xl mb-3">New Arrivals 2026</h4>

          <h1 className="text-6xl leading-tight font-semibold">
            MERN FULLSTACK <br />
            DEVELOPMENT
          </h1>

          <button className="border border-white px-5 py-2 mt-6 hover:bg-white hover:text-black">
            Feedback collection
          </button>
        </div>

        <div className="w-1/2 flex justify-center">
          <img
            className="w-[80%] h-[460px] object-cover"
            src="https://t3.ftcdn.net/jpg/02/35/09/74/360_F_235097419_oW8XQTFySkHTSvGsbRSn61VBRz5mxv1b.jpg"
            alt="Developer"
          />
        </div>
      </section>

      {/* Image Cards */}
      <section className="flex items-center justify-center gap-6 bg-gray-500 py-10">
        {[
          "https://tse3.mm.bing.net/th/id/OIP.w58iy0hIhclnPfmrhqZZzAHaEc?pid=Api&h=220&P=0",
          "https://blog.logrocket.com/wp-content/uploads/2022/12/Guide-image-overlays-CSS.png?w=730",
          "https://tse4.mm.bing.net/th/id/OIP.A0mZjiYwbJvWjD_VVEU8tgHaGi?pid=Api&h=220&P=0",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyP9eC-1WEBGY1eMj02VGXanyFnp9EkzN9TDRxORHMw&s=10",
        ].map((img, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src={img}
              alt="card"
              className="border-2 h-[280px] w-[280px] rounded-2xl object-cover"
            />
          </div>
        ))}
      </section>

      {/* Text Cards */}
      <section className="flex items-center justify-center gap-6 bg-gray-600 py-10">
        <div className="card">
          <h2>HTML</h2>
          <p>
            HTML stands for HyperText Markup Language. It is used to create the
            structure and content of a webpage using tags.
          </p>
        </div>

        <div className="card">
          <h2>CSS</h2>
          <p>
            CSS is used to style web pages. It controls colors, fonts, spacing,
            layout, animations, and responsive design.
          </p>
        </div>

        <div className="card">
          <h2>JavaScript</h2>
          <p>
            JavaScript is used to make websites interactive and dynamic, such as
            forms, menus, sliders, popups, and real-time updates.
          </p>
        </div>

        <div className="card">
          <h2>React</h2>
          <p>
            React is a declarative JavaScript library for building user interfaces with reusable 
            components. It uses a virtual DOM to update your web app seamlessly.
          </p>
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Home;
