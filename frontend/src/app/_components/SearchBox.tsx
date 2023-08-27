interface SearchBoxProps {
  searchTerm: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  searchTerm,
  placeholder = "Search...",
  onChange,
  isLoading,
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={onChange}
        className={`w-full h-10 px-5 pr-10 border-2 border-gray-300 bg-white rounded-xl text-sm focus:outline-none focus:border-teal-500`}
        placeholder={placeholder}
      />
      {isLoading && (
        <div className="absolute right-2 top-2">
          <div className="w-6 h-6 border-t-2 border-b-2 border-teal-500 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;