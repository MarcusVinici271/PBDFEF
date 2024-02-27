import './CardBook.css';

export default function CardBook({book}){
  return (
    <div className="cardBook">
      <h3>Título: </h3>
      <p>{book.title}</p>
      <ul>
        <li><img src={book.cover} alt={book.title} className="book-cover" /></li>
        <li>Autor: {book.author}</li>
        <li>Preço: R${book.price}</li>
        <li>Gênero: {book.genre}</li>
      </ul>     
    </div>
  );
};

