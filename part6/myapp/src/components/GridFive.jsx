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
//      const message = ()=>{
//           if(ison){
//                return <Onmsg />;
//           }else{
//                return <Offmsg />;
//           }
//      }
//      return(
//           <Fragment>
//                <h3>Lighting</h3>
//                {/* method 1 by component*/}
//                {/* <IsOnOff current={ison}/> */}

//                {/* method 2 by variable */}
//                {/* {message} */}

//                {/* method3 by function */}
//                {message()}


//                {/* method 4 by ternary operator */}
//                {/* {ison ? <Onmsg /> : <Offmsg/>} */}

//                <button type='button' onClick={clickHandler}>Switch</button>

//           </Fragment>
          
//      )
// }
// export default GridFive;




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
               ison: !preState.ison // Toogle
          }))
     }

     // method 1
     IsOnOff = ({current})=>{
          return current ? <this.Onmsg /> : <this.Offmsg/>;
     }

     // method 2
     // let message;
     // if(ison){
     //      message = <Onmsg />
     // }else{
     //      message = <Offmsg />
     // }

     // method 3
     // message = ()=>{
     //      if(ison){
     //           return <Onmsg />;
     //      }else{
     //           return <Offmsg />;
     //      }
     // }
     render(){
          const {ison} = this.state;
          return(
               <Fragment>
                    <h3>Lighting</h3>
                    {/* method 1 by component*/}
                    <IsOnOff current={ison}/>
     
                    {/* method 2 by variable */}
                    {/* {message} */}
     
                    {/* method3 by function */}
                    {/* {message()} */}
     
     
                    {/* method 4 by ternary operator */}
                    {/* {ison ? <Onmsg /> : <Offmsg/>} */}
     
                    <button type='button' onClick={clickHandler}>Switch</button>
     
               </Fragment>
               
          )
     }
    
}
export default GridFive;