import React,{useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchtodos, addtodo, updatetodo, deletetodo} from "./store/todosreducer.js";
import './App.css'


function App() {
	const {todos,loading,error} = useSelector(state => state.todos);
	const dispatch = useDispatch();
	const [title,setTitle] = useState();

	useEffect(()=>{
		dispatch(fetchtodos());
	},[])

	const submitHandler = (e)=>{
		e.preventDefault();

		if(title.trim()){
			dispatch(addtodo(title));
			setTitle('');
		}
	}

	if(loading) return <p>Loading....</p>
	if(error) return <p>Error: </p>
  return (
    <section>
		<h3>Todo List</h3>
		<form onSubmit={submitHandler}>
			<input type="text" name="title" value={title} onChange={e=> setTitle(e.target.value)}/>
			<button type="submit">Add Task</button>
		</form>

		<ul>
			{
				todos.map((todo,idx)=>(
					<li key={todo.id}>
						<input type="checkbox" checked={todo.completed} onChange={()=>dispatch(updatetodo({...todo,completed:!todo.completed}))}/>
						{todo.title}
						<button onClick={()=>dispatch(deletetodo(todo.id))}>Delete</button>
					</li>
				))
			}
		</ul>
    </section>
  )
}

export default App

// 29EU