import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { allCategories, toggleSelected } from '../store/reducers/category';
import ItemsPerPage from './ItemsPerPage';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 2rem;

  form {
    display: grid;
    place-content: center;
    min-height: 100vh;
  }

  .form-control {
    font-family: system-ui, sans-serif;
    font-weight: bold;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
  }

  .form-control + .form-control {
    margin-top: 1em;
  }

  .form-control--disabled {
    color: var(--form-control-disabled);
    cursor: not-allowed;
  }

  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    /* Windows High Contrast Mode */
    background-color: var(--form-background);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
  }

  input[type="checkbox"]:disabled {
    --form-control-color: var(--form-control-disabled);

    color: var(--form-control-disabled);
    cursor: not-allowed;
  }
`;

export default function CategoriesFilter() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { movies } = useSelector((state) => state.movies);
  const TITLE = 'Categories';

  useEffect(() => {
    dispatch(allCategories(movies));
  }, [movies]);

  return (
    <FiltersContainer>
      <section>
        <h3>{TITLE}</h3>
        {categories.map((category) => (
          <label key={category.name.toLowerCase()} htmlFor={category.name.toLowerCase()} className="form-control">
            <input
              id={category.name.toLowerCase()}
              type="checkbox"
              name={category.name.toLowerCase()}
              checked={category.isSelected}
              data-testid={`${category.name}-filter`}
              onChange={() => {
                dispatch(toggleSelected(category));
              }}
            />
            {`${category.name} (${category.occurrences})`}
          </label>
        ))}
      </section>
      <section>
        <ItemsPerPage />
      </section>
    </FiltersContainer>
  );
}
