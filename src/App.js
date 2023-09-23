import React from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses = [
    {id: 'e1', title: "Car Insurance", amount: 297.67, date: new Date(2023,3,21)},
    {id: 'e2', title: "House Insurance", amount: 400.67, date: new Date(2023,4,21)},
    {id: 'e3', title: "Mortage Insurance", amount: 650.67, date: new Date(2023,5,21)}
  ]
  const addExpenseHandler = (addedExpense) => {
      expenses.push(addedExpense);
      console.log(expenses);
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses overallExpenses = {expenses}/>
      
    </div>
    
  );
}

export default App;
