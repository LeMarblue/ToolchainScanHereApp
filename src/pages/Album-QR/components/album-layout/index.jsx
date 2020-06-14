import React, { Component } from 'react'
import CardGradiantContainer from '../../../Promo-Qr-List/components/cards/cards-gradiant-container'
import Logo from '../../../../scanhere.svg'
import api from '../../../../lib/api'

// css
import './album-layout.css'

export default class AlbumLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scans: []
    }
    this.buildAlbumArray = this.buildAlbumArray.bind(this)
  }

  componentDidMount () {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTNmOTEwZGVmOGYxMjhkYzI5OTRhZSIsInJvbGwiOiJ1c2VyIiwiaWF0IjoxNTkyMTQ0NzYzfQ.QEWwLMdr9HgnHgimVnb-yA1dSuFL3L8rp7jL6GmWTWw'
    const promotionId = '5ee1552dbe3f3f6d1a11d8e4'
    api.getPromotionsScansByUser(token, promotionId)
      .then(scans => {
        this.setState({
          scans
        }, () => {
          this.props.setScans(this.state.scans.length)
        })
      })
  }

  buildAlbumArray () {
    const { totalScans } = this.props
    const albumContent = []
    for (let i = 0; i < totalScans; i++) {
      if (i < this.state.scans.length) {
        albumContent.push(true)
      } else {
        albumContent.push(false)
      }
    }
    return albumContent
  }

  render () {
    return (
      <div className='row album-layout'>
        {
          this.buildAlbumArray().map((element, index) => {
            return (
              <div className='col-4 pb-3' key={index}>
                <CardGradiantContainer>
                  {
                    element ? (
                      <img src={Logo} alt='ScanedQR' />
                    )
                      : (

                        <img className='logo-opaque' src={Logo} alt='ScanedQR' />
                      )
                  }
                </CardGradiantContainer>
              </div>
            )
          })
        }
      </div>
    )
  }
}
