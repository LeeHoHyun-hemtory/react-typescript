import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import mixin from '../../styles/mixin';

const SCContainer = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  ${mixin.flexSet('space-around', 'center', 'row')};
  background: skyblue;
`;

const SCLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

const PAGELISTS = ['pagination', 'fireBaseEx', 'slider', 'infiniteSlider', 'infiniteScroll', 'autoSlider', 'test'];

const Nav = () => {
  return (
    <SCContainer>
      {PAGELISTS.map((page, idx) => <SCLink key={idx} to={`/${page}`}>{page}</SCLink>)}
      {/* <SCLink to='/'>pagination</SCLink>
      <SCLink to='/fireBaseEx'>fireBaseEx</SCLink>
      <SCLink to='/Slider'>Slider</SCLink>
      <SCLink to='/infiniteSlider'>infiniteSlider</SCLink>
      <SCLink to='/InfiniteScroll'>infiniteScroll</SCLink>
      <SCLink to='/test'>test</SCLink> */}
    </SCContainer>
  );
};

export default Nav;