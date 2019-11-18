import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div>
        <h1>Expat Journal</h1>
      </div>
      <div><Link to='/'>Home</Link></div>
      <div><Link to=''>New Trip</Link></div>
      <div><Link to=''>Profile</Link></div>
    </>
  )
};

export default NavBar;

