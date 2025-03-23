import React from "react";
import Clutch from "../Images/clutch.png";

const GetInTouch = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-10 bg-blue-900 text-white">
      
      {/* Left Form Section */}
      <div className="w-full md:w-2/5 bg-white p-6 sm:p-8 rounded-lg shadow-lg text-black">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Get Started</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name*" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Email Address*" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Phone Number*" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Company" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Services you are interested in*" className="w-full p-3 border rounded-md" />
          <textarea placeholder="How can we help you?" className="w-full p-3 border rounded-md"></textarea>
          <button className="w-full bg-yellow-500 text-white py-3 rounded-md font-bold hover:bg-yellow-600 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Right Info Section */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 mt-10 md:mt-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
          Ready to speak with a marketing expert?
        </h2>
        <p className="text-lg sm:text-xl mt-2 text-center md:text-left">
          Give us a ring at{" "}
          <span className="text-yellow-500 font-bold">201-870-6000.</span>
        </p>
        <ul className="mt-4 space-y-2 text-center md:text-left">
          <li className="text-lg font-bold">✔ Leading Digital Marketing Agency</li>
          <li className="text-lg font-bold">✔ 900+ Websites Launched</li>
          <li className="text-lg font-bold">✔ $100M+ Client Revenue Generated</li>
        </ul>
        
        {/* Testimonial Section */}
        <div className="mt-6 bg-gray-800 p-6 rounded-lg text-center">
          <img src={Clutch} alt="Clutch Award" className="h-16 sm:h-20 mx-auto mb-4" />
          <p className="italic">"Their procedures, professionalism, and gigantic experience make them beat any other company in the market."</p>
          <p className="font-bold mt-2">Bartek Jaz <span className="text-gray-400">Plesk</span></p>
        </div>
      </div>
      
    </div>
  );
};

export default GetInTouch;