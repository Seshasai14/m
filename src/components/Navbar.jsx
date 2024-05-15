import React from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/Navbar.css';
const Navbar = () => {
  return (

    // <!-- Navbar -->
 <header>
   <h1 id="nav-title">
      <a href="#">
         <img src={logo} className="App-logo" alt="logo" />
      </a>
   </h1>
   <nav>
      <ul>
          <li><a href="#">What's New</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Modules</a></li>
          <li><a href="#">Our Customers</a></li>
          <li><a href="#">Our People</a></li>
      </ul>
   </nav>          
</header>
  );
}

export default Navbar;
