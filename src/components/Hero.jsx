// import React from "react";
// import logo from "../assets/logo2.avif";

// const Hero = () => {
//   return (
//     <div className="w-full h-full  bg-red-500 px-10 py-8  flex justify-between">
//       <div>
//         <p className="text-2xl font-semibold leading-none ">Hello,</p>
//         <h1 className=" text-5xl font-mediumbold mt-2 leading-none">
//           I'm Akash Khare
//         </h1>
//         <p className="text-3xl font-semibold mt-2 leading-none">
//           Mern Stack Developer
//         </p>
//       </div>

//       <div className="object-cover bg-center">
//         <img src={logo} alt="Logo" />;
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import logo from "../assets/logo2.avif";

const Hero = () => {
  return (
    <div className="w-full h-screen px-10 flex items-center justify-between">
      {/* Left side - text */}
      <div className="flex flex-col space-y-4">
        <p className="text-2xl font-semibold leading-none">Hello,</p>
        <h1 className="text-5xl font-bold leading-none">I'm Akash Khare</h1>
        <p className="text-3xl font-semibold leading-none">MERN Stack Developer</p>
      </div>

      {/* Right side - image */}
      <div>
        <img
          src={logo}
          alt="Logo"
          className="w-72 h-72 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
