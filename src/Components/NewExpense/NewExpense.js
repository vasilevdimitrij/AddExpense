import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [open, setIsOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
    setIsOpen(false);
  };
  const openExpenseFormHandler = () => {
    setIsOpen(true);
  };

  const cancelButtonHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="new-expense">
      {!open && (
        <button onClick={openExpenseFormHandler}>Add New Expense</button>
      )}
      {open && (
        <ExpenseForm
          stopEditing={cancelButtonHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
