import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-center min-h-[80vh]  min-w-full ">

      {/* Main Heading */}
      <h1 className="text-2xl md:text-6xl lg:text-7xl   font-bold text-red-600 mb-6">
        Happy Valentine’s Day ❤️
      </h1>

      {/* Sub Text */}
      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-8">
From school days to forever vows, every step with you has been my favorite journey. I’m so lucky to call you mine. 💍✨      </p>

      {/* Romantic Line */}
      <p className="text-md md:text-lg text-gray-600 italic mb-10">
        To the one who holds my heart forever 💕
      </p>

      {/* Button */}
      <Link
        to="/story"
        className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg transition duration-300 shadow-lg"
      >
        Our Story 💖
      </Link>

    </div>
  )
}

export default Home