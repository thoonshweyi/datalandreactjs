import React from "react";
import Navbar from "./Navbar";
const Header = ()=>{
     return (
        <>
            {/* Start Back to Top */}
            <div class="fixed-bottom">
                <a href="#" class="btn-backtotops"><i class="fas fa-arrow-up"></i></a>
            </div>
            {/* End Back to Top */}
            
            {/* Start Header Section */}
            <header>
                {/* Start nav bar */}
                    <Navbar />
                {/* End nav bar */}
            
                {/* Start banner */}

                    <div class="text-light text-center text-md-end banners">
                        <h1 class="display-4 bahherheaders">Welcome to <span class="display-3 text-uppercase">Plannco </span><span class="text-capitalize">home decoration co.,ltd</span></h1>
                        <p class="lead bannerparagraphs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                {/* End banner */}
            </header>
            {/* End Header Section */}
        </>
     )
};
export default Header;