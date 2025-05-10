import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-indigo-600 animate-gradient">
          Arazy's Universe
        </h1>

        {/* Hamburger menu for mobile */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation links */}
        <nav className={`space-x-6 text-lg font-semibold ${isMenuOpen ? "block" : "hidden"} lg:flex`}>
          <Link
            href="/love"
            className="text-white hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            Rahasia
          </Link>
          <Link
            href="/our-memories"
            className="text-white hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            Our Memories
          </Link>
          <Link
            href="/fun/prediksi"
            className="text-white hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            Diabetes
          </Link>
          
        </nav>
      </div>
    </header>
  );
}
