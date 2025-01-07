import { Link } from "react-router-dom";
import { BASE_PATH } from "../assets/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-2 text-gray-700">
        <p>&copy; 2025 Discount Store. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            to={`${BASE_PATH}/privacy-policy`}
            className="hover:text-gray-500"
          >
            Privacy Policy
          </Link>
          <Link
            to={`${BASE_PATH}/terms-of-service`}
            className="hover:text-gray-500"
          >
            Terms of Service
          </Link>
          <Link to={`${BASE_PATH}/contact-us`} className="hover:text-gray-500">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
