import Counter from './components/counter';
import Login from './components/login/login';
import Accordion from './components/accordion/accordion';
import Galeria from './components/galeria/galeria';
import Buscador from './components/buscador/buscador';
import Tiktaktoe from './components/tresenraya/tiktaktoe';
import Cards from './components/cards/cards';
import Topos from './components/topos/topos';
import Books from './components/books';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.scss';
import BooksForm from './components/books/form';
import BooksDetail from './components/books/detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Link to="/counter">Counter</Link>
              <br />
              <Link to="/login">Login</Link>
              <br />
              <Link to="/accordion">Accordion</Link>
              <br />
              <Link to="/galeria">Galeria</Link>
              <br />
              <Link to="/buscador">Buscador</Link>
              <br />
              <Link to="/tiktaktoe">Tiktaktoe</Link>
              <br />
              <Link to="/cards">Cards</Link>
              <br />
              <Link to="/topos">Topos</Link>
              <br />
              <Link to="/books">Books</Link>
            </div>
          }
        />
        <Route path="counter" element={<Counter />} />
        <Route path="login" element={<Login />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="galeria" element={<Galeria />} />
        <Route path="buscador" element={<Buscador />} />
        <Route path="tiktaktoe" element={<Tiktaktoe />} />
        <Route path="cards" element={<Cards />} />
        <Route path="topos" element={<Topos />} />
        <Route path="books" element={<Books />} />
        <Route path="books/edit/:bookId" element={<BooksForm />} />
        <Route path="books/new" element={<BooksForm />} />
        <Route path="books/:bookId" element={<BooksDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
