import React from 'react'

export default function PromotionData (props) {
  const { currentScans, totalScans, promotionName } = props
  return (
    <div className='row'>
      <div className='col-12'>
        <h3>
          Scans:{currentScans}/{totalScans}
        </h3>
      </div>
      <div className='col-12'>
        <h3>
          promotion:{promotionName}
        </h3>
      </div>
    </div>
  )
}
