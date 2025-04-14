import React, { useState, useMemo } from 'react'; // Import useMemo
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50.00, category: 'Food' },
    { id: 2, description: 'Movie Ticket', amount: 12.50, category: 'Entertainment' },
    { id: 3, description: 'Electricity Bill', amount: 75.00, category: 'Utilities' },
    { id: 4, description: 'New Laptop', amount: 1200.00, category: 'Technology' },
    { id: 5, description: 'Dinner with friends', amount: 60.00, category: 'Social' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('description'); // Default sorting by description
  const [sortOrder, setSortOrder] = useState('asc'); // Default ascending order

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };


  const handleSort = (column) => {
    if (sortBy === column) {
      // Toggle sort order if the same column is clicked again
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new sort column and default to ascending order
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  // Use useMemo to efficiently compute the filtered and sorted expenses
  const filteredAndSortedExpenses = useMemo(() => {
    const filtered = expenses.filter(expense =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      const aValue = a[sortBy].toLowerCase();
      const bValue = b[sortBy].toLowerCase();
      if (aValue < bValue) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  }, [expenses, searchTerm, sortBy, sortOrder]);

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Expense Tracker</h1>
      <div className="w-full max-w-md space-y-4 mb-8">
        <SearchBar onSearch={handleSearch} />
        <ExpenseForm onAddExpense={addExpense} />
      </div>

      <div className="flex space-x-2 mb-4">
        {/* Sorting Buttons */}
        <button onClick={() => handleSort('description')} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sort by Description</button>
        <button onClick={() => handleSort('category')} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sort by Category</button>
      </div>

      <ExpenseTable className="w-full max-w-2xl" expenses={filteredAndSortedExpenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
}

export default App;
