import React from "react"
import { use } from "react";
import { useSelector } from 'react-redux'

function Home(){
     const balance = useSelector(state=>state.account.balance); // Access State
     return <h1>Main Balance : {balance}</h1>
}
export default Home;
