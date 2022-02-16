import Navbar from './components/NavBar/navbar'; 
import { Routes, Route} from "react-router-dom";
import AddBookForm from './components/AddBookForm/addBook';
import BookListContainer from './components/BookListContainer/books';
import CategoryElement from './components/categoryElement/category';
import './App.css';

function App() {
  return (
    <>
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path="books" element={<BookListContainer />}></Route>
        <Route path="categories" element={<CategoryElement />}></Route>
      </Routes>
      <div className='main-dividing-line'></div>
      <AddBookForm />
    </div>
    </>
  );
}

export default App;
