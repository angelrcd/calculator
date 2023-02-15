import React, { useState } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'

function Calculator() {
  const [operation, setOperation] = useState('')

  const concatenateNextChar =(nextChar)=>{
    let copy = operation
    copy += nextChar
    setOperation(copy)
  }

  const deleteLastChar =()=>{
    let copy = operation
    copy = copy.slice(0, -1)
    setOperation(copy)
  }

  return (
    <div className='calculator-body'>
      <Display operation={operation} />
      <ButtonPanel addChar={concatenateNextChar} deleteLast={deleteLastChar} />
    </div>
  )
}

export default Calculator