const initialState = {
     task : "Nothing to do",
     count: 0
}

function reducer(state = initialState,action){    
     switch(action.type){
          case "READ":
               return {task:"Aung Aung is reading Article."}
          case "WRITE":
               return {task:"Aung Aung is writing Article."}
          default:
               return state;
     }
}

function timereducer(state = initialState,action){    
     switch(action.type){
          case "INCREMENT":
               return {
                    // ...state,
                    count:state.count+1};
          case "DECREMENT":
               return {
                    // ...state,
                    count:state.count-1
               }
          default:
               return state;
     }
}
export {reducer,timereducer}