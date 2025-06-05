import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router"
import {edituser} from "./../../store/usersreducer";


export default function EditUser(){
     const {id} = useParams();
     const currentuser = useSelector((state)=> state.users.users.find((user) => user.id == parseInt(id)))
     const [name,setName] = useState(currentuser?.name) || '';
     const [email,setEmail] = useState(currentuser?.email || '');
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const submitHandler = async(e)=>{
          e.preventDefault();

          await dispatch(edituser({id:parseInt(id),name,email}))
          .unwrap()
          .then(()=>{
               navigate('/');

          });

     }
     if(!currentuser) return <p>User not found.</p>

     return (
          <div>
               <h3>Add New User</h3>
               <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Enter Your Name" value={name} onChange={setName(e.target.value)}/>
                    <input type="text" placeholder="Enter Your Name" value={name} onChange={setEmail(e.target.value)}/>
               </form>
          </div>
     )
}

// 15ED