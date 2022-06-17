/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, setAllPages } from '../store/reducers/page';
import PreviousPageButton from './PreviousPageButton';
import NextPageButton from './NextPageButton';
import PageNumberDiv from './PageNumberDiv';

// noinspection CssInvalidPropertyValue
const PaginationContainer = styled.div`
  width: auto;
  height: auto;
  grid-column: span 2;
  display: -webkit-inline-box;
  justify-content: space-around;
  margin: auto;
  @media (max-width: 80em){
    grid-column: span 1;
  }
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

/**
 * Pagination controls
 * @param moviesCount
 * @returns {JSX.Element}
 * @constructor
 */
export default function Pagination({ moviesCount }) {
  const dispatch = useDispatch();
  const { selectedCount } = useSelector((state) => state.items);
  const { pages } = useSelector((state) => state.pages);
  const { selectedPage } = useSelector((state) => state.pages);

  function numberOfPages() {
    return Math.ceil(moviesCount / selectedCount);
  }

  useEffect(() => {
    const pagesArray = Array.from({ length: numberOfPages() }, (_, i) => i + 1);
    dispatch(setAllPages(pagesArray));
  }, [moviesCount, selectedPage, selectedCount]);

  function previousPage() {
    if (selectedPage === pages[0]) {
      return false;
    }
    return dispatch(selectPage(pages[pages.indexOf(selectedPage) - 1]));
  }

  function nextPage() {
    if (selectedPage === pages[pages.length - 1]) {
      return false;
    }
    return dispatch(selectPage(pages[pages.indexOf(selectedPage) + 1]));
  }

  return (
    <PaginationContainer>
      {selectedPage > pages[0]
        ? (
          <PreviousPageButton onClick={() => previousPage()} />
        )
        : <PageNumberDiv className="d-none" />}
      {pages.map((page) => (
        <PageNumberDiv
          onClick={() => dispatch(selectPage(page))}
          className={selectedPage === page ? 'selected' : ''}
          key={page}
        >
          {page}
        </PageNumberDiv>
      ))}
      { selectedPage < pages[pages.length - 1]
        ? (
          <NextPageButton onClick={() => nextPage()} />
        )
        : <PageNumberDiv className="d-none" />}
    </PaginationContainer>
  );
}
