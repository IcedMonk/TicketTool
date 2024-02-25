import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TicketsList() {
  const { allTickets, loading } = useSelector((state) => state.dashboard);
  return (
    <>
      {loading.loadAllTickets ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="middle-hero-section">
          {Array.isArray(allTickets.tickets) &&
            allTickets.tickets.map((ticket) => (
              <Link to={`/ticket/${ticket.id}`} key={ticket.id}>
                <div
                  className={`hero-section flex flex-col justify-center border-b-2 py-5`}
                >
                  <div
                    className={`hero-section-content my-1 flex justify-between`}
                  >
                    <div className={`flex items-center space-x-1`}>
                      <span
                        className={`inline-flex items-center justify-center rounded-full bg-emerald-100 px-1 py-0.2`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="whitespace-nowrap text-sm">
                          {ticket.priority}
                        </p>
                      </span>
                      <h3 className="font-semibold">{ticket.subject}</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">Visit Site</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h3>debbielewis/workcation</h3>
                    </div>
                    <div className="right-side">
                      <ul className="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                        <li className="hidden md:block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </li>
                        <li>Laravel</li>
                        <li>Last Deploy 3h ago</li>
                        <li>United States</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
}

export default TicketsList;
