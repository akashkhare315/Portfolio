// // import React from "react";
// // import logo from "../assets/logo2.avif";

// // const Hero = () => {
// //   return (
// //     <div className="w-full h-full  bg-red-500 px-10 py-8  flex justify-between">
// //       <div>
// //         <p className="text-2xl font-semibold leading-none ">Hello,</p>
// //         <h1 className=" text-5xl font-mediumbold mt-2 leading-none">
// //           I'm Akash Khare
// //         </h1>
// //         <p className="text-3xl font-semibold mt-2 leading-none">
// //           Mern Stack Developer
// //         </p>
// //       </div>

// //       <div className="object-cover bg-center">
// //         <img src={logo} alt="Logo" />;
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// import React from "react";
// import logo from "../assets/logo2.avif";

// const Hero = () => {
//   return (
//     <div className="w-full h-screen bg-green-400 px-10 flex items-center justify-between p-5">
//       {/* Left side - text */}
//       <div className="flex flex-col space-y-4">
//         <p className="text-2xl font-semibold leading-none">Hello,</p>
//         <h1 className="text-5xl font-bold leading-none">I'm Akash Khare</h1>
//         <p className="text-3xl font-semibold leading-none">
//           MERN Stack Developer
//         </p>
//       </div>

//       {/* Right side - image */}
//       <div>
//         <img
//           src={logo}
//           alt="Logo"
//           className="w-72 h-72 object-cover rounded-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import logo from "../assets/logo2.avif";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-green-400 to-blue-500 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left side - text */}
      <div className="flex flex-col space-y-4 text-center md:text-left">
        <p className="text-3xl md:text-4xl font-semibold leading-tight text-white">
          Hello,
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
          I'm Akash Khare
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-red-200 leading-relaxed">
          MERN Stack Developer
        </p>
        {/* Optional CTA button */}
        <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200 transition">
          View My Work
        </button>
      </div>

      {/* Right side - image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={logo}
          alt="Profile"
          className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full shadow-lg ring-4 ring-white"
        />
      </div>
    </div>
  );
};

export default Hero;
