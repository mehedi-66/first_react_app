
import React from 'react';
import './NewExpense.css'
import NewExpenseFrom from './NewExpenseForm'

const NewExpense = (props) => {
    // this prosp send data to App.js means parent componenet


// Collect the Expense data from child components NewExpenseFrom.js

    function saveExpenseDataHandler(enteredExpenseData){
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        // console.log(ExpenseData);
        // Data pass to Parent App.js component by Executing Function...
        props.onAddExpense(ExpenseData);
    }
     
        return (
            <div className="form-section" > 

                <NewExpenseFrom onSaveExpenseDate={saveExpenseDataHandler}/>

            </div>

        );
};

export default NewExpense;