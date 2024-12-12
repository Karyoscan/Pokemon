import React, { useState } from "react";
import QuenstData from "../Data/QuenstData";
import Items from "./Items";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./Slice/CounterSlice";

const Main = () => {
  interface UserAnswerss {
    question: string;
    answer: string;
    correct: string;
    answerID: string;
  }
  const Datas = QuenstData;
  const [counter, setCounter] = useState(0); //  soru değiştirme

  const Dispatch = useDispatch();
  const Loadings = useSelector((state: any) => state.Loading);
  const Start = useSelector((state: any) => state.Start);
  const Score = useSelector((state: any) => state.Score);
  const [UserAnswers, setUserAnswers] = useState<UserAnswerss[]>([]);

  const ScoreIntrease = () => {
    Dispatch(actions.ScoreButton());
  };

  const nextStage = () => {
    Dispatch(actions.LoadingButton(1));

    setTimeout(() => Dispatch(actions.LoadingButton(0)), 1000);

    if (counter < Datas.length - 1) {
      setCounter((us) => us + 1);
    }
  };

  const Reset = () => {
    Dispatch(actions.ScoreReset());
    setCounter(0);
    setUserAnswers([]);
    Dispatch(actions.LoadingButton(1));

    setTimeout(() => Dispatch(actions.LoadingButton(0)), 1000);
  };

  const CheckQuestion = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const answer = e.currentTarget.value;
    const answerID = e.currentTarget.id;

    const Correct = Datas[counter].True === answer;

    if (Correct) {
      ScoreIntrease();
    }
    const newUser = {
      question: Datas[counter].soru,
      answer,
      correct: Datas[counter].True,
      answerID,
    };

    setUserAnswers((pre) => [...pre, newUser]);
  };

  return (
    <div
      className={
        Loadings === 1
          ? "border-2 border-green-300 shadow-2xl bg-white w-[70%] h-[80%] rounded-lg flex  justify-center items-center"
          : "border-2 border-green-300 shadow-2xl bg-white w-[70%] h-[80%]  rounded-lg flex flex-col items-center "
      }
    >
      {Loadings === 0 && Start === 1 && (
        <div className="w-full flex  flex-col justify-center items-center relative ">
          <div className="py-6 text-2xl  ">
            Question {counter + 1}/{Datas.length}{" "}
            <span className="text-center absolute  right-[50px] text-2xl">
              Score : {Score}
            </span>
          </div>
          <div className="pb-8 text-2xl font-bold shadow-lg">
            {Datas[counter].soru}
          </div>

          <ul className="w-full flex flex-col justify-center items-center gap-4 rounded-lg ">
            <Items
              seçenekler={Datas[counter].seçenekler}
              callback={CheckQuestion}
              True={Datas[counter].True}
              UserAnswers={UserAnswers[counter]}
            />
          </ul>
        </div>
      )}

      {Loadings === 1 && (
        <div className="text-2xl shadow-xl my-10 animate-bounce p-4 border-2 border-black rounded-lg">
          Loading ...{" "}
        </div>
      )}

      {Start === 1 && Loadings === 0 && UserAnswers[counter] && (
        <div className="flex gap-4">
          {/* next quenstion */}
          <button
            disabled={counter >= Datas.length - 1}
            className={
              counter >= Datas.length - 1
                ? "my-4 border border-green-400 w-32 h-10 rounded-md cursor-not-allowed bg-slate-700/20 font-light"
                : "my-4 border border-green-400 w-32 h-10 rounded-md cursor-pointer bg-slate-200 hover:bg-slate-200/50"
            }
            onClick={() => nextStage()}
          >
            Next Soru
          </button>

          {/* Reset quastion */}
          {counter >= Datas.length - 1 && (
            <button
              disabled={counter < Datas.length - 1}
              className={
                "my-4 border border-green-400 w-32 h-10 rounded-md cursor-pointer bg-slate-200 hover:bg-slate-200/50"
              }
              onClick={() => Reset()}
            >
              Reset
            </button>
          )}
        </div>
      )}

      {Start === 0 && (
        <div className="text-2xl font-bold my-4">
          {" "}
          Pokemonlari ne kadar Taniyorsunuz !!!{" "}
        </div>
      )}
    </div>
  );
};

export default Main;
