"use client";

import Card from "./_components/Card";
import { Book } from "./_data/fetchBooksApi";

interface BookCardProps {
  book: Book;
}
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card
      key={book.id}
      title={book.volumeInfo.title}
      imageUrl={
        book.volumeInfo.imageLinks?.thumbnail ||
        book.volumeInfo.imageLinks?.smallThumbnail
      }
      description={book.volumeInfo.description}
      secondaryDescription={
        book.volumeInfo.authors
          ? "By " + book.volumeInfo.authors.join(", ")
          : ""
      }
      handleOnClick={() => {
        window.open(book.volumeInfo.previewLink, "_blank");
      }}
    />
  );
};

export default BookCard;
