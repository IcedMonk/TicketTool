import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  logoutUser,
  setSessionTimedOut,
} from "../features/dashboard/dasboardSlice";

let logoutTimer;

const AuthHoc = (WrappedComponent) => {
  return (props) => {
    const { userAuth } = useSelector((state) => state.dashboard);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const activityRef = useRef(null);

    useEffect(() => {
      const resetTimer = () => {
        if (logoutTimer) {
          clearTimeout(logoutTimer);
        }
        logoutTimer = setTimeout(() => {
          dispatch(logoutUser());
          dispatch(setSessionTimedOut(true));
        }, 900000); // 15 minutes  900000
      };

      const handleActivity = () => {
        resetTimer();
      };

      if (!userAuth || !userAuth.is_active) {
        navigate("/login");
      } else {
        resetTimer();
        activityRef.current = handleActivity;
        document.addEventListener("mousemove", activityRef.current);
      }

      return () => {
        if (logoutTimer) {
          clearTimeout(logoutTimer);
        }
        if (activityRef.current) {
          document.removeEventListener("mousemove", activityRef.current);
        }
      };
    }, [userAuth, navigate, dispatch]);

    // Render wrapped component only if user is authenticated
    return userAuth && userAuth.is_active ? (
      <WrappedComponent {...props} />
    ) : null;
  };
};

export default AuthHoc;
