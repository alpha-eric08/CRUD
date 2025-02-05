import { useState, useEffect } from "react";
import { logo } from "../assets/images";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       <img src={logo} alt="" />
        <ul className="flex space-x-6">
          <li className="cursor-pointer hover:text-gray-500"><a href="/">Home</a></li>
          <li className="cursor-pointer hover:text-gray-500"><a href="/about">About</a></li>
          <li className="cursor-pointer hover:text-gray-500"><a href="/services">Services</a></li>
          <li className="cursor-pointer hover:text-gray-500"><a href="/contact">Contact</a></li>
          <li className="cursor-pointer hover:text-gray-500"><a href="/tour">Tour</a></li>
          <li className="cursor-pointer hover:text-gray-500"><a href="/visa">Visa</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
