import "./Expense.css";
import React, { useState } from "react";
import { ExpenseFilter } from "./ExpenseFilter/ExpenseFilter";
import { ExpenseList } from './ExpenseList/ExpenseList';


export const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onChangeFilter = (year) => {
    setFilteredYear(year);
  };

  const filteredItem = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpenseFilter onChangeFilter={onChangeFilter} selected={filteredYear} />
      <ExpenseList items={filteredItem}/>
    </div>
  );
};
