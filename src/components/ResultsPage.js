import { useLocation } from "react-router-dom";
import PopupMenu from "./PopupMenu";

const ResultPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const score = params.get("score");
  const total = params.get("total");

  const percentage = Math.round((score / total) * 100);

  let numPicture;
  if (percentage <= 30) {
    numPicture = "r1.jpg";
  } else if (percentage > 30 && percentage <= 50) {
    numPicture = "r2.jpg";
  } else if (percentage > 50 && percentage < 100) {
    numPicture = "r3.jpg";
  } else if (percentage === 100) {
    numPicture = "r10.jpg";
  }
  return (
    <div className="flex flex-col bg-amber-50 w-screen h-screen items-center p-2 box-border  border-[#A0C6FF]  border-2">
      <div className="grid grid-cols-2 gap-1 place-content-evenly sm:w-[450px] items-center xl:w-[660px] ">
        <div className="flex sm:w-[160px] w-[80px]">
          <img src="/quiz.png" alt="" width={160} height={114} />
        </div>

        <div className="flex  text-lg font-bold p-1 justify-end ">
          <PopupMenu />
        </div>
      </div>
      <div className="text-center sm:mt-8 mb-3 mt-2">
        <h1 className="text-3xl font-bold mb-4">Ваш результат:</h1>
        <p className="text-2xl">
          Правильных ответов:{" "}
          <span className="text-blue-500 font-bold ">{percentage}%</span>
        </p>
      </div>
      <div className=" border-[#A0C6FF] border-2 rounded-xl">
        <picture>
          <img
            src={numPicture}
            alt="code"
            className="rounded-xl xl:w-[450px] sm:w-[400px] w-[280px] "
          />
        </picture>
      </div>
    </div>
  );
};

export default ResultPage;
