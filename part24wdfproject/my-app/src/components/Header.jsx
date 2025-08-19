import React from "react";
import Navbar from "./Navbar.jsx"

const Header = ()=>{
     return (
          <>
          {/* Start Header Section  */}
          <header>

               <Navbar/>

               {/* start banner  */}
               <div id="banner" className="banners">
                    <div className="container">
                         <div className="row">
                         <div className="col-11 col-lg-8 col-md-10 text-center banner-contents">
                              <h1 className="animates">PTT <span>Software Development Company Ltd</span></h1>
                              <h2 className="animates delayones">We help companies to digitalize their businesses.</h2>
                              <p className="animates delaytwos">Properly set processes. Transparent cooperation. Predictable delivery.</p>
                              <a href="#loginmodal" className="btn btn-warning btn-lg rounded-pill animates delaythrees" data-bs-toggle="modal">Get In Touch</a>
                         </div>
                         </div>
                    </div>
               </div>

                    {/* h1 to h6  */}
                    {/* display-1 to display-6  */}

               {/* end banner  */}

          </header>
          {/* End Header Section */}
          </>
     )
};
export default Header;