import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import reducerforloan from './reducerforloan'

export default configureStore({
  reducer: {
    account: reducer,
    loan:reducerforloan
  }
})


// import { configureStore } from '@reduxjs/toolkit'
// import reducer from './reducer'

// const store = configureStore({
//   reducer: {
//     account: reducer,
//    loan:reducerforloan
//   }
// })

// export default store;