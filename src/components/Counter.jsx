import styled from 'styled-components';

const CounterDiv = styled.div`
  padding: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #959495;
  opacity: .9;
`;

/**
 * Displays the number of likes
 * @param count
 * @returns {JSX.Element}
 * @constructor
 */
export default function Counter({ count }) {
  const formatCount = () => (count > 999 ? `${Math.floor(count / 1000).toString()} K` : count);

  return (
    <CounterDiv title="counter">
      {formatCount()}
    </CounterDiv>
  );
}
