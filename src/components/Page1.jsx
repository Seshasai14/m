import React from 'react'
import Navbar from './Navbar'
import '../styles/Page1.css'
import righthero from '../assets/images/Right_hero_image.png'
import sub_image_1 from '../assets/images/Sub_image_1.png'
import sub_video_1 from '../assets/images/Sub_video_1.png'
import crack_line from '../assets/images/crack_line_bottom.png'
import arrow from '../assets/images/Arrow.png'
import drop1 from '../assets/images/Drop1.png'
import drop2 from '../assets/images/Drop2.png'

const Page1 = () => {
  return (
    <div className='background1'>
      <Navbar />
      <div>
        {/* left_sub_hero_image */}
        {/* right_hero_image */}
        <div className='container-fluid'>
          <div className='row'>
            <div className="col-lg-6 col-sm-12">
              <div className='Heading_right_hero '>
                <img src={drop1} className='top-image' alt='drop1'/><br/>
                <h1 className='Title_1 mt-3 ml-5' style={{ marginBottom: '55px' }}>  
                  The Future of Logistics <br />And <span class="Warehouse_text">warehouse</span></h1>
              </div>
              <div className="subHolder" >
                <div className="sub1">
                  <div className="leftmix">
                    <img src={sub_image_1} ></img>
                    <img src={crack_line} style={{ margin: '5px', height: '15px' }}></img>
                  </div>
                </div>
                <div className="sub2" style={{ marginTop: '-5%', marginLeft: '25px' }}>
                <img src={drop1} className='top-image-v' alt='drop1'/><br/>
                  <img src={sub_video_1}></img>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mt-3">
              <img src={righthero} alt="right Image" className="right_hero" style={{ objectFit: 'cover' }}></img>
            </div>
            <img src={arrow} alt="Arrow Image" className="arrow-image" />
          </div>
        </div>
        {/* right_hero_image */}
      </div>
    </div>
  )
}
export default Page1