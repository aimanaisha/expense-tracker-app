import { useState } from 'react';
import ExpenseList from './ExpenseList';
import './ExpenseDisplay.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from './ExpenseChart';

function ExpenseDisplay(props){

    const [year,setYear]= useState('2020')

    const YearSelectHandler=(yearValue)=>{
        setYear(yearValue);
        console.log(yearValue);
    }

    const filteredData =props.items.filter(eachElement=>{
        return eachElement.date.getFullYear().toString()===year
    })

               
    
    return(
        <div>
            <Card className="expenses">
            <ExpensesFilter onSelectingYear={YearSelectHandler} selected={year} />
            <ExpenseChart expenses={filteredData}/>
            <ExpenseList items={filteredData}/>
        </Card>
        </div>
        
        
    );
}
export default ExpenseDisplay;