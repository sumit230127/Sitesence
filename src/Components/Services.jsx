import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpeg";
import img3 from "../Images/img3.jpeg";
import img4 from "../Images/img4.jpeg";
import img5 from "../Images/img5.jpeg";
import img6 from "../Images/img6.jpeg";
import heroImage from "../Images/Hero-image.jpeg";
import googlePartner from "../Images/googlepartner.png";
import Microsoft from '../Images/microsoftpartner.png';
import MetaLogo from "../Images/Meta.png";
import amazonAds from "../Images/amazon-ads.png";
import hubspot from "../Images/hubspot.png";
import websitebuildingvideo from "../Images/websitebuildingvideo.mp4";
import Whychooseus from "../Images/Whychooseus.jpeg";
import Webdevelopment from "../Images/webdevelopment.jpeg";
import logo from "../Images/logo.jpeg";
import Footer from "../Components/Footer";
import SEOANALYSIS from "../Images/SEOANALYSIS.jpeg";

const Service = () => {
  const services = [
    { title: "Android Development", imgSrc: img1, link: "/androiddevelopment" },
    { title: "Web Development", imgSrc: img2, link: "/webdevelopment" },
    { title: "Database Management", imgSrc: img3, link: "/databasemanagement" },
    { title: "Business Analytics", imgSrc: img4, link: "/businessanalytics" },
    { title: "Digital Marketing", imgSrc: img5, link: "/digitalmarketing" },
    { title: "Video Creation", imgSrc: img6, link: "/videocreation" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 text-black ">
      <div className="flex flex-col md:flex-row items-center py-10 px-4 md:px-16 mt-12">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            Use the best digital marketing services available to outsmart the competition.
          </h2>
          <p className="text-sm md:text-lg">
            Get more traffic. Acquire more customers. Sell more. We offer proven strategies & reliable execution to exceed your marketing goals.
          </p>
          <div className="flex justify-center md:justify-start space-x-1">
            {[googlePartner, MetaLogo, amazonAds, hubspot].map((img, index) => (
              <img key={index} src={img} alt="Partner Logo" className="h-8 md:h-10" />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src={heroImage} alt="Marketing Analytics" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      <h1 className="text-center text-3xl md:text-4xl font-bold mt-10 mb-10">Our Services</h1>
      <div className="px-4 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                <img src={service.imgSrc} alt={service.title} className="w-full h-40 md:h-60 object-cover" />
                <div className="p-4 text-center">
                  <h2 className="text-lg md:text-xl font-bold">{service.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center px-4 md:px-16 mt-20">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl md:text-5xl font-bold">Why Choose Our Services?</h2>
          <p className="text-sm md:text-lg mt-4">
            Choosing our services means choosing excellence, innovation, and a commitment to your satisfaction. Our team ensures quality solutions tailored to your needs.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✅ <strong>Proven industry experience</strong></li>
            <li>✅ <strong>Cutting-edge technology and tools</strong></li>
            <li>✅ <strong>100% client satisfaction guarantee</strong></li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src={Whychooseus} alt="Why Choose Us" className="w-full rounded-lg" />
        </div>
      </div>

      {/* Video Section */}
      <div className="flex flex-col md:flex-row items-center py-10 px-4 md:px-16">
        <div className="md:w-1/2">
          <video src={websitebuildingvideo} autoPlay muted loop playsInline className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 space-y-4 text-center md:text-left  ml-5">
          <h2 className="text-3xl md:text-5xl font-bold">Transform Your Vision into a Stunning Online Reality</h2>
          <p className="text-sm md:text-lg">
            Your website is your digital storefront. We create engaging and responsive online experiences that drive results.
          </p>
        </div>
      </div>


      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center min-h-[600px]">
  {/* Left Side: Progress Bars */}
  <div className="w-full lg:w-1/2 space-y-10">
    {/* SmartSites Performance */}
    <div>
      <p className="text-gray-800 font-semibold text-lg uppercase text-center lg:text-left">SMARTSITES PERFORMANCE</p>
      <div className="relative mt-3 bg-gray-300 rounded-full h-10 w-full">
        <div className="bg-yellow-400 h-10 rounded-full" style={{ width: "99%" }}></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border-4 border-yellow-400 rounded-full w-14 h-14 flex items-center justify-center">
          <span className="text-black font-semibold text-lg">99%</span>
        </div>
      </div>
    </div>

    {/* BestCompany Overall */}
    <div>
      <p className="text-gray-800 font-semibold text-lg uppercase text-center lg:text-left">BESTCOMPANY™ OVERALL</p>
      <div className="relative mt-3 bg-gray-300 rounded-full h-10 w-full">
        <div className="bg-blue-500 h-10 rounded-full" style={{ width: "83%" }}></div>
        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-white border-4 border-blue-500 rounded-full w-14 h-14 flex items-center justify-center">
          <span className="text-black font-semibold text-lg">83%</span>
        </div>
      </div>
    </div>

    {/* BestCompany Minimum */}
    <div>
      <p className="text-gray-800 font-semibold text-lg uppercase text-center lg:text-left">BESTCOMPANY™ MINIMUM</p>
      <div className="relative mt-3 bg-gray-300 rounded-full h-10 w-full">
        <div className="bg-gray-600 h-10 rounded-full" style={{ width: "40%" }}></div>
        <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 bg-white border-4 border-gray-600 rounded-full w-14 h-14 flex items-center justify-center">
          <span className="text-black font-semibold text-lg">40%</span>
        </div>
      </div>
    </div>
  </div>

  {/* Right Side: Marketing Content */}
  <div className="w-full lg:w-1/2 lg:pl-10 mt-14 lg:mt-0 text-center lg:text-left">
    <h4 className="text-blue-700 font-semibold text-xl flex items-center justify-center lg:justify-start">
      <span className="mr-2">📊</span> Certified Pay-Per-Click Advertising
    </h4>
    <h2 className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl mt-3">
      Improve your ROI with Scalable PPC marketing.
    </h2>
    <p className="text-gray-600 mt-6 text-base sm:text-lg">
      SmartSites is rated in the top 1% of digital marketing agencies.
      Blending performance with exceptional customer service, our PPC
      specialists are some of the best in the industry with a track record
      for growing successful businesses.
    </p>

    {/* Partner Logos */}
    <div className="flex flex-wrap justify-center lg:justify-start items-center mt-8 gap-4 sm:gap-6">
      <img src={googlePartner} alt="Google Partner" className="h-10 sm:h-12"/>
      <img src={Microsoft} alt="Microsoft Partner" className="h-10 sm:h-12"/>
      <img src={MetaLogo} alt="Meta Partner" className="h-10 sm:h-12 m-2"/>
      <img src={amazonAds} alt="Amazon Partner" className="h-10 sm:h-12"/>
    </div>
  </div>
</div>


      {/* SEO Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10 bg-white">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h3 className="text-blue-600 font-semibold text-2xl">Proven Organic SEO</h3>
          <h2 className="text-3xl md:text-5xl font-bold">Drive more organic traffic to your website.</h2>
          <p className="text-sm md:text-lg">
            Get more qualified traffic on search terms that matter most to your business. Trust our proven track record to maximize your online visibility.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={SEOANALYSIS} alt="SEO Analytics" className="rounded-lg w-full" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
