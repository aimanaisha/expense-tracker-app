import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';
import Card from '../UI/Card';

function ExpenseItems(props){

    const [title, setTitle]=useState(props.title);
    

    const clickHandler = () => {
        setTitle('Updated!!');
       // console.log("updated!!");
    };  
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">Rs {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click Me!!!</button>
        </Card>
    );
}
export default ExpenseItems