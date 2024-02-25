import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAgentListAsync,
  getBusinessUnitListAsync,
  getCategoryListAsync,
  getPriorityListAsync,
  getStatusListAsync,
} from "../../features/dashboard/dasboardSlice";

function EditTicketForm() {
  const dispatch = useDispatch();
  const {
    ticketById,
    businessUnitList = [],
    categoryList = [],
    priorityList = [],
    statusList = [],
    agentList = [],
    loading,
  } = useSelector((state) => state.dashboard);

  const [credentials, setCredentials] = useState(
    ticketById
      ? {
          id: ticketById.ticket.id,
          created_at: ticketById.ticket.created_at,
          user_id: ticketById.ticket.user_id,
          subject: ticketById.ticket.subject,
          description: ticketById.ticket.content,
          agent_id: ticketById.ticket.agent_id,
          status_id: ticketById.ticket.status_id,
          priority_id: ticketById.ticket.priority_id,
          category_id: ticketById.ticket.category_id,
          line_of_Business_id: ticketById.ticket.line_of_Business_id,
          sunland_Ref_No: ticketById.ticket.sunland_Ref_No,
          customer_Ref_No: ticketById.ticket.customer_Ref_No,
          sku: ticketById.ticket.sku,
          updated_at: ticketById.ticket.updated_at,
          due_at: ticketById.ticket.due_at,
          completed_at: new Date(),
        }
      : {}
  );

  useEffect(() => {
    dispatch(getBusinessUnitListAsync());
    dispatch(getCategoryListAsync());
    dispatch(getPriorityListAsync());
    dispatch(getStatusListAsync());
    dispatch(getAgentListAsync());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {loading.loadTicketById ? (
          <div>Loading Ticket Data...</div>
        ) : (
          <>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Business Category</span>
              </label>
              <select
                className="select select-bordered"
                value={credentials.line_of_Business_id}
                name="line_of_Business_id"
                onChange={handleInputChange}
              >
                {loading.loadUpdateTicket ? (
                  <option value="">Loading...</option>
                ) : (
                  <option value="">Select Business Category</option>
                )}
                {businessUnitList?.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                className="select select-bordered"
                value={credentials.category_id}
                name="category_id"
                onChange={handleInputChange}
              >
                {loading.loadCategoryList ? (
                  <option value="">Loading...</option>
                ) : (
                  <option value="">Select Category</option>
                )}
                {categoryList?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>
              <select
                className="select select-bordered"
                value={credentials.priority_id}
                name="priority_id"
                onChange={handleInputChange}
              >
                {loading.loadPriorityList ? (
                  <option value="">Loading...</option>
                ) : (
                  <option value="">Select Priority</option>
                )}
                {priorityList?.map((priority) => (
                  <option key={priority.id} value={priority.id}>
                    {priority.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select
                className="select select-bordered"
                value={credentials.status_id}
                name="status_id"
                onChange={handleInputChange}
              >
                {loading.loadStatusList ? (
                  <option value="">Loading...</option>
                ) : (
                  <option value="">Select Status</option>
                )}
                {statusList?.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Agent</span>
              </label>
              <select
                className="select select-bordered"
                value={credentials.agent_id}
                name="agent_id"
                onChange={handleInputChange}
              >
                {loading.loadAgentList ? (
                  <option value="">Loading...</option>
                ) : (
                  <option value="">Select Agent</option>
                )}
                {agentList?.map((agent) => (
                  <option key={agent.id} value={agent.id}>
                    {agent.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Sunland Ref No</span>
              </label>
              <input
                type="text"
                placeholder="Enter Sunland Ref No"
                className="input input-bordered"
                value={credentials.sunland_Ref_No}
                name="sunland_Ref_No"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Customer Ref No</span>
              </label>
              <input
                type="text"
                placeholder="Enter Customer Ref No"
                className="input input-bordered"
                value={credentials.customer_Ref_No}
                name="customer_Ref_No"
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-success mt-4">
              Save
            </button>
          </>
        )}
      </form>
    </>
  );
}

export default EditTicketForm;
