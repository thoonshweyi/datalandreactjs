import React from "react"
import { use } from "react";
import { useSelector,useDispatch } from 'react-redux'

function Home(){
     const balance = useSelector(state=>state.account.balance); // Access State
     const loan = useSelector(state=>state.loan.loan); // Access State

     const dispatch = useDispatch();
     const loanHandler = ()=>{
          dispatch({type:"APPLY"})
     }

     return(
          <div>
               <h1>Main Balance : {balance}</h1>
               <h3>{loan ? "You alerady apply loan!" : "Do you want Loan from bank? " }</h3>
               <button type="button" onClick={()=>loanHandler()} disabled={loan ? 'true' : ''}>{loan ? "Loan Applied" : "Apply Loan"}</button>
          </div>
     )
}
export default Home;
