import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookItem from '../BookItem/bookItem';
import { getBooksListAPIThunk } from '../../redux/books/books';

const BookListContainer = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBooksListAPIThunk());
  }, [dispatch]);

  const bookItems = bookStore.map((element) => (
    <BookItem
      key={element.id}
      id={element.id}
      genre={element.genre}
      title={element.title}
      author={element.author}
      percentageCompleted={element.percentageCompleted}
      currentChapter={element.currentChapter}
    />
  ));

  return (
    <>
      {bookItems}
    </>
  );
};

export default BookListContainer;
