import React, {Component} from 'react'
import logo from '../../../assets/images/logoscanhere.png'

import './header-singin.css'

function HeaderSingin (props) {
  return (
    <div className="row">
      <div className="col-md-12 headerContent">

        <span className="sizeTitle"> Scan Here</span>
        <br/>
        <img src={logo} className="App-logo" alt="logo" />
        
       
      </div>
    </div>
  )
}
export default HeaderSingin