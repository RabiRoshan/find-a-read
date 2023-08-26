import fetchBooks from "./_data/fetchBooksApi";
import BookSearchBox from "./BookSearchBox";
import BooksList from "./BooksList";
import { randomUUID } from "crypto";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const search = searchParams.q ? searchParams.q.toString() : "";
  let books;
  let fetchError = false;

  if (search) {
    try {
      books = await fetchBooks(search);
    } catch (error) {
      fetchError = true;
    }
  }

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
      {fetchError ? (
        <div className="banner">Not Found</div>
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
