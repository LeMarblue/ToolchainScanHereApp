import React, { Component } from 'react'
import Header from '../../Components/Header'
import { Form } from 'react-bootstrap'

// css
import './Login.css'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      success: false
    }
  }

  handleInput ({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('envoandp datos')
    const { email, password } = this.state
    const dataCredentials = {
      email,
      password
    }
    this.props.validateCredentials(dataCredentials)
  }

  render () {
    const { email, password } = this.state
    return (
      <div>
        <Header />
        <div className='title d-flex justify-content-center font-weight-bold mt-5'>
          <p>Login</p>
        </div>
        <Form className='px-4 mt-5'>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label className='d-flex justify-content-start'>Email </Form.Label>
            <Form.Control type='email' id='email' className='form-control mb-4' placeholder='Your email here' value={email} onChange={this.handleInput} />
            <Form.Label className='d-flex justify-content-start'>Password</Form.Label>
            <Form.Control type='password' id='password' className='form-control' placeholder='*****' value={password} onChange={this.handleInput} />
          </Form.Group>
          <button type='submit' className='m-3 px-4 button py-2'>Login</button>
        </Form>
      </div>
    )
  }
}
