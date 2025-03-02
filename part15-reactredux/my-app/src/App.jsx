import { useState } from 'react'
import './App.css'
import {useSelector,useDispatch} from "react-redux"
import {readarticle,writearticle} from "./store/taskfun"

function App() {
  const todo = useSelector(state=>state.todo.task)
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Todo: {todo}</h1>
      <button type='button' onClick={()=>dispatch(readarticle())}>Read Article</button>
      <button type='button' onClick={()=>dispatch(writearticle())} style={{marginLeft:"10px"}}>Write Article</button>
    </section>
  )
}

export default App
