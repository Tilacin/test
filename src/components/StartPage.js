import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="flex flex-col bg-amber-50 w-screen h-screen items-center box-border sm:justify-center  border-[#A0C6FF] border-4">
      <div className="flex justify-start pt-6 sm:pt-1">
        <img src="/quiz.png" alt="" width={160} height={114} />
      </div>
      <h1 className="text-3xl font-bold m-2 sm:text-5xl pt-12">
        Добро пожаловать!
      </h1>

      <nav>
        <ul className="font-bold md:text-2xl ">
          <li>
            <Link to="/20-questions">
              <button className="flex my-6 py-2 sm:px-10 px-1 rounded-md  shadow-neutral-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:scale-110 border-transparent focus:border-2 active:bg-amber-200">
                Пройти тест из 20 рандомных вопросов
              </button>
            </Link>
          </li>
          <li>
            <Link to="/100-questions">
              <button className="flex my-6 py-2 sm:px-10 px-1 rounded-md  shadow-neutral-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:scale-110 border-transparent focus:border-2 active:bg-amber-200">
                Пройти полный тест из 100 вопросов
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StartPage;
