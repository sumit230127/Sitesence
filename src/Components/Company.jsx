import React from 'react';
import Footer from './Footer';
import { Link } from "react-router-dom";
import Mission from "../Images/mission.jpg";
import Vision from "../Images/vision.jpg";
import Logo1 from "../Images/Logo1.svg";
import Logo2 from "../Images/Logo2.svg";
import Logo3 from "../Images/Logo3.svg";
import Logo4 from "../Images/Logo4.svg";
import Logo5 from "../Images/Logo5.svg";
import user from '../Images/user.png';

const CompanyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with background */}
      <div className="bg-blue-600 text-white py-24 relative">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Sitesence Company</h1>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-white"></div>
          </div>
        </div>
        {/* Abstract shape overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,150 L500,0 L500,150 Z" fill="white"></path>
          </svg>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Sitesence, our mission is to empower businesses with innovative digital solutions that drive growth and success in the digital landscape.
              </p>
              <p className="text-gray-600 mb-4">
                We are committed to delivering excellence through cutting-edge technology, creative strategies, and personalized service that exceeds our clients' expectations.
              </p>
              <p className="text-gray-600">
                Our team of experts is dedicated to helping businesses of all sizes transform their digital presence and achieve their goals.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-xl overflow-hidden w-full max-w-md">
                <img src={Mission} alt="Team collaboration" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="rounded-lg shadow-xl overflow-hidden w-full max-w-md">
                <img src={Vision} alt="Future vision" className="w-full h-auto" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                Our vision at Sitesence is to be a global leader in digital transformation, setting new benchmarks in technology and innovation.
              </p>
              <p className="text-gray-600 mb-4">
                We aim to create a world where businesses seamlessly integrate technology to enhance their operations and customer experiences.
              </p>
              <p className="text-gray-600">
                Through continuous learning and innovation, we aspire to drive meaningful change and lasting impact in the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold text-gray-700 text-center mb-6">Our Achievements</h2>
    
    {/* Green underline */}
    <div className="h-1 w-full bg-green-300 mb-12"></div>
    
    {/* Stats section */}
    <div className="flex flex-wrap justify-between items-start mb-16">
      {/* 80+ Designers & Developers */}
      <div className="w-full sm:w-1/2 lg:w-1/4 text-center mb-8 lg:mb-0">
        <div className="text-5xl font-bold text-blue-900 mb-2">80 +</div>
        <p className="text-xl text-gray-700">Designers &<br />Developers</p>
      </div>
      
      {/* 500+ Satisfied Clients */}
      <div className="w-full sm:w-1/2 lg:w-1/4 text-center mb-8 lg:mb-0">
        <div className="text-5xl font-bold text-blue-900 mb-2">500 +</div>
        <p className="text-xl text-gray-700">Satisfied Clients<br />& Growing</p>
      </div>
      
      {/* 900+ Completed Websites */}
      <div className="w-full sm:w-1/2 lg:w-1/4 text-center mb-8 lg:mb-0">
        <div className="text-5xl font-bold text-blue-900 mb-2">900 +</div>
        <p className="text-xl text-gray-700">Completed<br />Websites</p>
      </div>
      
      {/* $100M+ Sales Generated */}
      <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
        <div className="text-5xl font-bold text-blue-900 mb-2">$100M +</div>
        <p className="text-xl text-gray-700">Sales Generated<br />for Clients</p>
      </div>
    </div>
    
    {/* Press mentions */}
    <div className="bg-white p-6 rounded-lg">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/5 text-center mb-4 md:mb-0">
          <img src={Logo1} alt="Forbes logo" className="h-8 mx-auto" />
        </div>
        <div className="w-full md:w-1/5 text-center mb-4 md:mb-0">
          <img src={Logo2} alt="Bloomberg logo" className="h-8 mx-auto" />
        </div>
        <div className="w-full md:w-1/5 text-center mb-4 md:mb-0">
          <img src={Logo3} alt="Inc logo" className="h-8 mx-auto" />
        </div>
        <div className="w-full md:w-1/5 text-center mb-4 md:mb-0">
          <img src={Logo4} alt="NPR logo" className="h-8 mx-auto" />
        </div>
        <div className="w-full md:w-1/5 text-center">
          <img src={Logo5} alt="BusinessWeek logo" className="h-8 mx-auto" />
        </div>
      </div>
      <div className="text-center text-blue-800 font-medium mt-4">
        Mentioned in the Press
      </div>
    </div>
  </div>
</div>

      {/* Our Team */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Meet the talented professionals behind Sitesence who work tirelessly to bring your digital vision to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src={user} alt="Team member" className=" p-25 rounded-full" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Alex Johnson</h3>
                <p className="text-blue-600 mb-3">Founder & CEO</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
              <img src={user} alt="Team member" className=" p-25 rounded-full" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Sarah Chen</h3>
                <p className="text-blue-600 mb-3">Lead Developer</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
              <img src={user} alt="Team member" className=" p-25 rounded-full" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Michael Torres</h3>
                <p className="text-blue-600 mb-3">Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Sitesence to elevate your business with cutting-edge digital solutions.
          </p>
          <Link  to="/contact" className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors duration-300">
            Contact Us Today
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  ); 
};

export default CompanyPage;
