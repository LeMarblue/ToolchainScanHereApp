import React from 'react'
// import logo from './scanhere.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// css
import 'bootstrap/dist/css/bootstrap.min.css'
// import Login from './Components/Login'
import Home from './pages/Home'
import Login from './pages/Login'
import SignIn from './pages/SignUp'

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/sigin'>
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
