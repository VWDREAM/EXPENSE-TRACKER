// ExpenseTable.jsx
import React from 'react';
import ExpenseItem from './ExpenseItem'; // Import the ExpenseItem component

function ExpenseTable({ expenses }) {
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider">Description</th>
          <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider">Amount</th>
          <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase tracking-wider">Category</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
