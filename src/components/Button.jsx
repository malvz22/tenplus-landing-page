const Button = ({ children }) => {
  return (
    <div>
      <button className="px-6 py-2 bg-[#E1E43D] rounded-full w-auto font-medium text-lg">
        <p>{children}</p>
      </button>
    </div>
  );
};

export default Button;
