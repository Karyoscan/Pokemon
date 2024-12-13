import React from "react";

interface seçenekler {
  seçenekler: { name: string; deger: string; id: string }[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  True: string;
  UserAnswers: {
    question: string;
    answer: string;
    correct: string;
    answerID: string;
  };
}

const Items = ({ seçenekler, callback, True, UserAnswers }: seçenekler) => {
  return (
    <>
      {seçenekler.map((us: any) => {
        return (
          <button
            key={us.id}
            id={us.id}
            onClick={callback}
            value={us.deger}
            className={
              UserAnswers?.correct === us.deger
                ? "bg-green-400 cursor-pointer border-2 rounded-md transition-all duration-500 text-white h-9 w-[60%] flex justify-center items-center shadow-xl"
                : us.id === UserAnswers?.answerID
                ? "bg-red-700 cursor-pointer border-2 rounded-md transition-all duration-500 text-white h-9 w-[60%] flex justify-center items-center shadow-xl"
                : "cursor-pointer border-2 bg-gradient-to-l rounded-md transition-all duration-500 from-green-200  via-emerald-500 to-teal-300 hover:from-green-200/50 hover:via-emerald-500/50 hover:to-teal-300/50 text-white h-9 w-[60%] flex justify-center items-center shadow-xl"
            }
            disabled={UserAnswers ? true : false}
          >
            {us.deger}
          </button>
        );
      })}
    </>
  );
};

export default Items;
