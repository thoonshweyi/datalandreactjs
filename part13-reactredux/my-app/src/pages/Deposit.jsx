import React from "react"
import { useSelector, useDispatch } from 'react-redux'

function Deposit(){
     const balance = useSelector(state=>state.account.balance); // Access State
     const dispatch  = useDispatch();
     const depositHandler = (amount)=>{
          dispatch({type:"DEPOSIT",payload:amount})
     }
     return (
          <div>
               <h1>Main Balance : {balance}</h1>
               <button onClick={()=>depositHandler(10)}>Deposit</button>
          </div>
     )
}
export default Deposit;
