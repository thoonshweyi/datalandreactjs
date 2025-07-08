import React from "react";
import {Link} from "react-router";
import favicon from "../assets/img/fav/favicon.png"
const Navbar = ()=>{
     return (
          <nav class="navbar navbar-expand-lg fixed-top">
               <Link to="/" className="navbar-brand text-light mx-3">
                    <img src={favicon} width="70px" alt="favicon"  
                         // onError={(e)=>{
                         //      e.target.onError  = null;
                         //      e.target.src = ""
                         // }}
                    />
                    <span class="text-uppercase fw-bold h2 mx-2">Plannco <span className="h3">Home Decoration</span></span>
               </Link>

               <button type="button" class="navbar-toggler navbuttons" data-bs-toggle="collapse" data-bs-target="#nav">
                    <div class="bg-light lines1"></div>
                    <div class="bg-light lines2"></div>
                    <div class="bg-light lines3"></div>
               </button>

               <div id="nav" class="navbar-collapse collapse justify-content-end text-uppercase fw-bold">
                    <ul class="navbar-nav">
                         <li class="nav-item"><Link to="/" class="nav-link mx-2 menuitems">Home</Link></li>
                         <li class="nav-item"><Link to="/about" class="nav-link mx-2 menuitems">About Us</Link></li>
                         <li class="nav-item"><Link to="/properties" class="nav-link mx-2 menuitems">Properties</Link></li>
                         <li class="nav-item"><Link to="/services" class="nav-link mx-2 menuitems">Services</Link></li>
                         <li class="nav-item"><Link to="/customers" class="nav-link mx-2 menuitems">Customer</Link></li>
                         <li class="nav-item"><Link to="/furnitures" class="nav-link mx-2 menuitems">Furniture</Link></li>
                         <li class="nav-item"><Link to="/contacts" class="nav-link mx-2 menuitems">Contact</Link></li>
                    </ul>
               </div>
          </nav>
     )
};
export default Navbar;