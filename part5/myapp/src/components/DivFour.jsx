import React,{useState,useEffect} from "react";

const DivFour = ({icon})=>{
     const [state,setState] = useState('');
     useEffect(()=>{
          setState(icon);
     },[icon]);

     return (
          <div>
               <img src={state} alt="" />
          </div>
     )
}

export default DivFour;



// import React from "react";

// class DivFour extends React.Component{
//      constructor(props){
//           super(props);
//           this.state = {
//               icon : this.props.icon
//           }
//      }

//      render(){
//           // console.log(this.state.icon);
//           const {icon} = this.state

//           return (
//                <div>
//                     <img src={icon} alt="" />
//                </div>
//           )
//      }

     
// }

// export default DivFour;

// Key Concepts
// -Side Effect Function:
//   The function passed to useEffect is executed after the component renders.
// -Dependencies:
//   The second argument to useEffect is an array of dependencies. These dependencies determine when the effect should be re-run
//   If you provide an empty array ([]), the effect will only run once,
//   If you provide a list of dependencies, the effect will run whenever any of the dependencies change 
//   If no array is provided, the effect will run after every render.
