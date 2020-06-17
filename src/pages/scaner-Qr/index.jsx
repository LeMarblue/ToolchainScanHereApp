import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import { Redirect } from 'react-router-dom'

import Header from '../../Components/Header'
import CardGradiantContainer from '../Promo-Qr-List/components/cards/cards-gradiant-container'
// css

export default class ScanQr extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notify: '',
      delay: 100,
      result: 'No result'
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan (data) {
    this.setState({
      result: data
    })
  }

  handleError (err) {
    console.error(err)
  }

  render () {
    const token = localStorage.getItem('authUserToken')
    if (!token) {
      return <Redirect to='/login' />
    }
    const payload = token.split('.')[1]
    const decodedPayload = atob(payload)
    const { roll } = JSON.parse(decodedPayload)
    if (roll === 'admin') {
      return <Redirect to='/promos' />
    }
    const previewStyle = {
      height: 280,
      width: 280,
      display: 'inline'
    }
    return (
      <div className='container'>
        <div className='row'>
          <Header />
        </div>
        <div className='row d-flex justify-content-center p-3'>
          <div className='col-5'>
            <CardGradiantContainer>
              <QrReader
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
              />
            </CardGradiantContainer>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-6'>
            <p>hola</p>
            <p>{this.state.result}</p>
          </div>
        </div>
      </div>

    )
  }
}
