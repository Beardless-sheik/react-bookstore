import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/navbar';
import AddBookForm from './components/AddBookForm/addBook';
import BookListContainer from './components/BookListContainer/books';
import CategoryElement from './components/categoryElement/category';
import './App.css';

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="books" element={<BookListContainer />} />
          <Route path="categories" element={<CategoryElement />} />
        </Routes>
        <div className="main-dividing-line" />
        <AddBookForm />
      </div>
    </>
  );
}

export default App;
