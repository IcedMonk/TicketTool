import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Ticket from "./pages/Ticket";
import AuthHoc from "./components/AuthHoc";
import NewTicket from "./pages/NewTicket";
import User from "./pages/User";

const WrappedHome = AuthHoc(Home);
const WrappedTicket = AuthHoc(Ticket);
const WrappedNewTicket = AuthHoc(NewTicket);
const WrappedUser = AuthHoc(User);

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<WrappedHome />} />
        <Route path="/new-ticket" element={<WrappedNewTicket />} />
        <Route path="/ticket/:ticketId" element={<WrappedTicket />} />
        <Route path="/user" element={<WrappedUser />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Navbar>
        <Outlet />
      </Navbar>
      <ToastContainer
        autoClose={5000}
        position={"top-center"}
        hideProgressBar
      />
    </div>
  );
}

export default App;
