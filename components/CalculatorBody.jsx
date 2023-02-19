import React, { useState } from 'react'
import calculate from '../modules/Calculator'
import Display from './Display'
import ButtonPanel from './ButtonPanel'

function CalculatorBody() {
  const [operation, setOperation] = useState('')
  const [resultHistory, setResultHistory] = useState([0])
  const [isResultHidden, setIsResultHidden] = useState(true)
  const [lastOpSyntaxError, setLastOpSyntaxError] = useState(false)

  const result = resultHistory.at(-1)
  const resultDisplay = isResultHidden ? "" : result

  const concatenateNextChar =(nextChar)=>{
    if(!isResultHidden){
      setOperation(nextChar)
      setIsResultHidden(true)
      setLastOpSyntaxError(false)
      return
    }

    let copy = operation
    copy += nextChar
    setOperation(copy)
  }

  const displayResult =()=>{
    if(operation==='' || !isResultHidden){
      return
    }
    const currentResult = calculate(operation, result)
    const historyCopy = structuredClone(resultHistory)

    if(currentResult !== 'Syntax Error'){
      historyCopy.push(currentResult)
      setResultHistory(historyCopy)
      setIsResultHidden(false)
    } else {
      setLastOpSyntaxError(true)
      setIsResultHidden(false)

    }
    }

  const deleteLastChar =()=>{
    if(!isResultHidden){
      return
    }

    let copy = operation
    if(copy.endsWith('Ans')){
      copy = copy.slice(0, -3)
    } else {
      copy = copy.slice(0, -1)
    }
    setOperation(copy)
  }

  const emptyDisplay =()=>{
    setOperation('')
    setIsResultHidden(true)
    setLastOpSyntaxError(false)
  }

  return (
    <div className='calculator-body'>
      <Display operation={operation} result={resultDisplay} lastOpSyntaxError={lastOpSyntaxError}/>
      <ButtonPanel addChar={concatenateNextChar} 
      deleteLast={deleteLastChar} emptyDisplay={emptyDisplay}
      displayResult={displayResult} />
    </div>
  )
}

export default CalculatorBody