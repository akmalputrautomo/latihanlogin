import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  islogin: "",
  user: "",
};

const authLoginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {},
});

export default authLoginSlice.reducer;
