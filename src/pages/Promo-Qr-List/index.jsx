import React, { Component } from 'react'

// css
import './page-promo-qr-list.css'
import CardsQrWrapper from './components/cards/cards-qr-wrapper'

export default class PagePromoQrlist extends Component {
  constructor (props) {
    super(props)
    this.state = {
      promolist: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:8082/promotions')
      .then(response => response.json())
      .then(({ data: { promotion } }) => {
        const formatedPromotions = promotion.map(promo => {
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
          <CardsQrWrapper cardsPromos={this.state.promoList} />
        </div>
      aqui irian los botones
      </div>
    )
  }
}
