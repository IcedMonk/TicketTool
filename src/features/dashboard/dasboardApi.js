import axios from "axios";
import api from "../../api/api";

export const getToken = async ({ username, password }) => {
  try {
    const response = await axios.post(
      `http://webscm.vyapilogistics.com:8348/token`,
      {
        username,
        password,
      }
    );
    if (response.data.token) {
      const { token } = response.data;
      sessionStorage.setItem("token", token);
    } else {
      // Handle the case where the response only contains a message
      const { message } = response.data;
      console.log(message);
    }
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const getAgentList = async () => {
  try {
    const response = await api.get("/Users/getAgentList");
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const getUserList = async () => {
  try {
    const response = await api.get("/Users/getUserList");
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const getCategoryList = async () => {
  try {
    const response = await api.get("/Category/getCategoryList");
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const getBusinessUnitList = async () => {
  try {
    const response = await api.get("/BusinessUnit/getBusinessUnitList");
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const getPriorityList = async () => {
  try {
    const response = await api.get("/Priority/getPriorityList");
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const getStatusList = async () => {
  try {
    const response = await api.get("/Status/getStatusList");
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const getAllTickets = async () => {
  try {
    const response = await api.get("/Tickets/getTicketList");
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const getTicketById = async ({ ticketId }) => {
  try {
    const response = await api.get(
      `/Tickets/getTicketDetail?ticketId=${ticketId}`
    );
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const createTicket = async (ticketDetails) => {
  try {
    const response = await api.post(`/Tickets/addTicket`, ticketDetails);
    if (response.status === 200) {
      return { status: 1, message: response.data };
    }
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const createComment = async (commentDetails) => {
  try {
    const response = await api.post(`/Comments/createComment`, commentDetails);
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const updateTicket = async (ticketDetails) => {
  try {
    const response = await api.post(`/Tickets/updTicket`, ticketDetails);
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const getTicketAttachment = async ({ ticketId }) => {
  try {
    const response = await api.get(
      `/Tickets/getAttachments?ticketId=${ticketId}`
    );
    return response.data;
  } catch (error) {
    return { status: 0, message: error.message };
  }
};

export const updateUser = async (userDetails) => {
  try {
    const response = await api.post(`/Users/UpdUser`, userDetails);
    if (response.status === 200) {
      return { status: 1, message: response.data };
    }
  } catch (error) {
    return { status: 0, message: error.message };
  }
};
