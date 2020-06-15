import React, { Component } from 'react'

import api from '../../lib/api'
import PromotionData from './components/promotion-data'
import AlbumLayout from './components/album-layout'

export default class AlbumQr extends Component {
  constructor (props) {
    super(props)
    this.state = {
      promotion: {
        numberOfScans: 0
      },
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
    const { match: { params } } = this.props
    api.getPromotionById(params.promotionId)
      .then(promotion => {
        this.setState({
          promotion
        })
      })
  }

  render () {
    return (
      <div className='container album-qr'>
        <PromotionData
          currentScans={this.state.scans}
          totalScans={this.state.promotion.numberOfScans}
          promotionName={this.state.promotion.prize}
        />
        <AlbumLayout
          setScans={this.setScans}
          totalScans={this.state.promotion.numberOfScans}
        />
      </div>
    )
  }
}
