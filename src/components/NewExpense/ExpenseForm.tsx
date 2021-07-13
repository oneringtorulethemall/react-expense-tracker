import React, { ChangeEvent, useState, FormEvent } from 'react';


import './ExpenseForm.css';

const ExpenseForm = (props: any) => {
    const [expenseItem, setExpenseItem] = useState({
        title: "",
        category: "",
        amount: "0",
        transactionDate: new Date().toLocaleDateString()
    });
    const [showForm, setShowForm] = useState(false);


    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setExpenseItem((previousState: any) => {
            return {
                ...previousState,
                [e.target.name]: e.target.value
            }
        });
    }

    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();
        // expenseItem should be the value that gets added to the Expense List 
        // (available in the ExpenseList control)

        // using Date.parse results in incorrect values...tz related
        // parse and convert
        const dateParser = (dateString: string): Date => {
            let parts = dateString.split("-");
            // parts.length should be 3
            if (parts.length < 3) { throw new Error("Date is not in valid format.") }

            const yearPart = parseInt(parts[0]);
            const monthPart = parseInt(parts[1]);
            const dayPart = parseInt(parts[2]);

            const rc = new Date();
            rc.setMonth(monthPart - 1);
            rc.setFullYear(yearPart);
            rc.setDate(dayPart);
            rc.setHours(0);
            rc.setMinutes(0);
            rc.setSeconds(0);
            rc.setMilliseconds(0);
            return rc;
        }

        const newItem = {
            Description: expenseItem.title,
            Amount: parseFloat(expenseItem.amount),
            Category: expenseItem.category,
            TransactionDate: dateParser(expenseItem.transactionDate)
        };

        props.onSaveExpenseData(newItem);

        // use onCancelAddExpenseHandler since it will do what we want
        onCancelAddExpenseHandler(null);

    }
    const clearForm = () => {
        const initialValue = {
            title: '',
            category: '',
            amount: '',
            transactionDate: new Date().toLocaleDateString()
        }
        setExpenseItem(initialValue);
    };

    const onCancelAddExpenseHandler = (e: React.MouseEvent | React.KeyboardEvent | null) => {
        clearForm();
        setShowForm(false);
    };

    const onAddExpenseHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
        setShowForm(true);
    }

    const buildNewExpenseSection = () => {
        if (showForm) {
            return (
                // return markup to show the data entry form.
                <form onSubmit={submitHandler}>
                    <div className='new-expense__controls'>

                        <div className='new-expense__control'>
                            <label>Category</label>
                            <input
                                type="text"
                                name="category"
                                onChange={inputChangeHandler}
                                value={expenseItem.category}
                            />
                        </div>

                        <div className='new-expense__control'>
                            <label>Description</label>
                            <input
                                type="text"
                                name="title"
                                onChange={inputChangeHandler}
                                value={expenseItem.title}
                            />
                        </div>

                        <div className='new-expense__control'>
                            <label>Amount</label>
                            <input type="number"
                                name="amount"
                                min="0.01"
                                step="0.01"
                                onChange={inputChangeHandler}
                                value={expenseItem.amount}
                            />
                        </div>

                        <div className='new-expense__control'>
                            <label>Date</label>
                            <input type="date"
                                name="transactionDate"
                                min="2019-01-01"
                                step="2022-12-31"
                                onChange={inputChangeHandler}
                                value={expenseItem.transactionDate}
                            />
                        </div>
                        <div className='new-expense__actions'>
                            <button name="btnSubmit" type="submit">Add Expense</button>
                        </div>
                        <div className='new-expense__actions'>
                            <button
                                name="btnCancel"
                                onClick={onCancelAddExpenseHandler}
                            >
                                Cancel
                            </button>
                        </div>

                    </div>
                </form>);
        }
        // return area that has a button to show the data entry form only
        return (
            <div className='new-expense__controls'>
                <div className='new-expense__actions'>
                    <button
                        name="btnAddNewExpense"
                        onClick={onAddExpenseHandler}
                    >
                        Add Expense
                    </button>
                </div>
            </div>
        );

    }

    return (buildNewExpenseSection());
};

export default ExpenseForm;
