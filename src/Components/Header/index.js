import React, { Component } from 'react'
import sh from '../../nombreLogo.svg'
// import { Form } from 'react-bootstrap'

export default class Login extends Component {
  render () {
    return (
      <div className='col-12 '>
        <img src={sh} className='rounded mx-auto d-block mt-2' alt='igsh' />
      </div>

    )
  }
}
