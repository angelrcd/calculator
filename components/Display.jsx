import React from 'react'

function Display( {operation, result, lastOpSyntaxError} ) {
  return (
    <div className='display'>
      <p className='operation'>{operation}</p>
      <p className='result'>{lastOpSyntaxError ? 'Syntax Error': result}</p>
    </div>
  )
}

export default Display