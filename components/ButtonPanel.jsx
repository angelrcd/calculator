import React from 'react'

function ButtonPanel() {
  return (
    <div className='button-panel'>
      <div className="button">7</div>
      <div className="button">8</div>
      <div className="button">9</div>
      <div className="button">DEL</div>
      <div className="button">AC</div>
      <div className="button">4</div>
      <div className="button">5</div>
      <div className="button">6</div>
      <div className="button operator-button">&#215;</div>
      <div className="button operator-button">&#247; </div>
      <div className="button">1</div>
      <div className="button">2</div>
      <div className="button">3</div>
      <div className="button operator-button">+</div>
      <div className="button operator-button">-</div>
      <div className="button">0</div>
      <div className="button operator-button">.</div>
      <div className="button">Ans</div>
      <div className="button equal-button operator-button">=</div>
    </div>
  )
}

export default ButtonPanel