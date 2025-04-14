import React from 'react';

function ExpenseItem({ expense }) {
  return (
    <tr>
      <td>{expense.description}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td>{expense.category}</td>
    </tr>
  );
}

export default ExpenseItem;
