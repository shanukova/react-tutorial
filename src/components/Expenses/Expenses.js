import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangerHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expese => expese.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangerHandler} />
        <ExpenseList items={filteredExpenses} />
      </Card>
      <ExpensesChart expenses={filteredExpenses} />
    </div>
  )
}

export default Expenses
