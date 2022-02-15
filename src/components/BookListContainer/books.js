import styles from './books.module.css';
import BookItem from '../BookItem/bookItem';

const BookListContainer = (props) => {
  const books = [{
    id:1,
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentageCompleted: '64%',
    currentChapter: 'Chapter 7',
  },
  {
    id:2,
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Science Fiction',
    percentageCompleted: '8%',
    currentChapter: 'Chapter 3: "A Lesson Learned"'
  },
  {
    id:3,
    genre: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    percentageCompleted: '16%',
    currentChapter: 'Introduction',
  }]
  const bookItems = books.map((element) => {
    console.log(element);
    return <BookItem key={element.id} {...element} />}
  );

  return(
    <>
      {bookItems}
    </>
  )
}

export default BookListContainer;