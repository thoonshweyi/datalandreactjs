import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router"
import {adduser} from "./../../store/usersreducer";

export default function AddUser(){
     const [name,setName] = useState('');
     const [email,setEmail] = useState('');
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const submitHandler = async(e)=>{
          e.preventDefault();

          try{
               await dispatch(adduser({name,email})).unwrap();
               navigate('/');
          }catch(err){
               console.log('Add user failed',err);
          }
     }

     return (
          <div>
               <h3>Add New User</h3>
               <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
               </form>
          </div>
     )
}