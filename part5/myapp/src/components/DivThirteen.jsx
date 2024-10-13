// import React,{useState} from "react";

// const DivThirteen = ()=>{
//      const [formState,setFormState] = useState({
//           firstname:"",
//           lastname:"",
//           city:""
//      });
//      const changeHandler = e=>{
//           // console.log(e.target);
//           // console.log(e.target.name);
//           // console.log(e.target.id);
//           // console.log(e.target.value);

//           // console.log(formState); // {firstname: '', lastname: '', city: ''}

//           setFormState({
//                ...formState, // spread operator
//                [e.target.name]:e.target.value
//           });
//           // to mix with previous formState value
//           // overwrite the previous formState with the entered input value

//            console.log(formState);
//      }         

//      return(
//           <form action="" method="">
//                <div>
//                     <label htmlFor="firstname">First Name</label>
//                     <input type="text" name="firstname" id="first" onChange={changeHandler}/>
//                     <span>{formState.firstname}</span>
//                </div>

//                <div>
//                     <label htmlFor="lastname">Last Name</label>
//                     <input type="text" name="lastname" id="last" onChange={changeHandler}/>
//                     <span>{formState.lastname}</span>
//                </div>

//                <div>
//                     <label htmlFor="city">City</label>
//                     <input type="text" name="city" id="address" onChange={changeHandler}/>
//                     <span>{formState.city}</span>
//                </div>
//           </form>
//      )
// }

// export default DivThirteen;


import React,{useState} from "react";

class DivThirteen extends React.Component{
     constructor(){
          super();
          this.state = {
               firstname:"",
               lastname:"",
               city:""
          }
     }

     render(){
          const changeHandler = e=>{
               // console.log(e.target);
               // console.log(e.target.name);
               // console.log(e.target.id);
               // console.log(e.target.value);
     
               // console.log(formState); // {firstname: '', lastname: '', city: ''}
     
               this.setState({
                    [e.target.name]:e.target.value
               });
               console.log(this.state);
          }  
          return(
             
               <form action="" method="">
                    <div>
                         <label htmlFor="firstname">First Name</label>
                         <input type="text" name="firstname" id="first" onChange={changeHandler}/>
                         <span>{this.state.firstname}</span>
                    </div>
     
                    <div>
                         <label htmlFor="lastname">Last Name</label>
                         <input type="text" name="lastname" id="last" onChange={changeHandler}/>
                         <span>{this.state.lastname}</span>
                    </div>
     
                    <div>
                         <label htmlFor="city">City</label>
                         <input type="text" name="city" id="address" onChange={changeHandler}/>
                         <span>{this.state.city}</span>
                    </div>
               </form>
          )
     }

     
}

export default DivThirteen;

// Understanding State Updates in React
// Asynchronous State Updates:

// React batches state updates for performance reasons. 
// When you call setFormState, React schedules an update but doesn't immediately change the formState variable. 
// As a result, when you log formState right after setFormState, you're seeing the old state, not the updated state.
// Component Re-rendering:
// After setFormState is called, React will re-render the component with the new state. On the next render, formState will reflect the updated value.
// Why console.log(formState) Shows the Old State
// When you log formState immediately after calling setFormState, React hasn't updated the state yet, so it logs the previous state. This is why you don't see the updated state immediately in the console.


// import React,{useState} from "react";

// const DivThirteen = ()=>{
//      const [formState,setFormState] = useState({
//           firstname:"",
//           lastname:"",
//           city:""
//      });
//      const changeHandler = e=>{
//           // console.log(e.target);
//           // console.log(e.target.name);
//           // console.log(e.target.id);
//           // console.log(e.target.value);

//           // console.log(formState); // {firstname: '', lastname: '', city: ''}


//           let newformState = Object.create(formState);
//           newformState[e.target.name] = e.target.value
//           // console.log(newformState);
//           setFormState(
//                newformState
//           );
//      }         

//      return(
//           <form action="" method="">
//                <div>
//                     <label htmlFor="firstname">First Name</label>
//                     <input type="text" name="firstname" id="first" onChange={changeHandler}/>
//                     <span>{formState.firstname}</span>
//                </div>

//                <div>
//                     <label htmlFor="lastname">Last Name</label>
//                     <input type="text" name="lastname" id="last" onChange={changeHandler}/>
//                     <span>{formState.lastname}</span>
//                </div>

//                <div>
//                     <label htmlFor="city">City</label>
//                     <input type="text" name="city" id="address" onChange={changeHandler}/>
//                     <span>{formState.city}</span>
//                </div>
//           </form>
//      )
// }

// export default DivThirteen;


// Key Points:
// State Immutability:
// In React, state should be treated as immutable. This means you should never directly modify the state object. Instead, create a new object or array with the updated values and then set the state using setFormState.
// Direct State Mutation:
// In your code, you do let newformState = formState;. This assigns a reference to the original formState object. When you modify newformState, you are actually modifying the original formState directly. 
// React won't notice this change because the reference to the state object hasn't changed.