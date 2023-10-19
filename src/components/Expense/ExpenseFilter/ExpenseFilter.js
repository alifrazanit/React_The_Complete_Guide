import "./ExpenseFilter.css";
import React from "react";
export const ExpenseFilter = (props) => {
  const onChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="filter">
      <h1>Fitler</h1>
      <div className="form-control">
        <select id="listYear" name="listYear" onChange={onChangeHandler} value={props.selected}>
          <option value="">-PILIH-</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};
