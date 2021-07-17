
// here useState hooks use to update change of variable

import React, { useState } from 'react';

// import CSS file 
import './ExpencesItem.css';
// import the Date component file
import ExpenseDate from './ExpenseDate';

function ExpencesItem(props) {
    // Here the onClick function Body 
    
    // let title = props.title; 

    // Here Array [variable, fucntion ] = useState(take_default_variable)

    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {

        //title = "Update Title";

        // Here value change by function 
        setTitle("Update");

        /* only Set the title will not show to website 
         When the Component Call That time Read At a time but => Title varibale
        After button Click How we can Set and Update value it is Our are consern
        */
        console.log(title);
    }

    return (
        <div className="container">
            <div className="date-item">
                <ExpenseDate date={props.date}> </ExpenseDate>
            </div>
            <div className="name-item">{title /* set vaibale*/}</div>
            <div className="price-item">${props.amount}</div>
            {/* <button onClick = {() => { console.log("Clicked")}}> Clicked Me</button> */}
            <button onClick={clickHandler} > Change title </button>
            {/*
                1) Calling not use the () 
                2) COZ we just point the function Only
                3) if We use (), When the this Item component call the the line fun excute that time instatly 
                4) But we want to excute when the user click the button got it??
             */}
        </div>
    );
}

export default ExpencesItem;