// import React,{useState} from "react";

// const DivFifteen = ()=>{
//      const init = {
//           firstname:"",
//           lastname:"",
//           city:""
//      }
//      const [formState,setFormState] = useState(init);
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

//      const clickHandler = (e)=>{
//           setFormState(init);
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

//                <button type="button" onClick={clickHandler}>Clear</button>
//                <button type="submit">Save</button>
//           </form>
//      )
// }

// export default DivFifteen;


import React,{useState} from "react";

class DivFifteen extends React.Component{
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

          const clickHandler = (e)=>{
               this.setState({
                    firstname:"",
                    lastname:"",
                    city:""
               });
          }
          return(
             
               <form action="" method="" onSubmit={submitHandler}>
                    <div>
                         <label htmlFor="firstname">First Name</label>
                         <input type="text" name="firstname" id="first" onChange={changeHandler} value={this.state.firstname}/>
                         <span>{this.state.firstname}</span>
                    </div>
     
                    <div>
                         <label htmlFor="lastname">Last Name</label>
                         <input type="text" name="lastname" id="last" onChange={changeHandler} value={this.state.lastname}/>
                         <span>{this.state.lastname}</span>
                    </div>
     
                    <div>
                         <label htmlFor="city">City</label>
                         <input type="text" name="city" id="address" onChange={changeHandler} value={this.state.city}/>
                         <span>{this.state.city}</span>
                    </div>

                    <button type="button" onClick={clickHandler}>Clear</button>
                    <button type="submit">Save</button>
               </form>
          )
     }

     
}

export default DivFifteen;
