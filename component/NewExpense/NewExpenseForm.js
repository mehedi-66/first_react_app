
/* 
    How we can get the input value <= FORM
    
    1) inside the < input set  onChange = {function_ponnter} >
    2) inside the component function create Handler_body(Take_event)
    3) The (event) Help to get the input values from 
    4) console.log(event.target.value);
    5) this event.target.value gives Always String ... 

    After Getting values of input to Store

    1) we have to use useState 
    2) useState help to track the change value

    Handelling Form submission
    1) best pratice is don't use onClick => inside button is COZ
    2) when submit button click that time from total subbmit
    3) <from onSubmit = { submitHandler } > .........
    4) create function submintHandler() { body } ... give instraction ....
    5) submitHandeler(event){event.preventDefault();} stop to page relod
    6) inside the submitHandler create object and group of the form date and work with that.

    Two way bunding .. menas reset the from
    1) inside the < input value={enteredTitle} />
    2) inside the submintHandler() After the object{}
    3) new hooks value call to reset the input Area...

    App.js => ExpenseItem.js => NewExpense.js => NewExpenseFrom.js

    Now to we can Data pass parent to child by Props NewExpense.js => NewExpenseFrom.js

    But How we can Data pass Child to Parent NewExpense.js <= NewExpenseFrom
    1) Up word Data pass..
    2) When Component Call that time Pass a Function pointer to Execute the Parent function 
    /
    ComponentParetn(){ 
        Parent(){
            ......Task
        }
        return(
            < ComponentChild onParentTask = {Parent} />
        );
    }

    ComponentChild(props){

        ....
        ...
        ..Task
        ....
        props.Parent(DataPassToParent);

        return(
            ....
        );
    }
    3) Child component excute the Parent fucntion and recerive Data...





*/
import Ract, { useState } from 'react';
import "./NewExpenseForm.css";

function NewExpenseFrom(props) {
    // here props only use to send data to parent component NewExpense.js

    // use the useState React hooks and value seperate like 
    // [variable, function] = useState(default_value);
    // we can use seperate useState for each input changees..

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {

        // console.log(event.target.value);
        
        // When the titleChangeHandler call that time 
        // call the setEnteredTitle function initializes the Update input
        setEnteredTitle(event.target.value);
    }
    const amoutChangeHandler = (event) =>{ 

        setEnteredAmount(event.target.value);
    } 

    const dateChangeHandler = (event) =>{ 

        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) =>{ 
        event.preventDefault(); // to stop page realod
        // create object 
        // console.log("Mehedi Hasna");
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        // console.log(expenseData);

        // props only use here to Send the data to Parent NewExpense.js <= NewExpenseFrom.js
        props.onSaveExpenseDate(expenseData);
        
        // New call to reset value set...with the help of <input vlaue={} />
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (

    
            /*onSubmit={submitHandler}*/
            <from  >
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler /* funcation call */} />
                </div>
                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  value={enteredAmount} onChange = {amoutChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2025-12-31" value={enteredDate} onChange = {dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense_actions">
                <button type='submit' onClick={submitHandler} >Add Expense</button>
            </div>


        </from>

    );
};

export default NewExpenseFrom;