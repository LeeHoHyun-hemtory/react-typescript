import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import Nav from '../../component/nav/Nav';
import mixin from '../../styles/mixin';

interface IItem {
  id: number;
  contents: number;
}

const SCContainer = styled.div`
  height: 100vh;
  ${mixin.flexSet()};
`;

const SCItemsContainer = styled.div`
  width: 80%;
  height: 60%;
  ${mixin.flexSet()};
  padding: 5%;
`;

const SCItems = styled.div`
  width: 80%;
  height: 10%;
  border: 1px solid black;
`;

const SCPageButtonContainer = styled.div`
  width: 50%;
  ${mixin.flexSet('center', 'center', 'row')};
`;

const SCPageButton = styled.button<{ value?: number, currentPage?: number }>`
  width: 50px;
  height: 35px;
  font-size: 1.5rem;
  ${({ value, currentPage }) => css`
    ${(value && (value === currentPage)) && css`
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
  const [offset, setOffset] = useState(0); // 현재 페이지에 나타나는 content 시작 번호
  const [items, setItems] = useState<IItem[]>([]); // 총 아이템 개수
  const [pages, setPages] = useState<number[]>([]); // 총 페이지 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 보이는 페이지

  useEffect(() => {
    const pagesArr = [];
    const itemsArr: IItem[] = [];

    for(let i = 1; i <= PAGELIMIT; i++) {
      pagesArr.push(i);
    }

    // 아이템 추가
    for(let i = 0; i < 100; i++) {
      itemsArr.push({ id: i, contents: i });
    }

    setPages(pagesArr);
    setItems(itemsArr);
  }, []);

  const btnOnClick = (num: number) => {
    setOffset((num - 1) * LIMIT);
    setCurrentPage(num);
  }

  const btnDirectOnClick = (dir: string) => {
    const lastPage = Math.ceil(items.length / LIMIT);

    if(dir === '<' && pages[0] > 1) {
      setPages(pages.map(num => --num));
      setCurrentPage(currentPage - 1);
      setOffset(offset - 10);
    }
    else if(dir === '>' && pages[PAGELIMIT - 1] < lastPage) {
      setPages(pages.map(num => ++num));
      setCurrentPage(currentPage + 1);
      setOffset(offset + 10);
    }
    else if(dir === '<<' && pages[0] > 1) {
      setPages(pages.map((num, idx) => idx + 1));
      setCurrentPage(1);
      setOffset(0);
    }
    else if(dir === '>>' && pages[PAGELIMIT - 1] < lastPage) {
      setPages(pages.map((num, idx) => lastPage - PAGELIMIT + idx + 1));
      setCurrentPage(lastPage);
      setOffset((lastPage - 1) * LIMIT);
    }
  }

  return (
    <SCContainer>
      <Nav />
      <SCItemsContainer>
        {items.map(el => {
          if(el.id >= offset && el.id < offset + LIMIT) {
            return <SCItems key={el.id}>{el.contents}</SCItems>
          }
        })}
      </SCItemsContainer>
      <SCPageButtonContainer>
        <SCPageButton onClick={() => btnDirectOnClick('<<')}>{'<<'}</SCPageButton>
        <SCPageButton onClick={() => btnDirectOnClick('<')}>{'<'}</SCPageButton>
        {pages.map(num => (<SCPageButton key={num} value={num} currentPage={currentPage} onClick={() => btnOnClick(num)}>{num}</SCPageButton>))}
        <SCPageButton onClick={() => btnDirectOnClick('>')}>{'>'}</SCPageButton>
        <SCPageButton onClick={() => btnDirectOnClick('>>')}>{'>>'}</SCPageButton>
      </SCPageButtonContainer>
    </SCContainer>
  );
};

export default Pagination;