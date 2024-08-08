import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

// Routes
const router = createBrowserRouter([
  { path: '/', element: <ShowBookList /> },
  { path: '/create-book', element: <CreateBook /> },
  { path: '/show-book/:id', element: <ShowBookDetails /> },
  { path: '/edit-book/:id', element: <UpdateBookInfo /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
