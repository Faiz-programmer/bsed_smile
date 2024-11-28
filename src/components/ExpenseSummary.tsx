import React from 'react';
import { DollarSign } from 'lucide-react';

interface ExpenseSummaryProps {
  totalExpenses: number;
}

export const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ totalExpenses }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Total Expenses</p>
          <p className="text-2xl font-semibold text-gray-900">${totalExpenses.toFixed(2)}</p>
        </div>
        <div className="p-3 bg-indigo-500 rounded-full">
          <DollarSign className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};