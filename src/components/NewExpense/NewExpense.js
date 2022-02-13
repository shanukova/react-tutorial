import React from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expsenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString()
    }
    props.onAddExpense(expsenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
