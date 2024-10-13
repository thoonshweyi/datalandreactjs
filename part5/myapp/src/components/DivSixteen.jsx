// import React,{useState} from "react";

// const DivSixteen = ()=>{
//      const defaultselectvalue = 'Choose a country'
//      const init = {
//           firstname:"",
//           lastname:"",
//           country:"",
//           bio:""
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
          // <form action="" method="" onSubmit={submitHandler}>
          //      <div>
          //           <label htmlFor="firstname">First Name</label>
          //           <input type="text" name="firstname" id="first" onChange={changeHandler} value={formState.firstname}/>
          //           <span>{formState.firstname}</span>
          //      </div>

          //      <div>
          //           <label htmlFor="lastname">Last Name</label>
          //           <input type="text" name="lastname" id="last" onChange={changeHandler} value={formState.lastname}/>
          //           <span>{formState.lastname}</span>
          //      </div>
          //      <div>
          //           <label htmlFor="country">Country</label>
          //           <select name="country" id="country" onChange={changeHandler} value={formState.country}>
          //                <option>{defaultselectvalue}</option>
          //                <option value="mm">Myanmar</option>
          //                <option value="th">Thai</option>
          //                <option value="indo">Indonesia</option>   
          //           </select>
          //           <span>{formState.country}</span>
          //      </div>
          //      <div>
          //           <label htmlFor="bio">Bio</label>
          //           <textarea name="bio" id="bio" onChange={changeHandler} value={formState.bio}></textarea>
          //           <span>{formState.bio}</span>
          //      </div>

          //      <button type="button" onClick={clickHandler}>Clear</button>
          //      <button type="submit">Save</button>
          // </form>
//      )
// }

// export default DivSixteen;


import React,{useState} from "react";

class DivSixteen extends React.Component{
     constructor(){
          super();
          this.state = {
               firstname:"",
               lastname:"",
               country:'',
               bio:''
          }
     }

     render(){
          const defaultselectvalue = "Choose a country";

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
                    city:"",
                    country:'',
                    bio:''
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
                         <label htmlFor="country">Country</label>
                         <select name="country" id="country" onChange={changeHandler} value={this.state.country}>
                              <option>{defaultselectvalue}</option>
                              <option value="mm">Myanmar</option>
                              <option value="th">Thai</option>
                              <option value="indo">Indonesia</option>   
                         </select>
                         <span>{this.state.country}</span>
                    </div>
                    <div>
                         <label htmlFor="bio">Bio</label>
                         <textarea name="bio" id="bio" onChange={changeHandler} value={this.state.bio}></textarea>
                         <span>{this.state.bio}</span>
                    </div>

                    <button type="button" onClick={clickHandler}>Clear</button>
                    <button type="submit">Save</button>
               </form>
          )
     }

     
}

export default DivSixteen;
