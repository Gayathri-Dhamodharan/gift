import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";


function CoupleQuiz() {
   const questions = [
  {
    question: "Where did we first meet? 🏫",
    options: ["School 🏫", "Temple 🛕", "College 📚", "Park 🌳"],
    answer: "School 🏫",
  },
  {
    question: "Where was our first official meet outside school? 💕",
    options: ["Temple 🛕", "My Home 🏠", "Restaurant 🍽️", "Beach 🌊"],
    answer: "My Home 🏠",
  },
  {
    question: "Who proposed first? 😍",
    options: ["You 😏", "Me 🙈", "Both 💞", "Still waiting 😂"],
    answer: "You 😏",
  },
  {
    question: "Which food do I like the most? 🍽️",
    options: ["Pizza 🍕", "Biriyani 🍗", "Dosa 🥞", "Ice Cream 🍨"],
    answer: "Biriyani 🍗",
  },
  {
    question: "What is my favorite color? 🎨",
    options: ["Blue 💙", "Red ❤️", "Yellow 💛", "Pink 💕"],
    answer: "Yellow 💛",
  },
  {
    question: "My favorite place is? 🏡",
    options: ["Beach 🌊", "Temple 🛕", "Home 🏠", "Mall 🛍️"],
    answer: "Home 🏠",
  },
  {
    question: "On which date did you propose me? 💌",
    options: ["18-10-2017 📅", "07-09-2023 📅", "20-10-2019 📅", "14-02-2018 📅"],
    answer: "18-10-2017 📅",
  },
  {
    question: "Our wedding date is? 💍",
    options: ["07-09-2023 💒", "18-10-2017 💌", "20-10-2019 💑", "01-01-2020 🎉"],
    answer: "07-09-2023 💒",
  },
  {
    question: "Our secret marriage date was? 🤫",
    options: ["20-10-2019 💑", "07-09-2023 💒", "18-10-2017 💌", "25-12-2018 🎄"],
    answer: "20-10-2019 💑",
  },
  {
    question: "Where was our first outing spot? 🌸",
    options: ["Beach 🌊", "Temple 🛕", "Park 🌳", "Cinema 🎬"],
    answer: "Temple 🛕",
  },
  {
    question: "What was my first gift to you? 🎁",
    options: [
      "Watch ⌚",
      "Chocolate and Pen 🍫🖊️",
      "Ring 💍",
      "Teddy 🧸",
    ],
    answer: "Chocolate and Pen 🍫🖊️",
  },
  {
    question: "What was the first ornament gift I gave you? 💎",
    options: ["Chain ⛓️", "Ring 💍", "Bracelet 📿", "Earrings ✨"],
    answer: "Ring 💍",
  },
  {
    question: "Where was our first kiss? 💋",
    options: ["Temple 🛕", "At Home 🏠", "On Phone 📱", "Beach 🌊"],
    answer: "On Phone 📱",
  },
  {
    question: "We proposed during which time? 🎆",
    options: ["Christmas 🎄", "Diwali 🪔", "New Year 🎉", "Valentine’s Day 💖"],
    answer: "Diwali 🪔",
  },
  {
  question: "Who loves the most? 💕",
  options: [
    "You ❤️",
    "Me 💖",
    "We 💞",
    "Love has no competition 🥰",
  ],
  answer: "We 💞",
},

];



  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    setSelected(option);

    setTimeout(() => {
      if (option === questions[current].answer) {
        setScore(score + 1);
      }

      const next = current + 1;

      if (next < questions.length) {
        setCurrent(next);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 800);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelected(null);
  };

  const getResultMessage = () => {
   const percentage = (score / questions.length) * 100;

  if (percentage === 100) {
    return "You know us perfectly 😍 You are truly my soulmate! 💞";
  } else if (percentage >= 80) {
    return "Almost perfect husband material 😌💕 I’m impressed!";
  } else if (percentage >= 60) {
    return "Half correct huh? 😏 Not bad mister… but I expect better on our anniversary quiz!";
  } else if (percentage >= 40) {
    return "Hmmmm… looks like someone needs revision 😂💕 Date night coming soon!";
  } else if (percentage >= 20) {
    return "Ayyo! Do you even remember our love story? 😜";
  } else {
    return "Emergency romance mission activated 🚨💘 We are rewatching our memories tonight!";
  }
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-6 text-center relative">
      
      <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-10">
        Couple Quiz 💕
      </h1>

      {!finished ? (
        <div className="bg-pink-50 p-8 rounded-3xl shadow-xl transition-all duration-500">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            {questions[current].question}
          </h2>

          <div className="grid gap-4">
            {questions[current].options.map((option, index) => {
              const isCorrect = option === questions[current].answer;
              const isSelected = selected === option;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={selected !== null}
                  className={`p-3 rounded-xl shadow transition duration-300
                  ${
                    selected
                      ? isCorrect
                        ? "bg-green-300"
                        : isSelected
                        ? "bg-red-300"
                        : "bg-white"
                      : "bg-white hover:bg-pink-200"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-gray-500">
            Question {current + 1} of {questions.length}
          </p>
        </div>
      ) : (
        <div className="bg-red-100 p-10 rounded-3xl shadow-xl animate-pulse">
         
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
            Quiz Completed 💖
          </h2>

             <Confetti />
          <p className="text-lg mb-4">
            You scored {score} out of {questions.length}
          </p>

          <p className="text-xl text-pink-700 font-semibold mb-6">
            {getResultMessage()}
          </p>
<div className="flex justify-between ">
    <button
            onClick={restartQuiz}
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
          >
            Play Again 💕
          </button>
          <button
  onClick={() => navigate("/letter")}
  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
>
  Open My Secret Letter 💌
</button>


</div>
        
        </div>
      )}
    </div>
  );
}

export default CoupleQuiz;
