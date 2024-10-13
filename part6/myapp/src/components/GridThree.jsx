// import React,{useState} from "react";

// const GridThree = ()=>{
//      const [persons,setPersons] = useState([
//           {name:"mi mi",msg:"btw how old are you?"},
//           {name:"ni ni",msg:"btw what do you do?"},
//           {name:"yi yi",msg:"btw how abot you?"}
//      ])

//      const clickHandler = ()=>{
//           setPersons([
//                {name:"ko ko",msg:"btw how old are you?"},
//                {name:"nyo nyo",msg:"btw what do you do?"},
//                {name:"mo mo",msg:"btw how abot you?"}
//           ])
//      }
//      return(
//           <div>
//                <h4>Thank for helping us {persons[0].name}. {persons[0].msg} </h4>
//                <h4>Thank for helping us {persons[1].name}.  {persons[1].msg} </h4>
//                <h4>Thank for helping us {persons[2].name}.  {persons[2].msg} </h4>
//                <button type="button" onClick={clickHandler}>Click Me</button>
//           </div>
//      )

// }

// export default GridThree;


import React,{Component} from "react";

class GridThree extends React.Component{
     constructor(){
          super();
          this.state = {
               persons : [
                    {name:"mi mi",msg:"btw how old are you?"},
                    {name:"ni ni",msg:"btw what do you do?"},
                    {name:"yi yi",msg:"btw how abot you?"}
               ]
          }
     }

     clickHandler = ()=>{
          this.setState({
               persons:[
                    {name:"ko ko",msg:"btw how old are you?"},
                    {name:"nyo nyo",msg:"btw what do you do?"},
                    {name:"mo mo",msg:"btw how abot you?"}
               ]
          });
     }

     render(){
          return(
               <div>
                    <h4>Thank for helping us {this.state.persons[0].name}. {this.state.persons[0].msg} </h4>
                    <h4>Thank for helping us {this.state.persons[1].name}.  {this.state.persons[1].msg} </h4>
                    <h4>Thank for helping us {this.state.persons[2].name}.  {this.state.persons[2].msg} </h4>
                    <button type="button" onClick={this.clickHandler}>Click Me</button>
               </div>
          )
     }
    

}

export default GridThree;