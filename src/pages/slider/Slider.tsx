import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import mixin from '../../styles/mixin';

interface IImage {
  id: number;
  url: string;
}

const SCContainer = styled.div`
  height: 100vh;
  ${mixin.flexSet('center', 'center', 'row')};
`;

const SCSliderContainer = styled.div<{ width: number, height: number }>`
  ${({ width, height }) => css`
      width: ${width}px;
      height: ${height}px;
  `}
  position: relative;
`;

const SCImageContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
`;

const SCImage = styled.div<{ xPosition: number, width: number, height: number }>`
  ${({ xPosition }) => css`
    transform: translateX(${xPosition}px);
  `}
  transition: 1s;

  img {
    ${({ width, height }) => css`
      width: ${width}px;
      height: ${height}px;
  `}
  }
`;

const SCArrowButton = styled.button<{ dir: string }>`
  width: 150px;
  height: 600px;
  position: absolute;
  background: #ddd;
  outline: none;
  border: none;
  font-size: 4rem;
  color: skyblue;
  opacity: .3;

  ${({ dir }) => css`
    ${dir === 'left' ? css`left: 0;` : css`right: 0;`}
  `};

  &:hover {
    opacity: .7;

    transition: 1s;
  }
  transition: 1s;
`;

const Slider = () => {
  const width = 800;
  const height = 600;
  const [images, setImages] = useState<IImage[]>([]);
  const [xPosition, setXPosition] = useState(0);

  useEffect(() => {
    const imgArr = [
      {id: 0, url: 'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg'},
      {id: 1, url: 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'},
      {id: 2, url: 'https://image-notepet.akamaized.net/resize/620x-/seimage/20191114%2F6a4c967c5b14197dd5d2c47424ae8e82.jpg'},
      {id: 3, url: 'https://newsimg.hankookilbo.com/cms/articlerelease/2020/09/13/c22a51dd-d1f8-48d2-82ad-f18a671078be.jpg'}
    ]

    setImages(imgArr);
  }, []);

  const moveImage = (dir: string) => {
    if(dir === 'left' && xPosition < 0) {
      setXPosition(xPosition + width);  
    }
    else if(dir === 'right' && xPosition > (images.length - 1) * width * -1) {
      setXPosition(xPosition - width);
    }
  }

  return (
    <SCContainer>
      <SCSliderContainer width={width} height={height}>
        <SCImageContainer>
          {images.map(el => <SCImage key={el.id} xPosition={xPosition} width={width} height={height}>
            <img src={el.url} alt={`강아지 ${el.id}`}></img>
          </SCImage>)}
        </SCImageContainer>
        <SCArrowButton dir={'left'} onClick={() => moveImage('left')}>{'<'}</SCArrowButton>
        <SCArrowButton dir={'right'} onClick={() => moveImage('right')}>{'>'}</SCArrowButton>
      </SCSliderContainer>
    </SCContainer>
  );
};

export default Slider;
