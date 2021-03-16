import { NextPage } from "next";
import React, { ReactNode, FC, useState } from "react";
import Countdown from "react-countdown";

import ConsumeButton from "../components/ConsumeButton";
import Stamina from "../components/Stamina";
import StaminaBar from "../components/StaminaBar";

const initialStamina: ReactNode[] = [
  <Stamina />,
  <Stamina />,
  <Stamina />,
  <Stamina />,
];

type StaminaType = {
  component: Element;
};

const Index: NextPage<FC> = () => {
  const [count, setCount] = useState<number>(Date.now() + 5000)
  const [staminas, setStaminas] = useState<ReactNode[]>(initialStamina);

  const resetCount = () => {
    setCount(Date.now() + 5000);
    increaseStamina();
  }

  const increaseStamina = () => {
    if (staminas.length < 5) {
      setStaminas((staminas: StaminaType[]) => [...staminas, <Stamina />]);
    }
  }

  const decreaseStamina = () => {
    if (staminas.length > 0) {
      setStaminas((staminas: StaminaType[]) => [...staminas].slice(0, staminas.length-1));
    }
  }

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return null;
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  }

  return (
    <>
      <StaminaBar staminas={staminas} />
      <div>
        <Countdown
          date={count}
          onComplete={resetCount}
          overtime={true}
          renderer={renderer}
        />
      </div>
      <ConsumeButton handleClick={decreaseStamina} />
    </>
  );
};

export default Index;
