import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getTicketAttachmentsAsync,
  getTicketByIdAsync,
  setTicketEditState,
} from "../features/dashboard/dasboardSlice";
import TicketView from "../components/ticketTabs/ticketView";
import TicketComments from "../components/ticketTabs/TicketComments";
import EditTicketForm from "../components/ticketTabs/EditTicketForm";
import TicketAttachment from "../components/ticketTabs/TicketAttachment";

function Ticket() {
  const dispatch = useDispatch();
  const { ticketId } = useParams();
  const [activeTab, setActiveTab] = useState(1);
  const { ticketEditState, ticketAttachments, loading } = useSelector(
    (state) => state.dashboard
  );

  useEffect(() => {
    dispatch(getTicketByIdAsync({ ticketId }));
    dispatch(getTicketAttachmentsAsync({ ticketId }));
  }, [dispatch, ticketId]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted max-h-screen">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 1"
          defaultChecked={activeTab === 1}
          onClick={() => handleTabClick(1)}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {loading.loadTicketById ? (
            <div>Loading...</div>
          ) : ticketEditState ? (
            <EditTicketForm />
          ) : (
            <TicketView />
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          defaultChecked={activeTab === 2}
          onClick={() => handleTabClick(2)}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {loading.loadTicketById ? <div>Loading...</div> : <TicketComments />}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 3"
          defaultChecked={activeTab === 3}
          onClick={() => handleTabClick(3)}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {loading.loadTicketAttachments ? (
            <div>Loading...</div>
          ) : ticketAttachments.length > 0 ? (
            <TicketAttachment />
          ) : (
            "No attachment found"
          )}
        </div>
      </div>
      {activeTab === 1 && (
        <div className="toast toast-end toast-middle">
          {ticketEditState ? (
            <div
              className="alert alert-info cursor-pointer"
              onClick={() => dispatch(setTicketEditState(false))}
            >
              <span>Save</span>
            </div>
          ) : (
            <div
              className="alert alert-info cursor-pointer"
              onClick={() => dispatch(setTicketEditState(true))}
            >
              <span>Edit</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Ticket;
