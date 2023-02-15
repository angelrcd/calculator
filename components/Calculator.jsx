import React, { useState } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'

function Calculator() {
  const [operation, setOperation] = useState('')

  return (
    <div className='calculator-body'>
      <Display operation={operation} />
      <ButtonPanel />
    </div>
  )
}

export default Calculator