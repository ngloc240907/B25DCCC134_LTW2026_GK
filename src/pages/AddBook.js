import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';

const AddBook = ({ books, onAdd }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    category: 'Văn học'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.year || !formData.category) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    
    const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
    const newBook = {
      id: newId,
      title: formData.title,
      author: formData.author,
      year: Number(formData.year),
      category: formData.category,
      available: true
    };
    
    onAdd(newBook);
    navigate('/books', { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Tên sách:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        
        <label htmlFor="author">Tác giả:</label>
        <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} />
        
        <label htmlFor="year">Năm xuất bản:</label>
        <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} />
        
        <label htmlFor="category">Thể loại:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        
        <button type="submit">Thêm</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default AddBook;