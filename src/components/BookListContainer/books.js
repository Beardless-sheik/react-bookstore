import { useSelector } from 'react-redux';
import BookItem from '../BookItem/bookItem';

const BookListContainer = () => {
  const bookStore = useSelector((state) => state.booksReducer);
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
