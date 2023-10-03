import './ExpenseItem.css';
export const ExpenseItem = props =>{
    return (
        <div className='expense-item'>
            <div>20 Agustus 2023</div>
            <div className='expense-item__description'>
                <h2>Asuransi Mobil</h2>
                <div className='expense-item__price'>Rp. 20.000.000</div>
            </div>
        </div>
    )
}