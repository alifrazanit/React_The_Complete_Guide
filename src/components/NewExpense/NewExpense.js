import './NewExpense.css';
import { ExpenseForm } from '../ExpenseForm/ExpenseForm';

export const NewExpense = props => {
    return (
        <div className='new-expense'>
            <ExpenseForm />
        </div>
    )
}