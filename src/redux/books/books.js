const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rVyokk2snM83teww3zCy/books';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case GET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export const getBooksListAPIThunk = () => async (dispatch) => {
  let bookList = [];
  try {
    const result = await fetch(baseURL);
    bookList = await result.json();
  } catch (error) {
    bookList = [{
      error,
    }];
  }
  const booksID = Object.keys(bookList);
  const formatedBooks = [];
  booksID.map((key) => formatedBooks.push({
    id: key,
    title: bookList[key][0].title,
    genre: bookList[key][0].category,
  }));
  dispatch(getBooks(formatedBooks));
};

export const postBookAPIThunk = (newBook) => async (dispatch) => {
  await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: newBook.id,
      title: newBook.title,
      category: newBook.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook(newBook));
};

export const deleteBookAPIThunk = (id) => async (dispatch) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(id));
};

export default booksReducer;
