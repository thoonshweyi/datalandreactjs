// import React from "react"

// function UserGreeting(){
//      return <h1>Welcom Sir</h1>
// }

// function GuestGreeting(){
//      return <h1>Please Sign Up</h1>
// }

// function GridTwo(props){
//      const status = props.status;
//      if(status){
//           return <UserGreeting/>
//      }
//      return <GuestGreeting/>
// }
// export default GridTwo;


import React from "react"

class UserGreeting extends React.Component{
     render(){
          return <h1>Welcom Sir</h1>
     }
}

class GuestGreeting extends React.Component{
     render(){
          return <h1>Please Sign Up</h1>
     }
}

class GridTwo extends React.Component{
     render(){
          const status = this.props.status;
          if(status){
               return <UserGreeting/>
          }
          return <GuestGreeting/>
     }
     
}
export default GridTwo;