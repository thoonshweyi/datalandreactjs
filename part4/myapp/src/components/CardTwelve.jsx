import React,{useState} from "react";

export default function CardEleven(){
     let idx = 1;
     // Array Destructuring
     const [idxState,setIdxState] = useState(idx); 

     const handleClick = ()=>{
          setIdxState(idxState + 1);
     }
     return (
          <div>
               <p>{idxState}</p>
               <button onClick={handleClick}>Click Now</button>
          </div>
     )
}


// import React from "react";

// class CardEleven extends React.Component{
//      // constructor(){
//      //      super();
//      //      this.state = {
//      //           idx:10
//      //      }
//      // }

//      state = {
//           idx:10
//      }

//      handleClick = ()=>{

//           this.state.idx++;
          
//           this.setState({
//                idx:this.state.idx
//           });
//      }
//      render(){
          
//           return (
//                <div>
     
//                     <p>{this.state.idx}</p>
//                     <button onClick={this.handleClick}>Click Here</button>
//                </div>
//           )
//     }
     
// }
// export default CardEleven;



// import React from "react";

// class CardEleven extends React.Component{

//      state = {
//           idx:10
//      }
//      render(){
//           const handleClick = ()=>{

//                this.state.idx++;
               
//                this.setState({
//                     idx:this.state.idx
//                });
//           }
//           return (
//                <div>
     
//                     <p>{this.state.idx}</p>
//                     <button onClick={handleClick}>Click Here</button>
//                </div>
//           )
//     }
     
// }
// export default CardEleven;