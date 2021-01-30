import React from 'react';
import styled from 'styled-components';
import Nav from '../../component/nav/Nav';
import mixin from '../../styles/mixin';

const SCContainer = styled.div`
  height: 100vh;
  ${mixin.flexSet('center', 'center', 'row')};
`;

interface Param {
  (name: string,
  age?: number,
  language?: string,): string
}

const Img = styled.img`
  width: 200px;
  height: 200px;
  
  & + & {
    margin-left: 100px;
  }
`;

const Test = () => {
  return (
    <SCContainer>
      <Nav />
      <Img src='https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'></Img>
      <Img src='https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'></Img>
      <Img src='https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'></Img>
    </SCContainer>
  );
};

export default Test;