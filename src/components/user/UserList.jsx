import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getUserListAsync,
  updateUserAsync,
} from "../../features/dashboard/dasboardSlice";

function UserList() {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);
  const { userList, updateUser, loading } = useSelector(
    (state) => state.dashboard
  );
  const [userDetails, setUserDetails] = useState({
    name: selectedUser ? selectedUser.name : "",
    email: selectedUser ? selectedUser.email : "",
    role: selectedUser ? selectedUser.role : "",
    is_active: selectedUser ? selectedUser.is_active : "",
    mobile_no: selectedUser ? selectedUser.mobile_no : "",
    password: "",
    id: selectedUser ? selectedUser.id : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the field is 'is_active' and explicitly convert the value to boolean if so.
    const updatedValue = name === "is_active" ? value === "true" : value;
    setUserDetails({ ...userDetails, [name]: updatedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAsync(userDetails));
    setTimeout(() => {
      dispatch(getUserListAsync());
    }, 1000);
    window.my_modal_2.close();
    setSelectedUser(null);
    updateUser.status === 1 && toast.success(updateUser.message.message);
    updateUser.status === 0 && toast.error(updateUser.message.message);
  };

  const showModal = (user) => {
    setSelectedUser(user);
    setUserDetails({
      name: user.name,
      email: user.email,
      role: user.role,
      is_active: user.is_active,
      mobile_no: user.mobile_no,
      id: user.id,
      password: "",
    });
    window.my_modal_2.showModal();
  };

  return (
    <>
      {loading.loadUserList ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <ul className="flex flex-col mt-2">
            {userList.map((user) => (
              <li
                key={user.id}
                className="mb-2 flex flex-row border-gray-400"
                onClick={() => showModal(user)}
              >
                <div className="flex flex-1 transform cursor-pointer select-none items-center rounded-md bg-white p-4 shadow transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800">
                  <div className="relative">
                    <div
                      className={`flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 mr-2 text-white font-bold border-4 ${
                        user.is_active ? "border-green-500" : "border-red-500"
                      }`}
                    >
                      {user.name[0].toUpperCase()}
                    </div>
                  </div>
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium dark:text-white">
                      {user.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200 hidden md:block">
                      {user.email}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200 md:hidden">
                      {user.role}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-200 hidden md:block">
                    {user.role}
                  </div>
                  <button className="flex w-24 justify-end text-right">
                    <svg
                      width="12"
                      fill="currentColor"
                      height="12"
                      className="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <dialog id="my_modal_2" className="my_modal modal-box">
        {selectedUser && (
          <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg">Edit User {selectedUser.name}</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                className="select select-bordered"
                value={userDetails.role}
                name="role"
                onChange={handleChange}
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Agent">Agent</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile No</span>
              </label>
              <input
                type="text"
                placeholder="Mobile No"
                name="mobile_no"
                value={userDetails.mobile_no}
                onChange={handleChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={userDetails.password}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select
                className="select select-bordered"
                value={userDetails.is_active}
                name="is_active"
                onChange={handleChange}
              >
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </select>
            </div>
            <div className="modal-action flex justify-between mt-7">
              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.my_modal_2.close();
                  setSelectedUser(null);
                }}
              >
                Close
              </button>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </dialog>
    </>
  );
}

export default UserList;
