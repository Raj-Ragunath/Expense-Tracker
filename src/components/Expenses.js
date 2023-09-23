import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
function Expenses(props){
    const [filterValue, setFilterValue] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterValue(selectedYear);
    }
    return (
        
        <div className = "expenses">
            <ExpensesFilter selected={filterValue} onChangeFilter = {filterChangeHandler}/>
             {props.overallExpenses.map(expense => <ExpenseItem title = {expense.title} amount = {expense.amount} date = {expense.date}/>)}
        </div>
    );
}

export default Expenses;