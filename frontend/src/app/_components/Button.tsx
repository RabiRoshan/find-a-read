interface ButtonProps {
  children: React.ReactNode;
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({ children, handleOnClick }) => {
  return (
    <button
      className="
            border-2 border-gray-300 bg-white h-10 px-5 rounded-xl text-sm text-center transition-colors duration-200 ease-in-out text-slate-400
            active:outline-none active:border-teal-500 active:bg-teal-500 active:text-white
            hover:text-teal-600 hover:border-teal-500 
        "
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
