import React, { useState } from 'react'
import calculate from '../modules/Calculator'
import Display from './Display'
import ButtonPanel from './ButtonPanel'

function CalculatorBody() {
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')

  const concatenateNextChar =(nextChar)=>{
    if(result !== ''){
      emptyDisplay()
      setOperation(nextChar)
      return
    }

    let copy = operation
    copy += nextChar
    setOperation(copy)
  }

  const displayResult =()=>{
    setResult(calculate(operation))
  }

  const deleteLastChar =()=>{
    if(result !== ''){
      return
    }

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