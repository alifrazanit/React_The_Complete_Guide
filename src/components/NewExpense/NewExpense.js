import './NewExpense.css';
import { ExpenseForm } from '../Expense/ExpenseForm/ExpenseForm';

export const NewExpense = props => {
    const onSaveExpense = expense => {
        const formatVal = {
            id: Math.random().toString(),
            ...expense
        }
        props.onSave(formatVal)
    }


    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={onSaveExpense}/>
        </div>
    )
}