import "./ExpenseForm.css";
import { useState } from "react";
export const ExpenseForm = (props) => {
  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();
  const [dateExpense, setDate] = useState();

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   dateExpense: "",
  // });

  // const titleChangeHandler = (e) => {
  //   // setUserInput((prevData) => {
  //   //   return { ...prevData, title: e.target.value };
  //   // });
  //   // setUserInput({
  //   //     ...userInput,
  //   //     title: e.target.value
  //   // })
  //   // setTitle(e.target.value)
  // };
  // const amountChangeHandler = (e) => {
  //   // setUserInput((prevData) => {
  //   //   return { ...prevData, amount: e.target.value };
  //   // });
  //   // setUserInput({
  //   //     ...userInput,
  //   //     amount: e.target.value
  //   // })
  //   // setAmount(e.target.value)
  // };
  // const dateChangeHandler = (e) => {
  //   // setUserInput((prevData) => {
  //   //   return { ...prevData, dateExpense: e.target.value };
  //   // });
  //   // setUserInput({
  //   //   ...userInput,
  //   //   dateExpense: e.target.value,
  //   // });
  //   // setDate(e.target.value)
  // };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(title, amount, dateExpense);
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "amount") {
      setAmount(value);
    } else if (identifier === "date") {
      setDate(value);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
