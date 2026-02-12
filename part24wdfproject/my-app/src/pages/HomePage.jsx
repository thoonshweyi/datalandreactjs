import React from "react";
import Header from "./../components/Header.jsx"
import Navbar from "./../components/Navbar.jsx"
import Clients from "./../components/Clients.jsx"
import Software from "./../components/Software.jsx"
import Team from "./../components/Team.jsx"
import Pricing from "./../components/Pricing.jsx"
import Contact from "./../components/Contact.jsx"
import Footer from "./../components/Footer.jsx"



const HomePage = ()=>{
     return (
          <>
               <Header />
               <Navbar />
               <Clients />
               <Software />
               <Team />
               <Pricing />
               <Contact />
          </>
     )
};
export default HomePage;