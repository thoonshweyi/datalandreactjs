const initialState = {
     task : "Nothing to do"
}

function reducer(state = initialState,action){    
     switch(action.type){
          case "READ":
               return {task:"Aung Aung is Article reading"}
          case "WRITE":
               return {task:"Aung Aung is Article writing"}
          default:
               return state;
     }
}
export default reducer