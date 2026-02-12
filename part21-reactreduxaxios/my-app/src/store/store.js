import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./usersreducer";

export default configureStore({
     reducer:{
          users:userReducer
     }
})