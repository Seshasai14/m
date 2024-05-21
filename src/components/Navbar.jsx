import React from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/Navbar.css';
const Navbar = () => {
   return (

      // <!-- Navbar -->
      <header>
         {/* <h1 id="nav-title">
            <a href="#">
               <img src={logo} className="App-logo" alt="logo" />
            </a>
         </h1>
         <div className="container-fluid">
            <div className="row col-md-12">
               <div className="col-md-12 d-flex mt-4 ">
                  <nav className='col-md-12  justify-content-between '>
                     <ul className='col-md-12  justify-content-between '>
                        <li><a className='active' href="#">What's New</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Modules</a></li>
                        <li><a href="#">Our Customers</a></li>
                        <li><a href="#">Our People</a></li>
                        <button className='nav-btn '> Sign Up </button>
                     </ul>

                  </nav>
               </div>
            </div>
         </div> */}
         <div className='container-fluid  p-0'>
            <div className='row p-0 mt-4'>
               <div className='row  p-0 col-12'>
                  <div className='col-3'>
                     <img src={logo} className="App-logo" alt="logo" />
                  </div>
                  <div className='col-9  p-0 d-flex justify-content-between'>
                     <div className='col-2 mt-3 d-flex justify-content-start'>
                        <a href="#">What's New</a>
                     </div>
                     <div className='col-2 mt-3 d-flex justify-content-start'>
                        <a href="#">About</a>
                     </div>
                     <div className='col-2 mt-3 d-flex justify-content-start'>
                        <a href="#">Modules</a>
                     </div>
                     <div className='col-2 mt-3 d-flex justify-content-start'>
                        <a href="#">Our Customers</a>
                     </div>
                     <div className='col-2 mt-3 ml-4 d-flex justify-content-center'>
                        <a href="#">Our People</a>
                     </div>
                     <div className='col-2 mt-2 text-end  p-0'>
                        <button className='nav-btn '> Sign Up </button>
                     </div>
                     {/* </div> */}
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Navbar;
