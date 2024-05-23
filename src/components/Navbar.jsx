import React from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/Navbar.css';

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-">
         <img
            className="navbar-brand"
            src={logo}
            style={{ width: "210px", height: "65px",marginLeft:'4.5%' }}
            alt="Logo"
         />
         <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginRight:'2%'}}>
            <ul className="navbar-nav ms-auto">
               <li className="nav-item">
                  <a className="nav-link" href="#">What's New</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">Modules</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">Our Customers</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">Our People</a>
               </li>
               <li className="nav-item button">
                  <a className="nav-link signup" href="#">SignUp</a>
               </li>
            </ul>
         </div>
      </nav>
   );
}
export default Navbar;
