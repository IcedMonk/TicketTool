import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function TicketAttachment() {
  const { ticketAttachments, loading } = useSelector(
    (state) => state.dashboard
  );
  return (
    <div>
      {loading.loadTicketAttachments ? (
        <div>Loading...</div>
      ) : (
        <div>
          {ticketAttachments.map((attachment) => (
            <div key={attachment.id}>
              <a href="#" target="_blank" rel="noreferrer">
                {attachment.file_Name}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TicketAttachment;
