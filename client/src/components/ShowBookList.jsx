import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

function ShowBookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  }, []);

  const bookList =
    books.length === 0
      ? "There are no book records!"
      : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <div className="mb-6">
          <h2 className="text-center text-4xl font-bold">Books List</h2>
        </div>

        <div className="mb-6 flex justify-end">
          <Link
            to="/create-book"
            className="border border-yellow-500 px-4 py-2 text-yellow-500 transition hover:bg-yellow-500 hover:text-white"
          >
            + Add New Book
          </Link>
        </div>

        <hr className="my-6" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {bookList}
        </div>
      </div>
    </div>
  );
}

export default ShowBookList;
