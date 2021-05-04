import React, { useState } from 'react';
import styled from 'styled-components';
import mixin from '../../styles/mixin';

const SCContainer = styled.div`
  height: 100vh;
  ${mixin.flexSet('center', 'center', 'column')};
`;

const SCAudio = styled.audio`
  width: 600px;
`

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

const SCDragDiv = styled.div`
  width: 100px;
  height: 100px;
  background: yellow;
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
      <div>x Position: {mouseP.x}</div>
      <div>y Position: {mouseP.y}</div>
      <SCAudio onPlay={() => alert('audio')} src='https://t1.daumcdn.net/cfile/tistory/195F9B134C5A45C838?original' controls/>
      {/* <Img src='https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'></Img>
      <Img src='https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'></Img>
      <Img src='https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'></Img> */}

      <SCDragDiv draggable='true' />
    </SCContainer>
  );
};

export default Test;