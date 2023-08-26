interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  secondaryDescription: string;
  handleOnClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl = "https://books.google.co.in/googlebooks/images/no_cover_thumb.gif",
  description = "<No description available>",
  secondaryDescription,
  handleOnClick,
}) => {
  return (
    <div
      onClick={handleOnClick}
      className="
        flex flex-col bg-white border border-gray-200 rounded-lg drop-shadow w-full
        hover:bg-gray-100 hover:cursor-pointer
        sm:flex-row sm:h-64
      "
    >
      <div className="sm:w-1/3 lg:w-1/2 xl:w-1/3 2xl:w-1/2">
        <img
          className="
            w-full rounded-t-lg drop-shadow
            sm:h-full sm:rounded-lg
          "
          src={imageUrl}
        />
      </div>
      <div
        className="
        flex flex-col justify-between p-4 leading-normal
        sm:w-full
        "
      >
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">
          {title}
        </h1>
        <p
          className="
           font-normal text-gray-700 line-clamp-6
          "
        >
          {description}
        </p>
        {secondaryDescription && (
          <p
            className="
             font-normal text-gray-500 line-clamp-1
            "
          >
            {secondaryDescription}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
