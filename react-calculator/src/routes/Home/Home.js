import React from 'react'
import CalculatorDisplay from '../../components/CalculatorDisplay/CalculatorDisplay'
import CalculatorButton from '../../components/CalculatorButton/CalculatorButton'
import "./Home.css"
import {keys} from '../../data/CalculatorData'

const Home = () => {

//   const keys = keys

  return (
    <div className='calculator-container'>
        <CalculatorDisplay/>
        <div className='calculator-grid'>
        {/* <div ><CalculatorButton val ='AC'></CalculatorButton></div>
        <div ><CalculatorButton val ='DEL'></CalculatorButton></div>
        <div ><CalculatorButton val ='+'></CalculatorButton></div>
        <div ><CalculatorButton val ='1'></CalculatorButton></div>
        <div ><CalculatorButton val ='2'></CalculatorButton></div>
        <div ><CalculatorButton val ='3'></CalculatorButton></div>
        <div ><CalculatorButton val ='*'></CalculatorButton></div>
        <div ><CalculatorButton val ='4'></CalculatorButton></div>
        <div ><CalculatorButton val ='5'></CalculatorButton></div>
        <div ><CalculatorButton val ='6'></CalculatorButton></div>
        <div ><CalculatorButton val ='+'></CalculatorButton></div>
        <div ><CalculatorButton val ='7'></CalculatorButton></div>
        <div ><CalculatorButton val ='3'></CalculatorButton></div>
        <div ><CalculatorButton val ='4'></CalculatorButton></div> */}
        <div className='span-two grid-item'><CalculatorButton val = {'AC'}></CalculatorButton></div>
        {keys.map((key)=>{
            return (
                <div className='grid-item'><CalculatorButton val = {key}></CalculatorButton></div>
            )
        })}
        <div className='span-two grid-item'><CalculatorButton val = {'='}></CalculatorButton></div>
        </div>
        
        
        
        
    </div>
  )
}

export default Home