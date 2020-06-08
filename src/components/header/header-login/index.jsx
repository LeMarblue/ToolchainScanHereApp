import React, {Component} from 'react'
import logo from '../../../assets/images/logoscanhere.png'

import './header-login.css'

function HeaderLogin (props) {
  return (
    <div className="row">
      <div className="col-md-12 headerContent">
        <img src={logo} className="App-logo" alt="logo" />
        
        <span className="sizeTitle"> Scan Here</span>
        <br/>
        <span className="sizeTitle">Sing In</span>
      </div>
    </div>
  )
}
export default HeaderLogin