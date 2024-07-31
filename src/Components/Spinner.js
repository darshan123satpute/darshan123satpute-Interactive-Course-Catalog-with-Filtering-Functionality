import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div>
      <div className='spinner'></div>
      <p style={{textAlign:'center'}}>Loading...</p>
    </div>
  )
}

export default Spinner
