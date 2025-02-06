import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";

const AppStore=configureStore(
{
  reducer:{
    user:UserReducer
  }  
}
)
export default AppStore;