import BookRow from './BookRow';

const BookTable = ({ books, onUpdate, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tên sách</th>
          <th>Tác giả</th>
          <th>Năm</th>
          <th>Thể loại</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <BookRow key={book.id} book={book} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;