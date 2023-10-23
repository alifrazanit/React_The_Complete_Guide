import "./LoginPage.css";
import React from "react";

export const LoginPage = (props) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
    
  };
  return (
    <React.Fragment>
      <div className="form-container">
        <form onSubmit={onSubmitForm}>
          <div className="form-control">
            <label>Username</label>
            <input type="text" />
            <small className="error-not-valid">Username not valid!</small>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="form-action">
            <button type="submit" className="btn btn-full btn-success">
              Login
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
