import {configureStore} from "@reduxjs/toolkit";
import clientsayReducer from "./clientsaySlice";
import contactformReducer from "./contactFormSlice";
import furnitureReducer from "./furnitureSlice";


export default configureStore({
     reducer:{
          clientsays: clientsayReducer,
          contactforms: contactformReducer,
          furnitures: furnitureReducer
     }
})