import React, { Component } from 'react'
import Header from '../../Components/Header'
import { Form } from 'react-bootstrap'

/* // css
import './SignUn.css' */

export default class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      phoneNum: '',
      email: '',
      password: '',
      confirmPassword: '',
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
    const { email, password, confirmPassword, fullName, phoneNum } = this.state
    const dataCredentials = {
      email,
      password,
      confirmPassword,
      fullName,
      phoneNum
    }
    this.props.validateCredentials(dataCredentials)
  }

  render () {
    const { email, password, confirmPassword, fullName, phoneNum } = this.state
    return (
      <div className='container'>
        <Header />
        <div className='form'>
          <div className='title d-flex justify-content-center font-weight-bold'>
            <p>SignUp</p>
          </div>
          <Form className='px-4'>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label className='d-flex justify-content-start'>Full Name</Form.Label>
              <Form.Control type='fullName' id='fullName' className='form-control mb-1' placeholder='FullName' value={fullName} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Phone Num</Form.Label>
              <Form.Control type='phoneNum' id='phoneNum' className='form-control mb-1' placeholder='00 00 00 00 00' value={phoneNum} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Email </Form.Label>
              <Form.Control type='email' id='email' className='form-control mb-1' placeholder='Your email here' value={email} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Password</Form.Label>
              <Form.Control type='password' id='password' className='form-control mb-1' placeholder='Password' value={password} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Confirm Password</Form.Label>
              <Form.Control type='password' id='password' className='form-control mb-1' placeholder='*****' value={confirmPassword} onChange={this.handleInput} />
            </Form.Group>
            <button type='submit' className='m-3 px-4 button py-2'>SignUn</button>
          </Form>
        </div>
      </div>
    )
  }
}
