import React, { Component } from 'react'

import PagePromoListTitle from './components/title'
import CardList from '../../Components/cards/cards-wrapper'
import NavBarAdmin from '../../Components/NavBarAdmin'

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
    const token = localStorage.getItem('authUserToken')
    if (token) {
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
        <NavBarAdmin/>
      </div>
    )
  }
}
