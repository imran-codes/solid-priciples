import React from "react";

// Violating OCP
// const Notification = ({ type, message }) => {
//   if (type === "success") {
//     return <div className="success">{message}</div>;
//   }
//   if (type === "error") {
//     return <div className="error">{message}</div>;
//   }
//   return <div>{message}</div>;
// };

// Adhering to OCP
const SuccessNotification = ({ message }) => (
  <div className="success">{message}</div>
);

const ErrorNotification = ({ message }) => (
  <div className="error">{message}!!!!!</div>
);

const DefaultNotification = ({ message }) => (
  <div className="default">{message}</div>
);

const Notification = ({ type, message }) => {
  const notificationTypes = {
    success: SuccessNotification,
    error: ErrorNotification,
    default: DefaultNotification,
  };
  const Component = notificationTypes[type];
  return <Component message={message} />;
};
