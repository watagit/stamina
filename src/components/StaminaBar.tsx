import React, { FC, ReactNode } from "react";

type StaminaType = {
  component: Element;
};

type Props = {
  staminas: ReactNode[];
};

const StaminaBar: FC<Props> = ({ staminas }) => {
  return (
    <div className={"flex justify-center max-w-full"}>
      {staminas.map((stamina: StaminaType, index: number) => (
        <div key={index}>{stamina}</div>
      ))}
    </div>
  );
};

export default StaminaBar;
