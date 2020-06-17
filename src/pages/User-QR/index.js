import React, { Component } from 'react'
import Header from '../../Components/Header'
import HeaderPromociones from '../../Components/Header-Promociones'
import Footer from '../../Components/Footer'

import NavBar from '../../Components/NavBar'

import { Form } from 'react-bootstrap'


// css
import './User-QR.css'

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
        <HeaderPromociones />
        
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
        <NavBar id="navrender" />
        {/*<Footer />*/}
      </div>
    )
  }
}


