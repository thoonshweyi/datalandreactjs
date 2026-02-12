// import React,{Fragment, Gragment,useState} from 'react'
// const GridFive = ()=>{
//      const [ison,setIson] = useState(false);
//      const Onmsg = ()=>(<p>Lighting is ON.</p>)
//      const Offmsg = ()=>(<p>Lighting already OFF.</p>)
//      const clickHandler = ()=>{    
//           setIson(x => !x)
//      }

//      // method 1
//      // const IsOnOff = ({current})=>{
//      //      if(current){
//      //           return <Onmsg />
//      //      }else{
//      //           return <Offmsg />
//      //      }
//      // }

//      // method 2
//      // let message;
//      // if(ison){
//      //      message = <Onmsg />
//      // }else{
//      //      message = <Offmsg />
//      // }

//      // method 3
//      // const message = ()=>{
//      //      if(ison){
//      //           return <Onmsg />;
//      //      }else{
//      //           return <Offmsg />;
//      //      }
//      // }
//      return(
//           <Fragment>
//                <h3>Lighting</h3>
//                {/* method 1 by component*/}
//                {/* <IsOnOff current={ison}/> */}

//                {/* method 2 by variable */}
//                {/* {message} */}

//                {/* method 3 by function */}
//                {/* {message()} */}


//                {/* method 4 by ternary operator */}
//                {ison ? <Onmsg /> : <Offmsg/>}

//                <button type='button' onClick={clickHandler}>Switch</button>

//           </Fragment>
          
//      )
// }
// export default GridFive;

// (x) => !x: This is a functional update. Instead of directly using the current value (isOn), we use a function that takes the previous state value (x) and returns the new state value.




import React,{Fragment,Component} from 'react'
class GridFive extends React.Component{

     constructor(props){
          super(props);
          this.state = {
               ison : false
          }
     }

     Onmsg = ()=>(<p>Lighting is ON.</p>)
     Offmsg = ()=>(<p>Lighting already OFF.</p>)

     clickHandler = ()=>{    
          this.setState((preState)=>({
               ison: !preState.ison // Toogle the ison state
          }))
     }

     // method 1
     // IsOnOff = ({current})=>{
     //      return current ? <this.Onmsg /> : <this.Offmsg/>;
     // }

     
     render(){
          const {ison} = this.state;

          // method 2
          // let message;
          // if(ison){
          //      message = <this.Onmsg />
          // }else{
          //      message = <this.Offmsg />
          // }


          // method 3
          // const message = ()=>{
          //      return ison ? <this.Onmsg /> : <this.Offmsg/>;
          // }
          return(
               <Fragment>
                    <h3>Lighting</h3>
                    {/* method 1 by component*/}
                    {/* <this.IsOnOff current={ison}/> */}
     
                    {/* method 2 by variable */}
                    {/* {message} */}
     
                    {/* method3 by function */}
                    {/* {message()} */}
     
     
                    {/* method 4 by ternary operator */}
                    {ison ? <this.Onmsg /> : <this.Offmsg/>}
     
                    <button type='button' onClick={this.clickHandler}>Switch</button>
     
               </Fragment>
               
          )
     }
    
}
export default GridFive;

// const {ison} = this.state;
// **** Object destructuring for state object 
// -reduct the recursive calling of this.state