import React, { Component } from 'react'

import PagePromoListTitle from './components/title'
import CardList from '../../Components/cards/cards-wrapper'

import api from '../../lib/api'

// css
import './promo-list.css'

export default class PagePromoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      promoList: []
    }
  }

  componentDidMount () {
    api.getAllPromotions()
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
            <PagePromoListTitle />
          </div>
        </div>
        <div className='row'>
          <CardList cardsPromos={this.state.promoList} />
        </div>
      aqui irian los botones
      </div>
    )
  }
}
