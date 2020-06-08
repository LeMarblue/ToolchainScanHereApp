import React, { Component } from 'react'
import logo from '../../scanhere.svg'
import {
  Link
} from 'react-router-dom'
// import Header from '../../Components/Header'

// css

import './Home.css'

export default class index extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row justify-content-center align-items-center max-h'>
          <div className='col-12 img'>
            <img src={logo} className='App-logo m-5' alt='logo' />
          </div>
          <div className='col-12 link'>
            {/* <a
              className='App-link'
              href='https://www.scanhere.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
                  ScanHere App
            </a> */}
            <Link to='/sigin' exact>
              <button type='button' class='btn btn-dark'>Sigin</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
