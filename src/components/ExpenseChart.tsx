import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { categories } from '../data/categories';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ExpenseChartProps {
  expensesByCategory: Record<string, number>;
}

export const ExpenseChart: React.FC<ExpenseChartProps> = ({ expensesByCategory }) => {
  const data = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        data: Object.values(expensesByCategory),
        backgroundColor: Object.keys(expensesByCategory).map(
          (category) => categories.find((c) => c.name === category)?.color || '#C9CBCF'
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Expense Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
};