import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Contact = ()=>{
     return (
          <>
          {/* Start Contact Section  */}
          <section  id="contact" className="">
               <div className="container">

                    <div className="sectiontitles">
                         <h2>Contact Us</h2>
                         <p>We'd love to hear from you. Get in touch with us today.</p>
                    </div>

                    <div className="row">

                         <div className="col-lg-6 mb-4">
                         <div className="card">
                              <div className="card-header bg-primary text-white">
                                   <h5 className="mb-0">Office Location</h5>
                              </div>
                              <div className="card-body p-0 map-containers">
                                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.0201848948683!2d96.0963974082977!3d21.95829062066801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6dded4ca8883%3A0xb2b6e9911f2de0c5!2sDepartment%20of%20Psychology%2C%20University%20of%20Mandalay!5e0!3m2!1sen!2smm!4v1753970714685!5m2!1sen!2smm" 
                                   style={{border:0}}
                                   allowFullScreen="" 
                                   loading="lazy" 
                                   referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                              <div className="card-footer">
                                   <p><FontAwesomeIcon className="text-primary me-2" icon="fa-solid fa-phone"/>Phone : 0942204225</p>
                                   <p><FontAwesomeIcon className="text-primary me-2" icon="fa-solid fa-envelope"/>Email: info@ptt.com</p>
                                   <p><FontAwesomeIcon className="text-primary me-2" icon="fa-solid fa-location-dot"/>Address: No.123, Aung San St, Mandalay, Myanmar</p>
                              </div>
                         </div>
                         </div>

                         <div className="col-lg-6 mb-4">
                         <div className="card">
                              <div className="card-header bg-primary text-white">
                                   <h5 className="mb-0">Got Questions?</h5>
                              </div>
                              <div className="card-body">
                                   <form className="contactforms" action="" method="">
                                        <div className="mb-3">
                                             <label htmlFor="name" className="form-label">Name</label>
                                             <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required />
                                        </div>
                                        <div className="mb-3">
                                             <label htmlFor="email" className="form-label">Email</label>
                                             <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" required />
                                        </div>
                                        <div className="mb-3">
                                             <label htmlFor="message" className="form-label">Message</label>
                                             <textarea name="message" id="message" className="form-control" rows="5" placeholder="Enter your message" required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 mt-3">Send Message</button>
                                   </form>
                              </div>
                         </div>
                         </div>

                    </div>

               </div>
          </section>
          {/* End Contact Section */}

          </>
     )
};
export default Contact;