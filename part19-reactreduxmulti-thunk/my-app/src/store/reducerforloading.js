const initstate = {
     loading: false
}
function reducerforloading(state=initstate,action){
     console.log(state)
     // console.log(action)
     // console.log(action.type)

     switch(action.type){
          case "LOADING_START":
               return {...state,loading:true}
          case "LOADING_END":
               // return {...state,loading:false}
               return {loading:false}
          default:
               return state;
     } 
}
export default reducerforloading;