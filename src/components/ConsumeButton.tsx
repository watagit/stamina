import React, { FC } from "react";

type Props = {
  handleClick: () => void;
};

const ConsumeButton: FC<Props> = ({ handleClick }) => {
  return (
    <div className={"flex justify-center"}>
      <button
        className={"py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
        onClick={handleClick}>消費する</button>
    </div>
  );
};

export default ConsumeButton;
