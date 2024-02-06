import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dasboardSlice";

const store = configureStore({
  reducer: {
    //this can be multiple reducers
    dashboard: dashboardReducer,
  },
});

export default store;
