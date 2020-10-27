import React, { createContext,  useReducer } from "react";
import TransactionReducer from './transReducer';
    
const inititalTransactions = [
    {amount: 500, description: "Cash"},
    {amount: -60, description: "lays"},
    {amount: 400, description: "Sale"}
]

export const TransactionContext = createContext(inititalTransactions);


export const TransactionProvider  = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer , inititalTransactions)
    
    function addTransaction(transObj){
        dispatch({
            type: "ADD",
            payload: {
                amount: transObj.amount,
                description: transObj.description
                },
            } 
        )
    }
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    ) 
}