import './ExpenseItem.css';
export const ExpenseItem = props =>{
    return (
        <div className='expense-item'>
            <div>{new Date(props.date).toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>Rp. {props.amount}</div>
            </div>
        </div>
    )
}