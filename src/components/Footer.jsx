import { BASE_PATH } from "../assets/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-2 text-gray-700">
        <p>&copy; 2025 Discount Store. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href={`${BASE_PATH}/privacy-policy`}
            className="hover:text-gray-500"
          >
            Privacy Policy
          </a>
          <a
            href={`${BASE_PATH}/terms-of-service`}
            className="hover:text-gray-500"
          >
            Terms of Service
          </a>
          <a href={`${BASE_PATH}/contact-us`} className="hover:text-gray-500">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
