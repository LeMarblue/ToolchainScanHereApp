import React from 'react'
import CardTitle from '../../../../../Components/cards/card-title'
import Logo from '../../../../../scanhere.svg'
import CardGradiantContainer from '../cards-gradiant-container'
import PromoDateAndScanNumber from '../date-scans'

export default function CardLayaout (props) {
  const { titleData, promoData } = props
  return (
    <div className='row Cardlayout'>
      <div className='col-12'>
        <CardTitle
          title={titleData.title}
          data={titleData.data}
        />
      </div>
      <div className='col-4'>
        <img src={Logo} alt='scanLogo' />
      </div>
      <div className='col-8'>
        <CardGradiantContainer>
          <PromoDateAndScanNumber
            promoStarts={promoData.promoStarts}
            numberOfScans={promoData.numberOfScans}
          />
        </CardGradiantContainer>
      </div>
    </div>
  )
}
