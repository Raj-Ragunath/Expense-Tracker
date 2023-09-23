import './ExpenseDate.css';

function ExpenseDate({date}){
    const month = date.toLocaleString('en-US', {month: 'long'});
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const year = date.getFullYear();

    return (
        <div className="expense-item__date">
            <div className="expense-item__date-month">{month}</div>
            <div className="expense-item__date-date">{day}</div>            
            <div className="expense-item__date-year">{year}</div>
        </div>
    )
}

export default ExpenseDate;