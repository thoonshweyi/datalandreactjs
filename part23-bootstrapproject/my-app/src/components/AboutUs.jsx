import React from "react";
import staffGirl from "../assets/img/users/staffgirl1.png"
const AboutUs = ()=>{
     return (
          <>
               {/* Start About Us Section */}
               <section id="about" class="py-5 aboutuss">
                    <div class="container">
                         <div class="row">
                              <div class="col-sm-6">
                              <img src={staffGirl} alt="staffgirl1"/>
                              </div>

                              <div class="col-sm-6 text-center text-light">
                              <div class="row">
                                   <div class="col-md-12">
                                        <h2 class="text-uppercase">Who are we !!!</h2>
                                        <div class="lines"></div>
                                        <div class="lines"></div>
                                        <div class="lines"></div>
                                   </div>
                                   <div class="col-md-12">
                                        <h5 class="fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="#" class="btn btn-danger rounded-0">Read More</a>
                                   </div>
                              </div>

                              </div>
                         </div>

                    </div>

               </section>
               {/* End About Us Section */}
          </>
     )
};
export default AboutUs;