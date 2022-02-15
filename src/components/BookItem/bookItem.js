import styles from './bookItem.module.css';

const BookItem = () => {
  return(
    <>
      <div className={styles.bookListContainer}>
        <div className={styles.bookDetailsContainer}>
          <div className={styles.bookGenreText}>Book genre </div>
          <div className={styles.bookTitleText}> The Hunger Games </div>
          <div className={styles.bookAuthor}> Book Author </div>
          <div className={styles.bookMenuButtonContainer} >
            <span className={styles.bookMenuButton}> Comments </span>
            <span className={styles.Line}></span> 
            <span className={styles.bookMenuButton}> Remove </span>
            <span className={styles.Line}></span> 
            <span className={styles.bookMenuButton}> Edit </span>
          </div>
        </div>
        <div className={styles.bookCompletionContainer}> 
          <div className={styles.progressBarContainer}>
            <div className={styles.circulrProgressBarContainer}>
              <div className={styles.progressBarCircle}>

              </div>
            </div>
          </div>
          <div className={styles.bookCompletionValueContainer}>
            <div className={styles.bookCompletionTextValue}> 65% </div>
            <div className={styles.bookCompletionBoolean}> Completed </div>
          </div>
          <span className={styles.Line2}></span> 
        </div>
        <div className={styles.bookCurrentChapterContainer}>
          <div className={styles.currentChapterHeadingText}> CURRENT CHAPTER </div>
          <div className={styles.currentChapterNumberHeadingText}> Chapter 17  </div>
          <button className={styles.updateButton}> 
            <span className={styles.updateButtonText}>UPDATE PROGRESS </span> 
          </button>
        </div>
      </div>
    </>
  )
}

export default BookItem;