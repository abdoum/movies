import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { dislike, like } from '../store/reducers/movie';

const LogoDiv = styled.div`
  width: 2em;
  height: 2em;
  cursor: pointer;
`;

const LogosContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  //display: inline-flex;
  align-items: center;
`;

export default function LikeButton({ movie }) {
  const dispatch = useDispatch();
  return (
    <LogosContainer>
      <LogoDiv onClick={() => dispatch(like(movie.id))}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
          />
        </svg>
      </LogoDiv>
      <span>
        {movie.likes}
      </span>
      <LogoDiv onClick={() => dispatch(dislike(movie.id))}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
          />
        </svg>
      </LogoDiv>
      <span>
        {movie.dislikes}
      </span>
    </LogosContainer>
  );
}
