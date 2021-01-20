import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mixin from './styles/mixin';

const SCContainer = styled.div`
  width: 100%;
  height: 100vh;
  ${mixin.flexSet()};
`;

const Main = () => {
  return (
    <SCContainer>
      <Link to='/pagination'></Link>
      <Link to='/fireBaseEx'></Link>
      <Link to='/Slider'></Link>
      <Link to='/infiniteSlider'></Link>
      <Link to='/test'></Link>
    </SCContainer>
  );
};

export default Main;