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
      title={book.title}
      imageUrl={book.image}
      description={book.description}
      secondaryDescription={book.authors ? "By " + book.authors.join(", ") : ""}
      handleOnClick={() => {
        window.open(book.previewUrl, "_blank");
      }}
    />
  );
};

export default BookCard;
