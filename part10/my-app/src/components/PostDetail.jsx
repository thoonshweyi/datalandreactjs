import React,{Fragment} from "react";
import {useParams} from "react-router-dom";
import items from "./data/items.json";

import icon1 from "./../assets/icons/icon1.png";
import icon2 from "./../assets/icons/icon2.png";
import icon3 from "./../assets/icons/icon3.png";
import icon4 from "./../assets/icons/icon4.png";
import icon5 from "./../assets/icons/icon5.png";
import icon6 from "./../assets/icons/icon6.png";

const images = {icon1,icon2,icon3,icon4,icon5,icon6};

const PostDetail = ()=>{
     const {posturl} = useParams(); // get post url from the route
     const item = items.todayposts.find((item)=>item.url === posturl)

     if(!item){
          return <h2>Item not found !</h2>
     }
     return(
          <Fragment>
               <h1>{item.title}</h1>
               <img src={images[item.src]} alt={item.title} />
               <h3>{item.caption}</h3>
               <p>{item.content}</p>
          </Fragment>
     )
}

export default PostDetail;

// http://localhost:5173/posts/vscodes
// *results 
// Item not found !