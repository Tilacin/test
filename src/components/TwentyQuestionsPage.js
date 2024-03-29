import React, { useState, useEffect } from "react";
import questionsArray from "../data";
import { useNavigate } from "react-router-dom";
import { useSound } from "../soundContext";
import PopupMenu from "./PopupMenu";

const TwentyQuestionsPage = () => {
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  const [randomQuestions, setRandomQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const navigate = useNavigate();
  const { playSound } = useSound();

  useEffect(() => {
    const createRandomQuestions = () => {
      const newArray = [];
      const usedIndexes = new Set();
      while (newArray.length < 20) {
        const randomIndex = getRandomNumber(questionsArray.length);
        if (!usedIndexes.has(randomIndex)) {
          newArray.push({ ...questionsArray[randomIndex], id: randomIndex });
          usedIndexes.add(randomIndex);
        }
      }
      setRandomQuestions(newArray);
    };

    createRandomQuestions();
  }, []);

  const handleNextQuestion = (selectedAnswer) => {
    const isCorrectAnswer =
      selectedAnswer === randomQuestions[questionIndex]?.correctAnswer;
    if (isCorrectAnswer) {
      setNumCorrectAnswers(numCorrectAnswers + 1);
    }
    setTimeout(() => {
      if (questionIndex < randomQuestions.length - 1) {
        setQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        navigate(`/results?score=${numCorrectAnswers}&total=20`);
      }
    }, 1000);
    playSound(isCorrectAnswer);
  };

  return (
    <div className="flex flex-col bg-amber-50 w-screen h-screen items-center p-2 box-border  border-[#A0C6FF]  border-2">
      <div className="grid grid-cols-3 gap-1 place-content-evenly sm:w-[450px] items-center xl:w-[660px] ">
        <h1 className="text-xl font-bold m-2 md:text-2xl xl:text-3xl lg:m-4 items-start">
          Вопрос {questionIndex + 1}/20
        </h1>
        <div className="flex justify-center sm:w-[160px] w-[90px]">
          <img src="/images/quiz.png" alt="quiz logo" width={160} height={114} />
        </div>

        <div className="flex  text-lg font-bold p-1 justify-end ">
          <PopupMenu />
        </div>
      </div>
      <div className=" border-[#A0C6FF] border-2 rounded-xl bg-black">
        <picture className="">
          {randomQuestions[questionIndex] && (
            <img
              src={randomQuestions[questionIndex].question}
              alt="code"
              className="rounded-xl xl:w-[650px]"
            />
          )}
        </picture>
      </div>
      <ul>
        {randomQuestions[questionIndex] &&
          randomQuestions[questionIndex].answers &&
          randomQuestions[questionIndex].answers.map((answer, index) => (
            <li
              key={index}
              onClick={() => handleNextQuestion(index)}
              className="flex flex-col gap-2 m-2 text-lg font-bold xl:w-[660px] w-full min-w-[250px]"
            >
              <button
                className={`flex my-2 p-1 sm:p-2 rounded-md  shadow-neutral-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:scale-105 border-transparent focus:border-2 ${
                  index === randomQuestions[questionIndex]?.correctAnswer
                    ? "active:border-green-500"
                    : " active:border-red-500 "
                }`}
              >
                {answer}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TwentyQuestionsPage;
