import BookItem from '../BookItem/bookItem';

const BookListContainer = () => {
  const books = [{
    id: 1,
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentageCompleted: '64%',
    currentChapter: 'Chapter 7',
  },
  {
    id: 2,
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Science Fiction',
    percentageCompleted: '8%',
    currentChapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    genre: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    percentageCompleted: '16%',
    currentChapter: 'Introduction',
  }];
  const bookItems = books.map((element) => (
    <BookItem
      key={element.id}
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
