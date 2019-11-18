import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//NAV STYLES
export const NavTitle = styled.h1`
  margin:1% 5%;
  font-size: 2em;
  color:white;
`
export const NavBox = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`
export const NavLinkBox = styled.div`
  display:flex;
  flex-direction:row;
  juistify-content:space-between;
  align-content:space-between;
  width: 25%;
`
export const NavLinks = styled(Link)`
  font-size: 1.2em;
  width: fit-content;
  text-decoration:none;
  color: black;
`
export const LinkBoxes = styled.div`
  background-color:white;
  padding: 0.5%;
  margin: 0 0.5%;
  width:30%;
  box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.59);
`


//TRIP CARD STYLES
export const GridHolder = styled.section`
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const TripCards = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  width: 30%;
  margin: 1%;
  background:white;
  box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.59);
`