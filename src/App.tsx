import React, { useState, useReducer } from 'react';
import './App.css';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import ExpensesChart from './components/Expenses/ExpensesChart';
import Utils from './utils/utilities';


const expenses = [
  { ID: Utils.CreateGUID(), Category: "House", Description: "Mortgage payment", Amount: 1767.01, TransactionDate: new Date("01/15/2021 8:00 am") },
  { ID: Utils.CreateGUID(), Category: "Boat", Description: "Boat payment", Amount: 450.99, TransactionDate: new Date("01/22/2021 8:00 am") },
  { ID: Utils.CreateGUID(), Category: "Dining", Description: "Joe's Crab Shack", Amount: 23.59, TransactionDate: new Date("01/24/2021 7:00 pm") },
  { ID: Utils.CreateGUID(), Category: "Auto", Description: "Gas", Amount: 45.12, TransactionDate: new Date("01/26/2021 7:00 pm") },
  { ID: Utils.CreateGUID(), Category: "Dining", Description: "Chili's", Amount: 45.12, TransactionDate: new Date("01/26/2019 7:00 pm") },
  { ID: Utils.CreateGUID(), Category: "Dining", Description: "Appleby's", Amount: 100.12, TransactionDate: new Date("01/26/2022 7:00 pm") }

]


function App() {

  const addExpenseHandler = (expenseItem: any) => {
    console.log(expenseItem);
    //expenses.push(expenseItem);
    expenses.splice(0, 0, expenseItem);
    forceUpdate();
  }

  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [yearFilter, setYearFilter] = useState('*');

  const onFilterByYear = (selected: string): void => {
    // add code here to filter the expenses array
    // based on the selected year...
    // add code to make sure that all are returned initially
    // 
    setYearFilter(selected);
  }

  const getExpenseList = (): any => {
    const year = yearFilter;
    if (year === '*') return expenses;

    var searchYear = parseInt(year);
    return expenses.filter(x => x.TransactionDate.getFullYear() === searchYear);
  }



  return (
    <div className="App">
      <ExpenseFilter onFilterExpense={onFilterByYear} />
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesChart expenses={getExpenseList()} />
      <ExpenseList expenses={getExpenseList()} />
    </div>
  );
}

export default App;
