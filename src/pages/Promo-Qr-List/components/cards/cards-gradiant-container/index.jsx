import React from 'react'

// css
import './cards-gradiant-container.css'
import { Link } from 'react-router-dom'

export default function CardGradiantContainer (props) {
  const { children, id } = props
  return (
    <>
      {
        id ? (
          <Link to={`/${id}`}>
            <div className='card-gradiant-container'>
              {children}
            </div>
          </Link>
        )
          : (
            <div className='card-gradiant-container'>
              {children}
            </div>
          )
      }
    </>
  )
}
