import "./Expense.css";
import React, { useState } from "react";
import { ExpenseFilter } from "./ExpenseFilter/ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";

export const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onChangeFilter = (year) => {
    setFilteredYear(year);
  };

  const filteredItem = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>There is no expenase</p>
  if(filteredItem.length > 0){
    expenseContent = filteredItem.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <ExpenseFilter onChangeFilter={onChangeFilter} selected={filteredYear} />
      {expenseContent}
    </div>
  );
};
