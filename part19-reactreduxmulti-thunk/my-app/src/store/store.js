import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import reducerforloan from './reducerforloan'
import reducerforloading from './reducerforloading'

export default configureStore({
  reducer: {
    account: reducer,
    loan:reducerforloan,
    loader:reducerforloading
  }
})


// import { configureStore } from '@reduxjs/toolkit'
// import reducer from './reducer'
// import reducerforloan from './reducerforloan'
// import reducerforloading from './reducerforloading'


// const store = configureStore({
//   reducer: {
//     account: reducer,
//    loan:reducerforloan
//    loader:reducerforloading
//   }
// })

// export default store;