"use client";

import { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import fetchBooks, { Book } from "./_data/fetchBooksApi";
import SearchBox from "./_components/SearchBox";
import Button from "./_components/Button";
import Card from "./_components/Card";

const Home = () => {
  const [data, setData] = useState<Book[]>();
  const onSearch = async (searchTerm: string) => {
    const d = await fetchBooks(searchTerm, 0, 7);
    setData(d);
  };
  const debouncedOnSearch = useCallback(debounce(onSearch, 500), []);
  const debouncedOnSurpriseMe = useCallback(
    debounce(() => {
      console.log("surprise!");
    }, 500),
    []
  );

  const [search, setSearch] = useState<string>("");

  const handleSearchBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearch(value);
    debouncedOnSearch(value);
  };

  const handleSurpriseMeClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    debouncedOnSurpriseMe();
  };

  return (
    <>
      <div className="px-5 pl-5 sm:flex justify-center">
        <div className="sm:w-1/2">
          <SearchBox
            searchTerm={search}
            placeholder="Search for books..."
            onChange={handleSearchBoxChange}
          />
        </div>
        <div className="hidden sm:block">
          <span className="mx-2 text-slate-400">-OR-</span>
          <Button handleOnClick={handleSurpriseMeClick}>Surprise Me!</Button>
        </div>
      </div>

      <div className="flex flex-col p-5 gap-2 flex-wrap mx-auto items-center lg:grid lg:grid-cols-3 lg:gap-4 2xl:grid-cols-5">
        {data?.map((book) => (
          <Card
            key={book.id}
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
            imageUrl={
              book.volumeInfo.imageLinks?.thumbnail ||
              book.volumeInfo.imageLinks?.smallThumbnail
            }
            authors={book.volumeInfo.authors}
            previewLink={book.volumeInfo.previewLink}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
