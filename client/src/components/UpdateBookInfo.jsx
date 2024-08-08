import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateBookInfo(props) {
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/${id}`)
      .then((res) => {
        setBook({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo");
      });
  }, [id]);

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: book.title,
      isbn: book.isbn,
      author: book.author,
      description: book.description,
      published_date: book.published_date,
      publisher: book.publisher,
    };

    axios
      .put(`http://localhost:8082/${id}`, data)
      .then((res) => {
        navigate(`/show-book/${id}`);
      })
      .catch((err) => {
        console.log("Error in UpdateBookInfo!");
      });
  };

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="border border-yellow-500 px-4 py-2 text-yellow-500 transition hover:bg-yellow-500 hover:text-white"
          >
            Show Book List
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold">Edit Book</h1>
          <p className="mt-2 text-lg">Update Book's Info</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <form noValidate onSubmit={onSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="title" className="mb-1 text-lg font-medium">
                Title
              </label>
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="rounded-md border border-gray-300 p-2"
                value={book.title}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="isbn" className="mb-1 text-lg font-medium">
                ISBN
              </label>
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="rounded-md border border-gray-300 p-2"
                value={book.isbn}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="author" className="mb-1 text-lg font-medium">
                Author
              </label>
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="rounded-md border border-gray-300 p-2"
                value={book.author}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="mb-1 text-lg font-medium">
                Description
              </label>
              <textarea
                placeholder="Description of the Book"
                name="description"
                className="rounded-md border border-gray-300 p-2"
                value={book.description}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="published_date"
                className="mb-1 text-lg font-medium"
              >
                Published Date
              </label>
              <input
                type="text"
                placeholder="Published Date"
                name="published_date"
                className="rounded-md border border-gray-300 p-2"
                value={book.published_date}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="publisher" className="mb-1 text-lg font-medium">
                Publisher
              </label>
              <input
                type="text"
                placeholder="Publisher of the Book"
                name="publisher"
                className="rounded-md border border-gray-300 p-2"
                value={book.publisher}
                onChange={onChange}
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full border border-blue-500 py-2 text-blue-500 transition hover:bg-blue-500 hover:text-white"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBookInfo;
