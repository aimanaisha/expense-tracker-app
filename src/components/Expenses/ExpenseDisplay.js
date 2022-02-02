import { useState } from 'react';
import ExpenseItems from "./ExpenseItems";
import './ExpenseDisplay.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function ExpenseDisplay(props){

    const [year,setYear]= useState('2020')

    const YearSelectHandler=(yearValue)=>{
        setYear(yearValue);
        console.log(yearValue);
    }
    return(
        <div>
            <Card className="expenses">
            <ExpensesFilter onSelectingYear={YearSelectHandler} selected={year} />
            {props.items.map((expense)=>(
                <ExpenseItems title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card>
        </div>
        
        
    );
}
export default ExpenseDisplay;