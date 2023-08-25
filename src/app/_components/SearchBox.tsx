interface SearchBoxProps {
  searchTerm: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  searchTerm,
  placeholder = "Search...",
  onChange,
}) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={onChange}
      className="w-full h-10 px-5 border-2 border-gray-300 bg-white rounded-xl text-sm focus:outline-none focus:border-teal-500"
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
