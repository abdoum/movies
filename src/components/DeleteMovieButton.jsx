import { motion } from 'framer-motion';
import XMarkIcon from './XMarkIcon';

/**
 * Button to delete a movie
 * @param clickAction
 * @param index
 * @returns {JSX.Element}
 * @constructor
 */
export default function DeleteMovieButton({ clickAction, index }) {
  return (
    <motion.button
      whileHover={{ scale: 1.9, color: 'var(--secondary-color)' }}
      data-testid={`delete-button${index}`}
      type="button"
      onClick={clickAction}
    >
      <XMarkIcon />
    </motion.button>
  );
}
