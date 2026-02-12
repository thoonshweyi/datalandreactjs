import React, { useEffect,useState } from "react";
import {Link} from "react-router" 
import favicon from "./../assets/img/fav/favicon.png"

const Navbar = ()=>{
     const [scrolled,setScrolled] = useState(false);
     useEffect(()=>{
          const scrollHandler = ()=>{
               const getscrolly = window.scrollY
               setScrolled(getscrolly > 50)
          }

          window.addEventListener("scroll",scrollHandler);
     });

     return (
          <>
          {/* start navbar  */}
          <nav className={`navbar navbar-expand-md navbar-dark fixed-top ${scrolled ? "scrolleds": ''}`}>
               <div className="container">

                    <Link to="/" className="navbar-brand">
                    <img src={favicon} width="40" alt="sitelogo" />
                    <span className="d-none d-md-inline ms-2">PTT Software Co.,Ltd</span>
                    </Link>

                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" >
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="nav" className="navbar-collapse collapse justify-content-between">

                    <ul className="navbar-nav">
                         <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                         <li className="nav-item"><Link to="/clients" className="nav-link">Clients</Link></li>
                         <li className="nav-item"><Link to="/abouts" className="nav-link">About</Link></li>
                         <li className="nav-item btn-group">
                              <Link to="#software" className="nav-link" data-bs-toggle="dropdown">Software <i className="fa-solid fa-caret-down"></i></Link>
                              <ul className="dropdown-menu">
                                   <li><Link to="javascript:void(0);" className="dropdown-item">Android App</Link></li>
                                   <li><Link to="javascript:void(0);" className="dropdown-item">IOS App</Link></li>
                                   <li><Link to="javascript:void(0);" className="dropdown-item">Linux App</Link></li>
                                   <li><Link to="javascript:void(0);" className="dropdown-item">Windows App</Link></li>
                              </ul>
                         </li>
                         <li className="nav-item"><Link to="/pricings" className="nav-link">Special Pricing</Link></li>
                         <li className="nav-item"><Link to="/contacts" className="nav-link">Contact Us</Link></li>
                    </ul>

                    <div>
                         <Link to="#signupmodal" className="btn btn-outline-light btn-sm rounded-pill" data-bs-toggle="modal">Sign Up</Link>
                    </div>

                    </div>

               </div>
          </nav>
          {/* end navbar  */}
          </>
     )
};
export default Navbar;