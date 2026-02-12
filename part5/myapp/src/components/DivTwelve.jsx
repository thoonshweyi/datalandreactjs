// import React,{Fragment, useState, useEffect} from "react"

// const DivTwelve = ()=>{
//      const getinitidx = ()=>{
//           const savedidx = localStorage.getItem("mynewdb");
//           return savedidx ? parseInt(savedidx) : 0 ; 
//      }

//      const [idxState,setIdxState] = useState(getinitidx); // will be 0 or saved idx

//      useEffect(()=>{
//           localStorage.setItem("mynewdb",idxState);
//      },[idxState]);

//      const incclickHandler = ()=>{
//           setIdxState(idxState=>idxState+1);
//      }
//      const decclickHandler = ()=>{
//           setIdxState(idxState=>idxState-1);    
//      }
//      const resetclickHandler = ()=>{
//           setIdxState(0);
//           localStorage.clear();
//      }
//      return(
//           <Fragment>
//                <p>{idxState}</p>
//                <button type="button" onClick={incclickHandler}>Click Increment</button>
//                <button type="button" onClick={decclickHandler}>Click Decrement</button>
//                <button type="button" onClick={resetclickHandler}>Reset Me</button>
//           </Fragment>
//      )
// }

// export default DivTwelve;



import React,{Fragment} from "react"

class DivTwelve extends React.Component{
     constructor(){
          super();
          const savedidx = localStorage.getItem("mynewdb");
          this.state = {
               idx:savedidx ? parseInt(savedidx) : 0 
          }
     }

     // componentDidMount(){
     //      console.log("i am did mount");
     // }

     componentDidUpdate(){
          console.log("i am did update idx = "+this.state.idx)
          localStorage.setItem("mynewdb",this.state.idx)
     }

     
     render(){
          const incclickHandler = ()=>{
               this.setState({
                    idx : this.state.idx + 1
               });
          }
          const decclickHandler = ()=>{
               this.setState({
                    idx : this.state.idx - 1
               });    
          }
          const resetclickHandler = ()=>{
               this.setState({
                    idx:0
               });
               localStorage.clear();
          }
          return(
               <Fragment>
                    <p>{this.state.idx}</p>
                    <button type="button" onClick={incclickHandler}>Click Increment</button>
                    <button type="button" onClick={decclickHandler}>Click Decrement</button>
                    <button type="button" onClick={resetclickHandler}>Reset Me</button>
               </Fragment>
          )
     }
     
}

export default DivTwelve;

// componentDidMount() 
//   - run only one time at the start
//  componentDidUpdate()
//   - run on every changes 
//   - do run at the start