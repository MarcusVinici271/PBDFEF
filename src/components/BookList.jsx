import CardBook from './CardBook';
import './BookList.css';

export default function BookList({ books }) {
  return (
    <div className="bookList">
      {books.map((book) => (
        <CardBook key={book.id} book={book} />
      ))}
    </div>
  );
}
