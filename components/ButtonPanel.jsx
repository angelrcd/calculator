import React from 'react'

function ButtonPanel( {addChar, deleteLast, emptyDisplay, displayResult} ) {
  return (
    <div className='button-panel'>
      <div onClick={() => addChar('7')} className="button">7</div>
      <div onClick={() => addChar('8')} className="button">8</div>
      <div onClick={() => addChar('9')} className="button">9</div>
      <div onClick={deleteLast} className="button">DEL</div>
      <div onClick={emptyDisplay} className="button">AC</div>
      <div onClick={() => addChar('4')} className="button">4</div>
      <div onClick={() => addChar('5')} className="button">5</div>
      <div onClick={() => addChar('6')} className="button">6</div>
      <div onClick={() => addChar('×')} className="button operator-button">×</div>
      <div onClick={() => addChar('÷')} className="button operator-button">÷</div>
      <div onClick={() => addChar('1')} className="button">1</div>
      <div onClick={() => addChar('2')} className="button">2</div>
      <div onClick={() => addChar('3')} className="button">3</div>
      <div onClick={() => addChar('+')} className="button operator-button">+</div>
      <div onClick={() => addChar('-')} className="button operator-button">-</div>
      <div onClick={() => addChar('0')} className="button">0</div>
      <div onClick={() => addChar('.')} className="button operator-button">.</div>
      <div className="button">Ans</div>
      <div onClick={displayResult} className="button equal-button operator-button">=</div>
    </div>
  )
}

export default ButtonPanel