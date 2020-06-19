import React from 'react'

export default function CardPromoData (props) {
  const { label, data } = props
  return (
    <small className='card-promo-data text-white'>
      {label}: {data}
    </small>
  )
}
