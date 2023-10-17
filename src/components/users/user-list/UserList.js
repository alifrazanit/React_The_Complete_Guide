import React from "react";
import "./UserList.css";
export const UserList = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <div className="table-container">
            <table className="table">
              { props.users && props.users.forEach((element) => (
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Points</th>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
