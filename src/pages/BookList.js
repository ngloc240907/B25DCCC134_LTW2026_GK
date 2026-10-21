import BookTable from '../components/BookTable';

const BookList = ({ books, onUpdate, onDelete }) => {
  return (
    <div>
      <BookTable books={books} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default BookList;