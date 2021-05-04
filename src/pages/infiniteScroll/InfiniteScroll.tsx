import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mixin from '../../styles/mixin';

interface IImage {
  id: number;
  url: string;
}

const SCContainer = styled.div`
  ${mixin.flexSet()};
`;

const SCScrollContainer = styled.div`
  width: 60%;
`;

const SCImagesContainer = styled.div`
  width: 100%;
`;

const SCImage = styled.img`
  width: 100%;
  height: 600px;
`;

const InfiniteScroll = () => {
  const LIMIT = 4;
  const [images, SetImages] = useState<IImage[]>([]);
  const [offset, setOffset] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const imgArr = [
    {id: offset + 0, url: 'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg'},
    {id: offset + 1, url: 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg'},
    {id: offset + 2, url: 'https://image-notepet.akamaized.net/resize/620x-/seimage/20191114%2F6a4c967c5b14197dd5d2c47424ae8e82.jpg'},
    {id: offset + 3, url: 'https://newsimg.hankookilbo.com/cms/articlerelease/2020/09/13/c22a51dd-d1f8-48d2-82ad-f18a671078be.jpg'}
  ];

  useEffect(() => {
    SetImages(imgArr);
    setOffset(offset + LIMIT);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(document.documentElement.scrollTop);
    });
    
    if(scrollPosition + window.innerHeight >= document.body.scrollHeight) {
      SetImages(images.concat(imgArr));
      setOffset(offset + LIMIT);
    }
  }, [scrollPosition])

  return (
    <SCContainer>
      <SCScrollContainer>
        <SCImagesContainer>
          {images.map(el => <SCImage key={el.id} src={el.url} />)}
        </SCImagesContainer>
      </SCScrollContainer>
    </SCContainer>
  );
};

export default InfiniteScroll;