import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookAPIThunk } from '../../redux/books/books';
import styles from './bookItem.module.css';

const BookItem = (props) => {
  const {
    id, genre, title, author, currentChapter,
  } = props;
  const percentageCompleted = Math.floor(Math.random() * 100);
  const progressBarRef = useRef(null);
  useEffect(() => {
    let animationPercentageCompleted = 0;
    const progressBar = progressBarRef.current;
    const progressEndValue = percentageCompleted;
    const speed = 70;

    const progress = setInterval(() => {
      animationPercentageCompleted += 1;
      progressBar.style.background = `conic-gradient(
        #307bbe ${animationPercentageCompleted * 3.6}deg,
        #fafafa ${animationPercentageCompleted * 3.6}deg
      )`;
      if (percentageCompleted === 0) {
        clearInterval(progress);
      }
      if (animationPercentageCompleted === progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }, []);

  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(deleteBookAPIThunk(id));
  };

  return (
    <>
      <div className={styles.bookListContainer}>
        <div className={styles.bookDetailsContainer}>
          <div className={`${styles.bookGenreText} ${styles.fontStretchWeightClass}`}>
            {genre}
          </div>
          <div className={styles.bookTitleText}>
            {title}
          </div>
          <div className={`${styles.bookAuthor} ${styles.fontStretchWeightClass}`}>
            {author}
          </div>
          <div className={styles.bookMenuButtonContainer}>
            <button type="button" className={`${styles.bookMenuButton} ${styles.fontStretchWeightClass}`}> Comments </button>
            <span className={styles.Line} />
            <button type="button" onClick={handleRemoveBook} className={styles.bookMenuButton}> Remove </button>
            <span className={styles.Line} />
            <button type="button" className={styles.bookMenuButton}> Edit </button>
          </div>
        </div>
        <div className={styles.bookCompletionContainer}>
          <div className={styles.progressBarContainer}>
            <div className={styles.circulrProgressBarContainer}>
              <div ref={progressBarRef} className={styles.progressBarCircle} />
            </div>
          </div>
          <div className={styles.bookCompletionValueContainer}>
            <div className={`${styles.bookCompletionTextValue} ${styles.fontStretchWeightClass}`}>
              {percentageCompleted}
              %
            </div>
            <div className={`${styles.bookCompletionBoolean} ${styles.fontStretchWeightClass}`}> Completed </div>
          </div>
          <span className={styles.Line2} />
        </div>
        <div className={styles.bookCurrentChapterContainer}>
          <div className={`${styles.currentChapterHeadingText} ${styles.fontStretchWeightClass}`}> CURRENT CHAPTER </div>
          <div className={styles.currentChapterNumberHeadingText}>
            {currentChapter}
          </div>
          <button type="button" className={styles.updateButton}>
            <span className={styles.updateButtonText}>UPDATE PROGRESS </span>
          </button>
        </div>
      </div>
    </>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  genre: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  currentChapter: PropTypes.string,
};

BookItem.defaultProps = {
  genre: 'Genre Not Given',
  author: 'Author Not Given',
  title: 'Title Not Given',
  currentChapter: 'Current Chapter Unavailable',
};

export default BookItem;
