import React, { useState } from "react";
import { RowCol } from "../../UI/RowCol/RowCol";

import "./UserForm.css";

const INIT_VAL = {
  nameVal: "",
  birthDateVal: null,
  genderVal: "",
};
export const UserForm = (props) => {
  const [formData, setFormData] = useState(INIT_VAL);
  const [isValid, setIsValid] = useState(true);

  const onChangeHandler = (fields, value) => {
    setFormData((prev) => {
      return { ...prev, [fields]: value };
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      props.onSubmitFormEvent(formData);
      setFormData(INIT_VAL);
    } else {
      alert("invalid form input");
    }
  };

  const validateForm = () => {
    if (
      String(formData.nameVal).trim().length < 1 ||
      String(formData.genderVal).trim().length < 1 ||
      formData.birthDateVal === null
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmitForm}>
        <RowCol>
          <div className="form-user">
            <h1>Form User</h1>
            <div className={`form-control ${!isValid && formData.nameVal.trim().length === 0 ? "invalid": ""}`}>
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                id="fname"
                placeholder="Your name.."
                onChange={(e) => {
                  onChangeHandler("nameVal", e.target.value);
                }}
                value={formData["nameVal"]}
              />
            </div>
            <div
              className={`form-control ${
                !isValid && formData.birthDateVal === null ? "invalid" : ""
              }`}
            >
              <label htmlFor="fbirthdate">Birth Date</label>
              <input
                type="date"
                id="fbirthdate"
                onChange={(e) => {
                  onChangeHandler("birthDateVal", e.target.value);
                }}
                value={formData["birthDateVal"]}
              />
            </div>

            <div
              className={`form-control ${
                !isValid && formData.genderVal.trim().length === 0
                  ? "invalid"
                  : ""
              }`}
            >
              <label htmlFor="fgender">Gender</label>
              <select
                id="gender"
                name="gender"
                onChange={(e) => {
                  onChangeHandler("genderVal", e.target.value);
                }}
                value={formData["genderVal"]}
              >
                <option value="">--PLEASE SELECT--</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
        </RowCol>
        <RowCol>
          <div className="form-actions">
            <button type="submit" className="btn btn-save">
              Save
            </button>
          </div>
        </RowCol>
      </form>
    </React.Fragment>
  );
};
