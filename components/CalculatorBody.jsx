import React, { useState } from 'react'
import calculate from '../modules/Calculator'
import Display from './Display'
import ButtonPanel from './ButtonPanel'

function CalculatorBody() {
  const [operation, setOperation] = useState('')
  const [resultHistory, setResultHistory] = useState([0])
  const [hideResult, setHideResult] = useState(true)

  const result = hideResult ? "" : resultHistory.at(-1)

  const concatenateNextChar =(nextChar)=>{
    if(!hideResult){
      setOperation(nextChar)
      console.log("aqui");
      setHideResult(true)
      return
    }

    let copy = operation
    copy += nextChar
    setOperation(copy)
  }

  const displayResult =()=>{
    const currentResult = calculate(operation)
    const historyCopy = structuredClone(resultHistory)
    historyCopy.push(currentResult)

    setResultHistory(historyCopy)
    setHideResult(false)
  }

  const deleteLastChar =()=>{
    if(resultHistory !== ''){
      return
    }

    let copy = operation
    copy = copy.slice(0, -1)
    setOperation(copy)
  }

  const emptyDisplay =()=>{
    setOperation('')
    setHideResult(true)
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