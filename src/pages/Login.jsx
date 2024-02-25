import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getTokenAsync,
  setSessionTimedOut,
} from "../features/dashboard/dasboardSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userAuth, loading, sessionTimedOut } = useSelector(
    (state) => state.dashboard
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showSessionTimeoutAlert, setShowSessionTimeoutAlert] = useState(false);

  useEffect(() => {
    if (sessionTimedOut) {
      setShowSessionTimeoutAlert(true);
      dispatch(setSessionTimedOut(false));
    }
  }, [dispatch, sessionTimedOut]);

  useEffect(() => {
    if (userAuth?.is_active) {
      navigate("/"); // Redirect to the dashboard if login is successful
      setErrorMessage(""); // Clear any previous error message
    } else if (userAuth && !userAuth.is_active) {
      setErrorMessage(userAuth.message || "Check username or password."); // Display error message from API or default
    }
    // This else branch might be optional based on your initial state
    // Else, don't set any error message or perhaps clear it
  }, [userAuth, navigate]);

  const validate = () => {
    let errors = {};
    if (!credentials.username) {
      errors.username = "Username is required";
    }
    if (!credentials.password) {
      errors.password = "Password is required";
    } else if (credentials.password.length < 5) {
      errors.password = "Password must be at least 3 characters";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const loginDetails = {
        username: credentials.username,
        password: credentials.password,
      };
      dispatch(getTokenAsync(loginDetails));
    }
  };

  return (
    <div className="min-h-screen bg-orange-100 flex justify-center items-center px-4 sm:px-0">
      {/* Session Timeout Notification */}
      {showSessionTimeoutAlert && (
        <div className="toast my-8 mx-4 sm:mx-0 toast-top toast-center md:w-1/2 md:mx-auto lg:w-1/3">
          <div role="alert" className="alert alert-warning flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Session has timed out.</span>
          </div>
        </div>
      )}
      <form
        className="bg-orange-200 p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        {/* Logo Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://sunlandlogisticssolutions.com/wp-content/uploads/2022/03/LOGO_Stacked.png"
            alt="Logo"
            className="max-w-full h-12"
          />
        </div>
        {/* <h1 className="text-2xl font-semibold mb-4">Sign In</h1> */}
        {errorMessage && (
          <div className="text-red-600 mb-4">{errorMessage}</div>
        )}

        <div className="mb-4">
          <label htmlFor="user" className="sr-only">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5"
          />
          {errors.username && (
            <div className="text-red-600 text-sm">{errors.username}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5"
          />
          {errors.password && (
            <div className="text-red-600 text-sm">{errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white w-full p-2 rounded-lg hover:bg-orange-600"
          disabled={loading.loadUserAuth}
        >
          {loading.loadUserAuth ? "Signing in..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Login;
