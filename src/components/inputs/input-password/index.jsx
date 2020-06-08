import React, {Component} from 'react'
import './input-password.css'

function InputPassword(props) {
  return (
    <div>
      <div>
        <label htmlFor="" className="stylePass">Password</label>
        <input className="styleInputPass" placeholder="Enter your Password" type="password"/>
        <label htmlFor="" className="styleQuest">Forgot Password?</label>
      </div>
    </div>
  )
}
export default InputPassword