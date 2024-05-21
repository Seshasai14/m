import React from 'react';
import '../styles/Page2.css';

import lefthero from '../assets/images/Whats_new_side_fullimage.png';

const Page2 = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 d-flex justify-content-center align-items-center">
                    <div className='text'>
                        <h1>What's New</h1>
                        <h4>Brand New Design</h4>
                        <p>Designed To Simplify And Increase Efficiency For Warehouses</p>
                        <button> Know More </button>
                    </div>
                </div>
                <div className="col-lg-7 left-img">
                    {/* Updated img tag with img-fluid class */}
                    <img src={lefthero} alt="Left Image" className="img-fluid" style={{objectFit: 'cover'}}></img>
                </div>
            </div>
        </div>
    );
};

export default Page2;
