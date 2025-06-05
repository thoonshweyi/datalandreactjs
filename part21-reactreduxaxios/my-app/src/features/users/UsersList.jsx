import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchusers} from "./../../store/usersreducer";
import {Link} from "react-router";

export default function UserList(){
     const {users} = useSelector((state)=>state.users);
     const dispatch = useDispatch();
     useEffect(()=>{
          dispatch(fetchusers())
          .unwrap()
          .then(response=>{
               console.log(response);
          })
          .catch(err=>{
               console.log(err);
          })
     },[]);
     return(
     <div>
          <h3>User List</h3>
          <Link to='/add'>Create New User</Link>
          <ul>
               {users.map(user=>(
                    <li key={user.id}>
                         {user.name}, {user.email}
                         <Link to={`/edit/${user.id}`}>Edit</Link>
                         <Link to={`/delete/${user.id}`}>Delete</Link>
                    </li>
               ))}
          </ul>
     </div>
     )
}