// import React,{useState,useCallback} from "react"


// const GridSix = ()=>{
//      const [loginState,setLoginState] = useState();

//      const loginHandler = useCallback(()=>{setLoginState(loginState=>true)},[loginState]);
//      const logoutHandler = useCallback(()=>{setLoginState(loginState=>false)},[loginState]); // tell react to memorize

//      let button;
//      if(loginState){
//           button = <LogoutButton handler={logoutHandler}/>
//      }else{
//           button = <LoginButton handler={loginHandler}/>
//      }
//      return(
//           <div>
//                <Greeting status={loginState} />
//                {button}
//           </div>
//      )
// }

// function UserGreeting(){
//      return <h1>Welcome Back Sir, You are already Login</h1>
// }

// function GuestGreeting(){
//      return <h1>Please Login</h1>
// }

// function Greeting(props){
//      const status = props.status;

//      if(status){
//           return <UserGreeting/>
//      }else{
//           return <GuestGreeting/>
//      }

// }

// function LoginButton(props){
//      return(
//           <button type="button" onClick={props.handler}>Login</button>
//      )
// }


// function LogoutButton(props){
//      return(
//           <button type="button" onClick={props.handler}>Logout</button>
//      )
// }

// export default GridSix;

// Memoization: useCallback stores a version of the callback function that remains the same across renders unless its dependencies change.
// Dependencies: The second argument is an array of dependencies. When any dependency in this array changes, the callback function will be recalculated.
// Performance Optimization: It helps prevent the unnecessary re-creation of functions during re-renders, particularly when passing functions down as props to child components.
// When to Use: Use useCallback when:
// You are passing a function to a child component and want to avoid triggering a re-render unless necessary.
// The function performs a heavy computation that you want to avoid repeating unless absolutely necessary.

// In React, useCallback is a hook that allows you to memoize a function, meaning it returns a memoized version of a callback function that only changes if one of its dependencies has changed. This is useful for optimization, especially in scenarios where passing functions as props can cause unnecessary re-renders of child components.


import React from "react";

class GridSix extends React.Component{
     constructor(props){
          super(props)
          this.state = {loginState : false};
          this.loginHandler = this.handlerloginclick.bind(this);
          this.logoutHandler = this.handlerlogoutclick.bind(this);
     }

     handlerloginclick(){
          this.setState({
               loginState:true
          })
     }

     handlerlogoutclick(){
          this.setState({
               loginState:false
          })
     }

     render(){
          let button ;
          if(this.state.loginState){
               button = <LogoutButton handler={this.logoutHandler} />
          }else{
               button = <LoginButton handler={this.loginHandler} />
          }
          return (
               <div>
                    <Greeting status={this.state.loginState} />
                    {button}
               </div>
          )
     }

}
function UserGreeting(){
     return <h1>Welcome Back Sir, You are already Login</h1>
}

function GuestGreeting(){
     return <h1>Please Login</h1>
}

function Greeting(props){
     const status = props.status;

     if(status){
          return <UserGreeting/>
     }else{
          return <GuestGreeting/>
     }

}
function LoginButton(props){
     return(
          <button type="button" onClick={props.handler}>Login</button>
     )
}


function LogoutButton(props){
     return(
          <button type="button" onClick={props.handler}>Logout</button>
     )
}

export default GridSix;


// import React from "react";

// class GridSix extends React.Component{
//      constructor(props){
//           super(props)
//           this.state = {loginState : false};
//      }

//      loginHandler(){
//           this.setState({
//                loginState:true
//           })
//      }

//      logoutHandler(){
//           this.setState({
//                loginState:false
//           })
//      }

//      render(){
//           let button ;
//           if(this.state.loginState){
//                button = <LogoutButton handler={this.logoutHandler.bind(this)} />
//           }else{
//                button = <LoginButton handler={this.loginHandler.bind(this)} />
//           }
//           return (
//                <div>
//                     <Greeting status={this.state.loginState} />
//                     {button}
//                </div>
//           )
//      }

// }
// function UserGreeting(){
//      return <h1>Welcome Back Sir, You are already Login</h1>
// }

// function GuestGreeting(){
//      return <h1>Please Login</h1>
// }

// function Greeting(props){
//      const status = props.status;

//      if(status){
//           return <UserGreeting/>
//      }else{
//           return <GuestGreeting/>
//      }

// }
// function LoginButton(props){
//      return(
//           <button type="button" onClick={props.handler}>Login</button>
//      )
// }


// function LogoutButton(props){
//      return(
//           <button type="button" onClick={props.handler}>Logout</button>
//      )
// }

// export default GridSix;



// bind(this) ensures that this inside the method refers to the class instance (in this case, the GridSix component).
// Without bind(), this inside the method might not refer to the correct context, and methods like this.setState() would not work as expected.
// This is a common issue in JavaScript, especially in React class components, where event handler methods often lose their context.

// Sometimes the bind() method has to be used to prevent losing this.


// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.