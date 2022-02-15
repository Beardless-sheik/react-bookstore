import styles from './books.module.css';
import BookItem from '../BookItem/bookItem';

const BookListContainer = (props) => {
  const numbers = [{id:1},{id:2},{id:3}]
  const bookItems = numbers.map((element) => 
    <BookItem key={element.id}/>
  );

  return(
    <>
      {bookItems}
    </>
  )
}

export default BookListContainer;