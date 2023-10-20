import React, { useState } from "react";
import "./UserForm.css";

export const UserForm = (props) => {
  const [nameVal, setName] = useState("");
  const [birthDateVal, setBirthDate] = useState("");
  const [genderVal, setGender] = useState("");
  const [isNotValid, setIsNotValid] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirthDate = (e) => {
    setBirthDate(e.target.value);
  };

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!nameVal || !birthDateVal || !genderVal) {
      setIsNotValid(true);
      // alert("Form is not valid, please input correct data");
    } else {
      setIsNotValid(false);
      const payload = {
        id: Math.random(),
        name: nameVal,
        birthDate: birthDateVal,
        gender: genderVal,
      };
      setName("");
      setBirthDate("");
      setGender("");
      props.onSubmitFormEvent(payload);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmitForm}>
        <div className="row">
          <div className="col">
            <div className="form-user">
              <h1>Form User</h1>
              <div
                className={`form-control ${
                  isNotValid && nameVal.trim().length === 0 ? "invalid" : ""
                }`}
              >
                <label htmlFor="fname">Name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Your name.."
                  onChange={onChangeName}
                  value={nameVal}
                />
              </div>

              <div
                className={`form-control ${
                  isNotValid && nameVal.trim().length === 0 ? "invalid" : ""
                }`}
              >
                <label htmlFor="fbirthdate">Birth Date</label>
                <input
                  type="date"
                  id="fbirthdate"
                  onChange={onChangeBirthDate}
                  value={birthDateVal}
                />
              </div>

              <div
                className={`form-control ${
                  isNotValid && nameVal.trim().length === 0 ? "invalid" : ""
                }`}
              >
                <label htmlFor="fgender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  onChange={onChangeGender}
                  value={genderVal}
                >
                  <option value="">--PLEASE SELECT--</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-actions">
              <button type="submit" className="btn btn-save">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
