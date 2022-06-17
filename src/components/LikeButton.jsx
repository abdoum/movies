import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { dislike, like } from '../store/reducers/movie';
import LikeIcon from './LikeIcon';
import DislikeIcon from './DislikeIcon';
import Counter from './Counter';

const Logo = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
  border: none;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  color: darkgray;
  margin-left: .3em;
  margin-right: .3em;
  :hover {
    color: var(--secondary-color);
    transition: color 250ms ease-in-out,
    transform 150ms ease;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  align-items: center;
  align-self: flex-end;
  justify-content: space-around;

  b {
    margin-left: .3em;
    color: #959495;
    user-select: none;
  }
`;

const Progress = styled.progress`
  display: inline-flex;
  align-self: flex-end;
`;

const LikesSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  height: 70%;
`;

export default function LikeButton({ movie }) {
  const dispatch = useDispatch();
  return (
    <LikesSection>
      <LogosContainer>
        <Logo title="like" data-testid={`like-button-${movie.id}`} onClick={() => dispatch(like(movie.id))}>
          <LikeIcon />
        </Logo>
        <Counter count={movie.likes} />
        <Logo title="dislike" onClick={() => dispatch(dislike(movie.id))}>
          <DislikeIcon />
        </Logo>
        <b>Dislike</b>
      </LogosContainer>
      <Progress title={`${movie.likes} likes / ${movie.dislikes} dislikes`} max={movie.likes + movie.dislikes} value={movie.likes}>{`${movie.likes} / ${movie.dislikes}`}</Progress>
    </LikesSection>
  );
}
