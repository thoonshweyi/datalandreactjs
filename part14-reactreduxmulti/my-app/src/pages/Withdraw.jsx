import React from "react"
import { useSelector, useDispatch } from 'react-redux'

function Withdraw(){
     const balance = useSelector(state=>state.account.balance); // Access State
     const loan = useSelector(state=>state.loan.loan); // Access State
     
     
     const dispatch  = useDispatch();
     const withdrawHandler = (amount)=>{
          dispatch({type:"WITHDRAW",payload:amount})
     }
     return (
          <div>
               <h1>Main Balance : {balance}</h1>
               <h3>{loan ? "You alerady apply loan!" : "Do you want Loan from bank? " }</h3>
               <button onClick={()=>withdrawHandler(10)}>Withdraw</button>
          </div>
     )
}
export default Withdraw;
