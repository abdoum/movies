import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { dislike, like } from '../store/reducers/movie';

const Logo = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
`;

const LogosContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  align-items: center;
  align-self: flex-end;
  justify-content: space-around;
`;

const Progress = styled.progress`
  //background-color: green;
  display: inline-flex;
  align-self: flex-end;
  margin-left: 1em;
`;

const LikesSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  height: 70%;
`;

const Counter = styled.div`
padding: 2px;
`;

export default function LikeButton({ movie }) {
  const dispatch = useDispatch();
  return (
    <LikesSection>
      <LogosContainer>
        <Logo title="like" onClick={() => dispatch(like(movie.id))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        </Logo>
        <Counter>
          {movie.likes}
        </Counter>
        <Logo title="dislike" onClick={() => dispatch(dislike(movie.id))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
            />
          </svg>
        </Logo>
        <Counter>
          {movie.dislikes}
        </Counter>
      </LogosContainer>
      <Progress title="likes" max={movie.likes + movie.dislikes} value={movie.likes}> 70% </Progress>
    </LikesSection>
  );
}
