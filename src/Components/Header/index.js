import React, { Component } from 'react'
import sh from '../../nombreLogo.svg'
// import { Form } from 'react-bootstrap'
import {
  Link
} from 'react-router-dom'

export default class Login extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col-5 my-3 '>
          <Link to='/'>
            <img src={sh} className='rounded mx-auto d-block mt-2' alt='igsh' />
          </Link>
        </div>
        <div className='col-3' />
        <div className='col-3 my-3'>
          <button type='submit' className='m-3 px-4 btn btn-outline-secondary py-2'>CERRAR SESIÓN</button>
        </div>
        <div className='col-1' />
      </div>
    )
  }
}
