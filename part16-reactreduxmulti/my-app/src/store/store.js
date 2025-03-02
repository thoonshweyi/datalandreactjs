// import {configureStore} from "@reduxjs/toolkit"
//import {reducer,timereducer} from "./reducer"


// export default configureStore({
//   reducer:{
//      todo: reducer,
//      times:timereducer
//   }   
// })


import {configureStore} from "@reduxjs/toolkit"
import {reducer,timereducer} from "./reducer"

const store =  configureStore({
  reducer:{
     todo: reducer,
     times:timereducer
  }   
})

export default store;