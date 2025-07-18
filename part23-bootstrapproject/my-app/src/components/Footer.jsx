import React from "react";
import {Link} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import favicon from "../assets/img/fav/favicon.png"

const Footer = ()=>{
     return (
          <>
               {/* Start Footer Section */}
               <footer className="bg-dark px-5">
                    <div className="container-fluid">
                         <div className="row text-light py-4">

                              <div className="col-md-3 col-sm-6">
                              <h5 className="mb-3"><img src={favicon} width="70px" alt="footericon"/> About PLANNCO</h5>
                              <p className="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </div>

                              <div className="col-md-3 col-sm-6">
                              <h5 className="mb-3">Visit Us</h5>
                              <ul className="list-unstyled">
                                   <li><Link to="/" className="footerlinks">Home</Link></li>
                                   <li><Link to="/abouts" className="footerlinks">About Us</Link></li>
                                   <li><Link to="/properties" className="footerlinks">Properties</Link></li>
                                   <li><Link to="/services" className="footerlinks">Services</Link></li>
                                   <li><Link to="/customers" className="footerlinks">Customers</Link></li>
                                   <li><Link to="/furnitures" className="footerlinks">Furniture</Link></li>
                                   <li><Link to="/contacts" className="footerlinks">Contact</Link></li>
                              </ul>
                              </div>

                              <div className="col-md-3 col-sm-6">
                              <h5 className="mb-3">Need Help?</h5>
                              <ul className="list-unstyled">
                                   <li><Link href="#" className="footerlinks text-uppercase">Customer Service</Link></li>
                                   <li><Link href="#" className="footerlinks text-uppercase">Online Chat</Link></li>
                                   <li><Link href="#" className="footerlinks text-uppercase">Support</Link></li>
                                   <li><Link href="#" className="footerlinks text-uppercase">info@plancco.com</Link></li>
                              </ul>
                              </div>

                              <div className="col-md-3 col-sm-6">
                              <h5 className="mb-3">Contact Us</h5>
                              <ul className="list-unstyled small">
                                   <li>l-9/19(A), 60 Street, Between Theik Pan Street And, Aung San St, Mandalay.</li>
                                   <li>Phone: +95 9 4220 42225 / +95 5 4220 42242</li>
                              </ul>
                              </div>

                         </div>

                         <div className="text-light border-top pt-4 d-flex justify-content-between">
                              <p>&copy; <span id="getyear"></span> Copyright, Inc,All rights reserved</p>
                              <ul className="list-unstyled d-flex">
                              <li className="ms-3"><Link href="#" className="nav-link"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter"/></Link></li>
                              <li className="ms-3"><Link href="#" className="nav-link"><FontAwesomeIcon icon="fa-brands fa-square-instagram"/></Link></li>
                              <li className="ms-3"><Link href="#" className="nav-link"><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></Link></li>
                              </ul>
                         
                         </div>
                    </div>
               </footer>
               {/* End Footer Section */}
          </>
     )
};
export default Footer;