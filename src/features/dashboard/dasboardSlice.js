import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncHandlers } from "../common/asyncHandlers";
import {
  getAgentList,
  getToken,
  getAllTickets,
  getTicketById,
  updateTicket,
  getBusinessUnitList,
  getCategoryList,
  getPriorityList,
  getStatusList,
  getTicketAttachment,
  createTicket,
  getUserList,
  updateUser,
} from "./dasboardApi";

const initialState = {
  loading: {
    loadUserAuth: false,
    loadAgentList: false,
    loadAllTickets: false,
    loadTicketById: false,
    loadUpdateTicket: false,
    loadBusinessUnitList: false,
    loadCategoryList: false,
    loadPriorityList: false,
    loadStatusList: false,
    loadTicketAttachments: false,
    loadCreateTicket: false,
    loadUserList: false,
    loadUpdateUser: false,
  },
  config: [],
  allTickets: [],
  sessionTimedOut: false,
  userAuth: null,
  ticketEditState: false,
  agentList: [],
  ticketById: null,
  updateTicket: null,
  businessUnitList: [],
  categoryList: [],
  priorityList: [],
  statusList: [],
  ticketAttachments: [],
  dataFetched: false,
  userList: [],
  createTicket: null,
  updateUser: null,
};

export const getTokenAsync = createAsyncThunk("dashboard/getToken", (params) =>
  getToken(params)
);

export const getAgentListAsync = createAsyncThunk(
  "dashboard/getAgentList",
  (params) => getAgentList(params)
);

export const getAllTicketsAsync = createAsyncThunk(
  "dashboard/getAllTickets",
  (params) => getAllTickets(params)
);

export const getTicketByIdAsync = createAsyncThunk(
  "dashboard/getTicketById",
  (params) => getTicketById(params)
);

export const updateTicketAsync = createAsyncThunk(
  "dashboard/updateTicket",
  (params) => updateTicket(params)
);

export const getBusinessUnitListAsync = createAsyncThunk(
  "dashboard/getBusinessUnitList",
  (params) => getBusinessUnitList(params)
);

export const getCategoryListAsync = createAsyncThunk(
  "dashboard/getCategoryList",
  (params) => getCategoryList(params)
);

export const getPriorityListAsync = createAsyncThunk(
  "dashboard/getPriorityList",
  (params) => getPriorityList(params)
);

export const getStatusListAsync = createAsyncThunk(
  "dashboard/getStatusList",
  (params) => getStatusList(params)
);

export const getTicketAttachmentsAsync = createAsyncThunk(
  "dashboard/getTicketAttachments",
  (params) => getTicketAttachment(params)
);

export const createTicketAsync = createAsyncThunk(
  "dashboard/createTicket",
  (params) => createTicket(params)
);

export const getUserListAsync = createAsyncThunk(
  "dashboard/getUserList",
  (params) => getUserList(params)
);

export const updateUserAsync = createAsyncThunk(
  "dashboard/updateUser",
  (params) => updateUser(params)
);

const dashboardSlice = createSlice({
  name: "dasboard",
  initialState,
  reducers: {
    logoutUser: () => initialState,
    setSessionTimedOut: (state, action) => {
      state.sessionTimedOut = action.payload;
    },
    setTicketEditState: (state, action) => {
      state.ticketEditState = action.payload;
    },
    dataHasBeenFetched: (state, action) => {
      state.dataFetched = true;
    },
  },
  extraReducers: (builder) => {
    createAsyncHandlers(
      builder,
      getTokenAsync,
      "userAuth",
      "loadUserAuth",
      "LOADUSERAUTH_ERROR"
    );
    createAsyncHandlers(
      builder,
      getAgentListAsync,
      "agentList",
      "loadAgentList",
      "LOADAGENTLIST_ERROR"
    );
    createAsyncHandlers(
      builder,
      getAllTicketsAsync,
      "allTickets",
      "loadAllTickets",
      "LOADALLTICKETS_ERROR"
    );
    createAsyncHandlers(
      builder,
      getTicketByIdAsync,
      "ticketById",
      "loadTicketById",
      "LOADTICKETBYID_ERROR"
    );
    createAsyncHandlers(
      builder,
      updateTicketAsync,
      "updateTicket",
      "loadUpdateTicket",
      "LOADUPDATETICKET_ERROR"
    );
    createAsyncHandlers(
      builder,
      getBusinessUnitListAsync,
      "businessUnitList",
      "loadBusinessUnitList",
      "LOADBUSINESSUNITLIST_ERROR"
    );
    createAsyncHandlers(
      builder,
      getCategoryListAsync,
      "categoryList",
      "loadCategoryList",
      "LOADCATEGORYLIST_ERROR"
    );
    createAsyncHandlers(
      builder,
      getPriorityListAsync,
      "priorityList",
      "loadPriorityList",
      "LOADPRIORITYLIST_ERROR"
    );
    createAsyncHandlers(
      builder,
      getStatusListAsync,
      "statusList",
      "loadStatusList",
      "LOADSTATUSLIST_ERROR"
    );
    createAsyncHandlers(
      builder,
      getTicketAttachmentsAsync,
      "ticketAttachments",
      "loadTicketAttachments",
      "LOADTICKETATTACHMENTS_ERROR"
    );
    createAsyncHandlers(
      builder,
      createTicketAsync,
      "createTicket",
      "loadCreateTicket",
      "LOADCREATETICKET_ERROR"
    );
    createAsyncHandlers(
      builder,
      getUserListAsync,
      "userList",
      "loadUserList",
      "LOADUSERLIST_ERROR"
    );
    createAsyncHandlers(
      builder,
      updateUserAsync,
      "updateUser",
      "loadUpdateUser",
      "LOADUPDATEUSER_ERROR"
    );
  },
});

export const {
  logoutUser,
  setSessionTimedOut,
  setTicketEditState,
  dataHasBeenFetched,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
