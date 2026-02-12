// import React,{useState} from "react";

//  const CardFourteen = ()=>{
//      const [firstname,setFirstname] = useState();
//      const [lastname,setLastname] = useState();

//      const firstnamechangeHandler = (e)=>{
//           // console.log(e.target.value);
//           setFirstname(e.target.value);
//      }

//      const lastnamechangeHandler = (e)=>{
//           // console.log(e.target.value);
//           setLastname(e.target.value);
//      }

//      return (
//           <div>
//                <form action="" method="">
//                     <div>
//                          <label htmlFor="firstname">First Name</label>
//                          <input type="text" name="firstname" id="firstname" onChange={firstnamechangeHandler}/>
//                          <span>{firstname}</span>
//                     </div>
//                     <div>
//                          <label htmlFor="lastname">Last Name</label>
//                          <input type="text" name="lastname" id="lastname" onChange={lastnamechangeHandler}/>
//                          <span>{lastname}</span>
//                     </div>
//                </form>
//           </div>
//      )
// }
// export default CardFourteen;


import React,{useState} from "react";

class CardFourteen extends React.Component{
     constructor(){
          super();
          this.state = {
               firstname : '',
               lastname : ''
          }
     }

     

     render(){
          const firstnamechangeHandler = e=>{
               this.setState({
                    firstname:e.target.value
               })
          }
     
          const lastnamechangeHandler = e=>{
               this.setState({
                    lastname:e.target.value
               })
          }
          return (
               <div>
                    <form action="" method="">
                         <div>
                              <label htmlFor="firstname">First Name</label>
                              <input type="text" name="firstname" id="firstname" onChange={firstnamechangeHandler}/>
                              <span>{this.state.firstname}</span>
                         </div>
                         <div>
                              <label htmlFor="lastname">Last Name</label>
                              <input type="text" name="lastname" id="lastname" onChange={lastnamechangeHandler}/>
                              <span>{this.state.lastname}</span>
                         </div>
                    </form>
               </div>
          )
     }
    
}
export default CardFourteen;


// State Initialization
//   Multiple State Properties: Each piece of state is a property of this object. 
//   For example, you can have firstname and lastname as separate properties within the same state object.
// Accessing State
//   Using this.state: To access the current state values, you use this.state. This refers to the component's state object.
//   Referencing Properties: You can access individual state properties using dot notation.
// Updating State
//   Using setState(): To update the state, you call the setState() method, passing in an object with the new state values. 
//   This object will be merged with the existing state object.
//   Partial State Updates: When you update the state, only the properties you specify in the setState call are updated. 
//   The rest of the state remains unchanged. This is because setState performs a shallow merge, updating only the properties you provide without affecting others.
// Re-rendering
//   Efficient Re-rendering: React is optimized to minimize the impact of re-renders. It uses a virtual DOM to compare the previous and current output, updating only the parts of the actual DOM that have changed.
//   React optimizes the rendering process so that only the parts of the UI dependent on the changed state are updated.