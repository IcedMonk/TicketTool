import React from "react";
import DashboardStats from "../components/DashboardStats";
import AllTicketsHome from "../components/AllTicketsHome";

function Home() {
  return (
    <div className="container sm:mx-auto sm:px-4">
      <DashboardStats />
      <AllTicketsHome />
    </div>
  );
}

export default Home;
