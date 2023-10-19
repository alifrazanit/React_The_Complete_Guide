import "./ExpenseList.css";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

export const ExpenseList = (props) => {
  let expenseContent = <p className="expenses-list__fallback">There is no expenase</p>;
  if (props.items.length > 0) {
    expenseContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <ul className="expenses-list">
        <li>{expenseContent}</li>
    </ul>
  );
};
