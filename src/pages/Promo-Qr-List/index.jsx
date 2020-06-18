import React, { Component } from 'react'

// css
import './page-promo-qr-list.css'
import CardsQrWrapper from './components/cards/cards-qr-wrapper'

import api from '../../lib/api'

export default class PagePromoQrlist extends Component {
  constructor (props) {
    super(props)
    this.state = {
      promolist: []
    }
  }

  componentDidMount () {
    const token = localStorage.getItem('authUserToken')
    api.getAllPromotions(token)
      .then((promotions) => {
        const formatedPromotions = promotions.map(promo => {
          return {
            id: promo._id,
            ...promo
          }
        })
        this.setState({
          promoList: formatedPromotions
        })
      })
  }

  render () {
    return (
      <div className='container page-promo-list'>
        <div className='row'>
          <div className='col-12'>
            <h1>Promotions!!</h1>
          </div>
        </div>
        <div className='row'>
          <CardsQrWrapper cardsPromos={this.state.promoList} isUser />
        </div>
      aqui irian los botones
      </div>
    )
  }
}
