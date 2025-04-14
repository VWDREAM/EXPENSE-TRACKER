// ExpenseItem.jsx
import React from 'react';

function ExpenseItem({ expense }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">{expense.description}</td>
      <td className="px-4 py-2">${expense.amount.toFixed(2)}</td>
      <td className="px-4 py-2">{expense.category}</td>
    </tr>
  );
}

export default ExpenseItem;
