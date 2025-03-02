import React from "react"
import { useSelector, useDispatch } from 'react-redux'

function Withdraw(){
     const balance = useSelector(state=>state.account.balance); // Access State
     const dispatch  = useDispatch();
     const withdrawHandler = (amount)=>{
          dispatch({type:"WITHDRAW",payload:amount})
     }
     return (
          <div>
               <h1>Main Balance : {balance}</h1>
               <button onClick={()=>withdrawHandler(10)}>Withdraw</button>
          </div>
     )
}
export default Withdraw;
