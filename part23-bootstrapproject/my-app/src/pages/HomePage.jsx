import React from "react";

import AboutUs from "../components/AboutUs"
import Properties from "../components/Properties.jsx";
import Adv from "../components/Adv.jsx";

import BackToTop from "../components/BackToTop"
import Contact from "../components/Contact"
import Furniture from "../components/Furniture.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";

import Services from "../components/Services.jsx";
import Clients from "../components/Clients.jsx";
import Customers from "../components/Customers.jsx";
import Quote from "../components/Quote.jsx";
import Footer from "../components/Footer.jsx";


const HomePage = ()=>{
     return (
          <>
               <Header/>
               <Navbar/>
               <AboutUs/>
               <Properties/>
               <Adv/>
               <Contact/>
               
             
               <Services/>
               <Clients />
               <Customers/>
               <Quote/>
               <Furniture/>

               <BackToTop/>
          </>
     )
};
export default HomePage;

// 26PJ