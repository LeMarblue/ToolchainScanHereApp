import React, { Component } from 'react'
import Header from '../../Components/Header'
import { Form } from 'react-bootstrap'

// css
import './Login.css'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hola: ''
    }
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <div className='form'>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
          </Form>
        </div>
      </div>
    )
  }
}
