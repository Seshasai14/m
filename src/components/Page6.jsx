import React from 'react';
import ourPeople from '../assets/images/ourPeople.png'
import '../styles/Page6.css'
const Page6 = () => {
    return (
        <div className='containe'>
            <div className='centr'>
                <h1>Our People</h1>
            </div>
            <img className='ourPeople' src={ourPeople} alt="Our People" />
        </div>
    );
}

export default Page6;
