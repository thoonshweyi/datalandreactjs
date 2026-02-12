import { useState } from 'react'
import './App.css'
import {useSelector,useDispatch} from "react-redux"
import {readarticle,writearticle,increment,decrement} from "./store/taskfun"

function App() {
  const todo = useSelector(state=>state.todo.task)
  const times = useSelector(state=>state.times.count)

  const dispatch = useDispatch();

  return (
    <section>
      <h1>Todo: {todo} {times} already</h1>
      <button type='button' onClick={()=>dispatch(readarticle())}>Read Article</button>
      <button type='button' onClick={()=>dispatch(writearticle())} style={{marginLeft:"10px"}}>Write Article</button>

      <button type='button' onClick={()=>dispatch(increment())} style={{marginLeft:"10px"}}>Increment</button>
      <button type='button' onClick={()=>dispatch(decrement())} style={{marginLeft:"10px"}}>Decrement</button>
    </section>
  )
}

export default App
