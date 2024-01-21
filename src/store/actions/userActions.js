import { userActions } from "../reducers/userReducers";



export const logout = () => (dispatch) => {
  dispatch(userActions.logOut());
  localStorage.removeItem("account"); 
};
