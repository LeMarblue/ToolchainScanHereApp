import React from 'react'
// import logo from './scanhere.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// css
import 'bootstrap/dist/css/bootstrap.min.css'
// import Login from './Components/Login'
import Home from './pages/Home'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import Promos from './pages/Promos'
import AlbumQr from './pages/Album-QR'
import ScanQr from './pages/scaner-Qr'

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
          <Route exact path='/promos'>
            <Promos />
          </Route>
          <Route exact path='/album-qr/:promotionId' component={AlbumQr} />
          <Route exact path='/scan-qr'>
            <ScanQr />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
