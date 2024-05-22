import React from 'react'
import rightHero from '../assets/images/Phoenix-anim-02.gif';
import bgdown from '../assets/images/ModulesBg.png';
import '../styles/Page2.css';

const Page4 = () => {
    return (
        <div className="container-fluid"style={{position:'relative',width:'100%'}}>
            <div className="row wrapper">
                <div className="col-lg-5 d-flex justify-content-center align-items-center">
                    <div className='text'style={{ marginLeft: '5%' }}>
                        <h1>Modules</h1>
                        <h4>Brand New Design</h4>
                        <p>Designed To Simplify And Increase Efficiency For Warehouses</p><br/>
                        <button> Explore More </button>
                    </div>
                </div>
                <div className="col-lg-7 left-img left-img d-flex justify-content-end align-items-end " style={{marginBottom:'0px'}}>
                    {/* Updated img tag with img-fluid class */}
                    <img src={rightHero} alt="Left Image" className="img-fluid right-hero" style={{height:'70%'}}/>
                </div>
            </div>
            <img src={bgdown} alt="Background"  style={{ position: 'absolute', bottom: '0', width: '100%', zIndex: '-1'}} />
        </div>
    )
}
export default Page4