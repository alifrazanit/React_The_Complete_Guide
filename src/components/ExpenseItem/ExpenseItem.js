import './ExpenseItem.css';
export const ExpenseItem = props =>{
    const expenseDate = new Date();
    const expenseName = 'Asuransi Mobil';
    const expenseAmount = 20000000;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseName}</h2>
                <div className='expense-item__price'>Rp. {expenseAmount}</div>
            </div>
        </div>
    )
}