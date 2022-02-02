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
            <ExpenseItems title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItems title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <ExpenseItems title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
            <ExpenseItems title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
        </Card>
        </div>
        
        
    );
}
export default ExpenseDisplay;