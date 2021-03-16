import React, { FC } from "react";

type Props = {
  handleClick: () => void;
};

const ConsumeButton: FC<Props> = ({ handleClick }) => {
  return <button onClick={handleClick}>消費する</button>;
};

export default ConsumeButton;
