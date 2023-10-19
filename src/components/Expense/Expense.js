import "./Expense.css";
import React, { useState } from "react";
import { ExpenseFilter } from "./ExpenseFilter/ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";

export const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onChangeFilter = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <ExpenseFilter onChangeFilter={onChangeFilter} selected={filteredYear} />
      {props.items && props.items.map((expense) => (
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </div>
  );
};
