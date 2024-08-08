import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">
          <Link
            to={`/show-book/${book._id}`}
            className="text-blue-500 hover:text-blue-700"
          >
            {book.title}
          </Link>
        </h2>
        <h3 className="mb-2 text-lg font-medium text-gray-700">
          {book.author}
        </h3>
        <p className="text-gray-600">{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
