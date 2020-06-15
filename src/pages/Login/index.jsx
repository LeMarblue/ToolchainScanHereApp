import React, { Component } from 'react'
import Header from '../../Components/Header'
import Inputs from '../SignIn/components/inputs'

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

  render () {
    return (
      <div className='container-login'>
        <div className='row container-form'>
          <Header />
        </div>
        <div className='row container-form justify-content-center container-form'>
          <div className='col-12 col-md-8 p-3'>
            <h2>
              logIn
            </h2>
          </div>
          <div className='col-12 col-md-8 p-3'>
            <form>
              <Inputs labelName='name' labelFor='name' placeholder='name' min='3' type='text' />
              <Inputs labelName='email' labelFor='email' placeholder='tu@email.com' min='3' type='email' />
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
