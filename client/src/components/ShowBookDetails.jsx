import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ShowBookDetails(props) {
  const [book, setBook] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails_deleteClick");
      });
  };

  const BookItem = (
    <div>
      <table className="min-w-full border border-gray-300 bg-gray-100">
        <tbody>
          <tr>
            <th className="border p-2 text-left">1</th>
            <td className="border p-2 text-left">Title</td>
            <td className="border p-2 text-left">{book.title}</td>
          </tr>
          <tr>
            <th className="border p-2 text-left">2</th>
            <td className="border p-2 text-left">Author</td>
            <td className="border p-2 text-left">{book.author}</td>
          </tr>
          <tr>
            <th className="border p-2 text-left">3</th>
            <td className="border p-2 text-left">ISBN</td>
            <td className="border p-2 text-left">{book.isbn}</td>
          </tr>
          <tr>
            <th className="border p-2 text-left">4</th>
            <td className="border p-2 text-left">Publisher</td>
            <td className="border p-2 text-left">{book.publisher}</td>
          </tr>
          <tr>
            <th className="border p-2 text-left">5</th>
            <td className="border p-2 text-left">Published Date</td>
            <td className="border p-2 text-left">{book.published_date}</td>
          </tr>
          <tr>
            <th className="border p-2 text-left">6</th>
            <td className="border p-2 text-left">Description</td>
            <td className="border p-2 text-left">{book.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex justify-start">
            <Link
              to="/"
              className="border border-yellow-500 px-4 py-2 text-yellow-500 transition hover:bg-yellow-500 hover:text-white"
            >
              Show Book List
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold">Book's Record</h1>
            <p className="mt-2 text-xl">View Book's Info</p>
            <hr className="my-4" />
          </div>
          <div className="mx-auto">{BookItem}</div>
          <div className="text-center">
            <button
              type="button"
              className="mb-4 border border-red-500 px-4 py-2 text-red-500 transition hover:bg-red-500 hover:text-white"
              onClick={() => onDeleteClick(book._id)}
            >
              Delete Book
            </button>
            <Link
              to={`/edit-book/${book._id}`}
              className="border border-blue-500 px-4 py-2 text-blue-500 transition hover:bg-blue-500 hover:text-white"
            >
              Edit Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBookDetails;
