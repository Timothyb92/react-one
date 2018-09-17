import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <div className="container-fluid">
    <h1 className="title text-center">{props.children}</h1>
  </div>
)

export default Navbar;