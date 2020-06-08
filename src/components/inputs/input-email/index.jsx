import React, {Component} from 'react'
import './input.css'

function InputEmail(props) {
  return (
    <div>
      <div>
        <label htmlFor="" className="styleEmail">Email</label>
        
        <input className="styleInputEm" placeholder="Enter your Email" type="text"/>
      </div>
    </div>
  )
}
export default InputEmail