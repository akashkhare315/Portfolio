// import React from "react";
// import logo from "../assets/about-img.avif";

// const About = () => {
//   return (
//     <div className="flex justify-between w-screen h-screen bg-grey-300 p-5  items-center">
//       <div className="flex ">
//         <img
//           className="w-72 h-72 object-cover rounded-full"
//           src={logo}
//           alt="Logo"
//         />
//       </div>
//       <div className="flex jusctify-between">
//         <h1>
//           Hi, I’m Akash Khare, a passionate MERN Stack Developer. I love
//           building responsive and user-friendly web applications using React,
//           Node.js, Express, and MongoDB. I’ve created projects like a portfolio
//           website, food delivery app, and real-time chat app, and I’m always
//           exploring new technologies to sharpen my skills. I’m open to
//           collaboration and new opportunities where I can learn and contribute.
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import logo from "../assets/about-img.avif";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-50 flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-12 md:py-16">
      {/* Left side - heading & image */}
      <div className="flex flex-col items-center md:items-start">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left relative text-red-700">
          About Me
          {/* Optional divider line */}
          <span className="block w-20 h-1 bg-red-500 mt-2 rounded"></span>
        </h2>

        {/* Image */}
        <img
          src={logo}
          alt="Profile"
          className="w-48 h-64 md:w-64 md:h-80 object-cover rounded-xl shadow-lg ring-4 ring-white hover:scale-105 transition-transform"
        />
      </div>

      {/* Right side - text */}
      <div className="max-w-2xl text-center md:text-left px-2 md:px-0">
        <p className="font-sans text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 tracking-wide">
          Hi, I’m <span className="font-semibold">Akash Khare</span>, a
          passionate{" "}
          <span className="text-red-500 font-semibold">
            MERN Stack Developer
          </span>
          . I love building responsive and user-friendly web applications using{" "}
          <span className="font-medium">
            React, Node.js, Express, and MongoDB
          </span>
          . I’ve created projects like a portfolio website, food delivery app,
          and real-time chat app, and I’m always exploring new technologies to
          sharpen my skills. I’m open to collaboration and new opportunities
          where I can learn and contribute.
        </p>
      </div>
    </div>
  );
};

export default About;
