import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../store/reducers/movie';

const Card = styled.div`
  min-height: 20em;
  min-width: 90%;
  max-width: max(30%);
  margin: 1rem;
  padding: 1rem;
  border: beige dashed medium;
  border-radius: 12px;
  //background: antiquewhite;
`;
const Container = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  justify-content: space-between;
  overflow: auto;
  margin: 2rem;
  padding: 2rem;
  @media (max-width: 60em){
    grid-template-columns: 1fr;
  }
  
`;

const Title = styled.div`
  position: relative;
  button{
    position: absolute;
    right: 0em;
    top: -1.5em;
  }
`;
/**
 * Displays each movie in a card
 * @param movies
 * @returns {JSX.Element}
 * @constructor
 */
export default function MovieCards({ movies }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        {movies.map((movie) => (
          <Card key={movie.id}>
            <Title>
              <h3>{movie.title}</h3>
              <button type="button" onClick={() => dispatch(deleteMovie(movie.id))}>X</button>
            </Title>
            <span>
              {movie.category}
            </span>

          </Card>
        ))}
      </Container>
    </div>
  );
}
