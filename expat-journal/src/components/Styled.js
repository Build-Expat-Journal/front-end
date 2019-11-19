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
  position: relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  
  justify-content:center;
  width: 30%;
  height: 250px;
  margin: 1%;
  padding: 1% 0;
  background:white;
  box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.59);
`
export const ImageBox = styled.div`
  padding:2% 0;
`
export const ImageStyle = styled.img`
  position: absolute;
  top: 8px;
  left: 2.5%;
  object-fit: cover;
  width: 95%;
  Height: 95%;
`
export const CardLocation = styled.h1`
  position: absolute;
  z-index: 999;
  left: 5px;
  top: -2%;
  background:white;
  font-size: 1em;
  padding: 1%
`
export const CardSubtitle = styled.h2`
  position: absolute;
  z-index: 999;
  left: 5px;
  top: 13%;
  background:white;
  color: gray;
  font-size: 0.8em;
  padding: 1%
`