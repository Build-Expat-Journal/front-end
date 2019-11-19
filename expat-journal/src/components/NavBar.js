import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBox, NavLinkBox, NavLinks, NavTitle, LinkBoxes } from './Styled.js'
import SplashPage from './SplashPage.js';
import TripGrid from './TripGrid.js';
import NewTripForm from './NewTripForm.js';

const NavBar = () => {
  return (
    <>
      <NavBox>
        <NavLinkBox>
          <NavTitle>Expat Journal</NavTitle>
        </NavLinkBox>
        <NavLinkBox>
          <LinkBoxes><NavLinks to='/Home'>Home</NavLinks></LinkBoxes>
          <LinkBoxes><NavLinks to='/Trips'>Trips</NavLinks></LinkBoxes>
          <LinkBoxes><NavLinks to='/NewTrip'>New Trip</NavLinks></LinkBoxes>
          <LinkBoxes><NavLinks to=''>Profile</NavLinks></LinkBoxes>
        </NavLinkBox>
      </NavBox>

      <Route exact path='/Home' component={SplashPage} />
      <Route path='/Trips' component={TripGrid} />
      <Route path='/NewTrip' component={NewTripForm} />
    </>
  )
};

export default NavBar;

