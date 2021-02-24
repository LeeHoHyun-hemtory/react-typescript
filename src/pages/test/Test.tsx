import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../../component/nav/Nav';
import mixin from '../../styles/mixin';

const SCContainer = styled.div`
  height: 100vh;
  ${mixin.flexSet('center', 'center', 'column')};
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
  // 마우스 좌표
  const [mouseP, setMouseP] = useState({x: 0, y: 0});

  // 마우스 좌표 찍는 이벤트 함수
  const mouseMove = (e: React.MouseEvent) => {
    setMouseP({...mouseP, x: e.clientX, y: e.clientY})
  }

  return (
    <SCContainer onMouseMove={mouseMove}>
      <Nav />
      <div>x Position: {mouseP.x}</div>
      <div>y Position: {mouseP.y}</div>
      {/* <Img src='https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'></Img>
      <Img src='https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'></Img>
      <Img src='https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'></Img> */}
    </SCContainer>
  );
};

export default Test;