import React from 'react'
import chat from '../assets/images/chat.jpeg'
import meet from '../assets/images/meet.jpeg'
import wedding from '../assets/images/wedding.jpeg'
import fight from '../assets/images/fight.jpeg'
import kiss from '../assets/images/kiss.jpeg'
import longDistance from '../assets/images/longDistance.jpeg'
import { useNavigate } from 'react-router-dom'

const Story = () => {
  const navigate = useNavigate();
 

    const memories = [
    {
      title: "Our First Official chat 💕",
      description:
        "That was the moment everything began. I didn’t know then that you would become my forever.",
      image: chat,
    },
    {
      title: "When Friendship Turned Into Love 🌸",
      description:
       "Our love turned into a spark the day you visited my home 🏠✨",
      image: meet,
    },
    {
      title: "Our First Kiss 💋",
      description:
        "That moment felt like time stopped. My heart knew it had found its home.",
      image: kiss,
    },
    {
      title: "Our First Fight 😅",
      description:
        "Even in our disagreements, we learned how deeply we cared for each other.",
      image: fight,
    },
    {
      title: "Our Long Distance Strength 💌",
      description:
        "Distance tested us, but it also proved that love doesn’t need proximity to survive.",
      image: longDistance,
    },
    {
      title: "Our Wedding Day 💍",
      description:
        "The day I officially became yours forever. The most beautiful chapter of my life.",
      image: wedding,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 flex flex-col items-center justify-center px-4 text-center relative">

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-red-600 mb-16">
        Our Beautiful Journey Together 💖
      </h1>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-16 px-4">
        {memories.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            
            <img
              src={item.image}
              alt={item.title}

              className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition duration-500"            />

            <div className="md:w-1/2 text-center md:text-left px-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700 text-md md:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        
      </div>

      <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full mt-4 flex justify-center items-center "   onClick={() => navigate("/quiz")}
>
        Quiz
      </button>


      

    </div>
  )
}

export default Story