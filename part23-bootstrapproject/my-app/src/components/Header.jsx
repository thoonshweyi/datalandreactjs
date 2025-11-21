import React from "react";
import Navbar from "./Navbar";
const Header = ()=>{
     return (
        <>
            {/* Start Back to Top */}
            <div className="fixed-bottom">
                <a href="#" className="btn-backtotops"><i className="fas fa-arrow-up"></i></a>
            </div>
            {/* End Back to Top */}
            
            {/* Start Header Section */}
            <header>

                {/* Start banner */}

                    <div className="text-light text-center text-md-end banners">
                        <h1 className="display-4 bahherheaders">Welcome to <span className="display-3 text-uppercase">Plannco </span><span className="text-capitalize">home decoration co.,ltd</span></h1>
                        <p className="lead bannerparagraphs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                {/* End banner */}
            </header>
            {/* End Header Section */}
        </>
     )
};
export default Header;