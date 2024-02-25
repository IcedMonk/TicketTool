import React from "react";
import { useSelector } from "react-redux";

function TicketView() {
  const { ticketById } = useSelector((state) => state.dashboard);
  const {
    created_at,
    subject,
    content,
    sku,
    business_Unit,
    status,
    priority,
    user_name,
    user_email,
    category,
    sunland_Ref_No,
    customer_Ref_No,
    statusColor,
    priorityColor,
  } = ticketById.ticket;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Subject */}
      <div className="form-control sm:col-span-2">
        <label className="label">
          <span className="label-text">Subject</span>
        </label>
        <div className="font-semibold text-lg">{subject}</div>
      </div>

      {/* Business Category */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Business Category</span>
        </label>
        <div className="font-medium">{business_Unit}</div>
      </div>

      {/* Category */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <div className="font-medium">{category}</div>
      </div>

      {/* Priority */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Priority</span>
        </label>
        <span
          className={`badge ${
            priorityColor === "low"
              ? "badge-primary"
              : priorityColor === "medium"
              ? "badge-warning"
              : "badge-error"
          }`}
        >
          {priority}
        </span>
      </div>

      {/* Status */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Status</span>
        </label>
        <span
          className={`badge ${
            statusColor === "open"
              ? "badge-success"
              : statusColor === "closed"
              ? "badge-secondary"
              : "badge-accent"
          }`}
        >
          {status}
        </span>
      </div>

      {/* SKU */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">SKU</span>
        </label>
        <div className="font-medium">{sku}</div>
      </div>

      {/* Sunland Ref No */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Sunland Ref No</span>
        </label>
        <div className="font-medium">{sunland_Ref_No}</div>
      </div>

      {/* Customer Ref No */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Customer Ref No</span>
        </label>
        <div className="font-medium">{customer_Ref_No}</div>
      </div>

      {/* User name */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">User name</span>
        </label>
        <div className="font-medium">{user_name}</div>
      </div>

      {/* Create at */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Create at</span>
        </label>
        <div className="font-medium">
          {new Date(created_at).toLocaleDateString()}
        </div>
      </div>

      {/* Content - With Overflow Handling */}
      <div className="form-control sm:col-span-2 max-h-48 overflow-y-auto">
        <label className="label">
          <span className="label-text text-sm sm:text-base">Content</span>
        </label>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default TicketView;
