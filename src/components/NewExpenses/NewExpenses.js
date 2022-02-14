import './NewExpenses.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpenses=(props)=>{

    const[edit, setEdit]=useState(false)

    const SaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
        props.onAddExpense(expenseData);
        setEdit(false);
    }
    const editStateHandler=()=>{
        setEdit(true);
    }

    const stopEditStateHandler=()=>{
        setEdit(false);
    }
        return(
        <div className='new-expense'>
            
            {edit===false && <button onClick={editStateHandler}>Add New Expense</button>}
            {edit===true && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} stopediting={stopEditStateHandler}/>}
        </div>
    )
    
   
    
    
}
export default NewExpenses;