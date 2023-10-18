import { ExpenseItem } from "./components/ExpenseItem/ExpenseItem";
import { NewExpense } from './components/NewExpense/NewExpense';
import React from 'react';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  

  const onSave = data => {
    console.log('data', data);
  }


  return (
    <React.Fragment>
      <NewExpense onSave={onSave}/>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </React.Fragment>

  );
}

export default App;
