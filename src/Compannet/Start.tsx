import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./Slice/CounterSlice";

const Start = () => {
  const Start = useSelector((state: any) => state.Start);

  const Dispatch = useDispatch();

  const Tikla = () => {
    Dispatch(actions.LoadingButton(1));

    setTimeout(() => Dispatch(actions.LoadingButton(0)), 2000);
    Dispatch(actions.StartButton());
  };

  return (
    <div className="flex justify-center items-center h-[10%] bg-green-200">
      {Start === 0 && (
        <button
          onClick={() => Tikla()}
          className=" border-2 rounded-b-md mt-2  shadow-xl flex justify-center items-center  bg-teal-400 hover:bg-teal-400/50 h-10 w-20 text-white "
        >
          {" "}
          Start
        </button>
      )}
    </div>
  );
};

export default Start;
