import React from 'react';
import Chart from '../Chart/Chart';

interface IExpense {
    ID: string,
    Category: string,
    Description: string,
    Amount: number,
    TransactionDate: Date
};


const ExpensesChart = (props: any) => {
    // props will be an array of expenses

    const { expenses } = props;

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    for (let expenseIdx in expenses) {
        const expense: IExpense = expenses[expenseIdx];
        const mth = expense.TransactionDate.getMonth();
        chartDataPoints[mth].value += expense.Amount;
    }


    return (
        <Chart dataPoints={chartDataPoints} />
    );
};

export default ExpensesChart;