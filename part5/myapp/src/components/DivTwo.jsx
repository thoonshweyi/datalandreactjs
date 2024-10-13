// import React from "react";

// const DivTwo = ({name,age})=>{     
//      return(
//           <div>
//                <h4>Hello i am {name}. I am {age} years old.</h4>
//           </div>
//      );
// }
// DivTwo.defaultProps = {
//      name:"Honey Nway Oo",
//      age: 25
// }
// export default DivTwo;


// Note :: this keyword needed if no constructor
// Note:: props, this keyword no need in constructor

// import React from "react";
// class DivTwo extends React.Component{
//      render(){     
//           return(
//                <div>
//                     <h4>Hello i am {this.props.name}. I am {this.props.age} years old.</h4>
//                </div>
//           );
//      }
// }
// DivTwo.defaultProps = {
//      name:"Honey Nway Oo",
//      age: 25
// }
// export default DivTwo;


import React from "react";
class DivTwo extends React.Component{
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
DivTwo.defaultProps = {
     name:"Honey Nway Oo",
     age: 25
}
export default DivTwo;

//= In main.jsx
// <DivTwo name='Kyaw Kyaw' age='40'/>
// <DivTwo name='Hla Hla'/>
// <DivTwo />
// *result
//   Hello i am Kyaw Kyaw. I am 40 years old.
//   Hello i am Hla Hla. I am 25 years old.
//   Hello i am Honey Nway Oo. I am 25 years old.


// *default prop warning appear when using functional component.
// *No default prop warning for class component.