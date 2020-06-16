import React, { Component } from 'react'

import api from '../../lib/api'
import PromotionData from './components/promotion-data'
import AlbumLayout from './components/album-layout'
import { Redirect } from 'react-router-dom'

export default class AlbumQr extends Component {
  constructor (props) {
    super(props)
    const { match: { params } } = props
    this.state = {
      promotion: {
        numberOfScans: 0
      },
      promotionId: params.promotionId,
      scans: 0
    }
    this.setScans = this.setScans.bind(this)
  }

  setScans (scans) {
    this.setState({
      scans
    })
  }

  componentDidMount () {
    const token = localStorage.getItem('authUserToken')
    if (token) {
      api.getPromotionById(this.state.promotionId, token)
        .then(promotion => {
          this.setState({
            promotion
          })
        })
    }
  }

  render () {
    const token = localStorage.getItem('authUserToken')
    if (!token) {
      return (
        <Redirect to='/login' />
      )
    }
    return (
      <div className='container album-qr'>
        <PromotionData
          currentScans={this.state.scans}
          totalScans={this.state.promotion.numberOfScans}
          promotionName={this.state.promotion.prize}
        />
        <AlbumLayout
          setScans={this.setScans}
          promotionId={this.state.promotionId}
          totalScans={this.state.promotion.numberOfScans}
        />
      </div>
    )
  }
}
