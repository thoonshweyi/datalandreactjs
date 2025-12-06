import {configureStore} from "@reduxjs/toolkit";
import clientsayReducer from "./clientsaySlice";
import contactformReducer from "./contactFormSlice";
import furnitureReducer from "./furnitureSlice";
import customerReducer from "./customerSlice";
import propertyReducer from "./propertySlice";


export default configureStore({
     reducer:{
          clientsays: clientsayReducer,
          contactforms: contactformReducer,
          furnitures: furnitureReducer,
          customers: customerReducer,
          properties: propertyReducer,
     }
})