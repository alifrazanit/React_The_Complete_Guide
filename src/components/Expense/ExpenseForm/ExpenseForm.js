import "./ExpenseForm.css";
import { useState } from "react";
export const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const payload = {
      title,
      amount,
      date
    };
    props.onSaveExpense(payload)
    setTitle('');
    setAmount('');
    setDate('');
  };

 

  return (
    <form onSubmit={onSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
