import React from 'react'
import { Link } from 'react-router-dom'

// css
import './card-container.css'

export default function CardContainer (props) {
  const { children, id } = props
  console.log('cardContainer:', props)
  return (
    <Link to={`/${id}`}>
      <div className='card-container'>
        {children}
      </div>
    </Link>
  )
}
