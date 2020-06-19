import React, { Component } from 'react'
import sh from '../../nombreLogo.svg'
// import { Form } from 'react-bootstrap'
import {
  Link
} from 'react-router-dom'

export default class Login extends Component {
  render () {
    return (
      <div className='col-12 my-3'>
        <Link to='/'>
          <img src={sh} className='rounded mx-auto d-block mt-2' alt='igsh' />
        </Link>
      </div>
    )
  }
}
