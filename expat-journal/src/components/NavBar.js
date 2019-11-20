import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBox, NavLinkBox, NavLinks, NavTitle, LinkBoxes } from './Styled.js'
// import SplashPage from './SplashPage.js';
// import TripGrid from './TripGrid.js';
// import NewTripForm from './NewTripForm.js';
// import NewUpdateTripForm from './UpdateTripForm';

const NavBar = () => {
  return (

    <>
      <NavBox>
        <NavLinkBox>
          <NavTitle>Expat Journal</NavTitle>
        </NavLinkBox>
        <NavLinkBox>
          <LinkBoxes><NavLinks to='/'>Home</NavLinks></LinkBoxes>
          <LinkBoxes><NavLinks to='/trips'>Trips</NavLinks></LinkBoxes>
          <LinkBoxes><NavLinks to='/newtrip'>New Trip</NavLinks></LinkBoxes>
          <LinkBoxes><NavLinks to='/photos'>Pictures</NavLinks></LinkBoxes>
        </NavLinkBox>
      </NavBox>

    </>
  )
};

export default NavBar;

