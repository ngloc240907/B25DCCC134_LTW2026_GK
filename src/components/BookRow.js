import { Link } from 'react-router-dom';

const BookRow = ({ book, onUpdate, onDelete }) => {
  const toggleStatus = () => {
    onUpdate({ ...book, available: !book.available });
  };

  return (
    <tr className={!book.available ? 'borrowed' : ''}>
      <td><Link to={`/books/${book.id}`}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.year}</td>
      <td>{book.category}</td>
      <td>{book.available ? 'Có sẵn' : 'Đang mượn'}</td>
      <td>
        <button onClick={toggleStatus}>
          {book.available ? 'Cho mượn' : 'Nhận trả'}
        </button>
        <button onClick={() => onDelete(book.id)}>Xóa</button>
      </td>
    </tr>
  );
};

export default BookRow;