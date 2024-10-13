// import React from "react";
// import "./CardSix.css";

// export default function CardSix(){
//      const internalstyle = {
//           backgroundColor:"gray",
//           color:"orange",
//           padding:"10px"
//      };

//      const objectstyle = {
//           skb:{backgroundColor:"skyblue"},
//           vlt:{backgroundColor:"violet"},
//           org:{backgroundColor:"orange"},
//      }
//      const getorangecolor = "org";
//      return (
//           <div>
//                <h4 style={{color:"steelblue"}}>Hello World, Welcome to our app </h4>
//                <button style={{color:"steelblue",fontStyle:"italic"}}>Click Me</button>

//                <h4 style={ internalstyle }>Hello Earch, Welcome to our class </h4>
//                <button style={ internalstyle }>Click Me</button>

//                <h3>Hello Man, Welcome to our app </h3>
//                <h5>Hello Guys, Welcome to our app </h5>
//                <h6>Hello Girls, Welcome to our app </h6>

//                <p style={objectstyle.skb}>Thaks You</p>
//                <p style={objectstyle["vlt"]}>Regards</p>
//                <p style={objectstyle[getorangecolor]}>Bye Bye</p>


//                <button className="myexstyle">Click Me</button>

//           </div>
//      );
// }


import React from "react";
import "./CardSix.css";

export default class CardSix extends React.Component{
     render(){
          const internalstyle = {
               backgroundColor:"gray",
               color:"orange",
               padding:"10px"
          };
     
          const objectstyle = {
               skb:{backgroundColor:"skyblue"},
               vlt:{backgroundColor:"violet"},
               org:{backgroundColor:"orange"},
          }
          const getorangecolor = "org";
          return (
               <div>
                    <h4 style={{color:"steelblue"}}>Hello World, Welcome to our app </h4>
                    <button style={{color:"steelblue",fontStyle:"italic"}}>Click Me</button>
     
                    <h4 style={ internalstyle }>Hello Earch, Welcome to our class </h4>
                    <button style={ internalstyle }>Click Me</button>
     
                    <h3>Hello Man, Welcome to our app </h3>
                    <h5>Hello Guys, Welcome to our app </h5>
                    <h6>Hello Girls, Welcome to our app </h6>
     
                    <p style={objectstyle.skb}>Thaks You</p>
                    <p style={objectstyle["vlt"]}>Regards</p>
                    <p style={objectstyle[getorangecolor]}>Bye Bye</p>
     
     
                    <button className="myexstyle">Click Me</button>
     
               </div>
          );
     }
}









