import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router"
import {updatetodo} from "./../../store/todosreducer";


export default function EditUser(){
     const {id} = useParams();
     const currenttodo = useSelector((state)=> state.todos.todos.find((todo) => todo.id == parseInt(id)))
     const [name,setName] = useState(currenttodo?.name) || '';
     const [email,setEmail] = useState(currenttodo?.email || '');
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const submitHandler = (e)=>{
          e.preventDefault();

          dispatch(updatetodo({id:parseInt(id),name,email}))
          .unwrap()
          .then(()=>{
               navigate('/');
          });

     }
     if(!currenttodo) return <p>User not found.</p>

     return (
          <div>
               <h3>Edit User</h3>
               <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <button type="submit">Update</button>
               </form>
          </div>
     )
}

// 12TD