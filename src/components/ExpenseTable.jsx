import React from 'react';
import ExpenseItem from './ExpenseItem'; // Import the ExpenseItem component

function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
