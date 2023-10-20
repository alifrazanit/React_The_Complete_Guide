import React, { useState } from "react";
import "./FormCalculatorComponent.css";
const INIT_DATA = {
  currentSaving: 0,
  yearlyContribution: 0,
  expectedReturn: 0,
  duration: 0,
};
export const FormCalculatorComponent = (props) => {
  const [FormInput, setFormInput] = useState(INIT_DATA);

  const onChangeHandler = (nameField, value) => {
    setFormInput((prev) => {
      return { ...prev, [nameField]: +value };
    });
  };

  const onResetForm = (e) => {
    setFormInput(INIT_DATA);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("FormInput", FormInput);
  };

  return (
    <form className="form" onSubmit={onSubmitForm}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={FormInput['currentSaving']}
            onChange={(e) => onChangeHandler("currentSaving", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={FormInput['yearlyContribution']}
            onChange={(e) =>
              onChangeHandler("yearlyContribution", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={FormInput['expectedReturn']}
            onChange={(e) => onChangeHandler("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={FormInput['duration']}
            onChange={(e) => onChangeHandler("duration", e.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={onResetForm}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
