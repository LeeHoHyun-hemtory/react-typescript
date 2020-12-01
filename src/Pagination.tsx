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
    ${current && css`background-color: cyan;`}
  `};

  & + & {
    margin-left: 10px;
  }

  &:hover {
    background-color: skyblue;
  }
`;

const Pagination = () => {
  const LIMIT = 10;
  const PAGELIMIT = 5;
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const [pages, setPages] = useState<Page[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pagesArr: Page[] = [];
    const itemsArr: Item[] = [];

    for(let i = 1; i <= PAGELIMIT; i++) {
      pagesArr.push({ value: i, current: i === 1 ? true : false });
    }

    for(let i = 0; i < 100; i++) {
      itemsArr.push({ id: i, contents: i });
    }

    setPages(pagesArr);
    setItems(itemsArr);
  }, []);

  const btnOnClick = (num: number) => {
    setPages(pages.map(el => ({ ...el, current: el.value === num ? true : false })));
    setOffset((num - 1) * LIMIT);
    setCurrentPage(num);
  }

  const btnDirectOnClick = (dir: string) => {
    let val = 0;
    if(dir === '<' && pages[0].value > 1) {
      setPages(pages.map(el => ({ ...el, value: el.value - 1 })));
    }
    else if(dir === '>' && pages[PAGELIMIT - 1].value < Math.ceil(items.length / LIMIT)) {
      setPages(pages.map(el => ({ ...el, value: el.value + 1 })));
    }
    else if(dir === '<<' && pages[0].value > 1) {
      setPages(pages.map(el => ({ ...el, value: ++val })));
    }
    else if(dir === '>>' && pages[PAGELIMIT - 1].value < Math.ceil(items.length / LIMIT)) {
      val = Math.ceil(items.length / LIMIT) - PAGELIMIT;
      setPages(pages.map(el => ({ ...el, value: ++val })));
    }
  }

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
        <STDPageButton current={false} onClick={() => btnDirectOnClick('<<')}>{'<<'}</STDPageButton>
        <STDPageButton current={false} onClick={() => btnDirectOnClick('<')}>{'<'}</STDPageButton>
        {pages.map(el => (<STDPageButton key={el.value} current={el.current} onClick={() => btnOnClick(el.value)}>{el.value}</STDPageButton>))}
        <STDPageButton current={false} onClick={() => btnDirectOnClick('>')}>{'>'}</STDPageButton>
        <STDPageButton current={false} onClick={() => btnDirectOnClick('>>')}>{'>>'}</STDPageButton>
      </STDPageBurronContainer>
    </STDContainer>
  );
};

export default Pagination;