const BooksDetail = ({ title, author, isbn, description }) => {
  return (
    <>
      <div>
        <p>{title}</p>
        <p>{author}</p>
        <p>{isbn}</p>
        <p>{description}</p>
      </div>
    </>
  );
};
export default BooksDetail;
