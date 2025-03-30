const initialState = {
     loan:false
}

function reducerforloan(state=initialState,action){
     switch(action.type){
          case "APPLY":
               return {loan:true}
          default:
               return state
     }
}
export default reducerforloan;