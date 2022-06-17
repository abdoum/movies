import XMarkIcon from './XMarkIcon';

export default function DeleteMovieButton({ clickAction, index }) {
  return (
    <button data-testid={`delete-button${index}`} type="button" onClick={clickAction}>
      <XMarkIcon />
    </button>
  );
}
