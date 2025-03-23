import React from "react";
import Storyvideo from "../Images/Storyvideo.mp4";
import Logo1 from "../Images/Logo1.svg";
import Logo2 from "../Images/Logo2.svg";
import Logo3 from "../Images/Logo3.svg";
import Logo4 from "../Images/Logo4.svg";
import Logo5 from "../Images/Logo5.svg";

const Logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

const StoryPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 pb-10">
      
      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center py-10 md:py-20 gap-10">
        
        {/* Video Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg shadow-lg"
          >
            <source src={Storyvideo} type="video/mp4" />
          </video>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left text-gray-400/50">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            SiteSence was founded by a team of passionate innovators dedicated to transforming the digital landscape.
            With a vision for excellence and a commitment to innovation, SiteSence has rapidly grown into a leading name in digital solutions.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Join us as we continue to push the boundaries of creativity and technology, shaping the future with every step we take.
          </p>
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full flex justify-center items-center gap-6 sm:gap-10 py-6 border-t flex-wrap">
        {Logos.map((Logo, index) => (
          <div key={index} className="group transition duration-500 ease-in-out">
            <img
              src={Logo}
              alt={`Logo ${index + 1}`}
              className="w-20 sm:w-24 md:w-28 h-auto object-contain transition-all duration-500 group-hover:opacity-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryPage;