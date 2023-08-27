"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import SearchBox from "./_components/SearchBox";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

interface BookSearchBoxProps {
  query: string;
}

const BookSearchBox: FC<BookSearchBoxProps> = ({ query }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(query);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 750);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    if (debouncedSearchTerm) {
      router.push(`/?q=${debouncedSearchTerm}`);
    } else {
      router.push(`/`);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams]);

  return (
    <SearchBox
      searchTerm={searchTerm}
      placeholder={"Search for books..."}
      onChange={function (event: ChangeEvent<HTMLInputElement>): void {
        setSearchTerm(event.target.value);
      }}
      isLoading={isLoading}
    />
  );
};

export default BookSearchBox;
