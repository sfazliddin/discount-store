import {
  FaCrown,
  FaSearch,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { BASE_PATH } from "../assets/constants";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white relative h-16">
      <div className="flex items-center gap-5">
        <a href={`${BASE_PATH}/`}>
          <FaCrown className="w-6 h-6" />
        </a>
        <nav className="flex gap-5">
          <a href={`${BASE_PATH}/`} className="text-black hover:text-gray-700">
            HOME
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-black hover:text-gray-700"
            >
              INVENTORY
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg z-10">
                <a
                  href={`${BASE_PATH}/inventory`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  All Items
                </a>
                <a
                  href={`${BASE_PATH}/inventory/electronics`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Electronics
                </a>
                <a
                  href={`${BASE_PATH}/inventory/clothing`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Clothing
                </a>
                <a
                  href={`${BASE_PATH}/inventory/home-appliances`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Home Appliances
                </a>
                <a
                  href={`${BASE_PATH}/inventory/books`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Books
                </a>
              </div>
            )}
          </div>
          <a
            href={`${BASE_PATH}/sale`}
            className="text-black hover:text-gray-700"
          >
            SALE
          </a>
          <a
            href={`${BASE_PATH}/reviews`}
            className="text-black hover:text-gray-700"
          >
            REVIEWS
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        {/* Search Button and Bar */}
        {!showSearch ? (
          <button
            aria-label="Search"
            className="hover:text-gray-700"
            onClick={() => setShowSearch(true)}
          >
            <FaSearch className="w-6 h-6" />
          </button>
        ) : (
          <div
            className="flex items-center gap-2 transition-all duration-500"
            style={{ width: "100%" }}
          >
            <SearchBar />
          </div>
        )}

        <button aria-label="Cart" className="hover:text-gray-700">
          <FaShoppingCart className="w-6 h-6" />
        </button>
        <button aria-label="Location" className="hover:text-gray-700">
          <FaMapMarkerAlt className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
