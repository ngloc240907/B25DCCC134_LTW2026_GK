import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './pages/Home';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    axios.get('/data/books.json', { signal: controller.signal })
      .then(res => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (!axios.isCancel(err)) {
          setError(true);
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, []);

  const handleAdd = (newBook) => {
    setBooks(prev => [...prev, newBook]);
  };

  const handleUpdate = (updatedBook) => {
    setBooks(prev => prev.map(b => b.id === updatedBook.id ? updatedBook : b));
  };

  const handleDelete = (id) => {
    setBooks(prev => prev.filter(b => b.id !== id));
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Không tải được dữ liệu.</div>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home books={books} />} />
        <Route path="books" element={<BookList books={books} onUpdate={handleUpdate} onDelete={handleDelete} />} />
        <Route path="books/new" element={<AddBook books={books} onAdd={handleAdd} />} />
        <Route path="books/:id" element={<BookDetail books={books} />} />
      </Route>
    </Routes>
  );
}

export default App;