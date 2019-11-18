import React from 'react';
import { Link } from 'react-router-dom';

import { NavBox, NavLinkBox, NavLinks, NavTitle } from './Styled.js'

const NavBar = () => {
  return (
    <NavBox>
      <NavLinkBox>
        <NavTitle>Expat Journal</NavTitle>
      </NavLinkBox>
      <NavLinkBox>
        <NavLinks to='/'>Home</NavLinks>
        <NavLinks to=''>New Trip</NavLinks>
        <NavLinks to=''>Profile</NavLinks>
      </NavLinkBox>
    </NavBox>
  )
};

export default NavBar;

