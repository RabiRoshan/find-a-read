"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import SearchBox from "./_components/SearchBox";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

interface BookSearchBoxProps {
  query: string;
}

const BookSearchBox: FC<BookSearchBoxProps> = ({ query }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(query);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 750);

  useEffect(() => {
    if (debouncedSearchTerm) {
      router.push(`/?q=${debouncedSearchTerm}`);
    } else {
      router.push(`/`);
    }
  }, [debouncedSearchTerm]);

  return (
    <SearchBox
      searchTerm={searchTerm}
      placeholder={"Search for books..."}
      onChange={function (event: ChangeEvent<HTMLInputElement>): void {
        setSearchTerm(event.target.value);
      }}
    />
  );
};

export default BookSearchBox;
