import React from 'react'

function Display( {operation} ) {
  return (
    <div className='display'>
      <p className='operation'>{operation}</p>
      <p className='result'></p>
    </div>
  )
}

export default Display