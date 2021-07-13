import React from 'react';
import GUIDHelper from '../../utils/utilities';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props: any) => {

    const saveExpenseDataHandler = (enteredData: any) => {
        const newItem = {
            ...enteredData,
            ID: GUIDHelper.CreateGUID()
        };
        props.onAddExpense(newItem);

    }


    return (
        <div className="new-expense">
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
            />
        </div>
    )
};

export default NewExpense;
