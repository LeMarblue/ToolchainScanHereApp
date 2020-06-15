import React from 'react'

// css
import './card-title.css'

export default function CardTitle (props) {
  const { title, data } = props
  return (
    <div className='card-title row'>
      <div className='col-7'>
        <h6>
          {title}
        </h6>
      </div>
      {
        data && (
          <div className='col-5'>
            <h6>
              {data}
            </h6>
          </div>
        )
      }
    </div>
  )
}
