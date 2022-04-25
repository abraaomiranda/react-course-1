import React, {useState} from 'react';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from './Card';

function Expenses(props) {
  const [selectedYear, setYearFilter] = useState('');

  const filterChangeHandler = selectedYear => {
    setYearFilter(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense =>{
    return !selectedYear || expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;