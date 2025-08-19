import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router" 

const Team = ()=>{
     return (
          <>
          {/* Start Team Section  */}
          <section  id="team" className="bg-light">
               <div className="container">

                    <div className="sectiontitles">
                         <h2>Our Team</h2>
                         <p>Meet the talented individuals behind our success.</p>
                    </div>

                    <div className="row">

                         <div className="col-lg-4 col-md-6 mb-4 teamcards">
                         <div className="card">
                              <img src="https://www.gloryassumptionspace.com/wp-content/uploads/2022/09/4_Types_of_Office_Positions_to_Consider.jpg" className="" alt="user1" />
                              <div className="card-body text-center">
                                   <h3 className="card-title">Ms. Khin Myat Noe</h3>
                                   <p className="card-subtitle lead">Operation Manager</p>
                                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                                   <div className="socialicons">
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-facebook-f"/></Link>
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-x-twitter"/></Link>
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-linkedin-in"/></Link>
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-instagram"/></Link>
                                   </div>
                              </div>
                         </div>
                         </div>

                         <div className="col-lg-4 col-md-6 mb-4 teamcards">
                         <div className="card">
                              <img src="https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/01/what-is-the-difference-web-developer-web-designer.jpg" className="" alt="user2" />
                              <div className="card-body text-center">
                                   <h3 className="card-title">Mr. Htet Paing</h3>
                                   <p className="card-subtitle lead">Project Manager</p>
                                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                                   <div className="socialicons">
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-facebook-f"/></Link>
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-x-twitter"/></Link>
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-linkedin-in"/></Link>
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-instagram"/></Link>
                                   </div>
                              </div>
                         </div>
                         </div>

                         <div className="col-lg-4 col-md-6 mb-4 teamcards">
                         <div className="card">
                              <img src="https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/01/Sam-CF.jpg" className="" alt="user3" />
                              <div className="card-body text-center">
                                   <h3 className="card-title">Mr. Pyae Phyo Paing</h3>
                                   <p className="card-subtitle lead">Founder & CEO</p>
                                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                                   <div className="socialicons">
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-facebook-f"/></Link>
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-x-twitter"/></Link>
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-linkedin-in"/></Link>
                                        <Link to="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-instagram"/></Link>
                                   </div>
                              </div>
                         </div>
                         </div>

                    </div>

               </div>
          </section>
          {/* End Team Section */}
          </>
     )
};
export default Team;