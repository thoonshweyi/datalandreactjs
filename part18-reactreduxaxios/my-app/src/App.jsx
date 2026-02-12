import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addmovie } from './store/moviesreducer'
// import { setrole,getusers } from './store/usersreducer' // before thunk
import { setrole,fetchusers } from './store/usersreducer' // before thunk
import './App.css'

function App() {

  const movies = useSelector((state) => state.movies.list)
  
  // console.log(movies);
  const users = useSelector((state) => state.users)

  const dispatch = useDispatch()


	useEffect(()=>{
		// dispatch(fetchusers())

		dispatch(fetchusers())
		.unwrap()
		.then(response=>{
			console.log(response);
		})
		.catch(err=>{
			console.log(err);
		})
	},[]);

  return (
    <div>
		<div>
			<h3>Movies List</h3>

			<ul>
			{ movies ? movies.map(movie=>(<li key={movie.id}>{movie.title}</li>)) : null }
			</ul>
			{/* <button type='button' onClick={()=>dispatch(addmovie())}>Add New Movie</button> */}
			<button type='button' onClick={()=>dispatch(addmovie({id:4,title:"3 idots"}))}>Add New Movie</button>
			<hr />

			<div>
				{users.loading ? 'loading....' : null}
			</div>
			<ol>
				{users ? users.users.map(user => (<li key={user.id}>{user.name}</li>)) : null}
			</ol>

			<h3>User Role : {users.role}</h3>
			<button type='button' onClick={()=>dispatch(setrole("Admin"))}>Set Admin Role</button>
			
			<hr />

			{/* before thunk */}
			{/* <button type='button' onClick={()=>dispatch(getusers())}>Get Users</button> */}

			{/* after thunk  */}
			<button type='button' onClick={()=>dispatch(fetchusers())}>Get Users</button>
			<button type='button' onClick={()=>dispatch(fetchusers({id:1}))}>Get Single User</button>

		</div>
    </div>
  )
}

export default App
