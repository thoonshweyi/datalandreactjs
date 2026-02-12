export const applyAsync = ()=>{

     return (dispatch)=>{
          // start the loading state
          dispatch({type:'LOADING_START'});

          // start async operation
          setTimeout(()=>{
               dispatch({type:"APPLY"})
               // end the loading state after operation
               dispatch({type:'LOADING_END'});
          },2000);


     }
}