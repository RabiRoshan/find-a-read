import fetchBooks from "./_data/fetchBooksApi";
import BookSearchBox from "./BookSearchBox";
import BooksList from "./BooksList";
import { randomUUID } from "crypto";

const quotes = [
  "A room without books is like a body without a soul.",
  "So many books, so little time.",
  "I have always imagined that Paradise will be a kind of library.",
  "In a good bookroom you feel in some mysterious way that you are absorbing the wisdom contained in all the books through your skin, without even opening them.",
  "Books are a uniquely portable magic.",
];

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const search = searchParams.q ? searchParams.q.toString() : "";
  let books;
  let fetchError = false;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  if (search) {
    try {
      books = await fetchBooks(search);
    } catch (error) {
      fetchError = true;
    }
  }

  return (
    <>
      <div className="px-5 sm:px-0 sm:pl-5 sm:flex justify-center">
        <div className="w-full sm:w-1/2">
          <BookSearchBox query={search} />
        </div>
      </div>
      {fetchError ? (
        <div className="text-center mt-64 w-1/2 mx-auto flex justify-center items-center text-xl font-semibold text-red-500">
          Oops! The book you are looking for is not available. Please try again with a different keyword!
        </div>
      ) : search === "" ? (
        <div className="text-center mt-64 w-1/2 mx-auto flex justify-center items-center text-xl font-semibold text-teal-500">
          "{randomQuote}"
        </div>
      ) : (
        books && (
          <BooksList
            key={randomUUID()}
            initialBooks={books}
            searchTerm={search}
          />
        )
      )}
    </>
  );
};

export default Page;
