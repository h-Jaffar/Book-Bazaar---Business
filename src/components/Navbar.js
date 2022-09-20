import '../css/Navbar.css';
import React from 'react';

function Navbar() {

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <img src="https://wallpaperaccess.com/full/2213424.jpg" alt="Avatar" className="avatar"/>
    <a className="navbar-brand menutitle" href="/">
    Book Bazaar Business User</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link menuitems" aria-current="page" href="/products"><i class="fa-solid fa-book"></i><br/>Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link menuitems" href="/storedetail"><i class="fa-solid fa-building-user"></i><br/>Add Store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link menuitems" href="/storedetail"><i class="fa-solid fa-building-user"></i><br/>Store Detail</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link menuitems" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-bell"></i><br/>Notifications
          </a>
          {/* <ul className="dropdown-menu dropdown-style" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item dropdown-style-item" href="#">Order is dispatched</a></li>
            <li><a className="dropdown-item dropdown-style-item" href="#">Your order is confirmed</a></li>
            <li><a className="dropdown-item dropdown-style-item" href="#">Thanks for order</a></li>
          </ul> */}
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link menuitems" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-gear"></i><br/>Settings
          </a>
          <ul className="dropdown-menu dropdown-style" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item dropdown-style-item" href="#">Language <span className='language'>English</span></a></li>
            <li><a className="dropdown-item dropdown-style-item" href="#">Terms and conditions</a></li>
            <li><a className="dropdown-item dropdown-style-item" href="#">Privacy Policy</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link menuitems" href="/vieworders"><i className="fa-solid fa-cart-shopping"></i><br/>Orders</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>

  );
}

export default Navbar;
