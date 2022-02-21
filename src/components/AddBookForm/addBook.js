import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import styles from './addBook.module.css';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const handleBookTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleGenreTitleChange = (event) => {
    setGenre(event.target.value);
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      genre,
      author: 'author',
      percentageCompleted: Math.floor(Math.random() * 100),
    };
    dispatch(addBook(newBook));
  };
  return (
    <>
      <div className={styles.bookFormContainer}>
        <div className={styles.addBookHeadingText}> ADD NEW BOOK </div>
        <form>
          <input className={styles.inputBookTitle} value={title} placeholder="Book Title" onChange={handleBookTitleChange} required />
          <select className={styles.inputCategoryBook} onChange={handleGenreTitleChange} name="Category" id="bookCategory" required>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
            <option value="Biography">Biography</option>
          </select>
          <button type="submit" onClick={submitBookToStore} className={styles.addBookSubmitbutton}>
            <span className={styles.submitButtonText}> ADD BOOK </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBookForm;
