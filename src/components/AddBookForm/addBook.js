import styles from './addBook.module.css';

const AddBookForm = () => (
  <>
    <div className={styles.bookFormContainer}>
      <div className={styles.addBookHeadingText}> ADD NEW BOOK </div>
      <form>
        <input className={styles.inputBookTitle} placeholder="Book Title" required />
        <select className={styles.inputCategoryBook} name="Category" id="bookCategory" required>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Biography">Biography</option>
        </select>
        <button type="submit" className={styles.addBookSubmitbutton}>
          <span className={styles.submitButtonText}> ADD BOOK </span>
        </button>
      </form>
    </div>
  </>
);

export default AddBookForm;
