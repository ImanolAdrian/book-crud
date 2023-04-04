import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../utils/constants';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const loadBooks = () => {
    fetch(API + '/api/books')
      .then(response => response.json())
      .then(({ data }) => {
        setBooks(data);
      });
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const remove = item => {
    fetch(API + '/api/books/' + item._id, {
      method: 'DELETE',
    }).then(response => {
      alert('Se elimino');
      loadBooks();
    });
  };

  const edit = id => {
    navigate('/books/edit/' + id);
  };

  return (
    <div>
      <h1>Lista de libros</h1>
      <button
        onClick={() => {
          navigate('/books/new');
        }}
      >
        Agregar Libro
      </button>
      <div className="head">
        <div>Titulo de Libro</div>
        <div>Autor de Libro</div>
        <div>Acciones</div>
      </div>
      {books.map(item => {
        return (
          <>
            <div className="row">
              <div onClick={() => {}}>{item.title}</div>
              <div>{item.author}</div>
              <div>
                <button className="btnEdit" onClick={() => edit(item._id)}>
                  Editar
                </button>
                <button
                  className="btnDelete"
                  onClick={() => {
                    remove(item);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default BooksList;
