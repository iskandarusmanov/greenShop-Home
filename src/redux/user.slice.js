import { createSlice } from "@reduxjs/toolkit";

const authUser = {isAuth:false,user:null}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: authUser,
  },
  reducers: {
    logOut: (state) => {
      state.data = authUser
    },
    isLogged: (state, action) => {
      // state.data = action.payload;
      state.data = {isAuth: true,  user: action.payload}
    },
  },
});

export const { isLogged, logOut } = userSlice.actions;
export default userSlice.reducer;
