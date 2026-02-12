// import React,{Fragment,useState} from 'react'

// const GridSeven = ()=>{
//      const [num,setNum] = useState(0);
//      const [result,setResult] = useState(0);

//      function changeHandler(e){
//           setNum(Number(e.target.value));
//      }

//      function submitHandler(e){
//           e.preventDefault();
//           setResult(result+num);
//      }

//      return(
//           <Fragment>
//                <form action="" onSubmit={submitHandler}>
//                     <input type="number" value={num} onChange={changeHandler} autoFocus/>
//                     <input type="submit" value="Add"/>
//                     <p>Result is {result}</p>
//                </form>
//           </Fragment>
//      )
// }
// export default GridSeven;




import React,{Fragment,Component} from 'react'

class GridSeven extends Component{
     constructor(){
          super();
          this.state={
               num:0,
               result:0
          }

          this.changeHandler = this.changeHandler.bind(this);
          this.submitHandler = this.submitHandler.bind(this);
     }

     changeHandler(e){
          this.setState({num:Number(e.target.value)});
     }

      submitHandler(e){
          e.preventDefault();
          this.setState((preState)=>({
               result:preState.result + preState.num
          }));
     }


     render(){
          return(
               <Fragment>
                    <form action="" onSubmit={this.submitHandler}>
                         <input type="number" value={this.state.num} onChange={this.changeHandler} autoFocus/>
                         <input type="submit" value="Add"/>
                         <p>Result is {this.state.result}</p>
                    </form>
               </Fragment>
          )
     }

     
     
}
export default GridSeven;


// Why You Can’t Clear the Input
// Even though you try to delete the input value (clear it), React re-converts the empty string into 0.
// The input becomes "stuck" at 0 because React keeps setting the state to 0 every time the input is cleared.
// Example 
// 0 - Delete 0 - 0 Again
// 010 - 10    - 10 - Add - 10(result)
// 60          - 60 - Add - 70(result)
// 80          - 80 - Add - 80(result)

// 1. Initial Render
// When the component first renders:
// num is initialized to 0 (useState(0)).
// React assigns this value (num) to the <input> via value={num}.
// So, the input field displays 0 on the screen.
// 2. When You Try to Clear the Input (Delete 0)
// Now, you try to delete the 0 from the input field by pressing backspace.
// The input fires the onChange event with an empty value (''). This means that e.target.value is an empty string at this point.

// In your changeHandler:

// javascript
// Copy code
// setNum(Number(e.target.value)); 
// e.target.value is ''.
// Now, Number('') returns 0 (because in JavaScript, Number('') evaluates to 0).
// React updates the state with 0, because setNum(Number('')) sets num back to 0.

// The component re-renders, and React once again assigns value={num} to the input, which means the input shows 0 again.