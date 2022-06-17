import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import {
  dislike, like, unDislike, unlike
} from '../store/reducers/movie';
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

/**
 * Like button.
 * @param movie
 * @returns {JSX.Element}
 * @constructor
 */
export default function LikeButton({ movie }) {
  const dispatch = useDispatch();

  function likeToggle(id) {
    if (movie.liked) {
      dispatch(unlike(id));
    } else {
      dispatch(like(id));
      if (movie.disliked) {
        dispatch(unDislike(id));
      }
    }
  }
  function dislikeToggle(id) {
    if (movie.disliked) {
      dispatch(unDislike(id));
    } else {
      dispatch(dislike(id));
      if (movie.liked) {
        dispatch(unlike(id));
      }
    }
  }

  return (
    <LikesSection>
      <LogosContainer>
        <motion.div whileHover={{ scale: 1.2, textShadow: '0px 0px 8px rgb(255,255,255)' }}>
          <Logo title="like" data-testid={`like-button-${movie.id}`} style={{ color: movie.liked ? 'var(--primary-color)' : 'grey' }} onClick={() => likeToggle(movie.id)}>
            <LikeIcon />
          </Logo>
        </motion.div>
        <Counter count={movie.likes} />
        <motion.div whileHover={{ scale: 1.2, textShadow: '0px 0px 8px rgb(255,255,255)' }}>
          <Logo title="dislike" style={{ color: movie.disliked ? 'var(--secondary-color)' : 'grey' }} onClick={() => dislikeToggle(movie.id)}>
            <DislikeIcon />
          </Logo>
        </motion.div>
        <b>Dislike</b>
      </LogosContainer>
      <Progress title={`${movie.likes} likes / ${movie.dislikes} dislikes`} max={movie.likes + movie.dislikes} value={movie.likes}>{`${movie.likes} / ${movie.dislikes}`}</Progress>
    </LikesSection>
  );
}
