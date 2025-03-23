import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
  "PPC Advertising",
  "Organic SEO",
  "Website Design",
  "Best Agency",
  "Very Responsive",
  "Amazing Results",
  "Great Value",
];

const generateDummyCards = (category) => {
  return Array.from({ length: 10 }, (_, i) => ({
    name: `User  ${i + 1}`,
    company: `${category} Company ${i + 1}`,
    review: "This service was outstanding!",
    description:
      "The team demonstrated a high level of professionalism and delivered excellent results beyond our expectations.",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    companyLogo: "https://cdn.pixabay.com/photo/2016/06/15/15/17/logo-1453008_960_720.png",
    backgroundImage: "https://cdn.pixabay.com/photo/2016/11/29/09/32/abstract-1867483_960_720.jpg",
  }));
};

const cardData = categories.reduce((acc, category) => {
  acc[category] = generateDummyCards(category);
  return acc;
}, {});

const CustomButton = ({ isActive, onClick, children }) => (
  <button
    className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 border-2 border-yellow-500 ${
      isActive
        ? "bg-yellow-500 text-black"
        : "bg-white text-black hover:bg-yellow-400 hover:text-black"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const CustomCard = ({ name, company, review, description, image, companyLogo, backgroundImage }) => (
  <div className="min-w-[250px] max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative mx-2 bg-white">
    <div className="h-32 w-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-white rounded-full overflow-hidden bg-white">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-2">
        <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/google-784183_960_720.png" alt="Google Logo" className="w-8 h-8" />
        <div className="text-yellow-500 text-lg">★★★★★</div>
      </div>
    </div>
    <div className="px-6 py-4 text-center mt-4 bg-white rounded-b-2xl shadow-md">
      <div className="flex items-center justify-center gap-2">
        <img src={companyLogo} alt={company} className="w-10 h-10 rounded-full bg-white" />
        <div>
          <p className="text-gray-600 text-sm">{name}</p>
          <h3 className="text-xl font-bold text-black">{company}</h3>
        </div>
      </div>
      <p className="bg-yellow-500 text-black font-semibold text-sm px-4 py-2 mt-4 rounded-lg">
        {review}
      </p>
      <p className="text-gray-600 text-sm mt-4">{description}</p>
    </div>
  </div>
);

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold text-center mb-4 text-black">
        Our clients love working with us
      </h2>

      <div className="w-full overflow-x-auto flex justify-center gap-2 mb-6">
        {categories.map((category) => (
          <CustomButton
            key={category}
            isActive={category === selectedCategory}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </CustomButton>
        ))}
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }, 
          1536: { slidesPerView: 4 }, 
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full max-w-6xl"
      >
        {(cardData[selectedCategory] || []).map((card, index) => (
          <SwiperSlide key={index}>
            <CustomCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}