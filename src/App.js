import React from 'react'
import logo from './scanhere.svg'
import './App.css'

import InputEmail from './components/inputs/input-email'
import InputPassword from './components/inputs/input-password'
import ButtonLogin from './components/Buttons/button-login'
import Checkout from '../src/components/Buttons/checkout/input'
import LogoFacebook from '../src/components/Buttons/logo-facebook'
import HeaderLogin from '../src/components/header/header-login'

import HeaderSingin from '../src/components/header/header-singin'

import HeaderUser from '../src/components/header/header-user'
import BodyPromo from '../src/components/Body/body-promociones'


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
       {/*  <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.scanhere.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ScanHere App
        </a>*/}

        {/*LOGIN DISEÑO 1
       <HeaderLogin/>
        <InputEmail/>
        <br/>
        <InputPassword/>
        <Checkout/>
        <br/>
        <ButtonLogin/>
        <br/>
        <LogoFacebook/> */}

        {/*LOGIN DISEÑO 2 */}
        <HeaderSingin/>
        <br/>
        <LogoFacebook/>

        {/*USER 
        <HeaderUser/>
        <br/>
        <BodyPromo/>*/}

      </header>
      
      
    </div>
  )
}

export default App