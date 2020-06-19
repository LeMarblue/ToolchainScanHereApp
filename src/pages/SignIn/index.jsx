import React, { Component } from 'react'
import Header from '../../Components/Header'
import Inputs from './components/inputs'
import api from '../../lib/api'
import { Redirect } from 'react-router-dom'
import NavBarUser from '../../Components/NavBarAdmin'

// css
import './SignIn.css'

export default class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      city: '',
      age: '',
      gender: '',
      hasSignedUP: false,
      isLogedIn: false
    }
    this.handleInputOnChange = this.handleInputOnChange.bind(this)
    this.handleButton = this.handleButton.bind(this)
  }

  componentDidMount () {
    const token = localStorage.getItem('authUserToken')
    this.setState({
      isLogedIn: !!token
    })
  }

  handleInputOnChange ({ target: { value, name } }) {
    this.setState({
      [name]: value
    })
  }

  handleButton (event) {
    event.preventDefault()
    api.signup(this.state)
      .then((user) => {
        this.setState({
          hasSignedUP: true
        })
      })
  }

  render () {
    if (this.state.isLogedIn) {
      return (
        <Redirect to='/promos' />
      )
    }
    if (this.state.hasSignedUP) {
      return (
        <Redirect to='/login' />
      )
    }
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
              <Inputs name='name' labelFor='name' placeholder='name' min='3' type='text' value={this.state.name} onChange={this.handleInputOnChange} />
              <Inputs name='email' labelFor='email' placeholder='tu@email.com' min='3' type='email' value={this.state.email} onChange={this.handleInputOnChange} />
              <Inputs name='password' labelFor='password' placeholder='123456' min='8' type='password' value={this.state.password} onChange={this.handleInputOnChange} />
              <Inputs name='city' labelFor='city' type='text' value={this.state.city} onChange={this.handleInputOnChange} />
              <Inputs name='age' labelFor='age' max='83' min='18' type='number' value={this.state.age} onChange={this.handleInputOnChange} />
              <div className='row m-0 d-flex justify-content-between justify-content-md-center'>
                <div className='col-2'>
                  <Inputs labelName='female' labelfor='female' name='gender' type='radio' onClick={this.handleInputOnChange} value='female' />
                </div>
                <div className='col-2'>
                  <Inputs labelName='male' labelfor='male' name='gender' type='radio' onClick={this.handleInputOnChange} value='male' />
                </div>
                <div className='col-2'>
                  <Inputs labelName='noBinary' labelfor='noBinary' name='gender' type='radio' onClick={this.handleInputOnChange} value='noBinary' />
                </div>
              </div>
              <div className='row d-flex justify-content-center'>
                <div className='col-6'>
                  <button type='submit' className='m-3 px-4 button py-2' onClick={this.handleButton}>SignIn</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
