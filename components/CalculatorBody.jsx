import React, { useState } from 'react'
import calculate from '../modules/Calculator'
import Display from './Display'
import ButtonPanel from './ButtonPanel'

function CalculatorBody() {
  const [operation, setOperation] = useState('')
  const [resultHistory, setResultHistory] = useState([0])
  const [isResultHidden, setIsResultHidden] = useState(true)

  const result = resultHistory.at(-1)
  const resultDisplay = isResultHidden ? "" : result

  const concatenateNextChar =(nextChar)=>{
    if(!isResultHidden){
      setOperation(nextChar)
      console.log("aqui");
      setIsResultHidden(true)
      return
    }

    let copy = operation
    copy += nextChar
    setOperation(copy)
  }

  const displayResult =()=>{
    const currentResult = calculate(operation, result)
    const historyCopy = structuredClone(resultHistory)
    historyCopy.push(currentResult)

    setResultHistory(historyCopy)
    setIsResultHidden(false)
  }

  const deleteLastChar =()=>{
    if(!isResultHidden){
      return
    }

    let copy = operation
    copy = copy.slice(0, -1)
    setOperation(copy)
  }

  const emptyDisplay =()=>{
    setOperation('')
    setIsResultHidden(true)
  }

  return (
    <div className='calculator-body'>
      <Display operation={operation} result={resultDisplay} />
      <ButtonPanel addChar={concatenateNextChar} 
      deleteLast={deleteLastChar} emptyDisplay={emptyDisplay}
      displayResult={displayResult} />
    </div>
  )
}

export default CalculatorBody