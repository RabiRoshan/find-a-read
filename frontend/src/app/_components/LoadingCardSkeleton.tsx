interface LoadingCardSkeletonProps {
  reference?: (node?: Element | null) => void;
}

const LoadingCardSkeleton: React.FC<LoadingCardSkeletonProps> = ({
  reference,
}) => {
  return (
    <div
      ref={reference}
      role="status"
      className="
        animate-pulse
        flex flex-col bg-white border border-gray-200 rounded-lg drop-shadow w-full
        hover:bg-gray-100 hover:cursor-pointer
        sm:flex-row sm:h-64
      "
    >
      <div className="flex items-center justify-center bg-gray-300 rounded h-96 sm:h-full sm:w-1/3 lg:w-1/2 xl:w-1/3 2xl:w-1/2">
        <svg
          className="w-10 h-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full flex flex-col justify-between p-5">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingCardSkeleton;
