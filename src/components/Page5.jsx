import React from 'react'
import '../styles/Page5.css'
import Brands from  '../assets/images/Brands.png'
const Page5 = () => {
  return (
    <div className='container-5'>
    <div className='center'>
        Brand That Trust Us
    </div>
    <br/>
    <div className='companies'>
      <img src={Brands} alt="Brands Div" className="" style={{ width: '75vw', height: '20vh' }} />
    </div>
    </div>
  )
}

export default Page5