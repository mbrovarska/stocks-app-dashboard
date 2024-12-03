import React from "react";

const ErrorMessage = (props) => {
  const { error } = props;
  return (
    <div className="loading-message-container">
      <span>Something wrong with API response</span>
      {console.log("api error", error)}
    </div>
  );
};

export default ErrorMessage;
