import { useParams, useNavigate } from 'react-router-dom';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(b => b.id === Number(id));

  if (!book) {
    return (
      <div>
        <p>Không tìm thấy sách.</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  return (
    <div>
      <p><strong>Nhãn: giá trị</strong></p>
      <p><strong>Tên sách:</strong> {book.title}</p>
      <p><strong>Tác giả:</strong> {book.author}</p>
      <p><strong>Năm xuất bản:</strong> {book.year}</p>
      <p><strong>Thể loại:</strong> {book.category}</p>
      <p><strong>Trạng thái:</strong> {book.available ? 'Có sẵn' : 'Đang mượn'}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default BookDetail;