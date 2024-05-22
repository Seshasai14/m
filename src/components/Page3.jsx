import React from 'react'
import aboutleft from '../assets/images/About_Left_Image.png';
import '../styles/Page3.css'

const Page3 = () => {
    return (
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7 left-img">
                    {/* Updated img tag with img-fluid class */}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img src={aboutleft} alt="Left Image" className="img-fluid" style={{ objectFit: 'cover' }}></img>
                </div>
                <div className=" col-lg-5 d-flex justify-content-center align-items-center">
                    <div className='text-3'>
                        <h1>About</h1>
                        <h4>Web Application</h4>
                        <h4>Project !</h4>
                        <p>Designed To Simplify And Increase Efficiency For Warehouses</p>
                        <button> Know More </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3