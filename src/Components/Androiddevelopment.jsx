import React from "react";

const AndroidDevelopment = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-black">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?android,technology')" }}>
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Android Development</h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="px-8 md:px-20 py-10">
        <h2 className="text-3xl font-bold mb-4">Innovative Mobile Solutions</h2>
        <p className="text-lg text-gray-700">
          At SiteSense, we specialize in creating cutting-edge Android applications that deliver seamless performance and user satisfaction. Whether it's a startup or an enterprise-level solution, we've got you covered.
        </p>
      </div>

      {/* Features Section */}
      <div className="px-8 md:px-20 py-10 bg-white">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Custom Development</h3>
            <p className="text-gray-600">Tailored solutions that meet your business needs.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Scalable Architecture</h3>
            <p className="text-gray-600">Built to grow with your business demands.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Experienced Team</h3>
            <p className="text-gray-600">Expert developers with years of industry experience.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-8 md:px-20 py-10">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <p className="text-gray-700 italic">"SiteSense delivered a fantastic Android app that exceeded our expectations!"</p>
            <h4 className="text-right text-gray-500 mt-2">- Jane Doe, TechCorp</h4>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <p className="text-gray-700 italic">"The team is professional and their support is unparalleled."</p>
            <h4 className="text-right text-gray-500 mt-2">- John Smith, Innovatech</h4>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 SiteSense. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AndroidDevelopment;
