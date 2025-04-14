// ExpenseItem.jsx
import React from 'react';

function ExpenseItem({ expense, onDeleteExpense }) {
    const handleDelete = () => {
      onDeleteExpense(expense.id);
         };
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">{expense.description}</td>
      <td className="px-4 py-2">${expense.amount.toFixed(2)}</td>
      <td className="px-4 py-2">{expense.category}</td>
      <td className="px-4 py-2">
     <button
       onClick={handleDelete}       className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs focus:outline-none focus:shadow-outline">
        Delete</button>
        </td>
    </tr>
  );
}

export default ExpenseItem;
