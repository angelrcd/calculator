import React from 'react'

function Display( {operation, result} ) {
  return (
    <div className='display'>
      <p className='operation'>{operation}</p>
      <p className='result'>{result}</p>
    </div>
  )
}

export default Display