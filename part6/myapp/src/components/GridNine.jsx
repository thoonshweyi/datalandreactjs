import React,{useState,Fragment} from "react"

const GridNine = (props)=>{
     const [contact,setContact] = useState(props.data);
     function addnewperson(newcontact){
          setContact([...contact,newcontact])
     }
     return(
          <Fragment>
               <AddForm addnewfun={addnewperson}/>
               <ContactList data={contact}/>
          </Fragment>
     )
}

function AddForm(props){
     const [person,setPerson] = useState('');
     function changeHandler(e){
          setPerson(e.target.value);
     }
     function submitHandler(e){
          e.preventDefault();
          props.addnewfun(person)
          setPerson('');
     }

     return(
          <form onSubmit={submitHandler}>
               <input type="text" placeholder="Add New Contact" value={person} onChange={changeHandler}/>
               <button type="submit">Add</button>
          </form>
     )
}

function ContactList(props){
     const peoples = props.data;

     const listitems = peoples.map((people,idx)=>
          <li key={idx}>{++idx}. {people}</li>
     );

     return (
          <ul>
               {listitems}
          </ul>
     )
}

export default GridNine;



// import React,{useState,Fragment} from "react"

// const GridNine = (props)=>{
//      const [contact,setContact] = useState(props.data);
//      function addnewperson(newcontact){
//           setContact([...contact,newcontact])
//      }
//      return(
//           <Fragment>
//                <AddForm setterContact={setContact}/>
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
//           props.setterContact((contact)=>[...contact,person])
//           setPerson('');
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

// export default GridNine;