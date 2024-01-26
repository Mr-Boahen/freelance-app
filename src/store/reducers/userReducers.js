import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage?.getItem("account")
  ? JSON.parse(localStorage?.getItem("account"))
  : null;
const userInitialState = {
  userInfo: userInfoFromStorage,
};

const sellerInitialState = {
  sellerInfo: {
    _id: "",
    avatar: "",
    name: "",
    email: "",
    tel:"",
    verified: false,
    partner: false,
    description: "",
    skills: [],
    certifications: [],
    basePrice:null,
    deliveryTime:null,
    revisions:"",
    gigDescription:"",
    ratings:0,
    gigType:"",
    createdAt: "",
    updatedAt: "",
  },
};

const initialShowLoginAndSignin={
  showLogin:false,
  showSignin:false,
}


const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    logOut(state) {
      state.userInfo = null;
      window.location.pathname = "/home";
    },
  },
});

const sellerSlice = createSlice({
  name: "seller",
  initialState: sellerInitialState,
  reducers: {
    setSellerInfo(state, action) {
      state.sellerInfo = action.payload;
    },
  },
});

const showLoginAndSigninSlice=createSlice({
  name:"showLoginAndSignin",
  initialState:initialShowLoginAndSignin,
  reducers:{
    setShowLogin(state,action){
      state.showLogin=action.payload
    },
    setShowSignin(state,action){
      state.showSignin=action.payload
    }
  }

})

const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

const sellerActions=sellerSlice.actions;
const sellerReducer=sellerSlice.reducer;

const showActions=showLoginAndSigninSlice.actions;
const showReducer=showLoginAndSigninSlice.reducer;

export { userActions, userReducer, sellerActions,sellerReducer,showActions,showReducer };
