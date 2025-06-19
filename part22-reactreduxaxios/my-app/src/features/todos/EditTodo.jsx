import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router"
import {edituser} from "./../../store/usersreducer";


export default function EditUser(){
     const {id} = useParams();
     const currentuser = useSelector((state)=> state.users.users.find((user) => user.id == parseInt(id)))
     const [name,setName] = useState(currentuser?.name) || '';
     const [email,setEmail] = useState(currentuser?.email || '');
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const submitHandler = (e)=>{
          e.preventDefault();

          dispatch(edituser({id:parseInt(id),name,email}))
          .unwrap()
          .then(()=>{
               navigate('/');
          });

     }
     if(!currentuser) return <p>User not found.</p>

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