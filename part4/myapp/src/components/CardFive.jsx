// import React,{Fragment} from "react"

// export default function CardFive(){
//      const greeting = "I am card five again by variable";
//      return (
//           // <div>
//           //      <h5>I am card five</h5>
//           //      <h5>I am card five again</h5>
//           // </div>

//           // <>
//           //      <h5>I am card five</h5>
//           //      <h5>I am card five again</h5>
//           //      <h5>{greeting}</h5>
//           // </>

//           // <React.StrictMode>
//           //      <h5>I am card five</h5>
//           //      <h5>I am card five again</h5>
//           //      <h5>{greeting}</h5>
//           // </React.StrictMode>

//           // <React.Fragment>
//           //      <h5>I am card five</h5>
//           //      <h5>I am card five again</h5>
//           //      <h5>{greeting}</h5>
//           // </React.Fragment>

//           <Fragment>
//                <h5>I am card five</h5>
//                <h5>I am card five again</h5>
//                <h5>{greeting}</h5>
//           </Fragment>
//      )
// }

import React,{Component,Fragment} from "react"

export default class CardFive extends Component{
     render(){
          const greeting = "I am card five again by variable";
     
          return( 
               // <div>
               //      <h5>I am card five</h5>
               //      <h5>I am card five again</h5>
               // </div>

               // <>
               //      <h5>I am card five</h5>
               //      <h5>I am card five again</h5>
               //      <h5>{greeting}</h5>
               // </>

               // <React.StrictMode>
               //      <h5>I am card five</h5>
               //      <h5>I am card five again</h5>
               //      <h5>{greeting}</h5>
               // </React.StrictMode>

               // <React.Fragment>
               //      <h5>I am card five</h5>
               //      <h5>I am card five again</h5>
               //      <h5>{greeting}</h5>
               // </React.Fragment>

               <Fragment>
                    <h5>I am card five</h5>
                    <h5>I am card five again</h5>
                    <h5>{greeting}</h5>
               </Fragment>
          )
     }
}

// 25CF