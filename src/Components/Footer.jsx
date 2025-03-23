import React from "react";
import google from'../Images/googlepartner.png';
import Microsoft from'../Images/microsoftpartner.png';
import inc500 from'../Images/inc500.png';
import meta from '../Images/meta.png';
import hosport from '../Images/HubSpot.png';
import amazon from '../Images/Amazon-ads.png';
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 px-6 md:px-20">
      <div className="grid md:flex justify-evenly">
        
        <div className="mt-3">
          <h3 className="font-bold text-lg mb-4"> Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:underline">Web Design</a></li>
            <li><a href="#" className="text-white hover:underline">PPC Advertising</a></li>
            <li><a href="#" className="text-white hover:underline">Organic SEO</a></li>
            <li><a href="#" className="text-white hover:underline">Email & SMS Marketing</a></li>
            <li><a href="#" className="text-white hover:underline">Social Media Marketing</a></li>
          </ul>
        </div>
        
        <div className="mt-3">
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:underline">About Us</a></li>
            {/* <li><a href="#" className="text-white hover:underline">Testimonials</a></li> */}
            {/* <li><a href="#" className="text-white hover:underline">Meet The Team</a></li> */}
            <li><a href="#" className="text-white hover:underline">Our Work</a></li>
            <li><a href="#" className="text-white hover:underline">Blog</a></li>
            <li><a href="/contact" className="text-white hover:underline">Contact Us</a></li>
          </ul>
        </div>
        
        {/* <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:underline">Thought Leadership</a></li>
            <li><a href="/our-work" className="text-white hover:underline">Our Work</a></li>
            <li><a href="#" className="text-white hover:underline">Industries We Serve</a></li>
            <li><a href="#" className="text-white hover:underline">Blog</a></li>
          </ul>
        </div> */}

        {/* <div>
          <h3 className="font-bold text-lg mb-4">Recent Blog Posts</h3>
          <ul className="space-y-3">
            <li>
              <p className="text-sm text-gray-300">February 17, 2025</p>
              <p><a href="#" className="text-white hover:underline">9 of the Most Common Email Marketing Mistakes We've Found While Auditing Over 40 Accounts</a></p>
            </li>
            <li>
              <p className="text-sm text-gray-300">February 14, 2025</p>
              <p><a href="#" className="text-white hover:underline">12 Holiday Email Marketing Strategies To Skyrocket Sales</a></p>
            </li>
            <li>
              <p className="text-sm text-gray-300">February 12, 2025</p>
              <p><a href="#" className="text-white hover:underline">7 Common SEO Myths You Should Ignore In 2025</a></p>
            </li>
          </ul>
        </div> */}
         <div className=" flex flex-col mt-3 gap-2 ">
         <h3 className="font-bold text-lg mb-4 ">Address</h3>
            <div className="flex items-center space-x-3">
              <span className="text-black text-2xl"><FaMapMarkerAlt /></span>
              <p className="text-white">
              333 E Herbert Ave Salt Lake City ,UT,84111
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-black text-2xl"><MdCall /></span>
              <p className="text-white">+91 8018953628</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-black text-2xl"><MdOutlineAttachEmail /></span>
              <p className="text-white">maxsitesence@gmail.com</p>
            </div>
          </div>
      </div>

      <div className="flex flex-wrap justify-center space-x-2 mt-8 gap-5">
        <img src={inc500} alt="Inc 5000" className="h-10 w-18" />
        <img src={google} alt="Google Partner" className="h-10 w-18" />
        <img src= {Microsoft} alt="Microsoft Partner" className="h-10 w-18" />
        <img src={meta} alt="Meta Business Partner" className="h-10 w-18" />
        <img src={hosport} alt="HubSpot Partner" className="h-10 w-18" />
        <img src='https://www.amst.com/user/blogs/35870/imghero-f.png?t=1718395912' alt="BBB A+ Rating" className="h-10 w-18" />
        <img src={amazon} alt="Amazon Ads Partner" className="h-10 w-18" />
        <img src='https://logovtor.com/wp-content/uploads/2021/08/klaviyo-logo-vector.png' alt="Klaviyo Partner" className="h-10 w-18" />
      </div>

      <div className="mt-6 border-t border-gray-800 pt-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
        <span className="text-xl text-white font-[500]">Site<span className="text-white ">sence</span></span>
          <div className="flex justify-center items-center gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl"><BsTwitterX /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaLinkedin /></a>
          </div>
        </div>
        <p className="text-sm">Privacy Policy © 2011-2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
