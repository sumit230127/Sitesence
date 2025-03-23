import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Herosection";
import Marketingpage from "./Components/Marketingpage";
import Story from "./Components/Story";
import Getintouch from "./Components/Getintouch";
import TeamSection from "./Components/Teamsection";
import Services from "./Components/Services";
import CompanyPage from "./Components/Company";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Ourwork from "./Components/Ourwork";
import ScrollToTop from "./ScrollToTop";
import AndroidDevelopment from "./Components/AndroidDevelopment";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Marketingpage />
                <Story />
                <Getintouch />
                <TeamSection />
                <Footer />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-work" element={<Ourwork />} />
          <Route path="/androiddevelopment" element={<AndroidDevelopment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
