// import React,{useState} from "react";

// const DivFourteen = ()=>{
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

//           //  console.log(formState);
//      }         

//      const submitHandler = (e)=>{
//           console.log(formState)

//           e.preventDefault();
//      }

//      return(
//           <form action="" method="" onSubmit={submitHandler}>
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

//                <button type="submit">Save</button>
//           </form>
//      )
// }

// export default DivFourteen;


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
               // console.log(this.state);
          }  
          const submitHandler = (e)=>{
               console.log(this.state)
               e.preventDefault();
          }
          return(
             
               <form action="" method="" onSubmit={submitHandler}>
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

                    <button type="submit">Save</button>
               </form>
          )
     }

     
}

export default DivThirteen;
