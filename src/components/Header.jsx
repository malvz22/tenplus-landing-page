import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="flex flex-col">
      <header className="w-full max-w-full px-4 flex flex-row justify-between items-center bg-white mx-auto py-4 fixed top-0 left-0 z-50 shadow-md">
        <nav className="flex flex-row justify-between items-center w-full max-w-full">
          <img src="/icons/Tenplus Wordmark-10.png" className="w-[117px]" />
          <div className="hidden md:flex flex-row gap-6 font-regular text-black">
            <a href="#about-section">About</a>
            <a href="#product-section">Product</a>
            <a href="ingredients-section">Ingredients & Benefits</a>
          </div>
          <button className="flex md:hidden" onClick={handleOpenMenu}>
            <RxHamburgerMenu size={32} />
          </button>
        </nav>
      </header>
      <div
        className={`flex flex-col md:hidden w-full max-w-full bg-white h-screen text-end items-cend justify-center px-5 font-bold fixed text-xl ${
          openMenu ? "block" : "hidden"
        }`}
      >
        <a href="#about-section" className="py-2" onClick={handleOpenMenu}>
          About
        </a>
        <a href="#product-section" className="py-2" onClick={handleOpenMenu}>
          Product
        </a>
        <a
          href="#ingredients-section"
          className="py-2"
          onClick={handleOpenMenu}
        >
          Ingredients & Benefits
        </a>
      </div>
    </div>
  );
};

export default Header;
