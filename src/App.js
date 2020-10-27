import React from 'react';
import Child from './containers/child'
import './App.css';
import {TransactionProvider} from './containers/transContext'

export default function App() {

  return(
    <TransactionProvider>
        <Child />
    </TransactionProvider> 
  )
}