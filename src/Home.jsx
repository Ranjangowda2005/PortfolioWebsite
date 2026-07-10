import React from "react";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center bg-gray-700 w-full min-h-screen px-5 sm:px-8 lg:px-12 pt-28 pb-12 gap-10">
        
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <h4 className="text-lg sm:text-xl md:text-2xl mb-3">
            New Arrivals 2026
          </h4>

          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold">
            MERN FULLSTACK <br />
            DEVELOPMENT
          </h1>

          <button className="border border-white px-5 py-3 mt-6 rounded-lg hover:bg-white hover:text-black transition duration-300">
            Feedback collection
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[550px] h-auto rounded-xl shadow-xl object-cover"
            src="https://t3.ftcdn.net/jpg/02/35/09/74/360_F_235097419_oW8XQTFySkHTSvGsbRSn61VBRz5mxv1b.jpg"
            alt="Developer"
          />
        </div>
      </section>

      {/* Image Cards */}
      <section className="bg-gray-500 py-10 px-4">
        <div className="flex flex-wrap justify-center gap-6">
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
                className="border-2 h-[220px] w-[220px] sm:h-[250px] sm:w-[250px] md:h-[280px] md:w-[280px] rounded-2xl object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Text Cards */}
      <section className="bg-gray-600 py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3">HTML</h2>
            <p>
              HTML stands for HyperText Markup Language. It is used to create
              the structure and content of a webpage using tags.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3">CSS</h2>
            <p>
              CSS is used to style web pages. It controls colors, fonts,
              spacing, layout, animations, and responsive design.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3">JavaScript</h2>
            <p>
              JavaScript is used to make websites interactive and dynamic, such
              as forms, menus, sliders, popups, and real-time updates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3">React</h2>
            <p>
              React is a declarative JavaScript library for building user
              interfaces with reusable components. It uses a virtual DOM to
              update your web app seamlessly.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;