export interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: Date;
}

export type ExpenseCategory = {
  id: string;
  name: string;
  color: string;
};