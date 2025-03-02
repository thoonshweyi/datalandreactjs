import React from "react"
import PhotoPost from './PhotoPost.jsx'
import items from "./data/items.json"

import icon1 from "./../assets/icons/icon1.png"
import icon2 from "./../assets/icons/icon2.png"
import icon3 from "./../assets/icons/icon3.png"
import icon4 from "./../assets/icons/icon4.png"
import icon5 from "./../assets/icons/icon5.png"
import icon6 from "./../assets/icons/icon6.png"

const images = {icon1,icon2,icon3,icon4,icon5,icon6};
class AllPosts extends React.Component{
     render(){
          return(
               // <div className="d-flex">
               //      <div className="item-container">
               //           <PhotoPost title="This is new post 1" caption="News Post" src={icon1}/>
               //      </div>
               //      <div className="item-container">
               //           <PhotoPost title="This is new post 2" caption="Sport Post" src={icon2}/>
               //      </div>
               //      <div className="item-container">
               //           <PhotoPost title="This is new post 3" caption="Weacher Post" src={icon3}/>
               //      </div>
               //      <div className="item-container">
               //           <PhotoPost title="This is new post 4" caption="News Post" src={icon4}/>
               //      </div>
               //      <div className="item-container">
               //           <PhotoPost title="This is new post 5" caption="Sport Post" src={icon5}/>
               //      </div>
               //      <div className="item-container">
               //           <PhotoPost title="This is new post 6" caption="Weacher Post" src={icon6}/>
               //      </div>
               // </div>
               
               <div className="d-flex">
                    {items.todayposts.map((item,idx)=>{
                         return( 
                              <div className="item-container" key={idx}>
                                        <PhotoPost title={item.title} caption={item.caption} src={images[item.src]}/>
                              </div>
                         );
                    })}
               </div>
          );
     }
}
export default AllPosts;



// Keys and Values:

// Keys: The names of the keys (icon1, icon2, etc.) become the properties of the images object.
// Values: The variables icon1, icon2, etc., hold the imported image file paths.
// The resulting object looks like this:

// javascript
// Copy code
// const images = {
//     icon1: "path/to/icon1.png",
//     icon2: "path/to/icon2.png",
//     icon3: "path/to/icon3.png",
//     icon4: "path/to/icon4.png",
//     icon5: "path/to/icon5.png",
//     icon6: "path/to/icon6.png"
// };
// Accessing an Image: You can access a specific image by referencing its key in the object:

// javascript
// Copy code
// images.icon1; // Returns "path/to/icon1.png"
// images.icon3; // Returns "path/to/icon3.png"