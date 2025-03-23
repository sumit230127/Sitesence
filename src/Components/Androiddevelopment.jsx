import React from 'react';

const AndroidDevelopment = () => {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Image from the Internet */}
      <img 
        src="https://source.unsplash.com/1600x900/?technology,android" 
        alt="Android Development" 
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Android App Development Services
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl">
          Creating innovative, scalable, and secure Android applications tailored to your business needs.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AndroidDevelopment;
