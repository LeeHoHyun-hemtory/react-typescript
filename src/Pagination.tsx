import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';

interface Page {
  value: number;
  current: boolean;
}

interface Item {
  id: number;
  contents: number;
}

const STDContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const STDItemsContainer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  background: gray;
`;

const STDItems = styled.div`
  width: 80%;
  height: 10%;
  border: 1px solid black;
  background: white;
`;

const STDPageBurronContainer = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
`;

const STDPageButton = styled.button`
  width: 50px;
  height: 35px;
  ${({ current }: { current: boolean }) => css`
    ${current && css`background-color: blue;`}
  `};

  & + & {
    margin-left: 10px;
  }
`;

const Pagination = () => {
  const LIMIT = 10;
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const [pages, setPages] = useState<Page[]>([]);

  const btnOnClick = (num: number) => {
    setPages(pages.map(el => ({...el, current: el.value === num ? true : false})));
    setOffset((num - 1) * LIMIT);
  }

  useEffect(() => {
    const totalPages = Math.ceil(items.length / LIMIT);
    const pagesArr: Page[] = [];
    const itemsArr: Item[] = [];

    for(let i = 1; i <= totalPages; i++) {
      pagesArr.push({value: i, current: i === 1 ? true : false});
    }

    for(let i = 0; i < 100; i++) {
      itemsArr.push({id: i, contents: i});
    }

    setPages(pagesArr);
    setItems(itemsArr);
  }, []);

  return (
    <STDContainer>
      <STDItemsContainer>
        {items.map(el => {
          if(el.id >= offset && el.id < offset + LIMIT) {
            return <STDItems key={el.id}>{el.contents}</STDItems>
          }
        })}
      </STDItemsContainer>
      <STDPageBurronContainer>
        <STDPageButton current={false}>{'<<'}</STDPageButton>
        <STDPageButton current={false}>{'<'}</STDPageButton>
        {pages.map(el => (<STDPageButton key={el.value} current={el.current} onClick={() => btnOnClick(el.value)}>{el.value}</STDPageButton>))}
        <STDPageButton current={false}>{'>'}</STDPageButton>
        <STDPageButton current={false}>{'>>'}</STDPageButton>
      </STDPageBurronContainer>
    </STDContainer>
  );
};

export default Pagination;