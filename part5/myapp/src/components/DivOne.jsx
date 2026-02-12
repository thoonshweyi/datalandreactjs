// import React from "react";

// const DivOne = (props)=>{     
//      return(
//           <div>
//                <h4>Hello i am {props.name}. I am {props.age} years old.</h4>
//           </div>
//      );
// }
// export default DivOne;


// Note :: this keyword needed if no constructor
// Note:: props, this keyword no need in constructor

// import React from "react";
// class DivOne extends React.Component{
//      render(){     
//           return(
//                <div>
//                     <h4>Hello i am {this.props.name}. I am {this.props.age} years old.</h4>
//                </div>
//           );
//      }
// }
// export default DivOne;


import React from "react";

class DivOne extends React.Component{
     constructor(props){
          super(props);
          this.state={
               getname:props.name,
               getage:props.age
          }
     }
     render(){     
          return(
               <div>
                    <h4>Hello i am {this.state.getname}. I am {this.state.getage} years old.</h4>
               </div>
          );
     }
}
export default DivOne;


//= In main.jsx
//   <DivOne name='aung aung' age='30'/>
//    <DivOne name='Su Su'/>

// *result
// Hello i am aung aung. I am 30 years old.
// Hello i am Su Su. I am years old.