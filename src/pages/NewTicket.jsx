import React, { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
  const {
    businessUnitList = [],
    categoryList = [],
    priorityList = [],
    agentList = [],
    loading,
  } = useSelector((state) => state.dashboard);
  const [credentials, setCredentials] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="card mx-auto m-2 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">New Ticket</h2>
        <form>
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label
                for="subject"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                for="sku"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                SKU
              </label>
              <input
                type="text"
                placeholder="Type here"
                id="sku"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                for="ref_no"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Customer Ref. No
              </label>
              <input
                id="ref_no"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                for="sunland_ref_no"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Sunland Ref. No
              </label>
              <input
                type="text"
                id="sunland_ref_no"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                for="lob"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Line Of Business
              </label>
              <select
                className="select select-bordered w-full"
                name="line_of_Business_id"
                onChange={handleInputChange}
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
                for="category_id"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Category
              </label>
              <select
                className="select select-bordered w-full"
                name="category_id"
                id="category_id"
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
            <div>
              <label
                for="priority_id"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Priority
              </label>
              <select
                className="select select-bordered w-full"
                name="priority_id"
                id="priority_id"
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
            <div>
              <label
                for="agent_id"
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
              for="content"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Content
            </label>
            <textarea
              id="content"
              className="textarea textarea-bordered w-full"
              placeholder="Content"
            ></textarea>
          </div>

          <div className="mb-6 flex">
            <div
              id="multi-upload-button"
              class="inline-flex cursor-pointer items-center rounded-l border border-gray-600 bg-gray-600 px-4 py-2 text-sm font-semibold tracking-widest text-white transition hover:bg-gray-500 focus:border-gray-900 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-900 disabled:opacity-25"
            >
              Upload
            </div>
            <div class="flex w-full items-center justify-between rounded-r-md border border-gray-300">
              <span id="multi-upload-text" class="p-2">
                File
              </span>
              <button id="multi-upload-delete" class="hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-3 fill-current text-red-700"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </button>
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
