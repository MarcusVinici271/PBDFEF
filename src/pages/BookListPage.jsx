import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import "./BookListPage.css"

export default function BookListPage() {
  const url =
    "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json";

  const [books, setBooks] = useState([]);
  const [term, setTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const convertedBooks = converter(data);
        setBooks(convertedBooks);
        setFilteredBooks(convertedBooks);
      });
  }, [url]);

  useEffect(() => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [books, term]);

  function converter(data) {
    const ids = Object.keys(data);
    const objs = Object.values(data);

    return objs.map((obj, i) => {
      return { id: ids[i], ...obj };
    });
  }

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="list">
      <input className="filter"
        type="text"
        placeholder="Filtro..."
        value={term}
        onChange={handleTermChange}
      />
      <BookList books={filteredBooks} />
    </div>
  );
}
