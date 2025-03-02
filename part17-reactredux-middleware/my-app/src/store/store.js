// without Redux Logger
// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './reducer'
// import log from "../middleware/log"

// export default configureStore({
//   reducer: {
//     counter: counterReducer
//   },
// //   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(log)
//   middleware:(getDefaultMiddleware)=> [...getDefaultMiddleware(),log]
// })


// => with Redux Logger
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'
import { createLogger } from 'redux-logger'
import userlog from "../middleware/usererrormid"

const logger = createLogger();
 
export default configureStore({
  reducer: {
    counter: counterReducer
  },
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
  middleware:(getDefaultMiddleware)=> [...getDefaultMiddleware(),logger,userlog]
})


