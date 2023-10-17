import React from "react";
import "./UserList.css";
export const UserList = (props) => {

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Actions</th>
                  <th>Name</th>
                  <th>Birth Date</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {props.users &&
                  props.users.map((e) => (
                    <tr key={e.id}>
                      <td>
                        <i
                          className="btn-update fa-regular fa-pen-to-square"
                        ></i>
                        | <i className="btn-delete fa-solid fa-trash"></i>
                      </td>
                      <td>{e.name}</td>
                      <td>{new Date(e.birthDate).toLocaleDateString()}</td>
                      <td>{e.gender}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
