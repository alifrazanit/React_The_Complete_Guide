import './ExpenseItem.css';
import { ExpenseDate } from '../ExpenseDate/ExpenseDate';
import { Cards } from '../Cards/Cards';

export const ExpenseItem = props =>{
   
    return (
        <Cards className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>Rp. {props.amount}</div>
            </div>
        </Cards>
    )
}



