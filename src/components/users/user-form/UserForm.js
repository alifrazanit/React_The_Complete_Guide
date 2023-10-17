import React from "react";
import "./UserForm.css";
export const UserForm = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <div className="form-user">
            <h1>Form User</h1>
            <form>
              <label for="fname">Name</label>
              <input type="text" id="fname" placeholder="Your name.." />
              <label for="fbirthdate">Birth Date</label>
              <input type="date" id="fbirthdate" />
              <label for="fgender">Gender</label>
              <select id="gender" name="gender">
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-actions">
            <button type="button" class="btn btn-save">Save</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
