import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../utils/constants';
import { useEffect, useState } from 'react';

const BooksForm = ({ setStep }) => {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const [book, setBook] = useState({ title: '', author: '', isbn: '', description: '' });

  useEffect(() => {
    if (bookId) {
      fetch(API + '/api/books/' + bookId)
        .then(response => response.json())
        .then(data => setBook(data));
    }
  }, []);

  return (
    <div className="form">
      <form
        onSubmit={e => {
          e.preventDefault();
          const newBook = {
            title: e.target.title.value,
            author: e.target.author.value,
            isbn: e.target.isbn.value,
            description: e.target.description.value,
          };
          fetch(API + '/api/books/' + (bookId ? bookId : ''), {
            method: bookId ? 'PUT' : 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
          })
            .then(response => {
              console.log(response);
              if (response.status == 200 || response.status == 201) navigate('/books');
            })
            .catch(error => {
              alert('Hubo un error');
            });
        }}
      >
        <div className="inpt">
          <label> Titulo de libro: </label>
          <input name="title" defaultValue={book.title} /> <br />
        </div>
        <div className="inpt">
          <label> Autor: </label>
          <input name="author" defaultValue={book.author} /> <br />
        </div>
        <div className="inpt">
          <label>ISBN: </label>
          <input name="isbn" defaultValue={book.isbn} />
        </div>
        <br />
        <div className="inpt">
          <label>Descripcion: </label>
          <textarea name="description" defaultValue={book.description} /> <br />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BooksForm;
