import PropTypes from 'prop-types';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import styles from './bookItem.module.css';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(props));
  };
  const {
    genre, title, author, percentageCompleted, currentChapter,
  } = props;
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
              <div className={styles.progressBarCircle} />
            </div>
          </div>
          <div className={styles.bookCompletionValueContainer}>
            <div className={styles.bookCompletionTextValue}>
              {percentageCompleted}
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
  percentageCompleted: PropTypes.string,
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
