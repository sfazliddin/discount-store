/* eslint-disable react/prop-types */
import {
  FaCrown,
  FaSearch,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import { BASE_PATH, directions } from "../assets/constants";
import { Link } from "react-router-dom";
import "flowbite";

// MenuItem Component
const MenuItem = ({ to, label, onClick }) => (
  <Link
    to={to}
    // className="block px-4 py-2 text-black hover:text-gray-700"
    className="block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-yellow-500 transition-colors dark:hover:text-white md:inline"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default function Header() {
  const [menuState, setMenuState] = useState({
    dropdownOpen: false,
    mobileMenuOpen: false,
  });
  const [showSearch, setShowSearch] = useState(false);
  const dropdownRef = useRef(null);
  const searchBarRef = useRef(null);

  const toggleMobileMenu = () => {
    setMenuState((prev) => ({
      ...prev,
      mobileMenuOpen: !prev.mobileMenuOpen,
    }));
  };

  const closeSearchBar = () => {
    setShowSearch(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuState((prev) => ({ ...prev, dropdownOpen: false }));
      }
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        closeSearchBar();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white relative h-16">
      <div className="flex items-center gap-5">
        <Link to={`${BASE_PATH}/`}>
          <FaCrown className="w-6 h-6" />
        </Link>
        <button
          className="md:hidden text-black hover:text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {menuState.mobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        <nav
          className={`${
            menuState.mobileMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white border-t md:static md:flex md:gap-5 md:border-0`}
        >
          <MenuItem to={`${BASE_PATH}/`} label="HOME" />
          <div className="relative">
            <button
              id="dropdownInventoryButton"
              data-dropdown-toggle="inventoryDropdown"
              data-dropdown-auto-close="inside"
              className="block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-yellow-500 transition-colors dark:hover:text-white md:inline"
            >
              INVENTORY
            </button>
            <div
              id="inventoryDropdown"
              className="hidden z-10 bg-white divide-y divide-gray-100 rounded-lg shadow"
            >
              <ul
                className="py-2 text-md"
                aria-labelledby="dropdownInventoryButton"
              >
                <li>
                  <MenuItem to={`${BASE_PATH}/inventory`} label="All Items" />
                </li>
                <li>
                  <MenuItem
                    to={`${BASE_PATH}/inventory/electronics`}
                    label="Electronics"
                  />
                </li>
                <li>
                  <MenuItem
                    to={`${BASE_PATH}/inventory/clothing`}
                    label="Clothing"
                  />
                </li>
                <li>
                  <MenuItem
                    to={`${BASE_PATH}/inventory/home-appliances`}
                    label="Home Appliances"
                  />
                </li>
                <li>
                  <MenuItem to={`${BASE_PATH}/inventory/books`} label="Books" />
                </li>
              </ul>
            </div>
          </div>
          <MenuItem to={`${BASE_PATH}/sale`} label="SALE" />
          <MenuItem to={`${BASE_PATH}/reviews`} label="REVIEWS" />
        </nav>
      </div>
      <div className="flex items-center gap-5">
        {/* Search Button and Bar */}
        {!showSearch ? (
          <button
            aria-label="Search"
            className="hover:text-gray-700"
            onClick={(event) => {
              event.stopPropagation();
              setShowSearch(true);
            }}
          >
            <FaSearch className="w-6 h-6" />
          </button>
        ) : (
          <div
            className="flex items-center gap-2 transition-all duration-500"
            style={{ width: "100%" }}
            ref={searchBarRef}
          >
            <SearchBar />
          </div>
        )}

        <button aria-label="Cart" className="hover:text-gray-700">
          <FaShoppingCart className="w-6 h-6" />
        </button>
        <button aria-label="Location" className="hover:text-gray-700">
          <a href={directions} target="_blank">
            <FaMapMarkerAlt className="w-6 h-6" />
          </a>
        </button>
      </div>
    </header>
  );
}
