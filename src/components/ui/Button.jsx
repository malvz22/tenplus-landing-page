const Button = ({ children }) => {
  return (
    <div>
      <a
        href="https://mytenplus.com/product/tenplus-phyto-hydration/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="cursor-pointer px-6 py-2 bg-[#E1E43D] rounded-full w-auto font-medium text-lg text-black hover:bg-[#f6f885] transition duration-300 ease-in-out">
          <p>{children}</p>
        </button>
      </a>
    </div>
  );
};

export default Button;
