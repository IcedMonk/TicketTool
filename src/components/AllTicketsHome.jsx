import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTicketsAsync } from "../features/dashboard/dasboardSlice";
import TicketsList from "./TicketsList";

function AllTicketsHome() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getAllTicketsAsync());
  }, [dispatch]);

  return (
    <div className="flex min-h-screen border-2 border-b-4 border-gray-200 rounded-xl mt-4 mb-4">
      <div className="mx-5 w-11/12">
        <div className=" ">
          <div className="top-section mt-4 flex items-center justify-between border-b border-gray-400 pb-2">
            <h1 className="font-bold">Projects</h1>
            <div className="flex w-28 items-center justify-around rounded border-2 bg-white p-1 font-semibold text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
              </svg>
              <h3>Sort</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="middle-hero-section">
            {loading.loadAllTickets ? (
              <div className="flex justify-center items-center h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <TicketsList />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTicketsHome;
