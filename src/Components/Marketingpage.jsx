import React from "react";
import { motion } from "framer-motion";
import Firstvideo from "../Images/Firstvideo.mp4";
import Letter from "../Images/letter.png";
import WebDesignIcon from "../Images/web-design.png";
import EmailMarketingIcon from "../Images/email-marketing.png";
import SEOIcon from "../Images/seo.png";
import PPCMarketingIcon from "../Images/ppc-marketing.png";
import SocialMediaIcon from "../Images/social-media.png";

const services = [
  { name: "Web Design", image: WebDesignIcon, description: "We create visually stunning websites." },
  { name: "Email Marketing", image: EmailMarketingIcon, description: "Engage your audience with powerful emails." },
  { name: "SEO", image: SEOIcon, description: "Rank higher on Google with proven SEO techniques." },
  { name: "PPC Marketing", image: PPCMarketingIcon, description: "Boost your reach with targeted paid ads." },
  { name: "Social Media", image: SocialMediaIcon, description: "Grow your brand with strategic social media campaigns." },
];

const MarketingPage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8 py-16">
      {/* Background Video (Without Absolute Positioning) */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={Firstvideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Wrapper */}
      <div 
        className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center bg-cover bg-center text-white px-4 sm:px-6 lg:px-8 py-10"
        style={{ backgroundImage: `url(${Letter})` }}
      >
        <div className="absolute inset-0 bg-blue-500 bg-opacity-50"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold z-10 text-center">
          Results-driven Marketing
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 z-10 w-full max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 bg-white text-black rounded-lg text-center font-semibold transition duration-300 flex flex-col items-center hover:bg-yellow-400 hover:scale-105 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image */}
              {service.image ? (
                <img src={service.image} alt={service.name} className="h-12 sm:h-16 md:h-20 mb-4 object-contain" />
              ) : (
                <div className="h-12 sm:h-16 md:h-20 mb-4 w-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              {/* Service Name */}
              <span className="text-lg sm:text-xl font-bold">{service.name}</span>
              {/* Service Description */}
              <p className="text-sm sm:text-base text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;