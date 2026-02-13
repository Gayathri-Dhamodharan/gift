import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-pink-200 shadow-md">
      <div className="max-w-full mx-auto px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-red-600">
          ❤️ My Love
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-red-600 transition">
            Home
          </Link>
          <Link to="/story" className="hover:text-red-600 transition">
            Our Story
          </Link>
          <Link to="/quiz" className="hover:text-red-600 transition">
            Quiz
          </Link>
          <Link to="/letter" className="hover:text-red-600 transition">
            Letter
          </Link>
          <Link to="/surprise" className="hover:text-red-600 transition">
            Surprise
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-pink-100 px-4 pb-4 space-y-3 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">
            Home
          </Link>
          <Link to="/story" onClick={() => setIsOpen(false)} className="block">
            Our Story
          </Link>
          <Link to="/quiz" onClick={() => setIsOpen(false)} className="block">
            Quiz
          </Link>
          <Link to="/letter" onClick={() => setIsOpen(false)} className="block">
            Letter
          </Link>
          <Link to="/surprise" onClick={() => setIsOpen(false)} className="block">
            Surprise
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar