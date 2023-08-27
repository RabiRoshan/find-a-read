import fetchBooks from "./_data/fetchBooksApi";
import BookSearchBox from "./BookSearchBox";
import BooksList from "./BooksList";
import { randomUUID } from "crypto";

const quotes = [
  "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home. - Anna Quindlen",
  "I have always imagined that Paradise will be a kind of library. Just the same, a library is a kind of paradise. - Jorge Luis Borges",
  "Books are mirrors: you only see in them what you already have inside you. - Carlos Ruiz Zafón, The Shadow of the Wind",
  "A book, too, can be a star, a living fire to lighten the darkness, leading out into the expanding universe. - Madeleine L'Engle",
  "A book is a dream that you hold in your hand. Whenever you want to see it, all you have to do is open your eyes. - Neil Gaiman",
  "Reading is a basic tool in the living of a good life. It is like a shield, a sword, a wall, a fortress, it gives us freedom. - Mortimer J. Adler",
  "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers. - Charles W. Eliot",
  "Reading is the sole means by which we slip, involuntarily, often helplessly, into another's skin, another's voice, another's soul. - Joyce Carol Oates",
  "Reading gives us someplace to go when we have to stay where we are. - Mason Cooley",
  "Books are a uniquely portable magic. No matter where you are, you can open a book and be transported to a completely different world. - Stephen King",
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
          Oops! The book you are looking for is not available. Please try again
          with a different keyword!
        </div>
      ) : search === "" ? (
        <div className="text-center mt-64 w-1/2 mx-auto flex justify-center items-center text-xl font-semibold text-teal-500">
          &quot;{randomQuote}&quot;
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
