
import React from "react";
import { motion } from "framer-motion";
import Firstvideo from "../Images/Firstvideo.mp4";
import google from "../Images/googlepartner.png";
import inc500 from "../Images/inc500.png";
import meta from "../Images/meta.png";
import amazon from "../Images/amazon-Ads.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 mt-15 ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source src={Firstvideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0  bg-opacity-50 bg-gray-600/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 ">
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl font-bold  text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {"Award-Winning".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-5xl md:text-5xl font-bold mt-2  text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {"Digital Marketing Agency".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="mt-4 text-lg sm:text-xl  text-white font-[500]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {"We are passionate about Google!".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Form */}
      <div className="relative z-10 bg-black bg-opacity-70 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 bg-gray-400/10 border-black rounded-md text-white  placeholder-white w-full"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 bg-transparent border-black rounded-md text-white placeholder-white w-full"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="p-3 bg-transparent border rounded-md text-white placeholder-white w-full"
        />
        <button className=" text-white px-6 py-3 rounded-md w-full sm:w-auto font-semibold">
          Get Started
        </button>
      </div>

      {/* Partner Logos */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 mt-8 w-full max-w-4xl px-4">
        <img src={inc500} alt="Inc 5000" className="h-10 sm:h-12 " />
        <img src={google} alt="Google Partner" className="h-10 sm:h-12 " />
        <img src={meta} alt="Meta Business Partner" className="h-10 sm:h-12 " />
        <img src={amazon} alt="Amazon Ads Partner" className="h-12 sm:h-15 " />
        <img src='https://www.amst.com/user/blogs/35870/imghero-f.png?t=1718395912' alt="BBB" className="h-10 sm:h-12 " />
      </div>

      {/* "Need Help?" Floating Label */}
      <div className="absolute right-0 top-1/2 bg-yellow-500 px-4 py-2 text-black font-bold transform -rotate-90 z-10 sm:hidden">
        Need Help?
      </div>
    </div>
  );
};

export default HeroSection;
