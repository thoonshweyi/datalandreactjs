import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './store/reducer'
import './App.css'

function App() {
  // console.log(useSelector(state=>state))

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}> Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(100))}> By Amount</button>
        <button onClick={() => dispatch({type:"LOGIN_ERROR",payload: {customerror:"User not found"}})}> User Btn</button>
      
      </div>
    </div>
  )
}

export default App
