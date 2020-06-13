import React, { Component } from 'react'
import sh from '../../scanhere.svg'
// import { Form } from 'react-bootstrap'

export default class Login extends Component {
  render () {
    return (
      <div>
        <div className='col-12 navbar-nav'>
          <img src={sh} className='rounded mx-auto d-block mt-3' alt='igsh' />
        </div>
      </div>
    )
  }
}
