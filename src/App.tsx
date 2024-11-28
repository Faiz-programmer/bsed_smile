import React from 'react';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { ExpenseChart } from './components/ExpenseChart';
import { ExpenseSummary } from './components/ExpenseSummary';
import { useExpenses } from './hooks/useExpenses';

function App() {
  const { expenses, addExpense, deleteExpense, getTotalExpenses, getExpensesByCategory } = useExpenses();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Expense Manager</h1>
          
          <div className="mb-8">
            <ExpenseSummary totalExpenses={getTotalExpenses()} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <ExpenseForm onSubmit={addExpense} />
            </div>
            <div>
              <ExpenseChart expensesByCategory={getExpensesByCategory()} />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Expenses</h2>
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;