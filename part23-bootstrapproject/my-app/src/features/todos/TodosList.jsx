import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchtodos} from "./../../store/todosreducer";
import {Link} from "react-router";

export default function UserList(){
     const {todos} = useSelector((state)=>state.todos);
     const dispatch = useDispatch();
     useEffect(()=>{
          dispatch(fetchtodos())
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
               {todos.map(todo=>(
                    <li key={todo.id}>
                         {todo.title}, {todo.completed}
                         <Link to={`/edit/${todo.id}`}>Edit</Link>
                         <Link to={`/delete/${todo.id}`}>Delete</Link>
                    </li>
               ))}
          </ul>
     </div>
     )
}