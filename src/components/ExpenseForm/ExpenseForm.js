import './ExpenseForm.css';
import { useState } from 'react';
export const ExpenseForm = props => {
    // const [title, setTitle] = useState();
    // const [amount, setAmount] = useState();
    // const [dateExpense, setDate] = useState();

    const [userInput, setUserInput] = useState({
        title: '',
        amount:'',
        dateExpense:'',
    })

    const titleChangeHandler = e => {
        setUserInput({
            ...userInput,
            title: e.target.value
        })
        // setTitle(e.target.value)
    }
    const amountChangeHandler = e => {
        setUserInput({
            ...userInput,
            amount: e.target.value
        })
        // setAmount(e.target.value)
    }
    const dateChangeHandler = e => {
        setUserInput({
            ...userInput,
            dateExpense: e.target.value
        })
        // setDate(e.target.value)
    }

    const onSubmitForm = e => {
        e.preventDefault();
        console.log(userInput)
    }

    return(
        <form onSubmit={onSubmitForm}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2023-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}