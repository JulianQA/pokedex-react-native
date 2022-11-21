import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: undefined,
  },
  reducers: {
    login: (state, action) => {
      state.auth = action.payload;
    },
    logout: (state) => {
      state.auth = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
