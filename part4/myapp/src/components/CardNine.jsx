// import React from "react";

// export default function CardNine(){
//      let count = 1;
//      const handleClick = ()=>{
//           // console.log("I am working");

//           count++;
//           console.log(count); // inremented in console, dom ui don't increase !
//      }
//      return (
//           <div>
//                <p>{count}</p>
//                <button onClick={handleClick}>Add Task</button>
//           </div>
//      );

// }

import React from "react";
class CardNine extends React.Component{
     render(){
          let count = 1;
          const handleClick = ()=>{
               // console.log("I am working");

               count++;
               console.log(count); // inremented in console, dom ui don't increase !
          }
          return (
               <div>
                    <p>{count}</p>
                    <button onClick={handleClick}>Add Task</button>
               </div>
          );
     }
}

export default CardNine;