import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBox, NavLinkBox, NavLinks, NavTitle, LinkBoxes } from './Styled.js'
import SplashPage from './SplashPage.js';
import TripGrid from './TripGrid.js';

const NavBar = () => {
  return (
    <>
      <NavBox>
        <NavLinkBox>
          <NavTitle>Expat Journal</NavTitle>
        </NavLinkBox>
        <NavLinkBox>
          <LinkBoxes><NavLinks to='/SplashPage'>Home</NavLinks></LinkBoxes>
          <LinkBoxes><NavLinks to='/TripGrid'>Trips</NavLinks></LinkBoxes>
          <LinkBoxes><NavLinks to=''>New Trip</NavLinks></LinkBoxes>
          <LinkBoxes><NavLinks to=''>Profile</NavLinks></LinkBoxes>
        </NavLinkBox>
      </NavBox>

      <Route exact path='/SplashPage' component={SplashPage} />
      <Route exact path='/TripGrid' component={TripGrid} />
    </>
  )
};

export default NavBar;

