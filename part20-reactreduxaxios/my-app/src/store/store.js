import { configureStore } from '@reduxjs/toolkit'
import postsreducer from './postsreducer'


export default configureStore({
  reducer: {
    posts: postsreducer
  }
})