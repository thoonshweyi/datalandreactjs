import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "./todosreducer";

export default configureStore({
     reducer:{
          todos:todosReducer
     }
})