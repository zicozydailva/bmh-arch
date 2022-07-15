import React, { useEffect } from "react";
import "./alert.css";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [removeAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
