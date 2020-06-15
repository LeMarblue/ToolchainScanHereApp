import React, { Component } from 'react'
import Header from '../../Components/Header'
import Inputs from './components/inputs'

// css
import './SignIn.css'

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

  render () {
    return (
      <div className='container-signin'>
        <div className='row container-form'>
          <Header />
        </div>
        <div className='row container-form justify-content-center container-form'>
          <div className='col-12 col-md-8 p-3'>
            <h2>
              SignIn
            </h2>
          </div>
          <div className='col-12 col-md-8 p-3'>
            <form>
              <Inputs labelName='name' labelFor='name' placeholder='name' min='3' type='text' />
              <Inputs labelName='email' labelFor='email' placeholder='tu@email.com' min='3' type='email' />
              <Inputs labelName='password' labelFor='password' placeholder='123456' min='8' type='password' />
              <Inputs labelName='city' labelFor='city' type='text' />
              <Inputs labelName='age' labelFor='age' max='83' min='18' type='number' />
              <div className='row m-0 d-flex justify-content-center'>
                <div className='col-2'>
                  <Inputs labelName='female' labelFor='female' name='gender' type='radio' />
                </div>
                <div className='col-2'>
                  <Inputs labelName='male' labelFor='male' name='gender' type='radio' />
                </div>
                <div className='col-2'>
                  <Inputs labelName='noBinary' labelFor='nobinary' name='gender' type='radio' />
                </div>
              </div>
              <div className='row d-flex justify-content-center'>
                <div className='col-6'>
                  <button type='submit' className='m-3 px-4 button py-2'>SignIn</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
