import React, { FC, ReactElement } from 'react';
import './ExpenseDate.css';

interface IProps {
    date?: Date
}

const ExpenseDate: FC<IProps> = ({ date }): ReactElement => {
    date = date === undefined ? new Date() : date;
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )

}

export default ExpenseDate;
