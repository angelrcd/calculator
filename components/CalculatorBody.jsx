import React, { useState } from 'react'
import Calculator from '../modules/Calculator'
import Display from './Display'
import ButtonPanel from './ButtonPanel'

function CalculatorBody() {
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')

  const calculator = new Calculator()

  const concatenateNextChar =(nextChar)=>{
    let copy = operation
    copy += nextChar
    setOperation(copy)
  }

  const displayResult =()=>{
    setResult(calculator.calculate(operation))
  }

  const deleteLastChar =()=>{
    let copy = operation
    copy = copy.slice(0, -1)
    setOperation(copy)
  }

  const emptyDisplay =()=>{
    setOperation('')
    setResult('')
  }

  return (
    <div className='calculator-body'>
      <Display operation={operation} result={result} />
      <ButtonPanel addChar={concatenateNextChar} 
      deleteLast={deleteLastChar} emptyDisplay={emptyDisplay}
      displayResult={displayResult} />
    </div>
  )
}

export default CalculatorBody