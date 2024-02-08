import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSideBar(false);
    }
  };

  useEffect(() => {
    // Add the event listener to the document when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove the event listener from the document when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <section className="min-h-screen bg-gray-50">
        <nav
          ref={sidebarRef}
          className={`fixed left-0 top-0 z-20 h-full w-60 origin-left transform overflow-y-auto overflow-x-hidden bg-gray-900 pb-10 transition md:translate-x-0 ${
            sideBar ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={() => setSideBar(false)}
        >
          <Link to="/" className="flex items-center px-4 py-5">
            <img
              src="./src/assets/logo.png"
              alt="Vyapi Logo"
              className="w-20"
            />
          </Link>
          <nav
            className="text-sm font-medium text-gray-500"
            aria-label="Main Navigation"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "group flex cursor-pointer items-center bg-gray-800 px-4 py-3 text-gray-200 transition hover:bg-gray-800 hover:text-gray-200"
                  : "group flex cursor-pointer items-center px-4 py-3 transition hover:bg-gray-800 hover:text-gray-200"
              }
            >
              <svg
                className="mr-2 h-5 w-5 shrink-0 text-gray-400 transition group-hover:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to="/newticket"
              className={({ isActive }) =>
                isActive
                  ? "group flex cursor-pointer items-center bg-gray-800 px-4 py-3 text-gray-200 transition hover:bg-gray-800 hover:text-gray-200"
                  : "group flex cursor-pointer items-center px-4 py-3 transition hover:bg-gray-800 hover:text-gray-200"
              }
            >
              <svg
                className="mr-2 h-5 w-5 shrink-0 text-gray-400 transition group-hover:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
              </svg>
              <span>New Ticket</span>
            </NavLink>
          </nav>
        </nav>
        <div className="ml-0 transition md:ml-60">
          <header className="flex h-14 w-full items-center border-b bg-white justify-between px-4">
            <button
              className="btn btn-light-secondary block md:hidden"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div></div>
            <div className="flex items-center">
              <button
                value="logout"
                className=" px-5 py-3 text-base font-medium text-white bg-gray-600 border border-transparent rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
              >
                Logout
              </button>
              {/* Some button here <div>.</div> */}
            </div>
          </header>
          <div className="p-2">
            <div className="min-h-screen max-h-screen overflow-y-auto rounded-md bg-gray-100 border-2 border-gray-300 p-1">
              {children}
            </div>
          </div>
        </div>
        {sideBar && (
          <div className="fixed inset-0 z-10 h-screen w-screen bg-black bg-opacity-25 md:hidden"></div>
        )}
      </section>
    </>
  );
};

export default Navbar;
