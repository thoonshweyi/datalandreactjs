import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import phoneicon from "../assets/img/icon/phoneicon.png"


const Quote = ()=>{

     return (
          <>
          {/* Start Request Quotation */}
          <section className="">
               <div className="container">
                    <div className="qutoes">

                         <div className="infos">

                         <div className="me-5"><img src={phoneicon} className="phoneicon" alt="phoneicon"/></div>
                         <div className="text-light">
                              <h2 className="fw-bold text-uppercase">Request A Free Quote</h2>
                              <p className="lead">Get answers and advice from people you want it from.</p>
                         </div>
                         
                         </div>

                         <div>
                         <a href="tel:09422042225" className="btn btn-calls">Call Now <FontAwesomeIcon icon="fa-solid fa-phone-flip" className="ms-2" /></a>
                         </div>
                    </div>
               </div>
          </section>
          {/* End Request Quotation */}
          </>  
     )
};
export default Quote;