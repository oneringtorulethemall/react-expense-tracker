import React, { useState, MouseEvent, MouseEventHandler } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';


interface IProps {
    ID: string,
    Category?: string,
    Description: string,
    Amount: number,
    TransactionDate?: Date
};


const ExpenseItem = (props: IProps) => {

    const [expenseItem, setExpenseItem] = useState({
        ID: props.ID,
        Category: props.Category,
        Description: props.Description,
        Amount: props.Amount,
        TransactionDate: props.TransactionDate
    });

    const onClickHandler = (e: MouseEvent<HTMLElement>) => {
        let newItem;
        if (expenseItem.Description[0] === '*') {
            newItem = { ...expenseItem, Description: expenseItem.Description.substr(1) };
        }
        else {
            newItem = { ...expenseItem, Description: '*' + expenseItem.Description };
        }
        setExpenseItem(newItem);

    }


    return (
        // <div className="expense-item"
        <li>
            <Card className="expense-item"
                key={expenseItem.ID}>
                <ExpenseDate date={expenseItem.TransactionDate} />
                <h2>{expenseItem.Category ?? "Unknown"}</h2>
                <div className="expense-item__description">
                    {expenseItem.Description}
                </div>
                <div className="expense-item__price">
                    ${expenseItem.Amount}
                </div>
                <button onClick={onClickHandler}>
                    {expenseItem.Description.substr(0, 1) === '*'
                        ? 'Reset' : 'Change Title'}
                </button>
            </Card>
        </li>
    );

};

export default ExpenseItem;
