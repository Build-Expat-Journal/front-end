import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import img from './img/map1.png';

//MAIN STYLES
export const StyledH2 = styled.h2`
  color:#f5f5f5;
`

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
  justify-content:space-between;
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
  background-color:#f5f5f5;
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
  
  /* justify-content:center; */
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
  height: 95%;
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


//SPLASH PAGE STYLING
export const MapPic = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -15%;
  margin-left: -25%;
  background-image: url(${img});
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 15%;
`

//LOGIN STYLING
export const LoginBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  height:400px;
  width: 300px;
  border-radius: 3px;
  background: rgba(33,64,73, 0.8);
  margin-top:15%;
  margin-left:25%;
`
export const SignUpBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  height:400px;
  width: 300px;
  border-radius: 3px;
  background: rgba(33,64,73, 0.8);
  margin-top:15%;
  margin-left:5%;
`
export const StyledForm = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  height: 65%;
  width: 90%;
`
export const StyledInput = styled.input`
  height: 20px;
  border-radius: 3px;
  font-size: 0.8em;
  background:#f5f5f5;
`
export const StyledButton = styled.button`
  width: 112%;
  height: 15%;
  font-size: 0.8em;
  margin: 0 -6%;
  margin-bottom: -10%;
`
export const StyledButtonTwo = styled.button`
  width: 112%;
  height: 15%;
  font-size: 0.8em;
  margin: 0 -6%;
  margin-bottom: -20%;

export const CardText = styled.p`
  position: absolute;
  z-index: 999;
  left: 5px;
  top: 25%;
  background:white;
  color: gray;
  font-size: 0.8em;
  padding: 1%
`
export const PhotoCard = styled.img`
  margin: 10px;
`
export const StyledBtn = styled.button`
  position: absolute;
  z-index: 999;
  background: white;
  right: 12px;
  top: 10px;
`