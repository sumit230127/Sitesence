import React from "react";
import contact_banner from "../Images/contact_banner.webp";
import Footer from "../Components/Footer";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 mt-6 pt-12">
      {/* Hero Section with Image */}
      <div className="w-full h-48 md:h-64">
        <img
          src={contact_banner}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Section */}
      <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-black">Contact Us</h2>
          <h3 className="text-3xl font-bold text-blue-600 mt-2">
            Let’s Build Something Amazing Together!
          </h3>
          <p className="text-gray-600 mt-2">
            Have a project in mind? Whether it's digital marketing, website
            development, or a custom solution, we’re here to help! Get in touch
            today and let’s bring your vision to life.
          </p>

          {/* Contact Details */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-2xl"><FaMapMarkerAlt /></span>
              <p className="text-gray-700">
              333 E Herbert Ave Salt Lake City ,UT,84111
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-2xl"><MdCall /></span>
              <p className="text-gray-700">+91 8018953628</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-2xl"><MdOutlineAttachEmail /></span>
              <p className="text-gray-700">maxsitesence@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-gray-900 w-full">
          <h3 className="text-xl font-bold">Send Message</h3>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            />
            <select className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300">
              <option>Select a Service</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>Digital Marketing</option>
            </select>
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              rows="4"
            ></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;