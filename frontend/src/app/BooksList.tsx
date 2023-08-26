"use client";

import React, { FC, useEffect, useState } from "react";
import fetchBooks, { Book } from "./_data/fetchBooksApi";
import BookCard from "./BookCard";
import { useInView } from "react-intersection-observer";
import LoadingCardSkeleton from "./_components/LoadingCardSkeleton";

interface BooksListProps {
  initialBooks: Book[];
  searchTerm: string;
}

const deDuplicateBooks = (books: Book[]) => {
  const bookIds = new Set();
  const uniqueBooks = [];
  for (const book of books) {
    if (!bookIds.has(book.id)) {
      bookIds.add(book.id);
      uniqueBooks.push(book);
    }
  }
  return uniqueBooks;
};

const BooksList: FC<BooksListProps> = ({ initialBooks, searchTerm }) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [ref, inView] = useInView();

  const loadMoreBooks = async () => {
    const startIndex = books.length;
    const newBooks = await fetchBooks(searchTerm, startIndex);
    const updatedBooks = deDuplicateBooks([...books, ...newBooks]);
    setBooks(updatedBooks);
  };

  useEffect(() => {
    if (inView) {
      loadMoreBooks();
    }
  }, [inView]);

  return (
    <div className="flex flex-col p-5 gap-2 flex-wrap mx-auto items-center lg:grid lg:grid-cols-2 lg:gap-4 2xl:w-3/4 2xl:grid-cols-3">
      {books?.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
      <LoadingCardSkeleton reference={ref} />
    </div>
  );
};

export default BooksList;
