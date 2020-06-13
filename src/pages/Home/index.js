import React, { Component } from 'react'
import logo from '../../scanhere.svg'
import Header from '../../Components/Header'
import NavBar from '../../Components/NavBar'

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
        
          <Header />
          
          <div className='col-12'>
            <img src={logo} className='App-logo m-3' alt='logo' />
          </div>
          <NavBar />
          <div className='col-12 link'>
            {/* <a
              className='App-link'
              href='https://www.scanhere.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
                  ScanHere App
            </a> */}
            <Link to='/login' exact>
              <button type='button' className='px-4 button py-2'>Login</button>
            </Link>

            <Link to='/sig' exact>
              <button type='button' className='px-4 button py-2'>Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
