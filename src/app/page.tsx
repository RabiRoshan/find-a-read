import fetchBooks, { Book } from "./_data/fetchBooksApi";
import SearchBox from "./_components/SearchBox";
import Button from "./_components/Button";
import Card from "./_components/Card";
import BookCard from "./BookCard";
import BookSearchBox from "./BookSearchBox";
import BooksList from "./BooksList";
import { randomUUID } from "crypto";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const search = searchParams.q ? searchParams.q.toString() : "";
  const books = search ? await fetchBooks(search) : null;
  return (
    <>
      <div className="px-5 pl-5 sm:flex justify-center">
        <div className="sm:w-1/2">
          <BookSearchBox query={search} />
        </div>
        {/* <div className="hidden sm:block">
          <span className="mx-2 text-slate-400">-OR-</span>
          <Button handleOnClick={handleSurpriseMeClick}>Surprise Me!</Button>
        </div> */}
      </div>
      {books && (
        <BooksList
          key={randomUUID()}
          initialBooks={books}
          searchTerm={search}
        />
      )}
    </>
  );
};

export default Page;
