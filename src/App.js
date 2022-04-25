import React, {useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 1, title: 'Carro', amount: 123.32, date: new Date(2021, 12, 12) },
  { id: 2, title: 'Moto', amount: 534.32, date: new Date(2021, 6, 23) },
  { id: 3, title: 'Lancha', amount: 132.32, date: new Date(2021, 4, 30) },
  { id: 4, title: 'Hamburguer', amount: 6457.32, date: new Date(2021, 7, 9) },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
