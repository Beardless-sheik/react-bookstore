import styles from './bookItem.module.css';

const BookItem = (props) => {
  console.log(props.author)
  return(
    <>
      <div className={styles.bookListContainer}>
        <div className={styles.bookDetailsContainer}>
          <div className={styles.bookGenreText}>{props.genre || 'Genre Not Given' } </div>
          <div className={styles.bookTitleText}> {props.title || 'Title Not Given' } </div>
          <div className={styles.bookAuthor}> {props.author || 'Author Not Given'} </div>
          <div className={styles.bookMenuButtonContainer} >
            <button className={styles.bookMenuButton}> Comments </button>
            <span className={styles.Line}></span> 
            <button className={styles.bookMenuButton}> Remove </button>
            <span className={styles.Line}></span> 
            <button className={styles.bookMenuButton}> Edit </button>
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
            <div className={styles.bookCompletionTextValue}> {props.percentageCompleted || '% unavailable'} </div>
            <div className={styles.bookCompletionBoolean}> Completed </div>
          </div>
          <span className={styles.Line2}></span> 
        </div>
        <div className={styles.bookCurrentChapterContainer}>
          <div className={styles.currentChapterHeadingText}> CURRENT CHAPTER </div>
          <div className={styles.currentChapterNumberHeadingText}> {props.currentChapter || 'Current Chapter Unavailable'}  </div>
          <button className={styles.updateButton}> 
            <span className={styles.updateButtonText}>UPDATE PROGRESS </span> 
          </button>
        </div>
      </div>
    </>
  )
}

export default BookItem;