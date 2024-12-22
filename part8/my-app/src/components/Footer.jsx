import React,{Component} from "react"

import {Link} from "react-router-dom";

class Footer extends Component{

     render(){
          return(
               <div>
                    <footer>
                         {/* <a href="/">2024 &copy; copyright</a> */}
                         <Link to="/">2024 &copy; copyright</Link>
                    </footer>
               </div>
          )
     }
}
export default Footer;