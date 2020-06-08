import React, {Component} from 'react'
import './check.css'

function Checkout(props) {
  return (
    <div>
      <div className="checkPosition">
      <label className="styleCheck" htmlFor="">
        <input className="sizeCheck" type="checkbox"/>
        Remember me
      </label>
      </div>
    </div>
  )
}
export default Checkout