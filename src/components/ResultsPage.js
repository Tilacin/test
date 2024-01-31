//import React, { useState } from "react";

//import { useNavigate } from "react-router-dom";
//import { useSound } from "../soundContext";
import PopupMenu from "./PopupMenu";

const ResultPage = () => {
  
  return (
    <div className="flex flex-col bg-amber-50 w-screen h-screen items-center p-2 box-border  border-[#A0C6FF]  border-2">
      <div className="grid grid-cols-3 gap-1 place-content-evenly sm:w-[450px] items-center xl:w-[660px] ">
        
        <div className="flex justify-center">
          <img src="/quiz.png" alt="" width={160} height={114} />
        </div>

        <div className="flex  text-lg font-bold p-1 justify-end ">
          <PopupMenu />
        </div>
      </div>
      <div className=" border-[#A0C6FF] border-2 rounded-xl">
        <picture>
          <img
            src=""
            alt="code"
            className="rounded-xl xl:w-[650px]"
          />
        </picture>
      </div>
      
    </div>
  );
};

export default ResultPage;
