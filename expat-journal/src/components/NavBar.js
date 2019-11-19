import React from 'react';
import { Link } from 'react-router-dom';

import { NavBox, NavLinkBox, NavLinks, NavTitle, LinkBoxes } from './Styled.js'
import SplashPage from './SplashPage.js';

const NavBar = () => {
  return (
    <NavBox>
      <NavLinkBox>
        <NavTitle>Expat Journal</NavTitle>
      </NavLinkBox>
      <NavLinkBox>
        <LinkBoxes><NavLinks to='./SplashPage'>Home</NavLinks></LinkBoxes>
        <LinkBoxes><NavLinks to=''>New Trip</NavLinks></LinkBoxes>
        <LinkBoxes><NavLinks to=''>Profile</NavLinks></LinkBoxes>
      </NavLinkBox>
    </NavBox>
  )
};

export default NavBar;

