import React from "react";

const Pricing = ()=>{
     return (
          <>
          {/* Start Pricing Section  */}
          <section  id="pricing" className="">
               <div className="container">

                    <div className="sectiontitles">
                         <h2>Our Pricing</h2>
                         <p>Simple, transparent pricing that grows with your business.</p>
                    </div>

                    <div className="row">

                         <div className="col-lg-4 mb-4">
                         <div className="pricing-cards">
                              <div className="pricing-headers">
                                   <h5>BLOG SITE</h5>
                                   <h6>$0<span>/month</span></h6>
                              </div>
                              <div className="pricing-bodys">
                                   <ul>
                                        <li>Single User</li>
                                        <li>5GB Storage</li>
                                        <li>Unlimited Public Projects</li>
                                        <li>Community Access</li>
                                        <li>Dedicated Phone Support</li>
                                        <li>Free Subdomain</li>
                                        <li>Monthly Status Report</li>
                                   </ul>
                              </div>
                              <div className="pricing-footers">
                                   <a href="javascript:void(0);" className="btn btn-outline-primary w-100">Get Started</a>
                              </div>
                         </div>
                         </div>

                         <div className="col-lg-4 mb-4">
                         <div className="pricing-cards">
                              <div className="pricing-headers">
                                   <h5>ECOMMERCE SITE</h5>
                                   <h6>$9<span>/month</span></h6>
                              </div>
                              <div className="pricing-bodys">
                                   <ul>
                                        <li>5 Users</li>
                                        <li>50GB Storage</li>
                                        <li>Unlimited Public Projects</li>
                                        <li>Community Access</li>
                                        <li>24/7 Support</li>
                                        <li>Free Subdomain</li>
                                        <li>Monthly Status Report</li>
                                   </ul>
                              </div>
                              <div className="pricing-footers">
                                   <a href="javascript:void(0);" className="btn btn-primary w-100">Get Started</a>
                              </div>
                         </div>
                         </div>

                         <div className="col-lg-4 mb-4">
                         <div className="pricing-cards">
                              <div className="pricing-headers">
                                   <h5>DYNAMIC SITE</h5>
                                   <h6>$49<span>/month</span></h6>
                              </div>
                              <div className="pricing-bodys">
                                   <ul>
                                        <li>Unlimited User</li>
                                        <li>Unlimited Storage</li>
                                        <li>Unlimited Public Projects</li>
                                        <li>Community Access</li>
                                        <li>24/7 Support</li>
                                        <li>Free Subdomain</li>
                                        <li>Monthly Status Report</li>
                                   </ul>
                              </div>
                              <div className="pricing-footers">
                                   <a href="javascript:void(0);" className="btn btn-info w-100">Get Started</a>
                              </div>
                         </div>
                         </div>

                    </div>

               </div>
          </section>
          {/* End Pricing Section */}
          </>
     )
};
export default Pricing;