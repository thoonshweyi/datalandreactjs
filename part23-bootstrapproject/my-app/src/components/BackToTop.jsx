import React,{useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowUp } from "@fortawesome/free-solid-svg-icons"

const BackToTop = ()=>{
     const [visible,setVisible] = useState(false);

     useEffect(()=>{
          const togglevisibility = ()=>{
               setVisible(window.scrollY > 300);
          }

          window.addEventListener('scroll',togglevisibility);

          return ()=>window.removeEventListener('scroll',togglevisibility);
     },[]);  

     const scrolltotop = ()=>{
          window.scrollTo({
               top: 0,
               behavior: "smooth"
          });
     }

     if(!visible) return null;

     return (

          <div className="fixed-bottom">
               <a href="javascropt:void(0);" className="btn-backtotops" onClick={scrolltotop}><FontAwesomeIcon icon={faArrowUp} /></a>
          </div>
     )
};
export default BackToTop;