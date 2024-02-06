import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import NewTicket from "./pages/NewTicket";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newticket" element={<NewTicket />} />
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
    </div>
  );
}

export default App;
