interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  authors: string[];
  previewLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl = "https://books.google.co.in/googlebooks/images/no_cover_thumb.gif",
  authors,
  previewLink,
}) => {
  return (
    <div
      onClick={() => {
        window.open(previewLink, "_blank");
      }}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 hover:cursor-pointer"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48 md:rounded-none md:rounded-l-lg"
        src={imageUrl}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">
          {title}
        </h1>
        {description && (
          <p className="mb-3 font-normal text-gray-700 line-clamp-6">
            {description}
          </p>
        )}
        {authors && (
          <p className="mb-3 font-normal text-gray-700 line-clamp-1">
            By {authors.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
