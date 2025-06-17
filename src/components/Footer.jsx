import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom mx-auto gap-8">
        <div>
          <img src="icons/Tenplus Icon-17.png" className="w-[100px]" />
          <img src="icons/Tenplus Wordmark.png" className="w-[120px]" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-full justify-between items-start">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-3 w-[200px]">
              <p className="font-semibold text-white">A G HERBAL BRAND</p>
              <p>
                G HERBAL, The GH Icon, tenplus and the 10+ icon are registered
                trademarks of G Herbal Pte. Ltd. Singapore.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-white">Explore</p>
              <div className="flex flex-col gap-2">
                <a href="#about-section" className="text-white hover:underline">
                  About
                </a>
                <a
                  href="#product-section"
                  className="text-white hover:underline"
                >
                  Product
                </a>
                <a
                  href="#testimonial-section"
                  className="text-white hover:underline"
                >
                  Testimonial
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full max-w-full md:max-w-[300px]">
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-white">Contact</p>
              <div className="flex flex-row gap-3 items-center text-4xl">
                <a
                  href="mailto:howdy@thetenplus.com"
                  className="text-white hover:text-[#E1E43D] transition-colors duration-300"
                >
                  <MdOutlineMailOutline />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=6281287871708&text&type=phone_number&app_absent=0"
                  className="text-white hover:text-[#E1E43D] transition-colors duration-300"
                  target="_blank"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/wearetenplus/"
                  className="text-white hover:text-[#E1E43D] transition-colors duration-300"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@wearetenplus"
                  className="text-white hover:text-[#E1E43D] transition-colors duration-300"
                  target="_blank"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-full mx-auto md:mx-0">
              <div className="flex flex-row gap-2 mx-auto items-center md:mx-0">
                <p className="font-semibold text-white">Newsletter</p>
                <p>Sign up here</p>
              </div>
              <form className="flex flex-row w-full max-w-full gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-full w-full max-w-full md:max-w-[300px] text-black bg-white"
                />
                <button
                  type="submit"
                  className="bg-[#E1E43D] px-4 py-2 rounded-full text-black font-medium hover:bg-[#f6f885] transition duration-300 ease-in-out"
                >
                  <HiOutlinePaperAirplane className="text-2xl" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <p className="text-white text-center text-sm mt-10">
          tenplus All rights reserved. Copyright 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
