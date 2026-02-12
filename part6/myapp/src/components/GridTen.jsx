// import React,{useState,Fragment,useEffect} from "react"

// const GridTen = (props)=>{
//      const [contact,setContact] = useState(props.data || []);
     
//      useEffect(()=>{
//           setContact(props.data || [])
//      },[props.data]);

//      function addnewperson(newcontact){
//           setContact([...contact,newcontact])
//      }
//      return(
//           <Fragment>
//                <AddForm addnewfun={addnewperson}/>
//                <ContactList data={contact}/>
//           </Fragment>
//      )
// }

// function AddForm(props){
//      const [person,setPerson] = useState('');
//      function changeHandler(e){
//           setPerson(e.target.value);
//      }
//      function submitHandler(e){
//           e.preventDefault();
//           if(person.trim()){
//                props.addnewfun(person)
//                setPerson(''); // clear old history
//           }

          
//      }

//      return(
//           <form onSubmit={submitHandler}>
//                <input type="text" placeholder="Add New Contact" value={person} onChange={changeHandler}/>
//                <button type="submit">Add</button>
//           </form>
//      )
// }

// function ContactList(props){
//      const peoples = props.data;

//      const listitems = peoples.map((people,idx)=>
//           <li key={idx}>{++idx}. {people}</li>
//      );

//      return (
//           <ul>
//                {listitems}
//           </ul>
//      )
// }

// export default GridTen;

// import React,{Fragment,Component} from "react"
// class GridTen extends Component{
//      constructor(props){
//           super(props);
//           this.state = {
//                contact: props.data || [],
//                person:''
//           }
//           this.addnewperson = this.addnewperson.bind(this),
//           this.changeHandler = this.changeHandler.bind(this),
//           this.submitHandler = this.submitHandler.bind(this)
//      }

//      addnewperson(newcontact){
//           this.setState((prevState)=>({
//                contact: [...prevState.contact,newcontact]
//           }));
//      }

//      changeHandler(e){
//           this.setState({
//                person:e.target.value
//           })
//      }

//      submitHandler(e){
//           e.preventDefault();

//           const {person} = this.state;
//           if(person.trim()){
//                this.addnewperson(person);
//                this.setState({person:''});
//           }
//      }

//      render(){
//           const {contact,person} = this.state;
//           return(
//                <Fragment>
//                     <form onSubmit={this.submitHandler}>
//                          <input type="text" placeholder="Add New Contact" value={person} onChange={this.changeHandler}/>
//                          <button type="submit">Add</button>
//                     </form>
//                     <ul>
//                          {contact.map((people,idx)=>(
//                               <li key={idx}>{idx + 1} {people}</li>
//                          ))}
//                     </ul>
//                </Fragment>
//           )
//      }
     
     
// }
// export default GridTen;


// import React,{Fragment,Component} from "react"
// class GridTen extends Component{
//      constructor(props){
//           super(props);
//           this.state = {
//                contact: props.data || [],
//                person:''
//           }
//           this.addnewperson = this.addnewperson.bind(this),
//           this.changeHandler = this.changeHandler.bind(this),
//           this.submitHandler = this.submitHandler.bind(this)
//      }

//      addnewperson(newcontact){
//           this.setState((prevState)=>({
//                contact: [...prevState.contact,newcontact]
//           }));
//      }

//      changeHandler(e){
//           this.setState({
//                person:e.target.value
//           })
//      }

//      submitHandler(e){
//           e.preventDefault();

//           const {person} = this.state;
//           if(person.trim()){
//                this.addnewperson(person);
//                this.setState({person:''});
//           }
//      }

//      render(){
//           const {contact,person} = this.state;
//           return(
//                <Fragment>
//                     <AddForm person={person} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
//                     <ContactList peoples={contact}/>
//                </Fragment>
//           )
//      }
     
     
// }
// export default GridTen;

// class AddForm extends Component{
     
//      render(){
//           return(
//                <form onSubmit={this.props.submitHandler}>
//                     <input type="text" placeholder="Add New Contact" value={this.props.person} onChange={this.props.changeHandler}/>
//                     <button type="submit">Add</button>
//                </form>
//           )
//      }
     
