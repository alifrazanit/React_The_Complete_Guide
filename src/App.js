import { ExpenseFilter } from "./components/ExpenseFilter/ExpenseFilter";
import { ExpenseItem } from "./components/ExpenseItem/ExpenseItem";
import { NewExpense } from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [listData, setListData] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState('2020');

  const onSave = (data) => {
    console.log("data", data);
  };

  const onChangeFilter = (year) => {
    setFilteredYear(year);
  };

  return (
    <React.Fragment>
      <NewExpense onSave={onSave} />
      <ExpenseFilter onChangeFilter={onChangeFilter} selected={filteredYear}/>
      {listData &&
        listData.map((ld) => (
          <ExpenseItem
            key={ld.key}
            title={ld.title}
            amount={ld.amount}
            date={ld.date}
          />
        ))}
    </React.Fragment>
  );
}

export default App;
