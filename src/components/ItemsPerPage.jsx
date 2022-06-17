import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCount, setAllCounts } from '../store/reducers/itemsPerPage';
import { selectPage } from '../store/reducers/page';

const Select = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  label{
    color: #e5e5e5;
  }
  select {
    margin: 10px;
    width: 100px;
    padding: 5px 35px 5px 5px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    border: 1px solid #e5e5e5;
    height: 34px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    //background:  #959495;
    background: 
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") 96% / 15% no-repeat gray;;
  }
  select::-ms-expand {
    display: none; /* Remove default arrow in Internet Explorer 10 and 11 */
  }
  /* Target Internet Explorer 9 to undo the custom arrow */
  @media screen and (min-width: 0\\0
  ) {
    select {
      background: none \\9;
      padding: 5px \\9;
    }
  }
`;

/**
 * Item per page selector
 * @returns {JSX.Element}
 * @constructor
 */
export default function ItemsPerPage() {
  const dispatch = useDispatch();
  const { selectedCount } = useSelector((state) => state.items);
  const { allCounts } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(setAllCounts(allCounts));
  }, [dispatch, selectedCount]);

  function setCurrent(selection) {
    dispatch(selectCount(selection));
    dispatch(selectPage(1));
  }

  return (
    <Select>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        Items per page:
      </label>
      <select name="items-per-page" value={selectedCount} onChange={(e) => setCurrent(e.target.value)}>
        {
          // eslint-disable-next-line max-len
          allCounts.map((count) => <option key={count} value={count}>{count}</option>)
        }
      </select>
    </Select>
  );
}
