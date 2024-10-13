// import React,{useState} from "react";


// export default function CardTen(){
//      let counter = 1;
//      const counterarrs = useState(0);

//      // console.log(counterarrs); // (2) [0, ƒ]   
//      // console.log(counterarrs[0]); // 0         
//      // console.log(counterarrs[1]); // function () { [native code] }

//      const counterState = counterarrs[0];
//      const setCounterState = counterarrs[1];
//      console.log(counterState); // 1000
//      console.log(setCounterState);// function () { [native code] }


//      const handleClick = ()=>{
//           // console.log("i am working");

//           // counter++;
//           // console.log(counter); // increment in console. com ui don't increase! so we need state 
          
//           setCounterState(counterState + 1);
//      }
//      return (
//           <div>
//                {/* <p>{counter}</p> */}

//                <p>{counterState}</p>
//                <button onClick={handleClick}>Add Now</button>
//           </div>
//      )
// }


// useState can't use in class component
import React from "react";

class CardTen extends React.Component{
     constructor(){
          super();
          this.state = {
               counter:1
          }
     }

     handleClick = ()=>{
          // console.log("i am working");

          this.state.counter++;
          // console.log(this.state.counter); // increment in console. com ui don't increase! so we need state 
          this.setState({
               counter:this.state.counter
          });
     }
     render(){
          
          return (
               <div>
     
                    <p>{this.state.counter}</p>
                    <button onClick={this.handleClick}>Add Now</button>
               </div>
          )
    }
     
}
export default CardTen;

// handleClick() = outside render()
//  - don't need to declare variable with const, let
//   - call by this.handleClick


// =>useState in functional component 
//   In React, useState is a Hook that allows you to add state to a functional component.
//   State in React refers to data that can change over time, and when the state changes, 
//   the component re-renders to reflect those changes.

//   #How useState Works
//        When you call useState, it returns an array with two elements:
//        State variable: The current state value.
//        Setter function: A function that lets you update the state.

//   Initialization: const [count, setCount] = useState(0);
//   Using the state: {count}
//   Updating the state: setCount(count + 1)

//   #How React Handles Re-rendering with useState
//   Initial Render:
//        When the component renders for the first time, React runs the entire function from top to bottom.
//        useState is called, and the initial state value you provided (e.g., 0) is used.
//        The JSX (UI elements) is rendered based on this initial state
//   State Update:
//        When you call the setter function (e.g., setCount), React schedules a re-render of the component.
//   Re-render Process:
//        During the re-render, the entire function runs again, but this time, useState does not initialize the state to the initial value (e.g., 0). 
//             Instead, it returns the current state value.
//        Only the parts of the component that depend on the updated state will reflect the new state. However, React re-executes the entire function, not just parts of it.
//        The JSX is then recalculated using this updated state.

// =>state with class component
//   State Initialization:
//        The state is initialized in the constructor using this.state.
//        super(props) is called to ensure that the component is properly set up before this.state is used.
//   Rendering with State:
//        In the render method, you access the state using this.state.
//        The component's UI reflects the current state.
//   Updating State:
//        State is updated using the setState method.
//        When setState is called, React schedules a re-render of the component,
//   Re-rendering:
//        When the state is updated via setState, the render method is called again with the updated state.
