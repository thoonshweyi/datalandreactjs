import { configureStore } from '@reduxjs/toolkit'
import moviesreducer from './moviesreducer'
import usersreducer from './usersreducer'


export default configureStore({
  reducer: {
    movies: moviesreducer,
    users: usersreducer
  }
})