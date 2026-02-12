// import {configureStore} from "@reduxjs/toolkit"
// import reducer from "./reducer"

// export default configureStore({
//   reducer:{
//      todo: reducer
//   }   
// })


import {configureStore} from "@reduxjs/toolkit"
import reducer from "./reducer"

const store =  configureStore({
  reducer:{
     todo: reducer
  }   
})

export default store;