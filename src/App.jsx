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
    <div>
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <ExpenseForm onAddExpense={addExpense} />

      <div>
        {/* Sorting Buttons */}
        <button onClick={() => handleSort('description')}>Sort by Description</button>
        <button onClick={() => handleSort('category')}>Sort by Category</button>
      </div>

      <ExpenseTable expenses={filteredAndSortedExpenses} />
    </div>
  );
}

export default App;
