import React, { SyntheticEvent } from 'react';
import './ExpenseFilter.css';


const ExpenseFilter = (props: any) => {

    let baseYear = new Date().getFullYear();
    let options = new Array<React.ReactElement>();

    const onChangeEventHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        props.onFilterExpense(e.target.value);

    }

    for (let year = baseYear - 2; year < baseYear + 1; year++) {
        options.push(<option key={`${year}`} value={year}>{year}</option>);
    }
    // add in a generic '*' All item.
    options.splice(0, 0, <option key={'*'} value='*'>All</option>);

    return (
        <div className="expenses-filter">
            <div className="expenses-filter-control">
                <label>Filter by Year </label>
                <select id="ddlYearFilter"
                    key={"ddlYearFilter"}
                    name="ddlYearFilter"
                    onChange={onChangeEventHandler}
                >
                    {options}
                </select>
            </div>
        </div>
    )

};

export default ExpenseFilter;