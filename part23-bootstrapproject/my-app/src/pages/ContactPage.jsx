import React, {useState,useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import banner4 from "../assets/img/banner/banner4.jpg"

const ContactPage = ()=>{
     return (
          <main className="bg-dark text-light">
               {/* Banner */}
               <section className="text-center d-flex justifiy-content-center align-items-center" style={{
                    minHeight: "70vh",
                    backgroundImage: `url(${banner4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
               }}>
                    <div className="container bg-dark bg-opacity-50 rounded">
                         <h1 className="display-6">Let's Connect</h1>
                         <p className="lead">Have question? Our team is here to help?</p>
                    </div>
               </section>

               <section className="bg-black text-light py-5">

                    <div className="container">
                         <div className="text-center mb-5">
                              <h3 className="mb-4">What Our Clients Say</h3>
                              <p className="lead">Trusted by thousands of customers worldwide.</p>
                         </div>
                         
                         <div className="row g-4">
                              <div className="col-lg-4">
                                   <div className="card h-100 bg-dark border-light border-1 rounded-3">
                                        <div className="card-body p-4">
                                             <div className="d-flex align-items-center mb-4">
                                                  <img src="https://randomuser.me/api/portraits/men/10.jpg" className="rounded-circle me-3" width="60" height="60" alt="men"/>
                                                  <div>
                                                       <h5 className="text-light mb-0">Mr. Aung Aung</h5>
                                                       <p className="text-light mb-0">Manager</p>
                                                  </div>
                                             </div>

                                             <p className="card-text text-light">"The support team was incredibly responsive..."</p>
                                             <div className="text-warning">
                                                  <FontAwesomeIcon icon="fas-solid fa-star" />
                                                  <FontAwesomeIcon icon="fas-solid fa-star" />
                                                  <FontAwesomeIcon icon="fas-solid fa-star" />
                                                  <FontAwesomeIcon icon="fas-solid fa-star" />
                                                  <FontAwesomeIcon icon="fas-solid fa-star" />
                                             </div>
                                          
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="bg-light text-dark py-5">
                    <div className="container">
                         <h3 className="text-center mb-5">Send Us a Message</h3>
                         <div className="row justify-content-center">
                              <div className="col-md-8 mb-4">
                                   <form className="row">
                                        <div className="col-md-6 mb-3">
                                             <label htmlFor="name" className="form-label">Your Name</label>
                                             <input type="text" name="name" id="name" className="form-control form-control-sm" value="" onChange="" placeholder="Enter your name" autofocus required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                             <label htmlFor="email" className="form-label">Your Email</label>
                                             <input type="email" name="email" id="email" className="form-control form-control-sm" value="" onChange="" placeholder="Enter your email" required/>
                                        </div>
                                        <div className="mb-3">
                                             <label htmlFor="message" className="form-label">Your Message</label>
                                             <textarea name="message" id="message" className="form-control form-control-sm" rows="5" value="" onChange="" placeholder="Write " required></textarea>
                                        </div>

                                        <div className="text-end">
                                             <button type="submit" className="btn btn-primary px-4">Submit</button>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="container-fluid p-0">
                    <iframe 
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30559.410419562206!2d96.14515121334486!3d16.78034181618478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec83c9555555%3A0xcf25a230cefc8985!2sBogyoke%20Aung%20San%20Market!5e0!3m2!1sen!2smm!4v1755188286474!5m2!1sen!2smm" 
                         width="100%" 
                         height="450" 
                         style={{border:0}} 
                         allowFullScreen="" 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade"></iframe>
               </section>
          </main>
     )
};
export default ContactPage;