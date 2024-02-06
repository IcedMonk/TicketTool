import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncHandlers } from "../common/asyncHandlers";
import { getConfig } from "./dasboardApi";

const initialState = {
  loading: {
    loadConfig: false,
  },
  config: [],
};

export const getConfigAsync = createAsyncThunk(
  "dashboard/getConfig",
  (params) => getConfig(params)
);

const dashboardSlice = createSlice({
  name: "dasboard", // name it for what you are going to use
  initialState,
  reducers: {
    logoutUser: () => initialState,
    showAlert: (state, action) => {
      state.showAlert = true;
      state.alertMessage = action.payload.message;
      state.alertType = action.payload.type;
    },
  },
  extraReducers: (builder) => {
    createAsyncHandlers(
      builder,
      getConfigAsync,
      "config",
      "loadConfig",
      "CONFIG_ERROR"
    );
  },
});

export const { logoutUser, showAlert } = dashboardSlice.actions;

export default dashboardSlice.reducer;
