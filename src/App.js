import Navbar from './components/NavBar/navbar'; 
// import BookItem from './components/BookItem/bookItem';
import AddBookForm from './components/AddBookForm/addBook';
import BookListContainer from './components/BookListContainer/books';
import './App.css';

function App() {
  return (
    <>
    <div className='app-container'>
      <Navbar />
      <BookListContainer />
      <div className='main-dividing-line'></div>
      <AddBookForm />
    </div>
    </>
  );
}

export default App;
