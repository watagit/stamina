import React from "react";

type Props = {
  handleClick: () => void;
};

const ConsumeButton: React.FC<Props> = ({ handleClick }) => {
  return <button onClick={handleClick}>消費する</button>;
};

export default ConsumeButton;
