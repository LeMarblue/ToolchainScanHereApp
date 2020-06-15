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
import PagePromoList from './pages/Promo-List'
import PagePromoQrlist from './pages/Promo-Qr-List'
import AlbumQr from './pages/Album-QR'

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
          <Route exact path='/promo-list'>
            <PagePromoList />
          </Route>
          <Route exact path='/promo-qr-list'>
            <PagePromoQrlist />
          </Route>
          <Route exact path='/album-qr/:promotionId' component={AlbumQr} />
          {/* <Route exact path='/sigin'>
            <SigIn />
          </Route> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
