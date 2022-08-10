import React from 'react'
import './CalculatorButton.css'
const CalculatorButton = (props) => {

  const value = props.val
  return (
    <div className='calculator-button'>{value}</div>
  )
}

export default CalculatorButton