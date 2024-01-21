import { configureStore } from "@reduxjs/toolkit";
import { sellerReducer, userReducer,showReducer } from "./reducers/userReducers";



const store = configureStore({
  reducer: {
    user: userReducer,
    seller:sellerReducer,
    showLoginAndSignin:showReducer 
  },

});

export default store;
