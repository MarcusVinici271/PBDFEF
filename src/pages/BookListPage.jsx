import { useState, useEffect } from "react";
import BookList from "../components/BookList";

export default function BookListPage() {
  const url =
    "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json";

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setBooks(converter(res)));
  }, [url]);

  function converter(data) {
    const ids = Object.keys(data);
    const objs = Object.values(data);

    return objs.map((objs, i) => {
      return { id: ids[i], ...objs };
    });
  }
  console.log(books);
  return <BookList books={books} />;
}
