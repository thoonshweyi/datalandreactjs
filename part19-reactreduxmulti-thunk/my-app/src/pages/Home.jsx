import React from "react"
import { use } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { applyAsync } from "../actions/actionapply";

function Home(){
     const balance = useSelector(state=>state.account.balance); // Access State
     const loan = useSelector(state=>state.loan.loan); // Access State
     const loading = useSelector(state=>state.loader.loading); // Access Loading State

     const dispatch = useDispatch();
     const loanHandler = ()=>{
          dispatch({type:"APPLY"})
     }
     const applyloadingHandler = ()=>{
          dispatch(applyAsync());
     }

     return(
          <div>
               <h1>Main Balance : {balance}</h1>
               <h3>{loan ? "You alerady apply loan!" : "Do you want Loan from bank? " }</h3>
               {/* <button type="button" onClick={()=>loanHandler()} disabled={loan ? 'true' : ''}>{loan ? "Loan Applied" : "Apply Loan"}</button> */}
               <button type="button" onClick={()=>applyloadingHandler()} disabled={loan || loading}>{  loading ? 'Processing....' : loan ? "Loan Applied" : "Apply Loan"}</button>
          </div>
     )
}
export default Home;


// Normally, Redux expects an action object
// This function gets called by redux-thunk, and it receives dispatch as a parameter so you can call multiple actions inside it — even after an async operation like setTimeout or fetch().

// Real-life Analogy: Restaurant Order
// You (React component) go to a restaurant and place an order (call dispatch()).

// Normally, you just give them a plain ticket (an object): “Burger”.

// But now, you give them a recipe (a function): “Make me a burger like this: first toast the bun, then grill meat...”

// Redux (the waiter) doesn’t know how to handle that recipe — unless you have a chef (Redux Thunk) who knows how to read and cook from the recipe (function).
// The dispatch parameter is automatically passed to the function you return from your action (thunk) by the Redux Thunk middleware.