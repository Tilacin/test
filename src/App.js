import React from "react";

function App() {
  return (
    <div className="flex flex-col bg-amber-50 w-screen h-screen items-center p-2 box-border">
      <div className="flex ">
        <h1 className="text-2xl font-bold m-1">Вопрос 1/100</h1>
      </div>
      <div className="">
        <picture>
          <img src="/v3.jpg" alt="code"  className="rounded-xl xl:w-[700px]" />
        </picture>
      </div>
      <div className="flex flex-col gap-2 m-2 text-lg font-bold ">
        <button className="flex  my-2    p-2 rounded-md  shadow-neutral-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:scale-105 border-transparent focus:border-2 active:border-red-500">
          Ответ 1
        </button>
        <button className="flex  my-2 p-2 rounded-md  shadow-neutral-400 shadow-sm hover:shadow-xl  hover:-translate-y-1 transition duration-300 hover:scale-105  border-transparent focus:border-2 active:border-green-500">
          Ответ 2
        </button>
        <button className="flex  my-2 p-2 rounded-md  shadow-neutral-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:scale-105">
          Ответ 3 ууууууууууууууууууууу
        </button>
      </div>
      <div className="sm:hidden mt-4 bg-slate-500 w-[95%] h-[25%] flex  items-center justify-center  text-slate-100 rounded-lg">
        <span >
          Здесь реклама
        </span>
      </div>
    </div>
  );
}

export default App;
