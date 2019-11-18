import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavTitle = styled.h1`
  margin:1% 5%;
  font-size: 2em;
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
  width: 20%;
`
export const NavLinks = styled(Link)`
  font-size: 1.5em;
  width: fit-content;
  padding: 1%;
  margin: 1%;
`