// import React from "react";

// const DivThree = (props)=>{
//      console.log(props.icon); // /src/assets/react.svg

//      return (
//           <div>
//                <img src={props.icon} alt="" />
//           </div>
//      )
// }

// export default DivThree;

// *Two time console for accessing props.icon


// import React from "react";

// const DivThree = (props)=>{
//      // console.log(props.icon);
//      const {icon} = props;

//      return (
//           <div>
//                <img src={icon} alt="" />
//           </div>
//      )
// }

// export default DivThree;


// import React from "react";

// const DivThree = ({icon})=>{
//      console.log(icon);

//      return (
//           <div>
//                <img src={icon} alt="" />
//           </div>
//      )
// }

// export default DivThree;



// import React from "react";

// class DivThree extends React.Component{
//      render(){
//           console.log(this.props.icon);
//           return (
//                <div>
//                     <img src={this.props.icon} alt="" />
//                </div>
//           )
//      }
     
// }

// export default DivThree;


import React from "react";

class DivThree extends React.Component{
     render(){

          // console.log(this.props.icon);
          const {icon} = this.props;
          return (
               <div>
                    <img src={icon} alt="" />
               </div>
          )
     }
     
}

export default DivThree;