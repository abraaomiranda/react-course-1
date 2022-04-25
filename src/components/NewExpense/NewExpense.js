import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse(prevState => !prevState);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);
    toggleCollapse();
  };

  if (collapse) {
    return <div className='new-expense'>
      <button type='button' onClick={toggleCollapse}>open form</button>
    </div>
  }


  return <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleCollapse}/>
  </div>
}

export default NewExpense;