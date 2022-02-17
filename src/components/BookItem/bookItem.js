import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import styles from './bookItem.module.css';

const BookItem = (props) => {
  const {
    genre, title, author, percentageCompleted, currentChapter,
  } = props;
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
    dispatch(removeBook(props));
  };

  return (
    <>
      <div className={styles.bookListContainer}>
        <div className={styles.bookDetailsContainer}>
          <div className={styles.bookGenreText}>
            {genre}
          </div>
          <div className={styles.bookTitleText}>
            {title}
          </div>
          <div className={styles.bookAuthor}>
            {author}
          </div>
          <div className={styles.bookMenuButtonContainer}>
            <button type="button" className={styles.bookMenuButton}> Comments </button>
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
            <div className={styles.bookCompletionTextValue}>
              {percentageCompleted}
              %
            </div>
            <div className={styles.bookCompletionBoolean}> Completed </div>
          </div>
          <span className={styles.Line2} />
        </div>
        <div className={styles.bookCurrentChapterContainer}>
          <div className={styles.currentChapterHeadingText}> CURRENT CHAPTER </div>
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
  genre: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  percentageCompleted: PropTypes.number,
  currentChapter: PropTypes.string,
};

BookItem.defaultProps = {
  genre: 'Genre Not Given',
  author: 'Author Not Given',
  title: 'Title Not Given',
  percentageCompleted: '0 %',
  currentChapter: 'Current Chapter Unavailable',
};

export default BookItem;
