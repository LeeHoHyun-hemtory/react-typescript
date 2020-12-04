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

const flexCenter = {
  flexSet: (
    justifyContent = "center",
    alignItems = "center",
    flexDirection = "column"
  ) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `,
};

const STDContainer = styled.div`
  width: 100%;
  height: 100vh;
  ${flexCenter.flexSet()};
`;

const STDItemsContainer = styled.div`
  width: 80%;
  height: 60%;
  ${flexCenter.flexSet()};
  padding: 5%;
`;

const STDItems = styled.div`
  width: 80%;
  height: 10%;
  border: 1px solid black;
`;

const STDPageBurronContainer = styled.div`
  width: 50%;
  height: 20%;
  ${flexCenter.flexSet('center', 'center', "row")};
`;

const STDPageButton = styled.button`
  width: 50px;
  height: 35px;
  font-size: 1.5rem;
  ${({ current }: { current: boolean }) => css`
    ${current && css`
      background-color: #348bee;
      color: white;
    `}
  `};

  & + & {
    margin-left: 10px;
  }

  &:hover {
    background-color: cyan;
  }
`;

const Pagination = () => {
  const LIMIT = 10; // 한 번에 보여질 content 개수
  const PAGELIMIT = 5; // 만들어질 버튼 개수
  const [offset, setOffset] = useState(0); // 현재 페이지에 나타나는 content 번호
  const [items, setItems] = useState<Item[]>([]); // 총 아이템 개수
  const [pages, setPages] = useState<Page[]>([]); // 페이지 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 보이는 페이지

  useEffect(() => {
    const pagesArr: Page[] = [];
    const itemsArr: Item[] = [];

    for(let i = 1; i <= PAGELIMIT; i++) {
      pagesArr.push({ value: i, current: i === 1 ? true : false });
    }

    // 아이템 추가
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
      setPages(pages.map(el => ({ value: --el.value, current: el.value === currentPage ? true : false })));
    }
    else if(dir === '>' && pages[PAGELIMIT - 1].value < Math.ceil(items.length / LIMIT)) {
      setPages(pages.map(el => ({ value: ++el.value, current: el.value === currentPage ? true : false })));
    }
    else if(dir === '<<' && pages[0].value > 1) {
      setPages(pages.map(el => ({ value: ++val, current: val === currentPage ? true : false })));
    }
    else if(dir === '>>' && pages[PAGELIMIT - 1].value < Math.ceil(items.length / LIMIT)) {
      val = Math.ceil(items.length / LIMIT) - PAGELIMIT;
      setPages(pages.map(el => ({ value: ++val, current: val === currentPage ? true : false })));
    }
  }
console.log(pages, currentPage)
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