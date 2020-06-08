import React, {Component} from 'react'
import logo from '../../../assets/images/logoscanhere.png'

import './header-user.css'

function HeaderUser (props) {
  return (
    <div className="row">
      <div className="col-md-12 headerContent">
        <img src={logo} className="App-logo" alt="logo" />
        
        <span className="sizeTitle"> Scan Here</span>
      
      </div>
    </div>
  )
}
export default HeaderUser