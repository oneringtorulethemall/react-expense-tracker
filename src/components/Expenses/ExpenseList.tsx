import React, { FC, ReactElement } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import TextMessage from '../UI/TextMessage';

import './ExpenseList.css';

interface IExpense {
    ID: string,
    Category: string,
    Description: string,
    Amount: number,
    TransactionDate: Date
};

const ExpenseList = (props: any): ReactElement => {
    const { expenses } = props;

    const rcList = expenses.map((expense: IExpense) => {
        return (
            <ExpenseItem
                key={expense.ID}
                ID={expense.ID}
                Category={expense.Category}
                Description={expense.Description}
                Amount={expense.Amount}
                TransactionDate={expense.TransactionDate}
            />
        )
    });

    return (
        rcList.length < 1 ?
            <TextMessage text="No expenses found for selected year." />
            :
            <ul className="expenses-list">
                {rcList}
            </ul>
    )
};

export default ExpenseList;