import React, { useContext, useState } from 'react';
import {TransactionContext} from './transContext'

function Child(){

    let {transactions, addTransaction} = useContext(TransactionContext)
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    
    const handleAddtion = (event) =>{
        event.preventDefault();
        if(Number(newAmount) === 0){
            alert("Enter Correct value")
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            description: newDesc
        })
        setDesc('')
        setAmount(0)
    }
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }
    return( 
        <div className="container">
            <h1>Expense Tracker App</h1>
            <h3>Your Balance <br/>{getIncome() + getExpense()}</h3>

            <div className="expense-cont">
                <h3>Income<br/>{getIncome()}</h3>
                <h3>Expense<br/>{getExpense()}</h3>
            </div>

            <h3>History</h3> <hr/>
            <ul className="history-list">
                {transactions.map((transobj,ind)=>{
                    return(
                        <li key={ind}>
                        <span>{transobj.description}</span>
                        <span>
                            {transobj.amount}
                        </span>
                    </li>        
                    )
                })}
                
            </ul>

            <h3>Add New Transaction</h3> <hr/>
            
            <form className="transaction-form" onSubmit={handleAddtion}>
                
                <label>Enter Description
                    <input type="text" value={newDesc} placeholder="Description here" onChange={(ev)=>setDesc(ev.target.value)} required />
                </label>
                
                <br/>
                
                <label>Enter Amount
                    <input type="number" value={newAmount} placeholder="Amount here" onChange={(ev)=>setAmount(ev.target.value)} required/>
                </label>
                
                <br/>
                
                <input type="submit" value="Add Transaction"/>
            
            </form>

        </div>
    )
}
export default Child;