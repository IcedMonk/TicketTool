import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { convertToBase64 } from "../utils/Helper";
import {
  createTicketAsync,
  dataHasBeenFetched,
  getAgentListAsync,
  getBusinessUnitListAsync,
  getCategoryListAsync,
  getPriorityListAsync,
} from "../features/dashboard/dasboardSlice";
import { useNavigate } from "react-router-dom";

function NewTicket() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const {
    businessUnitList = [],
    categoryList = [],
    priorityList = [],
    agentList = [],
    loading,
    userAuth,
    createTicket,
    dataFetched,
  } = useSelector((state) => state.dashboard);
  const [credentials, setCredentials] = useState({
    line_of_Business_id: 1,
    priority_id: 4,
    category_id: 1,
    status_id: 1,
  });
  const [filename, setfilename] = useState();
  const [postImage, setPostImage] = useState({ myFile: "" });

  // Dispatch actions to fetch data if lists are empty
  useEffect(() => {
    if (!dataFetched) {
      dispatch(getBusinessUnitListAsync());
      dispatch(getCategoryListAsync());
      dispatch(getPriorityListAsync());
      dispatch(getAgentListAsync());
      dispatch(dataHasBeenFetched());
    }
  }, [dispatch, dataFetched]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setfilename(e.target.files[0].name);
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Fields to convert to numbers
    const fieldsToConvert = [
      "agent_id",
      "category_id",
      "line_of_Business_id",
      "priority_id",
    ];
    setCredentials((prev) => ({
      ...prev,
      [name]: fieldsToConvert.includes(name) ? parseInt(value, 10) : value,
      status_id: name === "agent_id" && value ? 2 : prev.status_id,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postImage.myFile === "") {
      const formData = {
        request: {
          ...credentials,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          due_at: new Date().toISOString(),
          user_id: userAuth.id,
          category: credentials.category_id,
        },
      };
      dispatch(createTicketAsync(formData));
      setTimeout(() => {
        createTicket.status === 1 && Navigate("/");
        createTicket.status === 1 &&
          toast.success("Ticket created successfully");
        createTicket.status === 0 && toast.error("Failed to create ticket");
      }, 3000);
    } else if (postImage.myFile !== "") {
      const formData = {
        request: {
          ...credentials,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          due_at: new Date().toISOString(),
          user_id: userAuth.id,
          category: credentials.category_id,
        },
        attachments: [
          {
            file_Name: filename,
            data: postImage.myFile,
          },
        ],
      };
      dispatch(createTicketAsync(formData));
      setTimeout(() => {
        createTicket.status === 1 && Navigate("/");
        createTicket.status === 1 &&
          toast.success("Ticket created successfully");
        createTicket.status === 0 && toast.error("Failed to create ticket");
      }, 3000);
    }
  };

  return (
    <div className="card mx-auto m-2 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">New Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Type here"
                className="input input-bordered w-full"
                name="subject"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="sku"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                SKU
              </label>
              <input
                type="text"
                placeholder="Type here"
                id="sku"
                className="input input-bordered w-full"
                name="sku"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="ref_no"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Customer Ref. No
              </label>
              <input
                id="ref_no"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name="customer_Ref_No"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="sunland_ref_no"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Sunland Ref. No
              </label>
              <input
                type="text"
                id="sunland_ref_no"
                placeholder="Type here"
                className="input input-bordered w-full"
                name="sunland_Ref_No"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="lob"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Line Of Business
              </label>
              <select
                className="select select-bordered w-full"
                name="line_of_Business_id"
                onChange={handleInputChange}
                value={credentials.line_of_Business_id}
                id="lob"
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
            <div>
              <label
                htmlFor="category_id"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Category
              </label>
              <select
                className="select select-bordered w-full"
                name="category_id"
                id="category_id"
                onChange={handleInputChange}
                value={credentials.category_id}
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
            <div>
              <label
                htmlFor="priority_id"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Priority
              </label>
              <select
                className="select select-bordered w-full"
                name="priority_id"
                id="priority_id"
                onChange={handleInputChange}
                value={credentials.priority_id}
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
            <div>
              <label
                htmlFor="agent_id"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Assign To
              </label>
              <select
                className="select select-bordered w-full"
                name="agent_id"
                id="agent_id"
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
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Content
            </label>
            <textarea
              id="description"
              className="textarea textarea-bordered w-full"
              placeholder="Description"
              onChange={handleInputChange}
              name="description"
            ></textarea>
          </div>

          <div className="mb-6 flex">
            <div
              onClick={() => document.getElementById("camera-input").click()}
              id="multi-upload-button"
              className="inline-flex cursor-pointer items-center rounded-l border border-gray-600 bg-gray-600 px-4 py-2 text-sm font-semibold tracking-widest text-white transition hover:bg-gray-500 focus:border-gray-900 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-900 disabled:opacity-25"
            >
              Upload
            </div>
            <div className="flex w-full items-center justify-between rounded-r-md border border-gray-300">
              <span id="multi-upload-text" className="p-2">
                {filename ? filename : "No file selected"}
              </span>
              <button
                id="multi-upload-delete"
                className={!filename ? "hidden" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setfilename("");
                  setPostImage({ myFile: "" });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-3 fill-current text-red-700"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </button>
              <input
                type="file"
                id="camera-input"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTicket;
