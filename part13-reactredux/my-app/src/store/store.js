// import { configureStore } from '@reduxjs/toolkit'
// import reducer from './reducer'

// export default configureStore({
//   reducer: {
//     account: reducer
//   }
// })


import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store = configureStore({
  reducer: {
    account: reducer
  }
})

export default store;