// }

// class ContactList extends Component{
//      render(){
//           const listitems = this.props.peoples.map((people,idx)=>
//                <li key={idx}>{++idx}. {people}</li>
//           );
//           return(
//                <ul>{listitems}</ul>
//           )
//      }
// }
     


// 1.GridThree Component
// In GridThree, you're using an arrow function (clickHandler = () => {...}) for clickHandler. Arrow functions automatically bind the context in which they were defined, so this inside clickHandler refers to the component instance without needing manual binding in the constructor.

// Arrow functions do not have their own this context; instead, they capture the this value of their enclosing context at the time they are defined. Because of this behavior, this in clickHandler refers to the component instance (GridThree), so this.setState works without additional binding.

// 2. GridTen Component
// In GridTen, the methods addnewperson, changeHandler, and submitHandler are defined as regular functions (addnewperson(newcontact) {...}). Regular functions have their own this context, so when they are called, this does not automatically refer to the component instance.

// To ensure these functions have the correct this context (i.e., pointing to the component instance GridTen), you need to bind them manually in the constructor using .bind(this). Otherwise, calling this.setState or accessing this.state inside these methods would cause an error because this would be undefined or reference the wrong context.

// Arrow functions (like in GridThree) inherently bind this to the component, so no manual binding is needed.
// Regular functions (like in GridTen) do not bind this automatically, so they need to be explicitly bound in the constructor using .bind(this). 
// Alternatively, you could convert these methods into arrow functions to avoid manual binding.

// import React,{Fragment,Component} from "react"
// class GridTen extends Component{
//      constructor(props){
//           super(props);
//           this.state = {
//                contact: props.data || [],
//                person:''
//           }
//      }

//      addnewperson = (newcontact)=>{
//           this.setState((prevState)=>({
//                contact: [...prevState.contact,newcontact]
//           }));
//      }

//      changeHandler = (e)=>{
//           this.setState({
//                person:e.target.value
//           })
//      }

//      submitHandler =(e)=>{
//           e.preventDefault();

//           const {person} = this.state;
//           if(person.trim()){
//                this.addnewperson(person);
//                this.setState({person:''});
//           }
//      }

//      render(){
//           const {contact,person} = this.state;
//           return(
//                <Fragment>
//                     <form onSubmit={this.submitHandler}>
//                          <input type="text" placeholder="Add New Contact" value={person} onChange={this.changeHandler}/>
//                          <button type="submit">Add</button>
//                     </form>
//                     <ul>
//                          {contact.map((people,idx)=>(
//                               <li key={idx}>{idx + 1} {people}</li>
//                          ))}
//                     </ul>
//                </Fragment>
//           )
//      }
     
     
// }
// export default GridTen;




import React,{Fragment,Component} from "react"
class GridTen extends Component{
     constructor(props){
          super(props);
          this.state = {
               contact: props.data || [],
               person:''
          }
          this.changeHandler = this.changeHandler.bind(this),
          this.submitHandler = this.submitHandler.bind(this)
     }

     changeHandler(e){
          this.setState({
               person:e.target.value
          })
     }

     submitHandler(e){
          e.preventDefault();

          const {person} = this.state;
          if(person.trim()){
               this.setState((prevState)=>({
                    contact: [...prevState.contact,person]
               }));
               this.setState({person:''});
          }
     }

     render(){
          const {contact,person} = this.state;
          return(
               <Fragment>
                    <AddForm changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
                    <ContactList peoples={contact}/>
               </Fragment>
          )
     }
     
     
}
export default GridTen;

class AddForm extends Component{
     render(){
          let {submitHandler,changeHandler} = this.props;

          return(
               <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Add New Contact" onChange={changeHandler}/>
                    <button type="submit">Add</button>
               </form>
          )
     }
     
}

class ContactList extends Component{
     render(){
          let {peoples} = this.props;
          const listitems = peoples.map((people,idx)=>
               <li key={idx}>{++idx}. {people}</li>
          );
          return(
               <ul>{listitems}</ul>
          )
     }
}
     