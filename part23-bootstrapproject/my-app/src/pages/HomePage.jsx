import React from "react";

import AboutUs from "../components/AboutUs"
import BackToTop from "../components/BackToTop"
import Contact from "../components/Contact"
import Customers from "../components/Customers.jsx";
import Footer from "../components/Footer.jsx";
import Furniture from "../components/Furniture.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import Properties from "../components/Properties.jsx";
import Services from "../components/Services.jsx";

const HomePage = ()=>{
     return (
          <>
               <Header/>
               <Navbar/>
               <AboutUs/>

               <Contact/>
               <Customers/>
               <Furniture/>
               <Properties/>
               <Services/>

               <BackToTop/>
          </>
     )
};
export default HomePage;

// 26PJ