/* 
  Dynamic List update 
  1) get the child date to parent 
  2) one default object Array 
  3) useState use the default Array
  4) when the udpate date input change
  5) useState function to call and set the Data
  6) Rendaring the component  to show the data

  expenseArr here default obj Array

   let [expenseUpdate, setExpenseUpdate] = useState(expenseArr);

  function addExpenseHandler(expense){

    expenseUpdate = [...expenseUpdate, expense];
    setExpenseUpdate(expenseUpdate);

  }

  Rendering....

  Best Pratice to useState function call by last componet ( spnaps )
  by call back function way.... useState function call 

  function addExpenseHandler(expense){

    setExpenseUpdate((prevExpense) => {
      return [...prevExpense, expense]
    });

  }

  Add ID to help react to identify and stop flaush all component 
  but specific element only flush....
  when Component call that time pass only => key={element.id};

*/

import './App.css';
// import the Custom Component file
import React, {useState} from 'react';

import ExpencesItem from './component/Expense/ExpencesItem';
import NewExpense from './component/NewExpense/NewExpense';
import ExpenseFilter from './component/Expense/ExpenseFilter'
function App() {
  let expenseArr = [
    // thsi array contain some object
    {
      id: 'e1',
      title: "Car Buy",
      amount: 300000,
      date: new Date(2020, 3, 5),
    },
    {
      id: 'e2',
      title: "Book Buy",
      amount: 300,
      date: new Date(2021, 4, 6),
    },
    {
      id: 'e3',
      title: "Phone Buy",
      amount: 3000,
      date: new Date(2023, 1, 3),
    },

  ];

  // Update input value 
  const [expenseUpdate, setExpenseUpdate] = useState(expenseArr);

  function addExpenseHandler(expense){
    // console.log("App.js run");
    console.log(expense);
    // expenseUpdate = [...expenseUpdate, expense];
    // setExpenseUpdate(expenseUpdate);
    setExpenseUpdate((prevExpense) => {
      return [...prevExpense, expense]
    });
  }
  const [filteredYear, seteFilteredYear] = useState('2020');
  function filterChangeHandler(selectedYear){
      seteFilteredYear(selectedYear);
  }
  return (
    <div >
     {/* When New Expense component Call that time Excute onSide this pass function */}
     <NewExpense onAddExpense={addExpenseHandler}> </NewExpense>
     
      <div className="wrap-item">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />   

        {/* It component replacement by Dynamically */}

        {/* <ExpencesItem
          title={expenseArr[0].title}
          price={expenseArr[0].price}
          date={expenseArr[0].date}
        ></ExpencesItem> */}
        
        {expenseUpdate.map( (element) => 
          <ExpencesItem  
              key={element.id}
              title={element.title}
              amount={element.amount}
              date = {element.date}
          />
          
        )}

      </div>

    </div>
  );
}


export default App;
