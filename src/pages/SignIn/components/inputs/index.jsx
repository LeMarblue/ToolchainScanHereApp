import React from 'react'

// css
import './inputs.css'
export default function Inputs (props) {
  const { labelName, labelfor } = props
  return (
    <div className='inputWidth p-2'>
      <label for={labelfor} className='d-block'>
        {labelName}
      </label>
      <input className='inputs' {...props} />
    </div>
  )
}
