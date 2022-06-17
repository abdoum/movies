import styled from 'styled-components';

const PageNumberDiv = styled.div`
  cursor: pointer;
  transition: all .1s ease-out;
  padding: 1.6em 2em;
  margin: 2em 0;
  // disable text selection
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :not(.selected):hover {
    color: var(--primary-color);
    transform: scale(1.3);
  }
`;

/**
 * Page number container
 */
export default PageNumberDiv;
