import React, {useState} from 'react';
import './ExpenseForm.css'


function ExpenseForm(props){
    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    
    const titleChangeHandler = (event) => {
        setExpenseTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setExpenseAmount(event.target.value);
    }


    const dateChangeHandler = (event) => {
        setExpenseDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: expenseTitle,
            amount: expenseAmount,
            data: new Date(expenseDate)
        }
        ;

        props.onSaveExpenseData(expenseData);
        setExpenseTitle('');
        setExpenseAmount('');;
        setExpenseDate('');
    }
    

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={expenseTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" value={expenseAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" value={expenseDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form> 
    );
}

export default ExpenseForm;