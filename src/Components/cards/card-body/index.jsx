import React from 'react'

import CardTitle from '../card-title'
import CardPromoDataWrapper from '../card-promo-data-wrapper'

export default function CardBody (props) {
  const { titleData, promoData } = props
  return (
    <div className='row card-body'>
      <div className='col-12'>
        <CardTitle
          title={titleData.title}
          data={titleData.data}
        />
      </div>
      <div className='col-12'>
        <CardPromoDataWrapper
          productQuantity={promoData.productQuantity}
          startData={promoData.startDate}
          endData={promoData.endDate}
        />
      </div>
    </div>
  )
}
